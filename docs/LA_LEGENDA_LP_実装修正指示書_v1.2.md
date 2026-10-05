# LA LEGENDA LP 実装修正指示書 v1.2

- 対象リポジトリ：`misemiru-web/la-legenda-sample-lp`
- 対象ブランチ：`main`
- 現行公開URL：`https://misemiru-web.github.io/la-legenda-sample-lp/`
- 作成日：2026-10-05
- 目的：店舗修正指示を、要件定義書 v1.2 / デザイン定義書 v1.3 に沿って現行コードへ反映する
- 本書の役割：Codex / 実装担当へ渡す「今回の変更差分」に限定した実装指示書

---

## 0. 正本・優先順位

実装判断は以下の順で行う。

1. `LA_LEGENDA_サンプルLP_要件定義書_v1.2.md`
2. `LA_LEGENDA_サンプルLP_デザイン定義書_v1.3.md`
3. `LA_LEGENDA_素材・リンク管理表_v1.3.md`
4. 本書
5. 現行実装

未確認情報は推測して埋めない。

---

## 1. 現行リポジトリ確認結果

### 技術構成

- Next.js `16.3.5`
- React `19.2.8`
- TypeScript
- App Router
- CSS Modules
- `output: "export"`
- GitHub Pages向け `basePath / assetPrefix` 設定済み
- `main` pushでGitHub Pagesへ自動デプロイ
- `noindex / nofollow` 設定済み

### 主な実装ファイル

- `app/components/LandingSections.tsx`
- `app/page.module.css`
- `app/components/Header.tsx`
- `app/components/Header.module.css`
- `app/layout.tsx`
- `public/images/*`
- `docs/*`

### 現行実装で既に存在する外部URL

- Hot Pepper Beauty：実装済み
- LINE：実装済み

Instagram / Hot Pepper Beauty / LINE / Google Mapsの正式導線URLは受領済み。

### 現行画像で確認できるAccess候補

`public/images/access_exterior_entrance.webp` が既に存在する。
現行Accessでは `space_reception_wellness.webp` を表示しているため、外観写真として実内容が適切ならAccessでの採用候補とする。

### リポジトリ内資料の問題

`docs/asset-map.md` が **Bashiiin! coffee用の内容**になっている。
LA LEGENDA案件の正本として使用してはいけない。
今回の更新時にLA LEGENDA用Asset Mapへ置換する。

また `docs/` 内の要件・デザイン定義は旧版のため、実装完了時に以下へ更新する。

- 要件定義：v1.1 → v1.2
- デザイン定義：v1.2 → v1.3

---

# 2. 実装方針

## 2.1 変更しないもの

- セクションの大枠順序
- Quiet Strength / Dark × Warm Neutral の基本アートディレクション
- `Legend Arc / Ring` の基本ルール
- Scroll Revealの基本仕様
- GitHub Pages / Static Export構成
- Next.js / React / CSS Modules構成
- 既存のアクセシビリティ方針

## 2.2 今回変更するもの

- コピー
- Whyの項目名・説明
- Careカテゴリ
- InBodyの表示情報
- Guest / Shootingの人物依存表現
- Wellness / Hyper Knife料金
- Access店舗情報
- Reservation Hub
- CTA遷移先
- Instagram QR（正式URL受領後）
- Footer住所
- 案件内ドキュメント

---

# 3. ファイル別修正

## 3.1 `app/components/Header.tsx`

### 現状
Header CTAがHot Pepper Beautyへ直接遷移している。

### 修正

- Desktop CTA `体験を予約する` → `href="#reservation"`
- Mobile CTAも `href="#reservation"`
- 表示文言は `体験・相談を予約する` を第一候補とする
- Hot Pepper URL定数をHeaderから削除してよい
- Mobile Menuからアンカー移動した際は従来どおりMenuを閉じる

### 理由
予約方法をInstagram / Hot Pepper Beauty / LINEから選択できる構造へ変更するため。

---

## 3.2 `app/components/LandingSections.tsx`

### A. 外部URL定数

現在の `hotPepperUrl` / `lineUrl` を維持しつつ、外部リンクを冒頭へ集約する。

推奨：

