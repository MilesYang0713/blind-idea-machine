# 盲思机 / Blind Idea Machine

> 先让想法失去主人，再让贡献找回主人。  
> Let ideas lose their owners first; let contributors reclaim recognition later.

盲思机是一个“盲审提案”原型。它不以投票取代领导者的责任，而是帮助组织先获得未被职位、身份、现场氛围或从众效应污染的思考信号。

Blind Idea Machine is a blind-deliberation prototype. It does not replace leadership with a vote. Instead, it helps organisations receive thinking before hierarchy, identity, meeting dynamics, or groupthink can distort it.

## 核心原则 / Core principles

1. **资格可验证，身份不参与判断。** 组织账号用于确认资格与一人一票；评审过程不展示身份。  
   **Eligibility is verifiable; identity is not part of deliberation.** Organisation accounts confirm eligibility and one vote per person, while review stays identity-blind.
2. **随机发布，降低旁路线索。** 提案在预设的随机窗口发布，减少通过时间和语境猜测作者的可能。  
   **Randomised release reduces side-channel clues.** Proposals are released within a bounded random window, making authorship harder to infer from timing or context.
3. **截止前没有群体信号。** 不显示票数、评论、投票名单或完成进度。  
   **No group signals before closing.** No totals, comments, voter list, or participation progress is shown.
4. **结果是信号，不是命令。** 决策负责人仍对资源、风险与最终处理负责，并需留下简短回应。  
   **Results are signals, not commands.** The decision owner remains accountable for resources, risk, and disposition, and records a brief response.
5. **贡献可找回。** 作者身份被密封保存；成功后可自愿署名，以获得认可或奖励。  
   **Contribution can be recovered.** Authorship is sealed and may be voluntarily revealed after success for credit or reward.

## 此 MVP 包含 / This MVP includes

- 匿名提案表单与身份线索预检 / Anonymous proposal form and identity-clue preflight
- 随机发布时间窗口与匿名收据 / Random release window and anonymous receipt
- 四类独立判断及强制理由 / Four independent judgment modes with a required rationale
- 回合封存后的聚合结果、主题与负责人回应 / Post-close aggregate signals, themes, and decision-owner response
- 中英界面切换 / Chinese–English interface toggle

## 当前边界 / Current scope

这是一个静态、高保真前端演示。示例数据及提交记录仅保存在浏览器本地；它尚未接入真实单点登录、资格令牌、数据库、定时任务或 AI 服务。

This is a static, high-fidelity front-end demonstration. Demo data and submissions are stored only in the browser; real SSO, eligibility tokens, a database, scheduling, and AI services are not connected yet.

## 本地预览 / Local preview

```powershell
python -m http.server 4173 --directory dist
```

Then open `http://127.0.0.1:4173`.

## 下一步 / Suggested next steps

1. 接入组织身份系统，并签发一次性匿名投票凭证。  
   Connect organisation identity and issue one-time anonymous voting credentials.
2. 用服务端队列实现可审计的随机发布与截止封存。  
   Implement auditable random release and closing with a server-side queue.
3. 增加 AI 脱敏预览、人工例外流程与加密的作者保管库。  
   Add AI redaction preview, a human exception path, and an encrypted authorship vault.
4. 记录采纳、试点、暂缓、合并或不采用的决策闭环。  
   Track the decision loop: adopt, pilot, defer, merge, or decline.

