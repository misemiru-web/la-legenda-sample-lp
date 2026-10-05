# LA LEGENDA サンプルLP デザイン定義書 v1.3

- 対象：LA LEGENDA（ラ レジェンダ）／保土ケ谷・星川
- 種別：営業提案用サンプルLP
- 初版作成日：2026-09-16
- 更新日：2026-10-05
- 前提文書：`LA LEGENDA サンプルLP 要件定義書 v1.2`
- 次工程：リファレンス画像更新 → 画像素材整備 → Next.js / React / CSS実装 → QA
- デザイン基準：デジタル庁デザインシステムのアクセシビリティ・情報設計・操作性の考え方を参照し、視覚表現はLA LEGENDA固有のブランドとして独自設計する
- v1.3更新方針：v1.2のアートディレクションを維持しつつ、店舗修正指示に合わせてコピー、Why、Care、InBody、Shooting、Menu & Price、Access、Reservationを更新

---

# 0. この文書の位置づけ

本書は、別のWebデザイナー／フロントエンドエンジニアが読んでも、同じ方向性でLA LEGENDAのサンプルLPを再現できることを目的とした実装可能なデザイン仕様書である。

デジタル庁デザインシステムは以下の品質基準として参照する。

- 可読性
- 情報階層
- 操作性
- アクセシビリティ
- 一貫したUI状態
- レスポンシブ
- 適切な見出し構造
- フォーカスの視認性
- 色だけに依存しない情報伝達

一方、色・フォントの表情・写真構図・余白・背景・セクションのリズム・エディトリアル表現は、LA LEGENDAのブランド、実店舗写真、ターゲット、サービス内容から独自に設計する。

**目標は「使いやすさはデザインシステム品質、見た目はLA LEGENDAそのもの」である。**

## 0.1 v1.3での主な更新

v1.2のアートディレクション・アクセシビリティ・実装仕様を維持し、`要件定義書 v1.2` と店舗修正指示に合わせて以下を更新した。

- Heroメインコピーを **「ただ鍛えるのではない。身体を、人生ごと整える。」** に固定
- `TRAIN` / `TRAIN + CARE` 系の表示を、該当箇所で `TRAINING` / `TRAINING + CARE` へ統一
- `Why LA LEGENDA` の第4項目を `COMFORTABLE SPACE` に変更し、コピーを更新
- Body Care / Wellnessに `DETOX / ハイパーナイフ` を追加し、医学的効能を示唆しない表示ルールを追加
- InBodyを「数値競争」ではなく「自分に合う始め方を考える入口」として再設計
- `Guest / Shooting` を特定人物の訴求から切り離し、YouTube等の撮影利用実績を示す補助セクションとして再定義
- Menu & Priceにハイパーナイフ3メニューと「サブスクコースあり」の補足を追加し、情報量増加に対応するグルーピングを設計
- Accessを「店舗情報＋地図」から「来店・予約ハブ」へ拡張し、営業時間・駐車場・Google情報・Instagram QRを追加
- Reservationを Instagram / Hot Pepper Beauty / LINE の3導線へ分岐する仕様に変更
- DesktopではQRを補助導線として使用し、Mobileでは直接リンクを優先するルールを追加
- 正式URL・InBody非会員条件・ハイパーナイフのサブスク詳細・別送写真はTBCとして固定せず、差し替え可能な構造にする

## 0.2 v1.2での主な更新

v1.1のアートディレクション・実装仕様を維持し、以下を追加した。

- `Space` の直後に `Guest / Shooting` セクションを追加
- 撮影・来店実績を「実際に使われている空間の補助証拠」として扱う方針を追加
- 人物写真・動画・外部投稿の権利確認ルールを明記
- Guest / ShootingがHero級の視覚強度にならないよう、サイズ・色・情報量を制限
- Mobileでも1ブロックに収め、ページの主軸を崩さない

## 0.3 v1.1での主な更新

v1.0のアートディレクションは維持し、以下を実装仕様として追加・明確化した。

1. LA LEGENDA固有の署名モチーフ「Legend Arc / Ring」を追加
2. コンポーネント内部まで統一するSpacing Scaleを追加
3. HeaderのHero上／Scroll後／Mobile Menu状態とロゴVariantを明確化
4. 写真Assetの用途・比率・推奨書き出しサイズ・object-position管理を追加
5. Static Export / GitHub Pages前提の画像最適化ルールを追加
6. `Why LA LEGENDA` を後続セクションの「予告」として簡略化
7. Sticky Headerとアンカー移動の干渉を防ぐ`scroll-margin-top`を追加
8. CSS Custom Propertyをmedia queryの条件に直接使用しない実装ルールを追加
9. 日本語Webフォントの読み込みウェイトを限定し、パフォーマンス方針を追加

---



# 1. デザインコンセプト

## 1.1 Visual Concept

### **QUIET STRENGTH — Training. Care. Live Well.**

大人世代に向けた「強さ」と「整う感覚」を、派手なフィットネス広告ではなく、静かな上質さとして表現する。

LA LEGENDAの既存ビジュアルには、

- 黒
- シャンパンゴールド
- 木目
- グレー
- 金属・トレーニングマシン
- 上質で落ち着いた受付空間
- 本格的なトレーニング設備
- マッサージ／ケア
- 「大人世代」「一生モノの健康美」

という要素が存在する。

これらをそのまま「黒×金の高級ジム」に単純化せず、**“Premium Wellness Atelier”のような、鍛える場所と整える場所が共存した大人のウェルネス空間**として再編集する。

## 1.2 ユーザーに与えたい印象

優先順位：

1. **信頼できる**
2. **入りやすい**
3. **上質だが威圧的ではない**
4. **大人の身体に向き合ってくれそう**
5. **普通のパーソナルジムとは少し違う**
6. **トレーニングもケアも一か所で受けられる**

## 1.3 デザインキーワード

- Quiet Strength
- Mature Wellness
- Premium but Warm
- Editorial
- Real Space
- Training × Care
- Longevity
- Calm Confidence
- Crafted
- Human

## 1.4 店舗らしさの視覚化

LA LEGENDAらしさは、装飾で作るのではなく以下で作る。

- 実店舗写真を大きく使う
- 黒・チャコールを「緊張感」、アイボリー・木目を「安心感」として交互に使う
- ゴールドはブランドの“光”として細く限定的に使用する
- 明朝系見出しで大人の品格を出し、本文は読みやすいゴシックで支える
- 筋肉・減量ではなく「身体と生活の質」に視線を向ける
- TrainingとCareを異なる写真表現で見せ、Conceptで統合する
- 余白を広く取り、価格やCTAだけを必要な場面で強くする

## 1.5 Brand Signature — Legend Arc / Ring

汎用的なLuxury Wellness LPとの差を作るため、公式ロゴに見られる**円形・リング状の構成**を着想源とした「Legend Arc / Ring」を、LA LEGENDA固有の署名的モチーフとして使用する。

これはロゴそのものを背景装飾として大量使用するものではない。

### 使用ルール

- 1ページ内の使用回数：**3〜4回程度まで**
- 基本形：円の一部だけを見せるArc、または細いRing
- 線幅：Desktop `1px〜1.5px`、Mobile `1px`
- 色：`--color-gold` / `--color-border`
- Light背景上の装飾Opacity：`0.12〜0.22`
- Dark背景上の装飾Opacity：`0.16〜0.28`
- 情報を囲う「丸カード」としては使用しない
- 文字の背後に置いて可読性を下げない
- Hero・Concept・Final CTAなど、ブランドを感じさせる節目だけに使用する

### 推奨箇所

- HeroのSection markerまたは写真端
- ConceptのTraining / Careをつなぐ細いArc
- Section numberの一部
- Final CTAの余白部分

### 禁止

- 全セクションに円を置く
- ロゴを巨大透かしにする
- 円形Cropを多用する
- Goldの太い円・光るRing
- 装飾がコンテンツより目立つこと

---

# 2. デザイン原則

## Principle 01 — Real Before Decorative

装飾より実際の店舗・サービス写真を優先する。

LA LEGENDAの価値は、実店舗の上質な空間、本格的な機器、実際のトレーニング、ケアの存在そのものにある。背景パターンや疑似高級感で埋めない。

---

## Principle 02 — Contrast the Experience

「鍛える」と「整える」を同じ見せ方にしない。

- Training：構造的・力強い・暗部・直線
- Care：余白・肌感・柔らかい光・静けさ
- Concept：両者を統合

