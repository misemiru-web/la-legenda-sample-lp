# LA LEGENDA Asset / Source Memo v1.2

- Updated: 2026-10-05
- Purpose: 実装・QA前のAsset / Source管理最新版
- Basis:
  - `LA_LEGENDA_サンプルLP_要件定義書_v1.2.md`
  - `LA_LEGENDA_サンプルLP_デザイン定義書_v1.3.md`
  - `LA_LEGENDA_素材・リンク管理表_v1.3.md`
  - `LA_LEGENDA_LP_実装修正指示書_v1.2.md`
  - 現行GitHubリポジトリ `misemiru-web/la-legenda-sample-lp`
  - 店舗から受領した修正指示

---

## 0. この文書の位置づけ

本書は、LA LEGENDAサンプルLPで使用する画像・ブランド素材・外部リンク・第三者情報の**出所、利用状態、実装可否、差し替え条件**を管理するためのメモである。

要件・デザイン・実装指示と素材の扱いが矛盾した場合は、以下の順で判断する。

1. `LA_LEGENDA_サンプルLP_要件定義書_v1.2.md`
2. `LA_LEGENDA_サンプルLP_デザイン定義書_v1.3.md`
3. 本書
4. `LA_LEGENDA_素材・リンク管理表_v1.3.md`
5. `LA_LEGENDA_LP_実装修正指示書_v1.2.md`
6. `references/`
7. `public/images/`

未確認の権利・事実・人物情報は推測して補完しない。

---

## 0.1 v1.2 更新内容

v1.1の権利・出所管理ルールを維持しつつ、2026-10-05時点の最新仕様へ同期した。

主な更新：

- 要件定義 v1.2 / デザイン定義 v1.3 を前提に更新
- Guest / Shootingから特定人物名を外し、YouTube撮影実績として管理
- Instagram / Hot Pepper Beauty / LINE / Google Mapsの正式URLをSourceとして登録
- Local Style Yokohamaのインタビュー記事を参考Sourceとして登録
- `access_exterior_entrance.webp` をAccess候補として明示
- Instagram QRを正式プロフィールURLから実装時生成する方針を追加
- 店舗から別送予定の新規写真を「受領待ち」として管理
- InBodyの公開情報と店舗修正指示に差分があるため、最新店舗指示をLP表示に優先し、未確認条件は掲載しない方針を明記
- `docs/asset-map.md` はLA LEGENDA案件の正本として使用しない

---

# 1. Source Status

## 1.1 画像・素材ステータス

- **A**: LA LEGENDA公式素材で、当該素材のサンプル利用許可が確認できているもの
- **B**: メーカー・サービス提供者等の公式一次情報
- **C**: LA LEGENDA側が第三者プラットフォーム上で発信した情報
- **D**: 第三者本人・第三者SNS・第三者メディア
- **E**: 出所または利用権が未確認
- **G**: サンプルLP用に生成・加工した仮素材。営業サンプルでは使用可能だが、正式サイトでは原則として実写・正式素材への差し替えを検討

### 基本ルール

- 旧v1.1で `E` として管理していた既存実写系素材は、使用許可済み公式Instagram素材と同一であることを確認できるまでは **Eのまま** とする。
- 保土ケ谷区ポータル、Local Style Yokohama、Hot Pepper Beauty、Google Maps、YouTube等の第三者プラットフォーム上に画像が掲載されていても、**掲載されている事実だけではLPへの転載許可とはみなさない**。
- `G` は営業提案用サンプルの仮素材として使用可能。ただし正式制作では店舗提供写真・権利確認済み実写を優先する。
- Reference画像はレイアウト・構図確認用であり、そのままWeb素材として使用しない。

---

# 2. Current Web Asset Map

現行リポジトリ `public/images/` で確認できる主要素材を以下のとおり管理する。

