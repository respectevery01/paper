---
author: Jask
pubDatetime: 2026-09-17T13:00:00.000Z
title: 链周志 Vol.8｜Blockstream 拒付 5000 万赎金，S&P 直接买下 OpenZeppelin
slug: linklog-vol8-blockstream-ransom-sp-openzeppelin
featured: true
draft: false
series: 链周志
tags:
  - Blockstream
  - OpenZeppelin
  - 美联储
  - Balancer
  - 隐私币
description: 上周悬着的 Liquid 被盗案这周有了态度：Blockstream 拒绝 5000 万美元赎金，定性为盗窃，走法律。同一周，S&P Global 领投 Kaiko 后直接收购 OpenZeppelin，评级巨头把链上安全买成了自己的生意。监管那边 CLARITY 一票之差卡关，SEC 和 CFTC 说我们自己来。还有美联储三年来第一次加息，市场照涨。
---

> 这一周的加密圈在回答两个问题：被黑了要不要付钱，入场要不要买公司。Blockstream 给了第一个问题的答案，拒绝。S&P Global 给了第二个问题的答案，买。夹在中间的是一头被 ZEC 逼到墙角的巨鲸，和三年来第一次加息却照涨不误的美股。

## 一、Liquid 的续集：不谈了

上周说过 Liquid Network 被提走约 4000 枚 BTC 的事，当时那批人自称白帽。这周谈判桌掀了。

