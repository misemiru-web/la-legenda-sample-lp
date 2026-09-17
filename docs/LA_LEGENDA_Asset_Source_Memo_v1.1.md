# LA LEGENDA Asset / Source Memo v1.1

- Updated: 2026-09-16
- Purpose: 実装直前のAsset確定版
- Basis:
  - 要件定義書 v1.1
  - デザイン定義書 v1.2
  - Reference画像
  - ユーザー提示12画像

## 1. Source Status

- **A**: LA LEGENDA公式素材で、当該素材のサンプル利用許可が確認できているもの
- **B**: メーカー等の公式一次情報
- **C**: LA LEGENDA側が第三者プラットフォーム上で発信した情報
- **D**: 第三者本人・第三者SNS
- **E**: 出所または利用権が未確認
- **G**: サンプルLP用に生成した画像。営業サンプルでは使用可能だが、正式サイトでは原則として実写へ差し替えを検討

> 今回提示された既存6枚は、同一写真が使用許可済みの公式Instagram素材であることを確認できるまでは **E** として管理する。
> 保土ケ谷区ポータル等の第三者サイト上の写真は、掲載されているという事実だけでは転載許可とはみなさない。

## 2. Final Asset Map

| Web asset | Section | Role | Status | PC/Mobile |
|---|---|---|---|---|
| `hero_personal_training_desktop.webp` | Hero | 主役 | G | PC |
| `hero_personal_training_mobile.webp` | Hero | 主役 | G | Mobile 4:5 |
| `training_personal_session.webp` | Personal Training / Concept TRAIN | 主役 | G | PC |
| `training_personal_session_mobile.webp` | Personal Training | 主役 | G | Mobile 4:5 |
| `care_bodywork_wide.webp` | Body Care | 主役 | G | PC |
| `care_bodywork_mobile.webp` | Body Care | 主役 | G | Mobile 4:5 |
| `inbody_counseling.webp` | InBody / Counseling | 主役 | G | 共通 |
| `first_visit_reception_guidance.webp` | First Visit | 主役 | G | 共通 |
| `access_exterior_entrance.webp` | Access | 主役候補 | G | 共通・実外観一致確認必須 |
| `space_training_floor_main.webp` | Space | メイン | E | 共通 |
| `space_reception_wellness.webp` | Space / Why | サブ | E | 共通 |
| `space_dumbbell_area.webp` | Space | サブ | E | 共通 |
| `space_dumbbell_detail.webp` | Space | Detail | E | Optional |
| `care_treatment_detail.webp` | Concept CARE / Care | Detail | E | 共通 |
| `care_aromatherapy_oils_detail.webp` | Care | Detail | E | Optional |

## 3. Implementation Placement

### Hero
- PC: `hero_personal_training_desktop.webp`
- Mobile: `hero_personal_training_mobile.webp`
- Copyは画像に大量に重ねず、Dark copy areaとのSplitを優先

### Concept
- TRAIN: `training_personal_session.webp`
- CARE: `care_treatment_detail.webp`
- `care_treatment_detail.webp` の権利が未確認なら `care_bodywork_wide.webp` の別Cropへ切替

### Personal Training
- PC: `training_personal_session.webp`
- Mobile: `training_personal_session_mobile.webp`

### Body Care / Wellness
- PC: `care_bodywork_wide.webp`
- Mobile: `care_bodywork_mobile.webp`
- Detail: `care_aromatherapy_oils_detail.webp` または `care_treatment_detail.webp`

### InBody / Counseling
- `inbody_counseling.webp`

### Space
- Main: `space_training_floor_main.webp`
- Sub: `space_reception_wellness.webp`
- Sub: `space_dumbbell_area.webp`
- Detail: `space_dumbbell_detail.webp`（必要な場合のみ）

### First Visit
- `first_visit_reception_guidance.webp`

### Guest / Shooting
- 現時点で人物画像はAsset化しない
- 権利確認前はSpace写真＋確認済みテキストで構成
- 「推薦」「愛用」「御用達」等の表現は禁止

### Access
- `access_exterior_entrance.webp` は生成画像
- 実店舗外観と十分一致する場合のみサンプルで使用
- 一致しない場合は、使用許可のある実写へ差し替える

### Price / FAQ / Final CTA
- 原則として写真を主役にしない
- Typography / Background / UIで成立させる

## 4. Rights / Source Rules

1. 使用許可済み公式Instagramと同一の写真であることが確認できた既存素材は、E → Aへ変更可能。
2. 第三者地域ポータルから取得した画像は、転載許可が確認できない限りEのままとする。
3. G画像は営業提案用サンプルでは使用可能。ただし正式契約後は店舗実写への交換を優先。
4. 芳賀セブンさん関連は、来店・撮影の事実確認と人物画像の利用権を分けて扱う。
5. Reference画像はデザイン確認用であり、そのままWeb素材として使用しない。

## 5. Alt Draft

- Hero: `LA LEGENDAのトレーニングスペースで受けるパーソナルトレーニング`
- Training: `トレーナーのサポートを受けながら行うパーソナルトレーニング`
- Care: `落ち着いた空間で受けるボディケア`
- InBody: `InBodyで身体の状態を確認する様子`
- First Visit: `LA LEGENDAの受付で案内を受ける来店者`
- Space main: `LA LEGENDAのトレーニングスペース`
- Reception: `LA LEGENDAの受付とウェルネスエリア`
- Access: `LA LEGENDAの店舗外観イメージ`

※生成画像には、実在スタッフ本人・実利用者本人と誤認する固有名詞をaltへ入れない。

## 6. Next Step

実装開始前に次の3点だけ確認する。

- [ ] E素材のうち、公式Instagram使用許可の対象と確認できる画像をAへ更新
- [ ] `access_exterior_entrance.webp` が実外観と十分一致するか確認
- [ ] Guest / Shootingの人物画像を使わない方針を実装担当へ明記

以上を確認後、Codexへ実装ハンドオフする。