```ts
const externalLinks = {
  instagram: "https://www.instagram.com/ne_ld1999/?hl=ja",
  hotPepper: "https://beauty.hotpepper.jp/kr/slnH000813087/?cstt=1",
  line: "https://line.me/R/ti/p/@240pmolc?ts=06281635&oat_content=url",
  interview: "https://localstyle-yokohama.jp/hodogaya-ku/beauty_list/facilities/10335",
  googleMaps: "https://www.google.com/maps?sca_esv=ec734b9ba2f66c6f&rlz=1C5LDPL_enJP1194JP1202&output=search&q=LA+LEGENDA&source=lnms&fbs=ABfTbFWgnFHONIVUY2_FI1XmLOwBj8exaHm1K20WHOGaMeonhMV3kP2WYeEnGxffUz-KC66Q6yr12oVdM0HlG2G_7TnUGwA0bButCWrzdsg55x1xYALlb86iYKrIOCIwJOo9tkRs5H1Nmc2AE9VFIBZTl4FlxLVUDRBwkrtTvGVmyIJzrgBhsHeEnUiKrsStZVWdY2IZ734kcU1k4QO0yaIKKd2efj8CEZIxar5tSH4f0ipeGIKZ2SU&entry=mc&ved=1t:200715&ictx=111",
};
```

主要外部URLはすべて確定済み。未確認URLを `#` で仮実装しない。
`interview` は参考・任意導線であり、予約導線へ混在させない。

---

### B. HeroSection

#### コピー

現行：

`鍛えるだけじゃない。 / これからも動ける身体へ。`

変更：

`ただ鍛えるのではない。 / 身体を、人生ごと整える。`

Desktop / Mobileで文言自体は変えない。改行だけレスポンシブ専用に調整する。

#### CTA

- Primary：`体験・相談を予約する`
- `href="#reservation"`
- Secondary：`メニューを見る` → `#price`

#### 住所

`神奈川県横浜市保土ケ谷区星川1-25-10 Aletta星川1階`

へ更新。

---

### C. ConceptSection

Mobile画像caption：

- `TRAIN` → `TRAINING`
- `CARE` は維持

Conceptのコア `TRAINING × CARE` は維持。

---

### D. WhySection

固定表示：

1. `PERSONAL`
   - 一人ひとりの目的や状態に向き合う。
2. `TRAINING + CARE`
   - トレーニングとマッサージ／ウェルネスケアを同じ場所で。
3. `KNOW YOUR BODY`
   - InBody測定器などを通して、まず今の状態を知る。
4. `COMFORTABLE SPACE`
   - 快適な空間で自分の心と体を整える。

`TRAIN + CARE` / `REAL SPACE` は残さない。

---

### E. CareSection

現行：

- RECOVER
- RELAX
- RESET / 各種ボディケア

変更：

- RECOVER / スポーツマッサージ
- RELAX / アロマリラックス等
- DETOX / ハイパーナイフ

注意：

`DETOX`はUIカテゴリラベルのみ。
「解毒」「老廃物排出」「治療」等の効果説明を追加しない。

---

### F. InbodySection

#### 中心コピー

`数字を競うためではなく、自分に合う始め方を考える入口として。`

から、要件に合わせて次の方向へ更新。

`数字にこだわるためでなく、自分に合う始め方を一緒に考える入口として。`

#### 表示情報

表示可：

- `MEASUREMENT` / `InBodyによる体成分測定`
- `MEMBER` / `会員の方はいつでも測定可能`

現時点では削除：

- `OPEN / どなたでも測定可能`
- `RESERVATION / 要予約`
- `FEE / 無料`

これらは非会員条件・予約条件・料金が未確認のため。

旧 `InBody公式設置施設一覧の掲載情報に基づきます。` だけで新しい会員条件を裏付けるような見せ方にしない。
必要なら注記を `店舗提供の最新情報を反映しています。` 程度へ更新する。

---

### G. GuestShootingSection

#### 削除

- 芳賀セブンさんの名前
- 特定人物に依存するコピー
- 人物実績に見える注記

#### 表示

Eyebrow：

`GUEST / SHOOTING`

H2：

`YouTube撮影 / LA LEGENDAで`

本文：

`本格的なトレーニング設備を備えた空間は、YouTube等の撮影の場としても利用されています。`

