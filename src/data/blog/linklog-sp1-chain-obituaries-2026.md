---
author: Jask
pubDatetime: 2026-10-03T05:30:00.000Z
title: 链周志·特别期｜链讣告：Blast 关网、Zeta 投票自杀、Story 改嫁、Abstract 失联，还有 Atom 生态的连环葬礼
slug: linklog-sp1-chain-obituaries-2026
featured: true
draft: false
series: 链周志
tags:
  - Blast
  - ZetaChain
  - Story
  - Abstract
  - Cosmos
  - Layer 2
description: 不写周报，写讣告。Vol.9 结尾问「下一个投票杀死自己的链会是谁」，一个月不到答案凑齐了一个加强连：Blast 体面关网给了时间表，ZetaChain 投完票币价又跌回去，Story 把自己改名成了别的东西，Abstract 官宣没有但信号全到，Cosmos 生态从 Evmos 到 Stride 连环下葬。一篇盘点 2026 年链的各种死法，和你该从每种死法里读出什么。
---

> 这期不是周报，是讣告合集。Vol.9 的结尾我问了一个问题：下一个投票杀死自己的链会是谁。答案来得比预想的快，而且不止一个，连投票都懒得投的也有。恐惧贪婪指数截至发文 67，贪婪。大盘在开香槟，链圈在办葬礼，两件事同时成立。

## 一、Blast：把体面关网做成了模板