| Web asset | Section | Role | Status | PC/Mobile | Current policy |
|---|---|---|---|---|---|
| `hero_personal_training_desktop.webp` | Hero | 主役 | G | PC | 新規実写受領まではサンプルで継続可 |
| `hero_personal_training_mobile.webp` | Hero | 主役 | G | Mobile | 新規実写受領まではサンプルで継続可 |
| `training_personal_session.webp` | Personal Training / Concept | 主役 | G | PC / 共通 | 新規実写受領まではサンプルで継続可 |
| `training_personal_session_mobile.webp` | Personal Training | 主役 | G | Mobile | 新規実写受領まではサンプルで継続可 |
| `care_bodywork_wide.webp` | Body Care | 主役 | G | PC | 新規実写受領まではサンプルで継続可 |
| `care_bodywork_mobile.webp` | Body Care | 主役 | G | Mobile | 新規実写受領まではサンプルで継続可 |
| `inbody_counseling.webp` | InBody / Counseling | 主役 | G | 共通 | 条件表記は画像ではなくテキスト側で最新化 |
| `first_visit_reception_guidance.webp` | First Visit | 主役 | G | 共通 | 新規実写受領まではサンプルで継続可 |
| `access_exterior_entrance.webp` | Access | 外観・入口候補 | G | 共通 | 実外観との一致を確認して採用。正式版は実写優先 |
| `space_training_floor_main.webp` | Space / Shooting / Final CTA | メイン | E | 共通 | 権利確認済み公式素材との同一性確認まではE |
| `space_reception_wellness.webp` | Space | サブ | E | 共通 | 同上 |
| `space_dumbbell_area.webp` | Space | サブ | E | 共通 | 同上 |
| `space_dumbbell_detail.webp` | Space | Detail | E | Optional | 同上 |
| `care_treatment_detail.webp` | Care / Concept | Detail | E | 共通 | 同上 |
| `care_aromatherapy_oils_detail.webp` | Care | Detail | E | Optional | 同上 |
| `brand/la_legenda_header_logo.png` | Header | Brand | G | 共通 | サンプル用Web素材として使用可。正式版は正式ロゴデータ確認推奨 |
| `brand/la_legenda_footer_logo.png` | Footer | Brand | G | 共通 | 同上 |
| `brand/la_legenda_primary_logo.png` | Brand | Primary logo | G | 共通 | 同上 |
| `brand/la_legenda_favicon.png` | favicon | Brand | G | 共通 | 同上 |

---

# 3. Implementation Placement

## Hero

- PC：`hero_personal_training_desktop.webp`
- Mobile：`hero_personal_training_mobile.webp`
- 新規写真受領前は現行仮素材を使用可
- 新規写真受領後は「実際のトレーニング」「実店舗」の信頼性を優先して差し替え判断する

## Concept

- TRAINING：`training_personal_session.webp`
- CARE：`care_treatment_detail.webp` または `care_bodywork_wide.webp`
- `care_treatment_detail.webp` の利用権が未確認の場合は、G素材への切り替えを優先する

## Personal Training

- PC：`training_personal_session.webp`
- Mobile：`training_personal_session_mobile.webp`

## Body Care / Wellness

- PC：`care_bodywork_wide.webp`
- Mobile：`care_bodywork_mobile.webp`
- Detail：`care_aromatherapy_oils_detail.webp` / `care_treatment_detail.webp` はEのため、権利確認前に新たな主役素材へ格上げしない
- `DETOX / ハイパーナイフ` のカテゴリ追加はテキストUI側で行い、未確認の効果表現を画像・コピーへ付与しない

## InBody / Counseling

- `inbody_counseling.webp`
- 表示する事実は、店舗からの最新修正指示を優先する
- 現時点では「InBodyによる体成分測定」「会員の方はいつでも測定可能」まで
- 非会員条件、予約要否、料金は未確認のため表示しない

## Space

- Main：`space_training_floor_main.webp`
- Sub：`space_reception_wellness.webp`
- Sub：`space_dumbbell_area.webp`
- Detail：`space_dumbbell_detail.webp`（必要な場合のみ）
- これらはE管理のため、正式公開時は権利確認または店舗提供実写への差し替えを行う

## Guest / Shooting

- 特定人物名・人物画像・第三者サムネイルは使用しない
- 新規写真受領までは、LA LEGENDAの店舗・設備写真で構成する
- 表現は「YouTube等の撮影の場として利用された」という店舗側の修正指示の範囲に限定する
- 正式動画URLが店舗から指定された場合のみ、テキストリンクの追加を検討する
- YouTubeサムネイル、スクリーンショット、第三者人物画像は、別途掲載許可を確認しない限り転載しない

## Menu & Price

- 原則として写真を主役にせず、Typography / Rule / List UIで成立させる
- Hyper Knifeの3メニューと「サブスクコースあり」は店舗修正指示に基づくテキスト情報として扱う
- サブスクの料金・回数・期間等は未確認のため追加しない