という差を付ける。

---

## Principle 03 — Premium Without Intimidation

高級感を「黒・金・大文字・細線」の多用で作らない。

40〜60代の初心者を含むターゲットに対し、
「敷居の高さ」ではなく「丁寧に迎えられる上質さ」を作る。

---

## Principle 04 — Readability Is Part of Luxury

文字が小さい、コントラストが弱い、操作が分かりづらいデザインは高級ではない。

主要本文は16px未満にしない。  
淡いゴールド文字を長文に使わない。  
装飾より可読性を優先する。

---

## Principle 05 — Rhythm, Not Repetition

各セクションを同じ「見出し＋3カード」で繰り返さない。

セクションごとに、
写真・コピー・情報整理・料金・CTAなど主役を1つに絞り、
構図と密度を切り替える。

---

# 3. カラーシステム

## 3.1 Core Palette

| Token | HEX | 用途 |
|---|---|---|
| `--color-ink` | `#1A1815` | Primary / Dark background / CTA |
| `--color-charcoal` | `#27241F` | Secondary dark surface |
| `--color-gold` | `#B7955E` | Brand accent / line / icon / dark背景上の短い文字 |
| `--color-gold-light` | `#D3B77D` | Dark background上の装飾・アクセント |
| `--color-gold-strong` | `#806030` | Light background上で文字として使えるAccent |
| `--color-ivory` | `#F5F1E8` | Main background |
| `--color-paper` | `#FBF9F4` | Surface / card / FAQ |
| `--color-stone` | `#E5DED2` | Soft section background |
| `--color-text` | `#1A1815` | Text Primary |
| `--color-text-secondary` | `#5A534A` | Text Secondary |
| `--color-border` | `#D7CFC2` | Border / rule |
| `--color-white` | `#FFFFFF` | Dark surface上のText |
| `--color-focus` | `#E8C45F` | Focus outer indicator |

## 3.2 CTA

Primary CTA：
- Background：`#1A1815`
- Text：`#FFFFFF`
- Border：`#1A1815`

Hover：
- Background：`#302C26`
- Border：`#302C26`

Active：
- Background：`#0F0E0C`

Dark background内のCTA：
- Background：`#D3B77D`
- Text：`#1A1815`
- Hover：`#DFC68E`

## 3.3 アクセントカラーの扱い

ゴールドは面積を広く使わない。

推奨用途：
- 1px罫線
- Section eyebrow
- 小型アイコン
- 数字
- CTA補助
- ロゴ周辺
- 一部の価格表示
- 写真上のごく薄い光のグラデーション

非推奨：
- 長文本文
- 大面積背景
- すべての見出し
- 全ボタン
- 全カードの枠

## 3.4 コントラスト基準

実装時の基本目標：
- 通常テキスト：4.5:1以上
- UI境界・重要アイコン：3:1以上を目安
- 色だけで状態・意味を伝えない

本パレットの代表組み合わせ：
- `#1A1815` / `#F5F1E8`：約15.7:1
- `#5A534A` / `#F5F1E8`：約6.7:1
- `#806030` / `#F5F1E8`：約5.1:1
- `#B7955E` / `#1A1815`：約6.3:1
- `#FFFFFF` / `#1A1815`：約17.7:1

`#B7955E` は白・アイボリー上の小さい本文には使わない。

---

# 4. タイポグラフィ

## 4.1 Font Family

### Display / Heading
**Shippori Mincho**

用途：
- H1
- H2
- Conceptコピー
- Final CTAコピー
- 一部の大きな数字

理由：
既存ロゴのクラシックなセリフ感と親和性があり、フィットネスの硬さを和らげつつ、大人向けの品格を作れる。

### Body / UI
**Zen Kaku Gothic New**

用途：
- 本文
- Navigation
- Button
- Price
- FAQ
- Caption
- Access
- UI全般

理由：
日本語本文の可読性を優先しながら、丸すぎず、モダンで静かな印象を保てる。

### Fallback
```css
--font-display: "Shippori Mincho", "Yu Mincho", "Hiragino Mincho ProN", serif;
--font-body: "Zen Kaku Gothic New", "Hiragino Kaku Gothic ProN", "Yu Gothic", system-ui, sans-serif;
```

実装では `next/font` 等を使用し、CLSを抑える。

## 4.2 Type Scale

### Desktop

| Style | Size | Weight | Line-height | Letter-spacing |
|---|---:|---:|---:|---:|
| H1 | 64px | 500 | 1.22 | `0.01em` |
| H2 | 44px | 500 | 1.35 | `0.01em` |
| H3 | 26px | 500 | 1.50 | `0` |
| Lead | 20px | 400 | 1.85 | `0.01em` |
| Body L | 18px | 400 | 1.90 | `0.01em` |
| Body | 16px | 400 | 1.85 | `0.01em` |
| Small | 14px | 400 | 1.70 | `0.02em` |
| Caption | 13px | 500 | 1.60 | `0.03em` |
| CTA | 16px | 700 | 1.00 | `0.04em` |
| Eyebrow | 13px | 700 | 1.20 | `0.14em` |

### Mobile

| Style | Size | Weight | Line-height |
|---|---:|---:|---:|
| H1 | 40px | 500 | 1.30 |
| H2 | 32px | 500 | 1.42 |
| H3 | 22px | 500 | 1.55 |
| Lead | 18px | 400 | 1.85 |
| Body | 16px | 400 | 1.85 |
| Small | 14px | 400 | 1.70 |
| CTA | 16px | 700 | 1.00 |

## 4.3 Fluid Type

H1：
```css
font-size: clamp(2.5rem, 5vw, 4rem);
```

H2：
```css
font-size: clamp(2rem, 3.3vw, 2.75rem);
```

## 4.4 文字組みルール

- 本文1行：PCで約28〜42日本語文字を目安
- 長文の `max-width`：`38rem〜44rem`
- 見出しは意図的な改行を許可するが、Mobileで再指定する
- 英字の全大文字はEyebrow等の短文のみ
- H1/H2を細すぎるウェイトにしない
- 金色の小さな文字だけで情報階層を作らない
- 本文を中央揃えにしすぎない。長文は左揃え

## 4.5 Font Loading / Performance

日本語WebフォントはLPの読み込み量に大きく影響するため、使用ウェイトを限定する。

### 読み込み対象

**Shippori Mincho**
- 500：H1 / H2 / Concept / Final CTA
- 原則として他ウェイトは読み込まない

**Zen Kaku Gothic New**
- 400：Body
- 500：Navigation / small heading
- 700：CTA / Eyebrow

### 実装ルール

- `next/font`を第一候補とする
- 使用していないWeightを読み込まない
- `font-display`相当の挙動で本文表示を阻害しない
- フォント読み込み前後で大きなレイアウトシフトを起こさない
- リファレンス画像制作時にも、実装予定のウェイトに近い見え方を使用する
- 特殊な英字Display Fontを追加して3書体構成にしない

---

# 5. レイアウト・グリッド

## 5.1 Max Width

- Full visual max：1440px
- Main content max：1240px
- Text content max：720px
- Long body copy max：640px

## 5.2 Desktop

`1280px+`

- 12-column grid
- Container：`min(1240px, calc(100vw - 96px))`
- Left / Right margin：48〜80px
- Gutter：24px
- Major section padding：120〜144px
- Compact section padding：88〜104px

## 5.3 Tablet

`768px–1279px`

- 8-column grid
- 左右余白：32px
- Gutter：20px
- Section padding：88〜104px

## 5.4 Mobile

`<= 767px`

- 4-column grid
- 左右余白：20px
- Gutter：16px
- Section padding：64〜80px
- 大型ビジュアルセクションは余白を意図的に縮めてもよい

## 5.5 Breakpoints

設計上の基準値：

- Small：`480px`
- Medium：`768px`
- Large：`1024px`
- Extra Large：`1280px`

CSS実装では、通常のCustom Propertyをmedia query条件へ直接使用しない。

```css
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Small Desktop */ }
@media (min-width: 1280px) { /* Large Desktop */ }
```

プロジェクト側でPostCSS Custom Media等を明示的に導入する場合のみ、名前付きBreakpointを使用してよい。

ブレークポイントで「縮小」するのではなく、レイアウトの意味を変える。

## 5.6 Section Rhythm

ページ全体を以下の密度で設計する。

