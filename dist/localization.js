(() => {
  const zhToEn = {
    '盲思机': 'Blind Idea Machine',
    '工作台': 'Workspace',
    '机制': 'Method',
    '资格已验证': 'Eligibility verified',
    '身份已隔离': 'Identity isolated',
    '先让想法': 'Let ideas',
    '失去主人。': 'lose their owners.',
    '一个让团队先独立思考、再让决策者看见更干净信号的提案空间。': 'A proposal space where teams think independently before decision-makers see a clearer signal.',
    '本轮原则': 'Round principle',
    '没有实时票数': 'No live totals',
    '没有参与名单': 'No participant list',
    '没有身份线索': 'No identity clues',
    '结果于截止时一并封存、揭晓。': 'Results are sealed and revealed together at closing.',
    '本周入队': 'Queued this week',
    '盲审进行中': 'Blind reviews live',
    '平均有效参与': 'Average valid participation',
    '进入试点': 'Moved to pilot',
    '开放的盲审': 'Open blind review',
    '只读提案本身': 'Read the proposal only',
    '本轮于 10 月 16 日 17:00 封存': 'This round seals on Oct 16 · 17:00',
    '运营 · 本周批次': 'Operations · This week',
    '盲审编号 #024': 'Blind review #024',
    '已验证的受邀者可投 1 次': 'Verified invitees may vote once',
    '把“客户问题”变成跨团队的 48 小时闭环，而不是等下周例会。': 'Turn customer issues into a cross-team 48-hour loop instead of waiting for next week’s meeting.',
    '当一线成员发现重复出现的客户障碍时，建立一个轻量的事件卡：只写现象、影响和证据。相关团队在 48 小时内给出“处理、研究或解释”的回应。先选择一个产品线试行四周。': 'When frontline members spot a recurring customer obstacle, create a lightweight signal card: only the observation, impact, and evidence. Relevant teams respond within 48 hours with action, research, or an explanation. Pilot it with one product line for four weeks.',
    'AI 已移除 2 处可能的身份线索': 'AI removed 2 possible identity clues',
    '进入独立判断': 'Make an independent judgment',
    '投入一个想法': 'Submit an idea',
    '机器将脱敏、签收，并在随机窗口内发布。': 'The machine redacts, seals, and releases it in a random window.',
    '查看已封存回合': 'View sealed rounds',
    '只展示聚合信号与负责人的处理决定。': 'See only aggregate signals and the owner’s disposition.',
    '返回工作台': 'Back to workspace',
    '匿名投入 / 02': 'Anonymous submission / 02',
    '交给机器，': 'Give it to the machine,',
    '暂时不署名。': 'without a name—for now.',
    '提交者身份只用于生成加密收据与日后自愿领奖，不会出现在评审流程中。': 'The submitter identity only creates an encrypted receipt and supports voluntary credit later; it never appears in review.',
    'AI 脱敏是辅助而非裁判。': 'AI redaction assists; it does not judge.',
    '发布前你能查看机器整理后的匿名版本。': 'Before release, you can review the machine’s anonymous version.',
    '一句话标题': 'One-line title',
    '你看到了什么问题？': 'What problem did you observe?',
    '你的提议是什么？': 'What do you propose?',
    '希望别人重点推敲什么？': 'What should others examine closely?',
    'AI 匿名预检（演示）': 'AI anonymity preflight (demo)',
    '填写内容后，机器会标记可能泄露身份的表述。': 'As you write, the machine marks wording that may reveal identity.',
    '密封并投入随机发布队列': 'Seal and enter the random release queue',
    '提交即表示接受：机器将在 1–5 个工作日内随机发布；发布前不显示你的名字或提交时间。': 'By submitting, you accept a random release in 1–5 working days. Your name and submission time are never shown before release.',
    '独立判断 / #024': 'Independent judgment / #024',
    '已完成机器脱敏 · 当前轮次不显示任何他人观点': 'Machine redaction complete · No other views are shown in this round',
    '基于提案本身，你的判断是？': 'Based on the proposal alone, what is your judgment?',
    '值得立即试验': 'Worth an immediate experiment',
    '小范围、可逆地验证': 'Validate in a small, reversible way',
    '值得进一步研究': 'Worth further research',
    '方向成立，前提仍不清楚': 'The direction holds; assumptions remain unclear',
    '有启发，可重组': 'Inspiring; worth recombining',
    '不照做，但保留其中一部分': 'Do not adopt it as-is, but retain part of it',
    '当前条件不适合': 'Not suitable under current conditions',
    '请指出限制或风险': 'Please identify a limitation or risk',
    '为什么？': 'Why?',
    '你的身份只用于确认“一人一票”；本轮结束前，任何人都看不到票数、理由或参与名单。': 'Your identity only verifies one person, one vote. Before this round closes, nobody can see totals, rationales, or the participant list.',
    '封存我的独立判断': 'Seal my independent judgment',
    '判断已封存': 'Judgment sealed',
    '谢谢你没有追随任何人。': 'Thank you for not following anyone.',
    '你的理由会在回合结束后匿名归类；在此之前，连当前票数也不会被展示。': 'Your rationale will be anonymously grouped after the round closes. Until then, even the current total remains hidden.',
    '等待 10 月 16 日 17:00': 'Waiting until Oct 16 · 17:00',
    '回到工作台': 'Return to workspace',
    '已封存回合 / 03': 'Sealed round / 03',
    '结果是信号，': 'Results are signals,',
    '不是命令。': 'not commands.',
    '已封存': 'Sealed',
    '减少每周例会中的重复状态同步': 'Reduce repetitive status reporting in weekly meetings',
    '盲审编号 #019 · 参与率 74% · 受邀名单与投票名单永久隔离': 'Blind review #019 · 74% participation · Invitees and voters remain permanently separated',
    '/ 5 试验信号': '/ 5 experiment signal',
    '机器归类出的匿名理由': 'Machine-grouped anonymous rationales',
    '减少信息重复': 'Reduce repeated information',
    '需明确异步记录责任': 'Clarify ownership of async records',
    '适合先选小团队': 'Start with a small team',
    '避免取消必要决策会': 'Do not remove necessary decision meetings',
    '决策负责人回应': 'Decision owner response',
    '进入 4 周小范围试点。': 'Move into a four-week limited pilot.',
    '先在两个跨职能小组测试异步状态模板；保留周会中的决策、风险与协作环节。': 'Test an asynchronous status template in two cross-functional teams; retain the decision, risk, and coordination parts of weekly meetings.',
    '回应已记录 · 负责人身份在本回合不参与投票': 'Response recorded · The owner did not vote in this round',
    '作者可在试点完成后自愿署名并申请奖励': 'The author may voluntarily claim credit and reward after the pilot',
    '查看匿名提案版本': 'View anonymous proposal version',
    '设计原则 / 04': 'Design principles / 04',
    '机器不替人': 'The machine does not',
    '做决定。': 'make decisions for people.',
    '资格可验证': 'Eligibility is verifiable',
    '组织账号只验证资格与一次投票；评审系统不展示身份。': 'Organisation accounts verify eligibility and one vote; the review system does not reveal identity.',
    '发布时间随机': 'Release timing is random',
    '提案进入随机窗口，削弱“谁刚发生什么”的旁路线索。': 'A proposal enters a random window, reducing timing-based authorship clues.',
    '结果延迟': 'Results are delayed',
    '在截止前没有票数、评论或参与状态可见，保护独立判断。': 'Before closing, totals, comments, and participation state stay hidden to protect independent judgment.',
    '理由有去处': 'Rationales have a destination',
    'AI 脱敏、归类理由；负责人需选择采纳、试点、研究、合并或不采用。': 'AI redacts and groups rationales; the owner chooses adopt, pilot, research, merge, or decline.',
    '贡献可找回': 'Contribution can be recovered',
    '作者身份密封保存。成功后，作者可主动署名以获得认可或奖励。': 'Authorship is stored sealed. After success, the author may claim recognition or reward.',
    '信号不等于命令': 'A signal is not an order',
    '投票是思考输入；领导仍承担资源、风险和最终决定的责任。': 'Voting is thinking input; leaders remain responsible for resources, risk, and the final decision.',
    '先看想法，再看身份。': 'See the idea before the identity.',
    '所有数据仅保存在此浏览器的演示空间。': 'All demo data stays only in this browser.'
  };

  const placeholderMap = {
    '例如：把客户问题变成 48 小时闭环': 'e.g. Turn customer issues into a 48-hour loop',
    '描述现象、影响与证据；避免写入个人、项目或部门身份线索。': 'Describe the observation, impact, and evidence. Avoid personal, project, or department identity clues.',
    '先讲机制，再讲必要资源。': 'Describe the mechanism first, then the resources required.',
    '例如：48 小时是否合理？': 'e.g. Is 48 hours realistic?',
    '请写出收益、风险、前提或可保留的部分。机器会在封存后对理由做脱敏和聚类。': 'Describe benefits, risks, assumptions, or what should be retained. The machine redacts and groups rationales after sealing.'
  };
  const enToZh = Object.fromEntries(Object.entries(zhToEn).map(([zh, en]) => [en, zh]));
  const enPlaceholders = Object.fromEntries(Object.entries(placeholderMap).map(([zh, en]) => [en, zh]));
  const toggle = document.querySelector('#language-toggle');
  let locale = localStorage.getItem('blindIdeaLocale') || 'zh';

  function swap(map, placeholders) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      const source = node.nodeValue;
      const trimmed = source.trim();
      if (map[trimmed]) node.nodeValue = source.replace(trimmed, map[trimmed]);
    });
    document.querySelectorAll('[placeholder]').forEach((input) => {
      if (placeholders[input.placeholder]) input.placeholder = placeholders[input.placeholder];
    });
  }

  function setLocale(next) {
    locale = next;
    swap(next === 'en' ? zhToEn : enToZh, next === 'en' ? placeholderMap : enPlaceholders);
    document.documentElement.lang = next === 'en' ? 'en' : 'zh-CN';
    document.title = next === 'en' ? 'Blind Idea Machine · 盲思机' : '盲思机 · Blind Idea Machine';
    toggle.textContent = next === 'en' ? '中文' : 'EN';
    toggle.setAttribute('aria-label', next === 'en' ? '切换到中文' : 'Switch language');
    localStorage.setItem('blindIdeaLocale', next);
  }

  toggle.addEventListener('click', () => setLocale(locale === 'zh' ? 'en' : 'zh'));
  if (locale === 'en') setLocale('en');
})();

