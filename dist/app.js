const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const locale = () => document.documentElement.lang === 'en' ? 'en' : 'zh';
const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]);

function route(to) {
  $$('.page').forEach((page) => page.classList.toggle('active', page.id === to));
  $$('.nav-link').forEach((link) => link.classList.toggle('active', link.dataset.route === to));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

$$('[data-route]').forEach((button) => button.addEventListener('click', () => route(button.dataset.route)));

const defaults = {
  polar: { zh: ['支持该方向', '不支持该方向'], en: ['Support this direction', 'Do not support this direction'] },
  single: { zh: ['方案 A', '方案 B', '暂不改变'], en: ['Option A', 'Option B', 'Do not change yet'] },
  multiple: { zh: ['优先推进', '先做小范围试点', '需要更多证据'], en: ['Prioritise now', 'Run a limited pilot', 'Need more evidence'] }
};

function isEnglish() { return locale() === 'en'; }

function copy() {
  const en = isEnglish();
  return {
    chooseOne: en ? 'Each participant chooses 1 option' : '每位参与者选择 1 项',
    chooseMany: en ? 'Each participant may choose multiple options' : '每位参与者可选择多项',
    addOption: en ? '＋ Add option' : '＋ 添加选项',
    option: en ? 'Option' : '选项',
    remove: en ? 'Remove option' : '删除选项',
    enterQuestion: en ? 'Enter a question before generating the preview.' : '请先填写需要集体判断的问题。',
    noClues: en ? 'No obvious identity clues found. The machine will still publish a standardised version.' : '未发现明显身份线索。机器仍会以统一格式发布。',
    clues: en ? 'possible side-channel clues found: ' : '发现可能的旁路线索：',
    publishVersion: en ? 'Version the machine will publish' : '机器将发布此版本',
    immediate: en ? 'Immediately after confirmation' : '确认后立即开始',
    random: en ? 'Random release within ' : '将在随机窗口内开始：',
    fixed: en ? 'Closes at ' : '固定截止：',
    all: en ? 'Closes when all invitees have voted' : '所有受邀者投票完成后结束',
    quorum: en ? 'Closes at quorum: ' : '达到参与门槛后结束：',
    extend: en ? 'Extends once if below ' : '不足门槛时自动延时：',
    receipt: en ? 'has been sealed. The question, vote structure, and timing rules are kept separate from the initiator.' : '已被加密签收。问题、投票结构与时间规则将与发起人身份隔离。',
    needReview: en ? 'Generate the anonymised preview and confirm it before creating the round.' : '请先生成脱敏预览，并确认它没有改变原意。'
  };
}

function renderOptions(values = null) {
  const type = $('input[name="poll-type"]:checked').value;
  const options = values || defaults[type][locale()];
  const strings = copy();
  $('#option-list').innerHTML = options.map((value, index) => `
    <div class="option-row"><span>${String(index + 1).padStart(2, '0')}</span><input class="option-input" required maxlength="120" value="${escapeHtml(value)}"><button type="button" class="remove-option" aria-label="${strings.remove}">×</button></div>
  `).join('');
  $('#option-rule').textContent = type === 'multiple' ? strings.chooseMany : strings.chooseOne;
  $('#add-option').textContent = strings.addOption;
}

function options() { return $$('.option-input').map((input) => input.value.trim()).filter(Boolean); }

function anonymizeHint() {
  const text = [$('#problem').value, ...options()].join(' ');
  const keywords = isEnglish()
    ? ['I ', 'we ', 'team', 'department', 'project', 'manager', 'last week', 'my client']
    : ['我', '我们', '部门', '项目', '上周', '经理', '客户名'];
  const matches = keywords.filter((word) => text.toLowerCase().includes(word.toLowerCase()));
  const strings = copy();
  $('#sanitize-copy').textContent = !text.trim()
    ? (isEnglish() ? 'Enter a question and options; the machine will flag wording that may reveal identity.' : '填写问题和选项后，机器会标记可能泄露身份的表述。')
    : !matches.length ? strings.noClues : `${strings.clues}${matches.join('、')}。`;
}

function anonymised(text) {
  return text
    .replace(/我(们)?/g, '发起人')
    .replace(/我们/g, '发起团队')
    .replace(/I\b/gi, 'the initiator')
    .replace(/we\b/gi, 'the initiating group');
}

function renderReview() {
  if (!$('#problem').reportValidity()) return;
  $('#review-panel').hidden = false;
  $('#review-problem').textContent = anonymised($('#problem').value.trim());
  $('#review-options').innerHTML = options().map((option, index) => `<span>${String.fromCharCode(65 + index)} · ${escapeHtml(anonymised(option))}</span>`).join('');
  $('#review-panel').querySelector('.review-kicker').textContent = copy().publishVersion;
  $('#confirm-meaning').checked = false;
}

function updateRuleVisibility() {
  $$('.rule-choice').forEach((rule) => rule.classList.toggle('selected', rule.querySelector('input').checked));
}

function formatDate(value) {
  if (!value) return isEnglish() ? 'the selected deadline' : '你设置的截止时间';
  const date = new Date(value);
  return new Intl.DateTimeFormat(isEnglish() ? 'en-GB' : 'zh-CN', { dateStyle: 'medium', timeStyle: 'short' }).format(date);
}

function timingSummary() {
  const strings = copy();
  const start = $('input[name="start-mode"]:checked').value === 'now'
    ? strings.immediate : `${strings.random}${$('#random-window').value}`;
  const close = $('input[name="close-rule"]:checked').value;
  if (close === 'all-voted') return `${start} · ${strings.all}`;
  if (close === 'quorum') return `${start} · ${strings.quorum}${$('#quorum-percent').value}% / ${$('#quorum-count').value}${isEnglish() ? ' people' : ' 人'}`;
  if (close === 'extend') return `${start} · ${strings.extend}${$('#extend-percent').value}%${isEnglish() ? `, by ${$('#extend-days').value} days` : `，自动延长 ${$('#extend-days').value} 天`}`;
  return `${start} · ${strings.fixed}${formatDate($('#deadline').value)}`;
}

function setDefaultDeadline() {
  const date = new Date();
  date.setDate(date.getDate() + 5);
  date.setHours(17, 0, 0, 0);
  $('#deadline').value = date.toISOString().slice(0, 16);
}

renderOptions();
setDefaultDeadline();
anonymizeHint();
updateRuleVisibility();

$$('input[name="poll-type"]').forEach((input) => input.addEventListener('change', () => {
  renderOptions();
  $('#review-panel').hidden = true;
  anonymizeHint();
}));

$('#add-option').addEventListener('click', () => {
  const strings = copy();
  const index = options().length + 1;
  $('#option-list').insertAdjacentHTML('beforeend', `<div class="option-row"><span>${String(index).padStart(2, '0')}</span><input class="option-input" required maxlength="120" value="${strings.option} ${index}"><button type="button" class="remove-option" aria-label="${strings.remove}">×</button></div>`);
  anonymizeHint();
});

$('#option-list').addEventListener('click', (event) => {
  if (!event.target.matches('.remove-option')) return;
  if ($$('.option-row').length <= 2) return;
  event.target.closest('.option-row').remove();
  anonymizeHint();
});

$('#option-list').addEventListener('input', () => { $('#review-panel').hidden = true; anonymizeHint(); });
$('#problem').addEventListener('input', () => { $('#review-panel').hidden = true; anonymizeHint(); });
$('#review-anonymity').addEventListener('click', renderReview);
$$('input[name="start-mode"], input[name="close-rule"]').forEach((input) => input.addEventListener('change', updateRuleVisibility));

window.addEventListener('blindIdeaLocaleChange', () => {
  const type = $('input[name="poll-type"]:checked').value;
  const current = options();
  const isPreset = Object.values(defaults[type]).some((preset) => preset.length === current.length && preset.every((item, index) => item === current[index]));
  if (isPreset) renderOptions();
  else {
    $('#option-rule').textContent = type === 'multiple' ? copy().chooseMany : copy().chooseOne;
    $('#add-option').textContent = copy().addOption;
  }
  if ($('#random-window').value === '1–5 个工作日' || $('#random-window').value === '1–5 business days') $('#random-window').value = isEnglish() ? '1–5 business days' : '1–5 个工作日';
  $('.type-picker').setAttribute('aria-label', isEnglish() ? 'Vote structure' : '投票结构');
  anonymizeHint();
});

$('#idea-form').addEventListener('submit', (event) => {
  event.preventDefault();
  if ($('#review-panel').hidden || !$('#confirm-meaning').checked) {
    alert(copy().needReview);
    $('#review-anonymity').focus();
    return;
  }
  const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const receipt = 'BIM-' + Array.from({ length: 6 }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
  const summary = timingSummary();
  localStorage.setItem('blindIdeaDemo', JSON.stringify({ question: $('#problem').value, receipt, window: summary, type: $('input[name="poll-type"]:checked').value, options: options() }));
  $('#receipt-id').textContent = receipt;
  $('#release-window').textContent = summary;
  $('#receipt-copy').textContent = `“${$('#problem').value.trim()}” ${copy().receipt}`;
  route('receipt');
});

$('#vote-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const choice = $('input[name="vote"]:checked').value;
  localStorage.setItem('blindVoteDemo', JSON.stringify({ choice, reason: $('#reason').value, createdAt: Date.now() }));
  route('voted');
});

$('#reveal-demo').addEventListener('click', () => {
  const current = $('#reveal-demo');
  current.textContent = current.textContent.includes('查看') ? '演示：作者身份仍未解封；仅决策记录可见' : '查看匿名提案版本 →';
});

const saved = JSON.parse(localStorage.getItem('blindIdeaDemo') || 'null');
if (saved) {
  $('#receipt-id').textContent = saved.receipt;
  $('#release-window').textContent = saved.window;
}