1. Hero：濃い / 没入
2. Problem：軽い / 余白
3. Concept：濃い / 世界観
4. Why：整理 / 軽い
5. Training：写真主役 / 強い
6. Care：静か / 柔らかい
7. InBody：情報整理 / 精密
8. Space：没入 / 写真
9. Guest / Shooting：撮影実績の信頼補強 / 小〜中密度
10. Price：情報整理 / 濃い
11. First Visit：軽い / 順序
12. Staff：人間味 / 写真
13. FAQ：機能的
14. Access：実用
15. Final CTA：濃い / 収束

**同じ背景色・同じカード形式が3セクション以上連続しないこと。**

## 5.7 Spacing Scale

セクション間だけでなく、コンポーネント内部の余白も共通Scaleで管理する。

| Token | Value | 主用途 |
|---|---:|---|
| `--space-1` | 4px | Icon内微調整 |
| `--space-2` | 8px | Label / icon gap |
| `--space-3` | 12px | Small UI gap |
| `--space-4` | 16px | Mobile基本gap |
| `--space-5` | 24px | Card / text group |
| `--space-6` | 32px | Component内大余白 |
| `--space-7` | 48px | Block間 |
| `--space-8` | 64px | Mobile section小 |
| `--space-9` | 80px | Mobile section標準 |
| `--space-10` | 96px | Tablet / compact desktop section |
| `--space-11` | 128px | Desktop section標準 |
| `--space-12` | 144px | Hero後など特別な呼吸 |

### ルール

- 任意の`37px`、`53px`等を増やさず、原則Scaleから選ぶ
- Optical adjustmentが必要な場合のみ±2〜4pxを許容
- H2→Leadは`24〜32px`
- Lead→Bodyは`16〜24px`
- Text block→CTAは`32〜40px`
- セクション見出し→主要コンテンツは`48〜64px`
- MobileではPCの余白を単純に50%にせず、読みやすさを基準にScaleを選ぶ

---

# 6. 写真・画像アートディレクション

## 6.1 写真の優先順位

1. 実際のトレーニング中の人物
2. トレーニングエリア全景
3. 受付・ブランドロゴ
4. ケア／施術
5. マシン・ダンベル等のディテール
6. スタッフ
7. 外観・アクセス

## 6.2 基本編集

Instagram写真はサンプルLP用に以下の範囲で補正する。

- 色温度を統一
- 暗部を潰しすぎない
- 白飛びを抑える
- 木目の暖色を残す
- 黒いマシンのディテールを見せる
- 彩度はやや控えめ
- 黄色・オレンジの照明が強すぎる場合のみ軽減
- 不自然なHDRにしない
- 肌を過剰補正しない
- 元写真の構図・内容を変更しない

### 目安
- Saturation：`-5〜0`
- Contrast：`0〜+8`
- Shadows：`+5〜+15`
- Highlights：`-5〜-15`
- Temperature：写真間のばらつきを統一する範囲

数値は固定値ではなく目安。

## 6.3 Training Photos

印象：
- strength
- structure
- professional
- real

トリミング：
- 人物＋機器が同時に伝わる
- 余白より設備の密度を活かす
- PC：`4:5`, `3:4`, `16:10`
- Mobile：`4:5`中心

オーバーレイ：
- 文字を重ねる場合のみ `rgba(15,14,12,.20–.45)`
- 画像全体を暗くしすぎない

## 6.4 Care Photos

印象：
- calm
- touch
- recovery
- wellness

トリミング：
- 手元
- 身体へのケア
- 柔らかい光
- 余白

Trainingより明度を少し上げ、肌と布の質感を残す。

## 6.5 Space Photos

受付写真は重要なブランド資産。

- ロゴが読める構図
- 木・グレー・黒・照明を残す
- Hero以外では `16:10` または `3:2`
- Space sectionではFull bleedも可

## 6.6 写真と文字の重ね方

原則：
- 長文を写真の上に直接置かない
- 写真上はH1 / 短いコピー / Eyebrow / CTAまで
- 文字の可読性が背景写真に依存する場合、gradient overlayを使用
- 文字の背後に半透明カードを乱用しない

## 6.7 PC / Mobile

PCで人物が右側にいる写真をそのままMobile中央Cropすると顔が切れる場合がある。

画像ごとに、
```css
object-position
```
をDesktop / Mobileで別指定する。

必要なら同一写真から
- Desktop crop
- Mobile crop
を別ファイルで用意する。

## 6.8 Image Asset Specification

以下は**元写真の解像度が十分な場合の推奨書き出し基準**であり、低解像度Instagram素材を無理に拡大する指示ではない。元データ以上の見かけ解像度を作るための過度なAIアップスケールは行わない。

| Asset | Desktop目安 | Mobile目安 | 基本比率 | 用途 |
|---|---:|---:|---|---|
| Hero | 1600×1200以上 | 900×1200以上 | PC 4:3〜16:10 / SP 4:5 | トレーニング＋空間 |
| Concept Training | 1200×1500 | 900×1125 | 4:5 | Training |
| Concept Care | 1200×1500 | 900×1125 | 4:5 | Care |
| Training section | 1400×1050 | 900×1125 | PC 4:3 / SP 4:5 | 実トレーニング |
| Care section | 1200×1500 | 900×1125 | 4:5 | 施術・ケア |
| InBody | 1000×1250 | 800×1000 | 4:5 | 機器・測定環境 |
| Space main | 1600×1000 | 900×1125 | PC 8:5 / SP 4:5 | 受付・全景 |
| Space sub | 1000×1000 | 800×1000 | 1:1 / 4:5 | Detail |
| Staff | 1000×1250 | 800×1000 | 4:5 | 人物 |
| Guest / Shooting | 元画像依存 | 元画像依存 | 4:5 / 3:2等 | YouTube等の撮影利用実績 |
| Access exterior | 1200×800 | 900×675 | 3:2 / 4:3 | 外観 |

### object-position管理

各画像について実装前に以下をAssetメモへ記録する。

- `desktopObjectPosition`
- `mobileObjectPosition`
- 顔・ロゴ・マシン等の「切ってはいけない領域」
- Dark overlayの必要有無
- 文字重ねの可否

例：

```ts
{
  src: "/images/hero-training.webp",
  alt: "LA LEGENDAのトレーニングスペースで行うパーソナルトレーニング",
  desktopObjectPosition: "62% 50%",
  mobileObjectPosition: "58% 42%"
}
```

## 6.9 Image Export / Static Site Strategy

サンプルはStatic Export / GitHub Pages等を想定するため、外部Instagram画像URLを本番表示へ直接使用しない。

### 基本方針

1. 使用許可済みInstagram写真をローカルAsset化
2. LP用に軽度レタッチ
3. 元画像を保持
4. Web用にAVIF / WebP / JPEGを必要に応じて書き出す
5. Heroのみ高優先度、それ以外はLazy Load
6. `width` / `height` または`aspect-ratio`を先に確保しCLSを防ぐ

### Next.js Static Export

Static Export時は、サーバー側のデフォルト画像最適化に依存しない。

安全な選択肢：

- 事前最適化した画像を`<picture>` / `<img>`で配信
- または`next/image`を使用する場合、Static Exportに適合する設定（例：事前最適化＋`unoptimized`または明示したcustom loader）を採用

実装チームは、公開環境に画像最適化サーバーがある前提で設計してはならない。

### ファイル命名例

```text
hero_training_desktop.webp
hero_training_mobile.webp
concept_training.webp
concept_care.webp
space_reception.webp
space_training-floor.webp
shooting_location.webp
care_treatment.webp
inbody_measurement.webp
```

---

# 7. UIコンポーネント

## 7.1 Header

Headerは**Hero上・Scroll後・Mobile Menu Open**の3状態を明確に設計する。

### Logo Asset

同一ロゴ形状からWeb用に2 Variantを用意する。

- `logo-on-dark`：Dark Hero上で視認できるVariant
- `logo-on-light`：Ivory / Paper上で視認できるVariant

ロゴの形状・比率は変更しない。色調整は公式ロゴの印象を壊さない範囲に限定する。

### State A — Hero / Top

Desktop：
- Height：80px
- Position：absoluteまたはHero内overlay
- Background：transparent
- Logo：`logo-on-dark`
- Navigation：White系
- CTA：Dark背景でも識別できるGold-light系またはOutline
- Bottom border：なし

Hero写真が明るくNavigationのコントラストが不足する場合は、Header直下へごく薄いDark gradientを入れる。

### State B — Scrolled

