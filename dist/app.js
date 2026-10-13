const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

function route(to) {
  $$('.page').forEach((page) => page.classList.toggle('active', page.id === to));
  $$('.nav-link').forEach((link) => link.classList.toggle('active', link.dataset.route === to));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

$$('[data-route]').forEach((button) => button.addEventListener('click', () => route(button.dataset.route)));

function anonymizeHint() {
  const text = [$('#title').value, $('#problem').value, $('#proposal').value, $('#question').value].join(' ');
  const keywords = ['我', '我们', '部门', '项目', '上周', '经理', '客户名'];
  const matches = keywords.filter((word) => text.includes(word));
  const hint = $('#sanitize-copy');
  if (!text.trim()) hint.textContent = '填写内容后，机器会标记可能泄露身份的表述。';
  else if (!matches.length) hint.textContent = '未发现明显身份线索。发布时仍会以统一格式重写。';
  else hint.textContent = `发现 ${matches.length} 类可能的旁路线索：${matches.join('、')}。机器会在发布前请求你确认匿名版本。`;
}
['title','problem','proposal','question'].forEach((id) => $('#'+id).addEventListener('input', anonymizeHint));

$('#idea-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const receipt = 'BIM-' + Array.from({length: 6}, () => characters[Math.floor(Math.random() * characters.length)]).join('');
  const offset = 1 + Math.floor(Math.random() * 5);
  const start = new Date(); start.setDate(start.getDate() + offset);
  const end = new Date(start); end.setDate(end.getDate() + 1 + Math.floor(Math.random() * 3));
  const format = (date) => `${date.getMonth()+1} 月 ${date.getDate()} 日`;
  localStorage.setItem('blindIdeaDemo', JSON.stringify({title: $('#title').value, receipt, window: `${format(start)} — ${format(end)}`}));
  $('#receipt-id').textContent = receipt;
  $('#release-window').textContent = `${format(start)} — ${format(end)}`;
  $('#receipt-copy').textContent = `“${$('#title').value}”已被加密签收。身份与提案内容将进入隔离队列。`;
  route('receipt');
});

$('#vote-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const choice = $('input[name="vote"]:checked').value;
  localStorage.setItem('blindVoteDemo', JSON.stringify({choice, reason: $('#reason').value, createdAt: Date.now()}));
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