予約CTAは置かない。
正式な動画URLが店舗から指定された場合のみ `撮影動画を見る →` を追加する。

写真は、新素材受領までは既存の店舗・設備写真で仮実装可。
第三者YouTubeサムネイル等をコピーしない。

---

### H. MenuPriceSection

#### Training

現行4プランを維持。

#### Wellness

配列を1つの7項目へ無理に拡張せず、以下の2グループへ分割する。

`CARE & WELLNESS`

- スポーツマッサージ 30分 / ¥4,620
- アロマリラックス 70分 / ¥14,000
- スポーツアロマ 70分 / ¥14,000
- エサレンBODYワーク 70分 / ¥16,000

`HYPER KNIFE`

- お顔 70分 / ¥11,000
- お腹＆トレ 70分 / ¥19,000
- お体＆トレ 100分 / ¥24,000

Hyper Knife group直下：

`サブスクコースあり`

のみ掲載可。
料金・回数・契約条件は追加しない。

#### CTA

現行Hot Pepper直リンクを削除。

`体験・相談を予約する` または `予約方法を見る`
→ `#reservation`

---

### I. AccessSection

Accessを「住所表示＋写真」から、店舗情報＋来店導線＋予約ハブへ拡張する。

#### 店舗情報

- LA LEGENDA
- 神奈川県横浜市保土ケ谷区星川1-25-10 Aletta星川1階
- 星川駅から徒歩約3分
- GYM前 無料駐車場2台
- 営業時間 10:00〜20:00
- 不定休

#### Map / Google

Google Maps URLは受領済み。

- `Google Mapsで見る →`
- 遷移先：`https://www.google.com/maps?sca_esv=ec734b9ba2f66c6f&rlz=1C5LDPL_enJP1194JP1202&output=search&q=LA+LEGENDA&source=lnms&fbs=ABfTbFWgnFHONIVUY2_FI1XmLOwBj8exaHm1K20WHOGaMeonhMV3kP2WYeEnGxffUz-KC66Q6yr12oVdM0HlG2G_7TnUGwA0bButCWrzdsg55x1xYALlb86iYKrIOCIwJOo9tkRs5H1Nmc2AE9VFIBZTl4FlxLVUDRBwkrtTvGVmyIJzrgBhsHeEnUiKrsStZVWdY2IZ734kcU1k4QO0yaIKKd2efj8CEZIxar5tSH4f0ipeGIKZ2SU&entry=mc&ved=1t:200715&ictx=111`
- `target="_blank"` を使用する場合は `rel="noopener noreferrer"` を併記する
- Google評価値・口コミ数は追加しない
- Googleビジネスプロフィール風の独自カードを新設する必要はない

#### 画像

`public/images/access_exterior_entrance.webp` を確認し、実際の外観・入口写真として適切なら現行の受付画像より優先して使用する。

#### Reservation Hub

Access後半に `id="reservation"` を付けたReservation Hubを追加。

見出し：

`ご予約・ご相談`

導線：

1. Instagram
2. Hot Pepper Beauty
3. LINE友だち登録

Instagram / Hot Pepper / LINEはすべて正式URL確定済み。
以下の3導線を実装する。

- Instagram：https://www.instagram.com/ne_ld1999/?hl=ja
- Hot Pepper Beauty：https://beauty.hotpepper.jp/kr/slnH000813087/?cstt=1
- LINE：https://line.me/R/ti/p/@240pmolc?ts=06281635&oat_content=url

PC：1 Surface内で3択。巨大な3カード構成にしない。
Mobile：縦積み、各Tap target 44px以上。

#### Instagram QR

Instagram正式URLが確定したため、静的QR画像を生成してDesktop Access補助ブロックに配置する。
エンコード先は `https://www.instagram.com/ne_ld1999/?hl=ja`。

- QRだけを唯一の導線にしない
- Instagram直接リンクを必ず併設
- Mobileは直接リンク優先、QRは非表示でもよい

---

### J. FinalCtaSection

#### コピー

`これからの身体のために、まずは今を知るところから。`

にDesktop / Mobileとも統一する。

#### 現行の問題

現在はLINEへ直接遷移しており、さらに「正式URLは確認後に接続」と表示している。
新仕様と矛盾するため削除・再設計する。

#### 推奨実装