10 月 2 日，[Blast 官宣关停](https://x.com/blast/status/2106032805280891073)，理由写得毫不遮掩：维持这条链的持续成本已经超过链产生的收入，看不到一条经济上可持续的路。

这条链的履历值得复述一遍，因为它是上一轮周期的标本。Blur 创始人 Pacman 的项目，Paradigm 和 Standard Crypto 投了 2000 万美元。2023 年 11 月开盘时链都没上线，先开一个只进不出的存款合约，几天锁了 3 亿美元。2024 年 6 月，链上锁仓冲到约 22.6 亿美元的峰值。关停公告发出当天，[DefiLlama](https://defillama.com/chain/Blast) 显示只剩约 3200 万美元，从峰值跌掉 98.6%。BLAST 代币截至发文报 0.000243 美元，24 小时再跌 41%，市值 1700 万美元出头。

但 Blast 这场关停真正值得记的，是流程。给时间表：先花约一周把放在 Lido 里的资产撤出来，这期间提币暂停；然后提币恢复，等待期砍到 24 小时；10 月 26 日是官方界面的最后一天；过了这天资产不消失，改成手动跟以太坊主网上的桥合约交互，官方承诺截止前发指引。全程道歉，全程给通道。

我把它叫做模板，意思是以后每条链关停都会被拿来和 Blast 比。撤退的完整操作清单和防骗预警，我写在[链上日记的这篇双语攻略](https://theonchaindiary.com/zh/articles/blast-l2-shutdown-withdrawal-guide/)里了，这里只说一句：关停消息出来后，真正让你亏钱的通常不是关停本身，是跟着公告一起到的骗子。

## 二、ZetaChain：投票自杀之后，币价没飞多久

[Vol.9](/posts/linklog-vol9-zetachain-shutdown-zec-short-capitulation/) 详写过 ZetaChain：9 月 20 日，提案 68 以 99.4% 的赞成率通过，批准把 ZETA 按 1:1 迁成 Solana 原生 SPL 代币，然后逐步关掉自己的 Layer 1。当时盘面很讽刺，自杀当天 ZETA 大涨 66%，我写过一句「杀死自己的链，币价起飞」。

一个月不到，下文来了。截至发文，ZETA 报 0.049 美元，七天跌 9.7%，已经跌回投票日之前的下方。投自杀票那天的涨幅，基本吐干净了。链本身还活着，验证人照常出块，质押照常发奖励，因为第二次投票（定快照块、关停块、申领流程的那次）还没提交，官方口径是等交易所确认换币安排之后才启动。

这个案例的价值在于把「治理杀链」的去魅做完了。第一次投票是方向授权，不是执行时间表；币价的瞬时反应是叙事交易，不是基本面重估；真正的资产迁移、快照、申领，全都还压在第二次投票和交易所的流程后面。持有 ZETA 的人现在的处境和 Blast 用户结构上是一样的，都在等一个还没公布的窗口，只是 Zeta 的官宣死亡流程比 Blast 慢一拍。

## 三、Story：链还活着，Story 已经死了

第三种死法最微妙：链一行代码没动，项目把自己改名成了别的东西。

6 月 25 日，拿了 a16z 领投 1.4 亿美元融资的 IP 链 Story Protocol 宣布[整体更名](https://decrypt.co/372107/story-protocol-rebrands-data-network-ai-training-pivot)为 DATA Foundation，叙事从链上知识产权改成 AI 训练数据。IP 代币 1:1 换成 DATA，持有者无需操作。

死因数据很直观。链上 TVL 从去年 9 月约 4500 万美元的峰值，跌到[更名公告时的 34.9 万美元](https://thedefiant.io/news/blockchains/story-rebrands-as-data-foundation-in-pivot-to-ai-training-data)，跌掉 99% 还多。代币距 14.78 美元的高点跌了约 98%。更早的 5 月，治理提案 SIP-00011 已经把验证人从 80 个砍到 21 个，当时理由是共识开销，现在回头看就是省钱过冬。

技术上说这条链没死：chainID 还是 1514，合约原封不动地出事件，只是官方 RPC 域名换成了 datarpc.io。周边的反应更诚实，Hyperliquid 在 6 月底投票下架了 IP 永续，Coinbase 7 月 6 日停了 IP-PERP。交易所不关心链出不出块，它们给「Story 这个叙事」下了架。

改名之后呢。截至发文 DATA 报 0.21 美元，市值 7700 万，七天跌 6%。AI 数据叙事暂时没接住抛压。改嫁不保证新郎爱你。

## 四、Abstract：官宣没有，葬礼的排场先到了

Abstract 是 Pudgy Penguins 母公司 Igloo 做的消费级 L2，目前处于最难受的状态：没人宣布死亡，但所有信号都在预习葬礼。

10 月 1 日社区炸锅，[BlockBeats 的快讯](https://en.theblockbeats.news/flash/369930)列了清单：创始人 Luca Netz 从 X 账号摘掉了 Abstract 标识；核心开发 Cygaar 的账号从 6 月起沉默，关联钱包被发现在往外转资金；生态负责人和产品负责人 8 月相继离职；官方账号半休眠。截至发文，官方零回应。

有个后续值得单独说：所谓转资金，[后续被澄清](https://bbx.com/news-detail/3112420)是 Cygaar 转出了 600 美元付开支。600 美元。恐慌跑得比事实快了三个数量级。

但恐慌的方向未必错。母公司层面的收缩早就开始了：6 月旗下手游 Pudgy Party 关停，Luca Netz 自己向持有者[交底](https://protos.com/pudgy-penguins-mobile-game-axed-after-losing-millions-of-dollars/)说这游戏亏了数百万美元，再续命还要再烧 250 万，日活掉到两三百人，他当时还说了一句「接下来两周，所有创可贴都会被撕掉」。创可贴撕到十月，轮到链本体引起怀疑，时间线是通的。

Abstract 教的是读信号的方法论：单看任何一条（摘标识、开发者沉默、离职）都可能有别的原因，叠在一起又配上官方沉默，概率就变了。等官宣再动手，和官宣前动手，是两种完全不同的平均成本。

## 五、Atom 生态：不是一条链死了，是货架在清仓

最后说 Atom 生态，这块最惨，因为它不是一条链的葬礼，是整排货架在清仓。

**Evmos**，5 月 15 日，[关停提案 331](https://www.kucoin.com/news/flash/cosmos-evm-chain-evmos-network-officially-shut-down-website-and-infrastructure-unavailable) 以 99.8% 的赞成率通过，节点在块高 37,318,000 停机，约 5 月 18 日。官网下线，区块浏览器下线，TVL 归零。这是 Cosmos 版的投票自杀，而且比 ZetaChain 执行得更彻底：Zeta 投完票链还活着，Evmos 投完票链直接停了。

**Stride**，Cosmos 最大的流动性质押协议之一，9 月 29 日官宣[有序关停](https://www.lookonchain.com/feeds/74791)，理由是国库按当前烧钱速度撑到 2027 年 2 月。时间表：10 月 12 日前正常赎回 stToken；之后暂停约五周等底层资产解质押；11 月 20 日前后在 Osmosis 的 Transmuter 池恢复，按固定汇率把 stToken 换回底层资产，迁移完成后不再累计质押收益。链上 TVL 我实拉了一遍 DefiLlama，约 500 万美元量级。持 stATOM 的人，10 月 12 日是第一个该记住的日子。

再往前数：**Nillion** 2 月官宣 NilChain 3 月 23 日停机，NIL 迁往以太坊，项目本体转战 Ethereum；**MilkyWay** 的 L1 三月关停，资产退回原生链；**Noble** 一月直接离开 Cosmos 自建 EVM L1；**Pryzm**、**Quasar** 关停或大改。据[当时的汇总报道](https://cryptonews.net/news/blockchain/32457792/)，Cosmos Hub 自己的 TVL 一度跌到 13.1 万美元，历史最低。

结构性的一幕在 2 月 20 日：Cosmos Hub 论坛[官宣废弃链间安全 ICS](https://forum.cosmos.network/t/remove-ics-from-the-cosmos-hub-software-upgrades-to-follow/16682)。这个 2023 年被寄予厚望、想让 ATOM 质押者靠给别人提供安全赚钱的机制，官方原话是「维持它的弊端是明确的，好处不是」。Neutron 去年 3 月就先走了。生态的旗舰把「生态」这个卖点自己拆了。

截至发文 ATOM 报 1.68 美元，七天跌 7.4%，市值 8.97 亿。这个生态 2021 年讲的故事是互联网的第三代架构，现在的新闻页是讣告栏。

## 六、四种死法

盘完这一批，链的死法其实可以分四类，每类对应你该做的动作不一样。

第一种，**体面关网**，Blast 是模板：官宣、时间表、通道、道歉。用户动作最清晰，照着官方流程在截止日前撤完就行，别拖到手工合约模式。

第二种，**投票自杀**，ZetaChain 和 Evmos：生死从技术问题变成治理投票问题。用户动作是盯第二次投票和快照公告，授权投票通过不等于资金能动，中间的时间差就是你的准备期。

第三种，**改嫁改名**，Story、Nillion、Noble：链壳可能还活着，但你当初买入的叙事已经死了。用户动作是重新审计持仓理由，你持有的到底是「这条链」还是「这个故事」，故事换了主角，你的持仓逻辑就得重写，别拿旧地图走新路。

第四种，**无声消失**，Abstract 现在的状态：没有官宣，只有信号。用户动作最难也最简单：定一个自己的阈值，核心开发沉默多久、几个负责人离职、官方多久不更新，够了就先撤一部分，用仓位表达怀疑，而不是用信仰。

四种死法的共同死因只有一个：运营成本大于收入。2021 到 2024 届融资撑到了代币解锁卖完、国库烧穿的那一天。这不是技术故障，是商业模式到期。之前写 delta.network 的时候说过一次，这次再说一遍：用金库补贴用户收益的链，跑的是商业模式，不是协议不变量，商业模式是会死的。

对普通持币人，这一期所有内容压缩成两句话：你在 L2 或小 L1 上的余额，本质是对运营方的债权，运营方的烧钱速度决定你的出场时间；信号出现就降低敞口，别等官宣，官宣是给最后走的人看的。

## 尾声

其余值得记下的：

- Balancer 的关停投票 9 月 25 到 29 日走完，国库 900 万美元返还持币人，协议级体面退场的 Cosmos 镜像案例，和这期的链讣告放一起看刚好
- ZetaChain 第二次投票还没提交，卡在交易所确认换币安排，持有 ZETA 的盯官方公告
- Stride 的 10 月 12 日是最近的用户侧死线，持 stToken 的别错过正常赎回窗口
- Abstract 官方迟早要回应，回应内容比回应本身重要：给时间表是第一种死法，顾左右言他就是第四种

Vol.9 写 ZetaChain 那期的关键词是「结束」。这一期补上了注脚：结束本身也开始分型了，有的给时间表，有的给投票，有的给一个新名字，有的什么都不给。行业在学习死亡，用户在学习认尸。下一个进讣告的名字是谁，我不知道，但按这个节奏，特别期可能还会有第二期。

---

*本文事实据 Blast/ZetaChain 官方公告、Decrypt、The Defiant、Cointelegraph、BlockBeats、Lookonchain、TokenPost、KuCoin News、Protos、Cosmos Hub 论坛、DefiLlama、L2Beat、CoinMarketCap 等公开来源，行情数据截至发文，观点为作者个人判断，不构成投资建议。*