黑客开价：5000 万美元赏金，换回手里剩下的近 600 枚 BTC。Blockstream 的回应是[公开拒绝](https://decrypt.co/377959/blockstream-refuses-ransom-for-return-of-47m-in-bitcoin-from-liquid-hack-it-is-theft)，原话「这是盗窃」，并且[明确表示将通过法律途径追踪追回](https://www.theblockbeats.info/flash/366710)，不付一分钱。9 月 11 日，[Liquid 恢复了出块](https://cointelegraph.com/news/liquid-network-resumes-block-production-after-320m-exploit)，网络回到运行状态。

这个决定值得单独说。过去一年行业的实际惯例是快速谈判、快速付钱、快速翻篇，Cetus、Kilo 这些前例里，项目方几天内就和「白帽」达成赏金协议，速度本身就是对下一位进攻者的邀请。Blockstream 反着来，等于公开宣布：我的系统被打了，但勒索这门生意在我这里不成立。600 枚 BTC，约 4600 万美元，押在「不向勒索低头」这个立场后面。

不是所有被黑的协议都有这个底气，也不是所有协议都选这条路。同一个星期的两个反面样本。跨链协议 Symbiosis 的比特币桥出漏洞，黑客在链上[铸出面值约 461 亿美元的假 syBTC](https://jinse.com.cn/lives/532088.html)，项目方事后追回 15 枚 BTC，[向黑客提出 20% 白帽赏金](https://www.theblockbeats.info/flash/366710)。Chainflip 的 TRON USDT 集成被攻击，损失约 73.6 万 USDT，[处理方式是把相关 provider 余额直接归零](https://cryptoslate.com/chainflip-to-reset-tron-usdt-provider-balances-to-zero-following-736000-exploit/)，流动性提供者承担后果。

一周三起，三种处置：拒付走法律、付赏金换部分追回、直接归零转嫁给 LP。你在哪条链上放钱，就等于提前选了其中一种。

## 二、Balancer 的体面退场

这周还有一场不算被黑事件的「死亡」，值得记录。

9 月 15 日，Balancer 联合创始人在治理论坛提出[有序关停协议](https://www.theblock.co/news/defi/2026-09-15-balancer-proposes-winding-down-414782)的提案：停止新业务，分阶段终止协议，把约 900 万美元的国库资产按比例以实物形式[返还给 BAL 持有者](https://foresightnews.pro/article/detail/100319)。

账很简单：协议每月支出约 15 万美元，8 月收入只有约 3 万，6 月还有 9.7 万，两个月掉了 69%。重组救不回来，那就把剩下的钱分了，体面离场。投票定在 9 月 25 日到 29 日，交易功能计划 10 月停止，持有者的国库申领要等到[2027 年 5 月](https://www.onebullex.com/news/articles/balancer-sets-sept-25-29-vote-to-wind-down-treasury-claims-deferred-to-may-2027-2)。

这个协议 2020 年前后是 DeFi 的门面，自动做市商三分天下的玩家，估值[一度摸到 70 亿美元量级](https://www.odaily.news/zh-CN/post/5213024)。最后一条公告是「我们关掉自己」。

一个老牌协议，收入撑不住了，不甩锅不硬撑，把国库分给持币人再走。加密行业每天产出无数 rug 和跑路，Balancer 这种死法稀少到值得记录。Defi 元年的项目到 2026 年，活下来的在庆祝，活不下来的多数是暴死，有序退场是第三种，也是最难的一种。

## 三、S&P 的一周：先投后买

S&P Global，那个给主权国家和上市公司打评级的百年巨头，这周在加密圈连落两子。

9 月 14 日，[领投加密数据商 Kaiko](https://www.theblock.co/news/deals/2026-09-14-sp-global-leads-strategic-investment-in-crypto-data-firm-kaiko-extending-series-b-to-110-million-414618)，B 轮扩至 1.1 亿美元，法国巴黎银行跟投。三天后，9 月 17 日，[宣布收购 OpenZeppelin](https://www.theblock.co/news/business/2026-09-17-sp-global-agrees-to-acquire-openzeppelin-in-onchain-security-push-415360)。

OpenZeppelin 是什么，写过智能合约的人都知道。它的 Contracts 库是行业事实标准，审计业务覆盖过大量头部协议。S&P 把它买下来，官方口径叫 onchain security push，翻译成人话：评级公司发现链上金融的风险定价，最后落在代码审计上，那就把审计公司买了。

一个多世纪以来 S&P 卖的是「信用」，现在它想把「代码」也装进同一个货架。数据（Kaiko）加审计（OpenZeppelin）加评级（本体），给代币化金融做一整套风险基础设施。这个动作比任何 ETF 上市都更能说明传统金融的入场方式：它们不炒币，它们买矿山。

同一个赛道这周还有一条 AI 线索，方向相反但逻辑相通。[OpenAI 证实](https://jinse.com.cn/lives/531934.html)其测试中的失控 AI 智能体今年 5 月对 RubyGems 发起过攻击，另有报道称这些智能体在 Hugging Face 被黑前两个月就[探测过它的弱点](https://decrypt.co/378446/openai-rogue-agents-hugging-face-two-months-before-hack)。攻击面在 AI 化，防御面也在 AI 化：Blockworks 宣布用 AI agent 把[加密风险警报从 10 分钟压到 5 秒](https://unchainedcrypto.com/blockworks-cuts-crypto-risk-alerts-from-10-minutes-to-5-seconds-with-ai-agents/)。S&P 买的是人工审计的存量，赌的是机器审计的未来，这两件事会在这家公司内部碰头。

## 四、监管自己动手，美联储三年来第一次加息

美国这边，立法程序卡住了，机构说等不了。

[CLARITY 法案在参议院以 49 比 50 卡关](https://m.cnyes.com/news/id/6607847)，一票之差。第二天，SEC 主席 Atkins 和 CFTC 主席 Selig [分别表态](https://fund.aiying.cc/news/8373.html)，将在各自现有法定权限下推进数字资产规则制定。前 CFTC 主席 Giancarlo 也公开背书这条路。机构规则和国会立法的区别大家都清楚，下届政府可以推翻前者。但行业等不起了，先有规则，再等法律。

众议院那边同步在推另一条线，[审议加密税法案与战略比特币储备法案](https://www.techflowpost.com/zh-CN/newsletter/136487)。英国则走了相反方向，多部门联合突查 P2P 加密交易场所，[宣告「轻触监管」时代结束](https://www.coindesk.com/policy/2026/09/17/uk-signals-end-of-light-touch-era-with-multi-agency-raid-on-peer-to-peer-crypto-hubs)。同一个行业，美英各自画线。

宏观这周的大事是美联储。9 月 16 日，FOMC 以 12 比 0 [加息 25 个基点至 3.75% 到 4%](https://www.federalreserve.gov/monetarypolicy/files/monetary20260916a1.pdf)，2023 年 7 月以来第一次。新主席 Warsh 的说法，通胀太高太久了。点阵图显示 18 人里 16 人认为年内还要再加。驱动因素是关税、中东局势推高的油价，和 AI 资本开支潮。

按教科书，加息日风险资产该跌。实际是美股三大指数集体高开，费城半导体涨 3%，加密市场普涨，BTC 站回 76000 上方。市场在交易一个很拧巴的逻辑：通胀是经济过热的症状，加息是央行承认增长存在。什么时候这个逻辑会翻，看油价比看鲍威尔，哦不，看 Warsh 的嘴有用。

## 尾声

本周主线是 ZEC。今晚 1433 美元，CoinMarketCap 市值第九，30 天涨 180%，最大空头 Garrett Jin 浮亏 2800 万还在加仓，强平价 2631。三个半月前这个币还差点死于一个 AI 审计程序挖出的无限铸币漏洞。完整的拆解写成了一篇深潜，[在这里](/posts/zec-100-days-short-war/)。

其余值得记下的：

- Curve [上线 Arc 网络](https://foresightnews.pro/news/detail/113423)，Circle 的稳定币链主网上线第二天就有老牌 DeFi 落地；Circle 已[铸造 100 亿枚 ARC 并分发至 11 个地址](https://www.techflowpost.com/zh-CN/newsletter/136698)
- World 推出 [World Money 超级应用](https://www.theblock.co/news/business/2026-09-17-world-launches-world-money-super-app-stablecoins-stripe-integration-boosted-rewards-415394)，稳定币加投资加收益，覆盖 150 余国，Stripe 做集成
- Tether 向美国黄金交易商 Gold.com [提供约 15 亿美元融资](https://foresightnews.pro/news/detail/113353)，成为其贵金属租赁主要资金方，稳定币发行商做起了黄金生意
- Galaxy 报告：二季度加密风投规模[环比增长 31%](https://www.techflowpost.com/zh-CN/newsletter/136579)，后期项目占主导，钱在往确定性聚
- 韩国 Upbit 上线日元稳定币 JPYC，SBI 与韩国教保生命用 Canton 完成日韩跨境汇款实证
- Metaplanet CEO [放弃约 1.23 亿美元 Series 10 激励](https://jinse.com.cn/lives/531872.html)，股东关系紧张到要用自砍薪酬来止血
- 纽约人寿通过 Centrifuge 把[首只代币化基金放上 Avalanche](https://foresightnews.pro/news/detail/113415)，保险资金进了链上

拒付赎金的老公司，买审计所的评级巨头，分完国库再关门的 DeFi 元老。这一周没有一个统一的主题，但有一个统一的问句：钱进场的方式变了，从买币，变成了买公司、买牌照、买基础设施。

---

*本文事实据 The Block、Decrypt、CoinDesk、Cointelegraph、深潮 TechFlow、律动 BlockBeats、Foresight News、美联储官网等公开报道，观点为作者个人判断，不构成投资建议。*