Desktop：
- Position：sticky
- `top: 0`
- Height：72〜76px
- Background：`rgba(245,241,232,.94)`
- `backdrop-filter: blur(12px)`は対応環境で補助的に使用
- Logo：`logo-on-light`
- Navigation：Ink
- Bottom border：`1px solid rgba(...)`
- CTA：Ink primary

切替はScroll `24〜48px`程度を目安とし、JSに依存しすぎない。

### Desktop Navigation

- Nav：14〜15px / 500
- Gap：24〜32px
- CTA：高さ48px

Hover：
- Nav下部に1px Gold line

Focus：
- 明確なFocus Ring

Active section：
- 下線または小さなmarkerを併用し、色だけに依存しない

### Mobile

- Height：64px
- ロゴ幅：125〜145px
- Menu button：44×44px以上
- Hero上ではDark対応Variant
- Scroll後はLight surfaceへ切替

### Mobile Menu Open

Drawerではなく、Header直下から展開するFull-width panelを第一候補とする。

- Background：Paper
- Text：Ink
- Padding：24px 20px 32px
- Main links：最低48px高
- CTA：Full width
- body scroll lock
- focus trap
- Esc close
- Close後にMenu buttonへfocusを戻す

Motion：
- opacity + `translateY(-8px → 0)`
- 220〜280ms

---

## 7.2 Button / CTA

### Primary
- Height：52px
- Padding：0 24〜28px
- Radius：4px
- Background：Ink
- Text：White
- Icon：必要なら右Arrow
- Shadow：原則なし

Hover：
- Backgroundをわずかに明るく
- Arrowを2〜3px移動
- 150〜180ms

Focus-visible：
```css
outline: 2px solid #1A1815;
outline-offset: 3px;
box-shadow: 0 0 0 5px #E8C45F;
```

Dark background上はoutlineの明暗を反転し、常に視認できること。

Active：
- transformを元に戻す
- 濃色化

Disabled：
- サンプルLPでは原則使わない
- 必要ならopacityだけで表現せず、cursorとaria-disabledを併用

### Secondary
- Transparent
- 1px Border `#1A1815`
- HoverでLight surface

---

## 7.3 Card

**カードは必要な場所だけに使う。**

### Feature Card
用途：Why LA LEGENDA

- Borderなし、またはTop borderのみ
- Shadowなし
- 余白：24〜32px
- Large number / icon + title + short copy

### Price Card
用途：料金

- Dark section上でSurfaceを分ける
- Main planのみ面として強調
- すべてを「おすすめ」表示しない
- 各プランを同サイズのカードで均等に並べる必要はない

### 禁止
- 全セクションで角丸カード
- 全カードにドロップシャドウ
- アイコン付き3枚カードの連続

---

## 7.4 Text Link

- 下線を基本にする
- HoverでGold strong
- 外部リンクは必要に応じアイコン表示
- 色だけでリンクと本文を区別しない

---

## 7.5 FAQ Accordion

- `<button>` + `aria-expanded`
- 項目高さ：最低56px
- 上下Border
- 大きなカード化はしない
- Plus / Minusアイコン
- Open時：200〜260ms
- 内容が重要で最初から見せるべき場合は折りたたまない

---

## 7.6 Access

Accessは単なる住所表示ではなく、**「場所を確認する → 来店条件を理解する → 予約方法を選ぶ」**までを一つの実用ブロックとして設計する。

### 必須情報
- 店名
- 住所
- 星川駅から徒歩約3分
- GYM前 無料駐車場2台
- 営業時間 10:00〜20:00
- 不定休
- Google Maps / Googleビジネスプロフィールへの導線
- Instagram
- Instagram QR（Desktop中心）
- Reservation導線

### Desktop
第一候補は12-column内の **5 / 7 split**。

Left 5col：
- 店名・住所
- Access facts（駅・駐車場・営業時間・定休日）
- `Google Mapsで見る →`
- Instagram / QR

Right 7col：
- Map embedまたは地図画像
- 必要に応じ外観写真

住所はコピー可能な通常テキストとして残し、地図画像・QRだけに情報を閉じ込めない。

### Google情報
- 評価値・口コミ数・レビュー本文は、正式確認できた場合のみ使用
- 未確認の数値をデザイン上のダミーとして置かない
- Google Maps / Googleビジネスプロフィールへの外部リンクを優先

### Instagram QR
- QRは正式Instagram URL確定後に生成
- Desktopでは `QR + Instagramを開く` を併設
- QRサイズは読み取り可能な実寸を確保し、装飾でFinder Patternを侵食しない
- QRだけを唯一の導線にしない
- MobileではQRを主役にせず、直接リンクボタンを優先

---

## 7.7 Reservation / Contact

予約CTAは「外部予約先へ即遷移する1ボタン」ではなく、**Instagram / Hot Pepper Beauty / LINE の3つから利用者が選べる予約ハブ**へ接続する。

### ページ内CTA
推奨配置：
- Header
- Hero
- Menu & Price後
- Access / Reservation
- Final CTA

Header / Hero / Price / Final CTAのPrimary CTAは、原則として`#reservation`へアンカー移動させる。予約方法を1つに固定しない。

### Reservation Hub
3導線：
1. Instagram
2. Hot Pepper Beauty
3. LINE友だち登録

Desktop：
- 3列カードを第一選択にしない
- 1つの予約パネル内に3行の選択肢として整理するか、幅のある3ボタンを均等配置
- 各導線に「用途」が正式情報として確認できない限り、勝手に「相談向け」「即時予約向け」等の役割を付けない

Mobile：
- 3導線を縦積み
- 各ボタン高さ48〜56px
- 画面下固定CTAは原則採用しない
- 採用する場合も`予約方法を見る`の1ボタンだけとし、3ボタンを固定表示しない

### 外部リンク
- 外部サービスであることが分かるラベルまたはアイコンを付けてもよい
- 新規タブを使用する場合は挙動を統一
- 正式URL確定前はダミーURLを本番公開しない
- クリック領域は44px以上

---

## 7.8 Footer

- Dark background
- Logo
- Address
- Instagram
- Reservation links（Instagram / Hot Pepper Beauty / LINE）
- Sample注記（必要な場合）
- Copyright

情報量を増やしすぎない。

---

# 8. セクション別アートディレクション

# 8.1 Header

### 目的
現在地を失わず、予約への最短導線を確保する。

### PC
Hero上では写真やDark backgroundに溶け込む透明Header。Scroll後にIvoryへ切替。

### Mobile
ロゴ＋Menu＋必要に応じ小型CTA。

### 前後変化
Heroを邪魔せず、Scroll後は機能UIとして明確になる。

---

# 8.2 Hero

### 目的
3〜5秒で
「大人世代」「Training × Care」「上質な実店舗」
を感じさせ、ブランドの新しい中心コピーを最優先で認識させる。

### PC Layout
12-column。

- Left 5 columns：Copy
- Right 7 columns：実店舗／トレーニング写真
- Hero height：`min(860px, 92svh)`、最低720px程度
- 左背景：Ink
- 右：Full-height image
- 境界は直線ではなく、画像を左側へ1column程度食い込ませる非対称構図も可

Copy：
- Eyebrow：`PERSONAL TRAINING × BODY CARE`
- H1：**「ただ鍛えるのではない。／身体を、人生ごと整える。」**
- Lead：最大3行
- CTA：Primary `体験・相談を予約する`、Secondary `メニューを見る`
- 星川駅徒歩約3分等の短い実用情報を最下部に配置可

H1は店舗修正指示による採用コピーのため、意味を変える言い換えをしない。Desktop / Mobileで改行位置のみ調整する。

### 写真
第一候補：
実際のトレーニング風景または店内全景。

受付だけをHeroにすると「サロン」寄りになるため、Trainingの存在が分かる写真を優先。

### 背景
Ink + Photo。
Goldは細線・Eyebrowのみ。

### Mobile
- 1カラム
- 最初にCopy、次にPhoto
- H1は2〜3行。**文言は変更せず、自然な改行のみ調整**
- H1を写真上へ重ねない案を第一候補
- Hero image：`aspect-ratio: 4 / 5`
- Primary CTAはFull width、SecondaryはText linkでもよい
- Primary CTAは`#reservation`へ接続
- Copyと画像の順序は維持しつつ、高さを100vh固定しない

### 前後変化
Dark Hero → Ivory Problemで大きく呼吸を作る。

---

# 8.3 Problem / Empathy

### 目的
ユーザーに「自分のことだ」と感じてもらう。