Final CTAはAccess / Reservation Hubより後に存在するため、`#reservation`へ戻すとページ上方向へジャンプする。
UX上は以下を推奨する。

- Final CTA内に、同じ3予約リンクを**コンパクトに再掲**する
- 見た目は3枚カードにせず、1つのReservation Surface内の選択肢として扱う

厳密にデザイン定義書v1.3の「CTA 1つ」を優先する場合は、`予約方法を見る` → `#reservation`でも可。ただし上方向へのスクロールになるため、前者を推奨する。

---

### K. Footer

住所を以下へ更新。

`神奈川県横浜市保土ケ谷区星川1-25-10 Aletta星川1階`

必要に応じ、FooterへInstagram Text Linkを追加してよい。
インタビュー記事をFooterへ常設する必要はない。

---

# 4. `app/page.module.css`

## 必須調整

### Hero

新H1の文字量に合わせ、Desktop 1440px / Mobile 390px双方で不自然な折返しを起こさない。
固定 `white-space: nowrap` が破綻する場合は、対象span単位で調整する。

### Why

`TRAINING + CARE` / `COMFORTABLE SPACE` が狭幅で不自然に折れないよう調整。
Mobileは必要なら2行まで許容。

### Care

`DETOX`を既存 `careList` へ自然に収める。
横3列固定にはしない。

### InBody

fact項目が4→2件になっても間延びしないよう、Desktop 3-column全体のバランスを確認。

### Shooting

人物名削除後に空白が大きくならないよう、Text blockの高さ・line-heightを調整。

### Price

- Training / Care & Wellness / Hyper Knifeの情報階層を追加
- 7枚カードは禁止
- Mobile横スクロール禁止
- 金額は右揃え／比較しやすい位置に揃える
- グループ間32〜40px程度
- `サブスクコースあり`は小さな補足扱い

### Access / Reservation

新規classを追加してよい。

例：

- `.accessDetails`
- `.accessMetaList`
- `.mapLink`
- `.reservationHub`
- `.reservationLinks`
- `.instagramQr`

PCでは情報量を整理し、Mobileでは店舗情報 → Map/外観 → Reservation Hubの順。

### Final CTA

予約リンクをコンパクトに再掲する場合は、背景写真・コピーより視覚的に強くしすぎない。

---

# 5. `app/layout.tsx`

現行metadataは大きな矛盾なし。

ただしdescriptionを更新する場合は、Heroの新コピーと整合させつつ、未確認情報を追加しない。

`robots: noindex / nofollow` は維持する。

---

# 6. `docs/` 更新

実装と同一PR / 同一作業単位で以下を更新する。

## 更新

- `docs/LA_LEGENDA_サンプルLP_要件定義書_v1.2.md`
- `docs/LA_LEGENDA_サンプルLP_デザイン定義書_v1.3.md`
- `docs/LA_LEGENDA_素材・リンク管理表_v1.3.md`
- `docs/LA_LEGENDA_LP_実装修正指示書_v1.2.md`

## 整理

旧v1.1 / v1.2を残す場合は `docs/archive/` 等へ移し、どれが正本か明確化する。

## `docs/asset-map.md`

Bashiiin! coffee用の内容を削除し、LA LEGENDA用へ全面置換する。

---

# 7. 段階実装

## Phase A — 今すぐ実装可能

- Heroコピー
- Concept `TRAINING`
- Why 4項目
- Care `DETOX`
- InBody確定情報のみへ修正
- Shooting人物名削除
- Hyper Knife単発3料金追加
- サブスクコースあり表記
- 住所 / 営業時間 / 定休日 / 駐車場
- Instagram / Hot Pepper / LINEをReservation Hubへ統合
- Instagram QR生成・Desktop Accessへ配置
- Header / Hero / Price CTAをReservation Hubへ統一
- Footer住所更新
- CSSレスポンシブ調整

## Phase B — 残り素材受領後

- 新規写真差し替え
- 必要ならYouTube撮影実績の公式リンク

Instagram正式URLは確定済みのため、Instagram導線とQRはPhase Aへ繰り上げて実装可。

## Phase C — 条件確認後のみ

- InBody非会員条件
- InBody予約条件
- InBody料金
- Hyper Knifeサブスク詳細

---