## First Visit

- `first_visit_reception_guidance.webp`

## Access

- 第一候補：`access_exterior_entrance.webp`
- 現行の `space_reception_wellness.webp` より、入口・来店イメージが伝わる素材を優先する
- `access_exterior_entrance.webp` はGのため、実店舗外観との一致を確認してサンプル利用する
- 新規の実外観・入口写真が届いた場合は、掲載許可確認後に優先差し替え

## Final CTA

- 現行の店舗空間写真を背景に使用可
- 第三者人物・外部媒体画像は使わない

---

# 4. External Source Register

LPの外部リンク・情報確認元を以下のとおり管理する。

| Source ID | Source | URL / Target | Status | Usage |
|---|---|---|---|---|
| SRC-01 | LA LEGENDA Instagram | `https://www.instagram.com/ne_ld1999/?hl=ja` | C / 確定 | 予約導線、公式プロフィール、QR生成元 |
| SRC-02 | Hot Pepper Beauty | `https://beauty.hotpepper.jp/kr/slnH000813087/?cstt=1` | D / 確定 | 予約導線、公開情報照合 |
| SRC-03 | LINE | `https://line.me/R/ti/p/@240pmolc?ts=06281635&oat_content=url` | B相当 / 確定リンク | 予約・相談導線 |
| SRC-04 | Google Maps | 受領済みGoogle Maps検索URL | B相当 / 確定リンク | Access / `Google Mapsで見る` |
| SRC-05 | Local Style Yokohama | `https://localstyle-yokohama.jp/hodogaya-ku/beauty_list/facilities/10335` | D / 参考 | 店舗・代表・サービス理解の補助。本文の無断転載はしない |
| SRC-06 | InBody公式施設情報 | InBody公式掲載情報 | B | 公開情報照合のみ。店舗最新修正と差分あり |
| SRC-07 | YouTube撮影実績 | URL未取得 | 要確認 | 必要な場合のみテキストリンク候補 |

### 外部Sourceの扱い

- 外部URLは最終公開前に到達確認する。
- 第三者サイトの記事・写真・サムネイルを、そのままLPへ転載しない。
- Google Mapsは来店導線としてリンクを使用し、Google評価・口コミ数等は今回の必須要件ではないため表示しない。
- Local Style Yokohamaの記事は参考情報として利用し、必要な場合も要約・再編集する。

---

# 5. Instagram QR

Instagram QRは以下の正式プロフィールURLをエンコードして**実装時に生成**する。

`https://www.instagram.com/ne_ld1999/?hl=ja`

### ルール

- QRを唯一の導線にしない
- Desktop AccessではQR＋テキストリンクを併設する
- MobileはInstagram直接リンクをPrimaryとし、QRは補助扱い
- QR生成後は、実機で読み取り・遷移確認を行う
- QR画像へロゴ等を過剰に重ねて読み取り性を下げない

---

# 6. New Client Photos

店舗から別送予定の写真は、現時点では**受領待ち**とする。

受領後は次の順で管理する。

1. 元画像を別保管し、上書きしない
2. Web掲載許可の範囲を確認
3. 人物が写る場合は人物掲載可否を確認
4. セクション用途を分類
   - Hero
   - Training
   - Care / Hyper Knife
   - InBody
   - Space
   - First Visit
   - Access / Exterior
   - Shooting
5. Desktop / Mobile両方でCrop確認
6. 軽微な補正・リサイズ・圧縮
7. `public/images/` 用のWeb Assetを書き出す
8. 本書のStatusを `A` または適切な状態へ更新

### 受領後の優先差し替え

1. Access外観・入口
2. Hero
3. Care / Hyper Knife
4. Training
5. Space
6. First Visit / InBody / Shooting

---

# 7. Rights / Source Rules