### PC Layout
写真なしまたは小さなDetail photoのみ。

中央カード3枚にはしない。

構成：
- 左3col：小さなEyebrow / Section number
- 右7〜8col：大きな問いかけコピー
- その下に3〜5個の短い悩みを縦に配置

例：
「運動した方がいい。でも、今の自分に何が合うのか分からない。」

### 背景
Ivory。

### 主役
Typographyと余白。

### Mobile
見出し→悩みリスト。
罫線で区切る。

### 前後変化
Heroの写真密度から一気に情報量を落とす。

---

# 8.4 Concept — TRAINING × CARE

### 目的
LA LEGENDAの違いを一目で伝える。

### PC Layout
Dark full-width section。

左右に異なる写真：
- Left：Training
- Right：Care

中央または写真間に大きな「×」ではなく、細いGold lineと
`TRAIN` / `CARE`
を対置。

下部にConcept copy。

構図例：
- Training image：6col、縦長
- Care image：4col、少し下げる
- Copy：4〜5colを画像に跨るよう配置

### 背景
Charcoal / Ink。

### 主役
2種類の実写真の対比。

### Mobile
- Training photo
- `TRAIN`
- Concept copy
- Care photo
- `CARE`
の順で流す。

PCの左右対比を無理に縮小しない。

### 前後変化
Problemの無写真・Light → 写真主体・Dark。

---

# 8.5 Why LA LEGENDA

### 目的
後続の詳細セクションを読むための**4つの予告**を短く提示し、ページ全体の理解を助ける。

ここで詳しく説明しすぎない。  
Training / Care / InBody / Spaceはこの後に独立セクションが続くため、本文の重複を避ける。

### PC Layout

4枚の均一カードではなくEditorial index。

固定表示：

`01 PERSONAL`  
一人ひとりの目的や状態に向き合う。

`02 TRAINING + CARE`  
トレーニングとマッサージ／ウェルネスケアを同じ場所で。

`03 KNOW YOUR BODY`  
InBody測定器などを通して、まず今の状態を知る。

`04 COMFORTABLE SPACE`  
快適な空間で自分の心と体を整える。

### Copy量

- 見出し：1〜4語程度
- 本文：**各30〜50文字程度を上限**
- 詳細説明・料金・機能はここで入れない
- `COMFORTABLE SPACE`だけを過剰にサロン的・リラックス特化へ見せない

### Layout

- Feature 01のみやや大きく
- 02〜04を軽く並べるEditorial grid
- Card shadowなし
- BorderまたはNumberで構造化
- 小型写真は最大1枚

### Mobile

縦Index。
各項目はTap不要の静的情報として見せる。
写真は原則1枚以下。
英字見出しが狭幅で不自然に折れないよう、`TRAINING + CARE` / `COMFORTABLE SPACE`は必要に応じ2行まで許容する。

### 前後変化

Conceptの世界観を、次に読むべき情報へ変換する「目次」の役割とする。

---

# 8.6 Personal Training

### 目的
本格感を見せつつ初心者の不安を下げる。

### PC Layout
大写真 7col + Text 5col。

写真は画面左端までFull bleedにしてよい。
TextはContainer内。

- Eyebrow
- H2
- 3〜5行説明
- 3項目程度の短い特徴
- PriceへのText link

### 背景
IvoryまたはStone。

### 写真
実際のトレーニング。
顔が確認できる場合は人物を主役にする。

### Mobile
写真を最初に配置。
その後H2と説明。
箇条書きはチェックアイコンではなく短いrule list。

### 前後変化
Whyの整理 → 1サービスへの没入。

---

# 8.7 Body Care / Wellness

### 目的
「トレーニングだけではない」を強く印象づけると同時に、ハイパーナイフを既存のケアメニューの一部として自然に認識させる。

### PC Layout
Trainingと左右を反転。

- Text：左 5col
- Care photo：右 6col
- 背景：Warm paper
- 写真はTrainingより余白のあるCrop

下部のカテゴリ表示は、サービスの役割を整理する補助として以下を使用可。

- `RECOVER`：スポーツマッサージ等
- `RELAX`：アロマ／エサレン等
- `DETOX`：ハイパーナイフ

`DETOX`は**視覚上のカテゴリラベル**としてのみ使用し、「解毒」「老廃物排出」「治療」「疾病改善」等の医学的効能を説明文へ接続しない。

### ハイパーナイフの見せ方
- `DETOX`と`ハイパーナイフ`をセットで認識できるようにする
- 他のCareメニューより極端に大きくしない
- Before / After表現を作らない
- 機器写真を使う場合は実際の提供設備・使用許可済み写真のみ
- 料金詳細はMenu & Priceへ集約し、ここでは役割・存在を伝える

### 装飾
背景に大きな英字を薄く置かない。
Gold hairlineのみ。

### Mobile
Text → Photo → 代表カテゴリ3件。
`RECOVER / RELAX / DETOX`は横3列を無理に維持せず、2列＋1列または縦listへ変更可。

### 前後変化
Trainingの硬質さから、柔らかい光と余白へ。

---

# 8.8 InBody / Counseling

### 目的
「いきなり運動する」のではなく、**自分の状態を知り、自分に合う始め方を一緒に考えられる**という理性的な安心感を作る。

### PC Layout
Light、精密、情報的。

- 左4col：InBody機器写真
- 中央4col：大きな短文
- 右4col：確認済み情報

中心コピー方向：

**数字にこだわるためでなく、
自分に合う始め方を一緒に考える入口として。**

表示してよい情報：
- InBodyによる体成分測定が可能
- 店舗修正指示：**会員の方はいつでも測定可能**

TBC：
- 非会員の利用可否
- 要予約条件
- 料金条件

TBC項目は、デザイン上の空欄を埋めるために推測しない。正式確認前は表示自体を省略する。

### Visual
GoldではなくInk / Stoneで整える。
数値カードのような架空データを作らない。
「体脂肪率○%」等のサンプル数値を演出目的で置かない。

### Mobile
写真→中心コピー→確認済み情報。
表形式より短いdefinition list。
「会員の方はいつでも測定可能」は1行〜2行の補助情報として明瞭に表示する。

### 前後変化
感覚的なCare → 客観的・整理された情報へ。

---

# 8.9 Space

### 目的
「ここへ行ってみたい」を作る。

### PC Layout
写真だけで呼吸を変える没入セクション。

Carouselは第一選択にしない。

推奨：
CSS Grid gallery
- 受付：大 7col
- トレーニング全景：5col
- Detail 2枚：下段

1枚をFull bleed backgroundにし、次に2枚Gridでもよい。

### Background
Darkまたは写真自体。

### Copy
最小限。
H2 + 1〜2行。

### Mobile
縦に3枚まで。
情報価値の低い写真は削る。
Carouselに閉じ込めない。

### 前後変化
InBodyの情報密度 → 写真の没入感。

---

# 8.10 Guest / Shooting

### 目的
Spaceセクションで形成した「実際に行ってみたい」という印象に対し、**LA LEGENDAの設備・空間がYouTube等の撮影にも利用されていること**を補助的な信頼材料として加える。

特定人物の知名度・推薦・権威性を主役にしない。

### 情報上の前提
表示する事実は、店舗が確認できる範囲の「YouTube等の撮影利用実績」までとする。

人物名・フォロワー数・登録者数・推薦表現は使用しない。

### PC Layout
`Space` から自然につながる小〜中規模のEditorial Feature。

- Section height：480〜620px程度を上限
- 左 5〜6col：使用許可を確認できた撮影時写真、または店舗・設備写真
- 右 5〜6col：Eyebrow / H2 / Short copy
- Full-width Hero型にはしない
- 人物が写る場合でも画面全面にしない

Text：

`GUEST / SHOOTING`

**YouTube撮影
LA LEGENDAで**

**本格的なトレーニング設備を備えた空間は、YouTube等の撮影の場としても利用されています。**

### Background
第一候補：`#F5F1E8` または `#FBF9F4`

SpaceがDarkの場合、Guest / ShootingをLightにすることで  
**Space（没入）→ Shooting（信頼補強）→ Price（Dark）**  
のリズムを作る。

### 写真
優先順位：
1. 店舗から提供され、Web掲載許可を確認できた撮影時写真
2. 使用許可済みの店舗・設備写真
3. 使用可能素材がない場合は空間写真＋テキストのみ

第三者Instagram / YouTube等の画像・動画・サムネイルをスクリーンショット転載しない。
人物が写る場合はWeb掲載権限を確認する。