# 8. QA

実装後、最低限以下を確認する。

## Code

```bash
npm run lint
npm run build
```

双方成功必須。

## Viewport

- Desktop：1440px
- Small Desktop：1024px前後
- Tablet：768px前後
- Mobile：390px

## 表示

- 横スクロールなし
- Hero改行が自然
- `TRAINING + CARE` / `COMFORTABLE SPACE` が破綻しない
- Priceが縦長になりすぎない
- Access情報が読みやすい
- Reservation Hubが3導線として理解できる
- MobileでQRを主導線にしない
- 外部リンクTap target 44px以上

## 内容

- 芳賀セブンさんの名前がLPから残っていない
- `TRAIN + CARE` が残っていない
- `REAL SPACE` が残っていない
- `RESET / 各種ボディケア` が残っていない
- InBodyの `どなたでも測定可能 / 要予約 / 無料` が残っていない
- 旧住所表記だけの箇所が残っていない
- Final CTAの旧「正式URL確認後」注記が残っていない
- Hyper Knife 3料金が正しい
- サブスク詳細を推測していない
- noindex / nofollow維持

## Links

- Header / Hero / Price CTAの動作
- Hot Pepper Beauty
- LINE
- Instagram
- Google Maps

---

# 9. デプロイ

現行GitHub Actionsは `main` pushで自動デプロイされる。

手順：

1. ローカル / Codex環境でLint・Build
2. 差分確認
3. `main`へ反映
4. GitHub Actions `Deploy to GitHub Pages` 成功確認
5. `https://misemiru-web.github.io/la-legenda-sample-lp/` をDesktop / Mobileで確認
6. 店舗修正Excelと全項目を照合

---

# 10. Definition of Done

以下をすべて満たして完了とする。

- 店舗修正指示が反映されている
- 要件定義 v1.2 と矛盾しない
- デザイン定義 v1.3 と矛盾しない
- 未確認情報を推測していない
- 予約導線が整理されている
- Desktop / Mobileで崩れない
- `npm run lint` 成功
- `npm run build` 成功
- GitHub Pagesデプロイ成功
- 公開URLで最終確認済み
- `docs/asset-map.md` の他案件混入が解消されている

---

# 11. 参考リンクの扱い

## インタビュー記事

URL：`https://localstyle-yokohama.jp/hodogaya-ku/beauty_list/facilities/10335`

用途：

- 店舗・代表者・サービス背景を理解するための参考資料
- 必要に応じ、LPのコピー整合性チェックに使用

ルール：

- Reservation Hubには入れない
- 記事本文を長文転載しない
- 記事由来の新しい事実をLPへ追加する場合は、店舗修正指示または公式情報と照合する
- 「インタビューを見る」等の外部導線を追加する場合は、ページ全体の優先順位を崩さない補助リンクとして扱う

## Google Business Profile

Google検索 / Google Mapsに表示される店舗情報カードのこと。LP実装では管理画面へのアクセスは不要。
Google Maps導線URLは受領済み。Accessの `Google Mapsで見る` から以下へ遷移する。

`https://www.google.com/maps?sca_esv=ec734b9ba2f66c6f&rlz=1C5LDPL_enJP1194JP1202&output=search&q=LA+LEGENDA&source=lnms&fbs=ABfTbFWgnFHONIVUY2_FI1XmLOwBj8exaHm1K20WHOGaMeonhMV3kP2WYeEnGxffUz-KC66Q6yr12oVdM0HlG2G_7TnUGwA0bButCWrzdsg55x1xYALlb86iYKrIOCIwJOo9tkRs5H1Nmc2AE9VFIBZTl4FlxLVUDRBwkrtTvGVmyIJzrgBhsHeEnUiKrsStZVWdY2IZ734kcU1k4QO0yaIKKd2efj8CEZIxar5tSH4f0ipeGIKZ2SU&entry=mc&ved=1t:200715&ictx=111`


# 12. 2026-10-05 追加更新

Google Maps導線URLを受領したため、Accessの外部リンク実装は保留解除。
これで主要外部リンク（Instagram / Hot Pepper Beauty / LINE / Google Maps）はすべて実装可能。
新規写真未受領でも、既存写真を維持した状態でPhase Aのコード修正・QAまで進行可能。