1. 使用許可済み公式Instagramと同一の写真であることが確認できた素材は、E → Aへ変更可能。
2. 店舗から直接提供された写真でも、Web掲載許可の範囲が不明な場合は自動的にAへしない。
3. 第三者地域ポータル、Hot Pepper Beauty、Google、YouTube等から取得した画像は、転載許可が確認できない限りWeb素材としてコピーしない。
4. G画像は営業提案用サンプルでは使用可能。ただし正式契約後は店舗実写への交換を優先する。
5. Guest / Shootingは、特定人物の知名度を利用する設計に戻さない。
6. 外部記事・外部投稿は、リンクまたは事実確認Sourceとして利用し、画像・本文の転載とは分けて扱う。
7. Reference画像はデザイン確認用であり、そのままWeb素材として使用しない。
8. 新規写真のレタッチは、明るさ・色味・ノイズ・シャープネス等の軽微な補正を基本とし、実店舗・人物・施術内容を別物に変えない。
9. 医療的・治療的な効果を画像キャプションやaltで補完しない。

---

# 8. Alt Draft

現行素材のaltは、実際に画像に写っている範囲を超えて断定しない。

- Hero：`LA LEGENDAのトレーニングスペースで受けるパーソナルトレーニング`
- Training：`トレーナーのサポートを受けながら行うパーソナルトレーニング`
- Care：`落ち着いた空間で受けるボディケア`
- InBody：`InBodyで身体の状態を確認する様子`
- First Visit：`LA LEGENDAの受付で案内を受ける来店者`
- Space Main：`LA LEGENDAのトレーニングスペース`
- Reception：`LA LEGENDAの受付とウェルネスエリア`
- Access：`LA LEGENDAの店舗外観・入口`
- Shooting：画像が店舗空間のみの場合 `LA LEGENDAのトレーニング空間`

### Alt注意

- 生成画像には、実在スタッフ本人・実利用者本人と誤認する固有名詞を入れない。
- ハイパーナイフの効果、InBodyの診断的意味など、画像から判断できない情報をaltへ追加しない。
- 装飾画像は必要に応じて空altとする。

---

# 9. Repository Document Handling

現行 `docs/asset-map.md` はLA LEGENDA案件の内容ではなく、Bashiiin! coffee用の内容が残っているため、**LA LEGENDAのSource of Truthとして使用しない**。

今回の整理後は以下を正本とする。

- `LA_LEGENDA_サンプルLP_要件定義書_v1.2.md`
- `LA_LEGENDA_サンプルLP_デザイン定義書_v1.3.md`
- `LA_LEGENDA_Asset_Source_Memo_v1.2.md`
- `LA_LEGENDA_素材・リンク管理表_v1.3.md`
- `LA_LEGENDA_LP_実装修正指示書_v1.2.md`（今回改修中のみ）

旧版および誤案件の `asset-map.md` は、Git履歴で追跡可能なため最新 `docs/` から削除してよい。

---

# 10. Pre-Implementation Checklist

コード修正前：

- [x] 要件定義 v1.2 を作成済み
- [x] デザイン定義 v1.3 を作成済み
- [x] 素材・リンク管理表 v1.3 を作成済み
- [x] 実装修正指示書 v1.2 を作成済み
- [x] Instagram正式URLを確定
- [x] Hot Pepper Beauty URLを確定
- [x] LINE URLを確定
- [x] Google Maps URLを確定
- [x] 特定人物名をGuest / Shootingから削除する方針を確定
- [ ] 新規写真を受領
- [ ] E素材の権利・出所を必要範囲で再確認
- [ ] `access_exterior_entrance.webp` と実外観の一致を確認

新規写真未受領でも、コピー・料金・予約導線・Access情報・CTA・レスポンシブ修正は先行実装してよい。

---

# 11. Final QA Checklist

正式公開・納品前：

- [ ] LP内の全画像が本書のStatus / Ruleに反していない
- [ ] E素材を正式素材として無断確定していない
- [ ] 新規写真のWeb掲載許可を確認している
- [ ] Instagram / Hot Pepper / LINE / Google Mapsが正しいURLへ遷移する
- [ ] Instagram QRが実機で読み取れる
- [ ] 第三者記事・画像・YouTubeサムネイル等を無断転載していない
- [ ] Guest / Shootingに特定人物名・推薦表現が残っていない
- [ ] InBodyの未確認条件を表示していない
- [ ] Hyper Knifeサブスクの未確認条件を追加していない
- [ ] Access住所・営業時間・定休日・駐車場が最新指示と一致している
- [ ] altが実際の画像内容を超えて断定していない

---

## 12. Current Decision

2026-10-05時点では、**リンク・テキスト・構造の修正は実装開始可能**。

新規写真は受領待ちのため、現行G素材・必要最小限のE素材で仮実装を維持し、受領後に権利確認済み実写へ差し替える。