### Visual Hierarchy
主役：
1. LA LEGENDAの空間・設備
2. 撮影に利用されている事実
3. 必要な場合のみ外部動画リンク

人物名を情報階層に含めない。

### Decorative
- Gold hairline 1本程度
- Legend Arc / Ringは原則ここでは使用しない
- バッジ、王冠、スター、認証マーク風UIは禁止
- YouTube公式ロゴに見える装飾を無断で自作しない

### CTA
予約CTAは置かない。

店舗指定の公式動画・投稿へのリンクを置く場合のみ、  
`撮影動画を見る →`  
程度のText Linkとする。

### Mobile
1カラム。

順序：
1. 写真
2. `GUEST / SHOOTING`
3. `YouTube撮影 / LA LEGENDAで`
4. 2〜3行本文
5. 必要な場合のみ外部Text Link

- Section上下余白：64〜72px
- 写真：4:5または元画像に適した比率
- 文字は人物写真に重ねない
- H2は28〜32px程度
- 1画面〜1.5画面程度に収める

### 前後セクションとの変化
`Space` の写真没入から、一度Light背景で短く情報を整理し、次のDark `Menu & Price`へつなぐ。

### NG
- 特定人物名を主役にする
- 「推薦」「愛用」「常連」「御用達」等の表現
- フォロワー数・登録者数を信頼バッジとして強調
- 権利未確認のInstagram / YouTube画像・動画・サムネイル転載
- 人物写真をHero級に使う
- 撮影実績をLA LEGENDAの中心価値として扱う

---

# 8.11 Menu & Price

### 目的
料金不安を減らし、「Personal Training」と「Care / Wellness」の選択肢を理解させる。メニュー追加後も**長い料金表に見せない**ことを重視する。

### PC Layout
Dark section。

上段：
- 左 5〜6col：Executive Training
- 右 6〜7col：Wellness / Care summary

下段：
- Wellness詳細を2グループに分けて整理

Executive Trainingを主役にする。

Training pricing：
- 1回70分 ¥14,000
- 月2回 ¥26,000
- 月4回 ¥48,000
- 月8回 ¥88,000

表示方法：
表または縦のPrice list。
4枚の均一カードにしない。
月4回等を勝手に「人気No.1」にしない。

### Wellness / Care grouping
情報量増加に対応するため、**表示上の整理**として次の2グループに分ける。

`CARE & WELLNESS`
- スポーツマッサージ 30分 ¥4,620
- アロマリラックス 70分 ¥14,000
- スポーツアロマ 70分 ¥14,000
- エサレンBODYワーク 70分 ¥16,000

`HYPER KNIFE`
- お顔 70分 ¥11,000
- お腹＆トレ 70分 ¥19,000
- お体＆トレ 100分 ¥24,000

グループ名は**UI上の整理ラベル**であり、店舗の正式商品体系を勝手に定義するものではない。

ハイパーナイフには、料金リストの近くへ小さく  
**「サブスクコースあり」**  
と表示してよい。

サブスクの料金・回数・対象メニュー・契約条件はTBCのため表示しない。

### Layout rules
- 7メニューを7枚のカードにしない
- 料金名と価格の間をrule / gridで整理する
- 1行の高さを詰めすぎず、44px程度以上の読み取り余白を確保
- `HYPER KNIFE`だけを巨大な広告ブロックにしない
- 金額の桁位置を揃え、価格比較がしやすい構造にする
- 税込／税別が未確認の場合、こちらで補完表示しない

### Typography
価格数字は大きめ。
通貨・回数はBody font。
Goldは見出し・rule程度。
カテゴリ名はEyebrow相当でよい。

### CTA
Section下部にPrimary CTA `予約方法を見る` または `体験・相談を予約する`。
`#reservation`へ接続する。

### Mobile
Training → Care & Wellness → Hyper Knifeの順。

- 横スクロール表は禁止
- 価格は2列definition list
- 7メニューをカード化せず、罫線付きlistで圧縮
- `サブスクコースあり`はHyper Knifeグループ直下に補足
- 各グループ間：32〜40px
- 1グループ内の行間：12〜16px

ページ全体が縦長になりすぎる場合でも、料金をAccordionへ隠すことは第一選択にしない。主要料金は初見で見える状態を優先する。

### 前後変化
ShootingのLight・短い情報 → 整理されたDark情報。

---

# 8.12 First Visit

### 目的
利用開始までの心理的負担を下げる。

### PC Layout
横一列の4〜5ステップではなく、
左に大きなStep number、
右に説明を縦に積むEditorial timeline。

例：
01 予約・相談  
02 カウンセリング  
03 身体・目的の確認  
04 体験  
05 今後の利用を相談

※正確な運用未確認部分は断定しない。

### Background
Ivory。

### Mobile
縦timeline。
アニメーションは不要または控えめ。

### 前後変化
PriceのDark・数字密度 → Light・安心。

---

# 8.13 Staff / Expertise

### 目的
人の存在を感じさせる。

### 現時点の制約
スタッフ人数・氏名・資格等は正式確認前。
よって架空プロフィールを作らない。

### サンプル方針
使用可能なスタッフ写真がある場合：
- 1〜2枚を大きく
- 「トレーニングと各種ケアに対応するスタッフ」とだけ表現

確認できる情報が不足する場合：
**セクション自体を省略可。**

空欄カードを作ってまで配置しない。

### Mobile
人の写真1枚＋短文。

---

# 8.14 FAQ

### 目的
予約直前の不安解消。

### Layout
最大幅800px程度。
中央寄せの見出し、FAQ自体は左揃え。

- 1px rules
- No card shadow
- アイコン右端
- open contentはBody 16px

### Content
一次情報で回答を確認できた項目だけ実装。
回答不明の項目を推測しない。

### Mobile
同じ構造。
Tap target 56px以上。

### 前後変化
人・写真要素から、静かな機能UIへ。

---

# 8.15 Access

### 目的
所在地・営業情報・来店手段・予約手段を1か所で整理し、**「場所が分かる」だけでなく「そのまま予約できる」**状態へつなげる。

### PC Layout
Access本体は **5 / 7 split** を第一候補とする。

Left：
- LA LEGENDA
- 神奈川県横浜市保土ケ谷区星川1-25-10 Aletta星川1階
- 星川駅から徒歩約3分
- GYM前 無料駐車場2台
- 営業時間 10:00〜20:00
- 不定休
- `Google Mapsで見る →`

Right：
- Map embedまたは地図画像
- 必要に応じ外観写真

Access本体の直下、または同一セクション後半に**Reservation Hub**を置く。

### Instagram / Google
補助情報ブロック：
- Googleビジネスプロフィールへのリンク
- Instagramへのリンク
- Instagram QR（Desktop）

Googleの評価値・口コミ数は正式確認できる場合のみ表示する。

Instagram QRはカード化しすぎず、`Instagram` ラベル＋QR＋直接リンクの小さな補助ブロックとする。

### Reservation Hub
見出し例：
**ご予約・ご相談**

3導線：
1. Instagram
2. Hot Pepper Beauty
3. LINE友だち登録

PCでは一つのSurface内に3つの明確な選択肢として配置する。
3枚の大きなカードに分離してセクションを肥大化させない。

### Background
Stone。
Reservation HubはPaperまたはInkでSurfaceを切り替えてもよい。

### CTA
Access本体：`Google Mapsで見る`
Reservation Hub：3つの外部予約リンク

### Mobile
順序：
1. 店舗情報
2. Map
3. `Google Mapsで見る`
4. Reservation Hub
5. Instagram等の補助導線

- Map高さ240〜300px
- 予約3導線は縦積み
- Instagram QRは原則非表示または補助扱い。**直接リンクを優先**
- 住所・営業時間等をQRや画像内だけに入れない
- 外部リンクは44px以上のTap target

### 情報量制御
Accessが長くなりすぎる場合でも、住所・駅・駐車場・営業時間・予約導線は削らない。
Google補助情報やQRの視覚強度を下げて調整する。

---

# 8.16 Final CTA

### 目的
ページ全体を一つの行動へ収束し、予約方法の選択へ進ませる。

### PC
Dark full-width。
大きな明朝コピー。
Gold line。
CTA 1つを強く。

コピー方向：
**「これからの身体のために、まずは今を知るところから。」**

Primary CTA：
**「体験・相談を予約する」** または **「予約方法を見る」**

CTAは外部サービスへ直接飛ばさず、原則`#reservation`の3導線へ接続する。

背景に写真を入れる場合は10〜20%程度の非常に薄い存在感。
基本は文字と余白を主役にする。

### Mobile
H2 30〜34px。
CTA full width。
Secondaryに特定サービスだけを優先して置かず、予約方法はReservation Hubで選択させる。

### 前後変化
実用的なAccess / Reservation → 感情的な収束。

---

# 8.17 Footer

### Layout
Dark。
Final CTAより一段トーンを落とす。

Desktop：
- Logo
- Address
- Navigation
- Instagram / Reservation

Mobile：
縦配置。

装飾はGold hairlineのみ。

---

# 9. モーション

## 9.1 基本原則

Motionは「高級感の演出」ではなく、
視線誘導と状態理解の補助として使用する。

## 9.2 Scroll Reveal

対象：
- Section heading
- 主要写真
- Feature item

仕様：
- opacity `0 → 1`
- translateY `16px → 0`
- duration `500–650ms`
- easing `cubic-bezier(.22,1,.36,1)`
- stagger `60–90ms`

禁止：
- 40px以上の大移動
- 連続する派手なscale
- スクロール速度に依存するparallax

## 9.3 Button Hover

- 150〜180ms
- Arrowのみ2〜3px移動
- Background transition
- Scaleは原則使用しない

## 9.4 Header

Scroll 24〜48px程度で
transparent → solid / blurred surface。

急な色反転を避ける。

## 9.5 Mobile Menu

- 220〜280ms
- opacity + translateY
- focus trap
- Escで閉じる
- 閉じた後、元のMenu buttonにfocusを戻す

## 9.6 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

必要な状態変化自体は消さない。

---

# 10. レスポンシブ方針

## 10.1 基本思想

MobileはDesktopを縮小しない。

Mobileユーザーは、
- Instagramから来る可能性が高い
- 片手操作
- 写真を見る
- 料金を見る
- 予約する
という行動を短時間で行う前提で設計する。

## 10.2 Mobileで変更するもの

### Hero
- Split layout → Copy + image stack
- CTAを1つ強調
- 写真上の文字を減らす

### Concept
- 左右比較 → Training / Careを縦に交互表示

### Why
- Editorial grid → 縦list

### Training / Care
- 横並び → Photo + text
- Sectionごとに写真順序を変える

### Space
- 4枚Grid → 重要な3枚だけ縦配置

### Guest / Shooting
- 2column → Photo + short text
- 特定人物を主役にしない
- 人物写真を背景全面にしない
- `YouTube撮影 / LA LEGENDAで`を2行程度で明確化
- 外部リンクは店舗指定URLがある場合のみText Link

### Price
- 2column → Training → Care & Wellness → Hyper Knife
- 7メニューをカード化しない
- Tableを横スクロールさせない

### First Visit
- Horizontal → Vertical timeline

### Access
- 店舗情報 → Map → Reservation Hub
- 予約3導線は縦積み
- Instagram QRより直接リンクを優先

## 10.3 Mobile Typography

- 最小本文16px
- Captionのみ13〜14px
- 行間はPCより詰めすぎない
- H1の固定改行はMobile用に再設定

## 10.4 Touch

- Button / Menu：44px以上
- FAQ：56px以上
- Linkが近接する場合8px以上の間隔を確保
- Hoverでしか得られない情報を作らない

---

# 11. アクセシビリティ・実装ルール

## 11.1 HTML Structure

推奨：

```html
<header>
<nav>
<main>
  <section aria-labelledby="...">
  ...
</main>
<footer>
```

- H1は原則1つ
- H2で主要セクション
- H3はセクション内項目
- 見た目のサイズで見出しレベルを決めない

## 11.2 Contrast

- 本文：4.5:1以上
- 大きい文字でも原則4.5:1を目標
- Gold on IvoryはStrong goldのみ本文使用
- 写真上文字はoverlayを必須検証

## 11.3 Focus

すべてのinteractive elementに
`:focus-visible`
を定義する。

focus ringを`outline: none`だけで消さない。

## 11.4 Keyboard

- Header navigation
- Mobile menu
- FAQ
- External links
- CTA
をTab / Shift+Tab / Enter / Spaceで操作可能にする。

## 11.5 Alt

Decorative：
```html
alt=""
```

Meaningful：
- 「トレーニング中の利用者」など内容を簡潔に説明
- 「画像」など曖昧なaltは禁止
- 周囲の本文と同じ説明を重複しすぎない

## 11.6 FAQ

`button`に
- `aria-expanded`
- `aria-controls`

Panelに対応するID。

## 11.7 Menu

- `aria-expanded`
- `aria-controls`
- focus management
- Esc close

## 11.8 Links

「こちら」「詳しくはこちら」だけを乱用せず、
リンク単体でも目的が分かる文言にする。

## 11.9 QR / External Reservation

- QRコードを唯一のナビゲーション手段にしない
- QRと同じ遷移先の通常リンクを必ず併設する
- MobileではQRより直接リンクを優先する
- 外部予約先のリンク文言はサービス名を含め、リンク単体でも目的が分かるようにする
- アイコンだけの予約導線にしない
- `target="_blank"`を使用する場合は`rel="noopener noreferrer"`を付与する

## 11.10 Horizontal Overflow

以下をQA：
- `100vw` + scrollbar
- 大きい英字
- absolute decoration
- Price
- Gallery
- Mobile nav

`overflow-x: hidden`で問題を隠す前に原因を修正する。

## 11.11 Anchor Navigation / Sticky Header

Sticky Headerがページ内リンクの到達位置を隠さないよう、主要Sectionへ`scroll-margin-top`を設定する。

```css
section[id] {
  scroll-margin-top: 96px;
}

@media (max-width: 767px) {
  section[id] {
    scroll-margin-top: 80px;
  }
}
```

Headerの最終高さを変更した場合は数値も更新する。

アンカー移動後、見出しが画面上端に密着しないことをQAする。

## 11.12 Zoom / Text Resize

200%程度の文字拡大でも、
重要情報・CTAが欠落しない構造を目指す。

## 11.13 Carousel

重要コンテンツをCarousel内だけに置かない。

Space写真はGridを第一選択とする。
自動再生Carouselは採用しない。

## 11.14 Static Export / GitHub Pages Implementation

- Asset pathは`basePath` / `assetPrefix`の有無で壊れない構造にする
- 画像URLをコード内に無秩序に直書きせず、Asset mapまたはComponent propsに集約する
- Hero画像のみ優先ロード
- Below-the-fold画像はLazy Load
- 使用していないDesktop / Mobile画像を同時に重複ロードしない
- `srcset` / `<picture>`等でViewportに適したAssetを選択できる構造を推奨
- 外部SNS CDNの可用性に依存しない
- Image・Font・JSを含む初期表示重量をQA対象にする

サンプル公開環境でNext.jsのサーバー機能を使用しない設計を前提とする。

---

# 12. 実装用デザイントークン

```css
:root {
  --color-ink: #1A1815;
  --color-charcoal: #27241F;
  --color-gold: #B7955E;
  --color-gold-light: #D3B77D;
  --color-gold-strong: #806030;
  --color-ivory: #F5F1E8;
  --color-paper: #FBF9F4;
  --color-stone: #E5DED2;
  --color-text: #1A1815;
  --color-text-secondary: #5A534A;
  --color-border: #D7CFC2;
  --color-white: #FFFFFF;
  --color-focus: #E8C45F;

  --font-display: "Shippori Mincho", "Yu Mincho", serif;
  --font-body: "Zen Kaku Gothic New", "Hiragino Kaku Gothic ProN", "Yu Gothic", system-ui, sans-serif;

  --container: 1240px;
  --text-max: 640px;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 80px;
  --space-10: 96px;
  --space-11: 128px;
  --space-12: 144px;

  --space-section-lg: var(--space-11);
  --space-section-md: var(--space-10);
  --space-section-sm: var(--space-8);

  --radius-xs: 2px;
  --radius-sm: 4px;
  --radius-md: 8px;

  --duration-fast: 160ms;
  --duration-normal: 280ms;
  --duration-reveal: 600ms;

  --ease-standard: cubic-bezier(.2, .8, .2, 1);
  --ease-reveal: cubic-bezier(.22, 1, .36, 1);
}
```

`border-radius`は8pxを上限の目安とし、丸みをブランドの主役にしない。

---

# 13. NGデザイン

## 13.1 行政サイト化

禁止：
- 白背景
- 青系Primary
- 均等な情報カード
- 全見出しが同じ左揃え
- すべての要素が同じContainer内
- アイコン＋テキスト3列の連続
- デジタル庁のコンポーネントの視覚的コピー

デジタル庁から借りるのは品質基準であり、見た目ではない。

---

## 13.2 黒金ラグジュアリーのやりすぎ

禁止：
- 全背景黒
- 全文字Gold
- Gold gradient
- 太いGold border
- キラキラ・粒子・光線
- 高級車広告のような演出
- 過度な英語コピー

LA LEGENDAの上質さは、実空間・余白・写真・書体で出す。

---

## 13.3 筋トレ特化ジム化

禁止：
- 筋肉のアップばかり
- 赤・蛍光色
- 極端なBefore / After
- 強い煽りコピー
- 「限界」「追い込む」「爆痩せ」等
- 全編Hard fitness visual

---

## 13.4 エステ化

禁止：
- 女性モデルだけ
- Pink / Beigeだけ
- Beauty salon的な曲線装飾
- Careだけを主役にする
- 「若返り」等の表現

Trainingの本格性を残す。

---

## 13.5 無個性なSaaS / テンプレLP化

禁止：
- Hero中央揃え＋CTA＋3カード
- すべて角丸16〜24px
- 全セクション同じ背景
- グラデーションBlob
- 汎用3D icon
- すべてをカードに入れる
- むやみなGlassmorphism

---

## 13.6 写真のAI感

禁止：
- 実店舗と異なるAI生成内装を主役にする
- 実在しない利用者Before / After
- 人物の顔・体型を変更
- 生成AI特有の過剰な肌補正
- 写真間で店舗の色が大きく変わる

## 13.7 Shooting / 外部実績表現の過剰化

禁止：
- 特定人物の知名度をHeroやCTAの中心にする
- 来店・撮影事実を推薦・愛用へ変換する
- フォロワー数・登録者数を権威付けへ利用する
- 権利未確認のSNS画像・動画・サムネイルを転載する
- 「認めた」「御用達」「トップ選手も通う」等の未確認表現
- ShootingセクションをPriceやTrainingより大きくする
- YouTube風の赤・再生ボタン・派手なサムネイル表現をブランドの主役にする

Shootingはあくまで**LA LEGENDAの空間・設備が撮影にも利用されていることを示す補助要素**として扱う。

---

# 14. リファレンス画像作成ルール

次工程のリファレンス画像は、ページ全体を1枚だけ作るより、**重要セクションごとにDesktop / Mobileを作成**する。

## 優先作成

1. Hero
2. Problem + Concept
3. Why LA LEGENDA
4. Training
5. Care / Hyper Knife
6. InBody
7. Space
8. Guest / Shooting
9. Menu & Price
10. Access / Reservation Hub
11. Final CTA

必要に応じ：
12. First Visit / FAQ

## Desktop Reference
- 1440px幅想定
- 実装可能なUI
- 写真素材の比率を現実的にする
- 実際のテキスト量に近づける

## Mobile Reference
- 390px幅想定
- Desktop画像を縦に縮めるだけにしない
- 改行・写真Crop・CTA順序をMobile専用に設計

## Reference禁止事項
- 実装不能な複雑な文字マスク
- WebGL前提の表現
- 判読不能な細文字
- 過度な写真合成
- 存在しない設備
- 架空の口コミ・数値
- 未確認の資格・実績

---

# 15. 要件定義書との整合性確認

## 整合している点

- 前提文書は`LA LEGENDA サンプルLP 要件定義書 v1.2`
- コア：大人世代 × Personal Training × Body Care
- Hero採用コピー：**ただ鍛えるのではない。身体を、人生ごと整える。**
- Why：`PERSONAL / TRAINING + CARE / KNOW YOUR BODY / COMFORTABLE SPACE`
- Body Care：`DETOX / ハイパーナイフ`を追加
- InBody：「会員の方はいつでも測定可能」までを確認済み情報として扱う
- Shooting：特定人物ではなくYouTube等の撮影利用実績を補助的に扱う
- Menu & Price：ハイパーナイフ3メニューと「サブスクコースあり」を反映
- Access：住所詳細、駐車場2台、営業時間10:00〜20:00、不定休を反映
- Reservation：Instagram / Hot Pepper Beauty / LINEの3導線
- 実店舗写真を中心に使用
- noindex / nofollow前提
- Next.js / React / Static Export前提
- 過度な効果断定をしない
- Staff / FAQ等の未確認情報を推測しない

## 未確定のためデザイン側で固定しないもの

- InBodyの非会員利用可否
- InBodyの要予約条件
- InBodyの料金条件
- ハイパーナイフのサブスク料金
- ハイパーナイフのサブスク利用回数・対象メニュー・契約条件
- Googleビジネスプロフィールの正式URL・表示可能項目
- Instagramの正式予約URL／QR生成対象URL
- Hot Pepper Beautyの正式URL
- LINE友だち登録の正式URL
- 別送予定の写真素材
- 正式な体験料金・体験時間
- 支払い方法
- スタッフ人数・氏名・資格・経歴
- キャンセルポリシー
- ペア割引の最新条件

これらは「見た目の枠」を作ることはできるが、内容を推測して埋めない。

## 矛盾について

現時点で、要件定義書 v1.2 と本デザイン定義書 v1.3 の間に重大な矛盾はない。

ただし、外部URL・QR・サブスク詳細・InBody非会員条件はTBCのため、実装時に仮の事実を作らない。Staff / FAQは情報確認状況に応じて**セクション省略可能**とする。

---

# 16. このLPで最も重要なデザイン上の判断

## 1. 「黒×金」ではなく「Dark × Warm Neutral × 実写真」で上質さを作る

ブランドの黒・Goldを尊重しつつ、Ivory・Wood・Grayを十分に使う。  
これにより高級感と入りやすさを両立する。

## 2. TrainingとCareを異なる視覚言語で見せ、Conceptで統合する

Trainingは構造・強さ。  
Careは余白・静けさ。  
この対比こそが「普通のパーソナルジムではない」ことを視覚的に伝える中心設計となる。

## 3. 実店舗写真を装飾ではなく“証拠”として使う

受付、機器、トレーニング、ケアを大きく見せる。  
AI画像や抽象装飾より「実際にここで受けられる体験」を優先する。

## 4. 同じカードレイアウトを繰り返さず、セクションの役割ごとに密度を変える

写真 → 余白 → Dark concept → 情報整理 → 写真 → Price → 安心 → CTA  
というリズムでページを設計する。

## 5. 大人向けブランドだからこそ、読みやすさと操作性を削らない

小さな文字・薄いGold・Hover依存・複雑な動きは使わない。  
アクセシビリティはブランド価値の一部として扱う。

加えて、ロゴの円形構造を起点とした**Legend Arc / Ring**を限定的に使い、汎用的な高級ウェルネスLPとの差を作る。ただし、ブランド固有性はあくまで実店舗写真・Training × Careの対比・余白が主役で、モチーフは署名程度に留める。

## 6. 予約手段が増えても、CTAの強度を乱立させない

Instagram / Hot Pepper Beauty / LINEは、どれか1つを勝手に主役にせず、ページ内の主要CTAはReservation Hubへ集約する。  
Accessでは地図・店舗情報・予約手段を一続きに整理し、「来店できる」から「予約できる」へ自然につなげる。

---

# 17. 参照した設計基準・実装上の前提

本デザイン定義書のアクセシビリティ・操作性・情報設計上の基準は、デジタル庁が公開する「デジタル庁デザインシステムβ版」の考え方を参照している。

参照対象：
- デザインシステムの考え方
- カラー／コントラスト
- タイポグラフィ／文字拡大
- 見出しによる構造化
- UIコンポーネント
- アコーディオン／ディスクロージャー
- カルーセルのアクセシビリティ上の留意点

公式：
- https://www.digital.go.jp/policies/servicedesign/designsystem
- https://design.digital.go.jp/dads/
- https://design.digital.go.jp/dads/foundations/color/accessibility/
- https://design.digital.go.jp/dads/foundations/typography/accessibility/
- https://design.digital.go.jp/dads/components/heading/usage/
- https://design.digital.go.jp/dads/components/carousel/accessibility/

視覚的なブランド表現はこれらを模倣せず、LA LEGENDAの公式Instagram上のブランド情報・実店舗写真・ロゴ・サービス内容・要件定義書を基に独自に定義している。
