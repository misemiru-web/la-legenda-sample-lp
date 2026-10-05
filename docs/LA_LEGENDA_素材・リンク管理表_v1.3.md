# LA LEGENDA 素材・リンク管理表 v1.3

- 対象：LA LEGENDA（ラ レジェンダ）／保土ケ谷・星川
- 用途：要件定義 v1.2 / デザイン定義 v1.3 / 現行GitHubリポジトリを踏まえた実装管理
- 更新日：2026-10-05
- ステータス：主要リンク確定・写真受領待ち

---

## 0. 運用ルール

- `確定`：そのまま実装可
- `既存実装`：現行コードに存在。最終公開前にリンク到達確認
- `要確認`：推測して実装しない
- `受領待ち`：店舗・ユーザーから受領後に更新
- `実装時生成`：正式URL確定後に生成

---

## 1. 店舗基本情報

| 項目 | 内容 | 状態 |
|---|---|---|
| 店名 | LA LEGENDA（ラ レジェンダ） | 確定 |
| 住所 | 神奈川県横浜市保土ケ谷区星川1-25-10 Aletta星川1階 | 確定 |
| 最寄駅 | 星川駅から徒歩約3分 | 確定 |
| 営業時間 | 10:00〜20:00 | 確定 |
| 定休日 | 不定休 | 確定 |
| 駐車場 | GYM前 無料駐車場2台 | 確定 |

---

## 2. 外部リンク

| ID | 導線 | URL | 状態 | 実装 |
|---|---|---|---|---|
| LINK-01 | Instagram正式プロフィール | https://www.instagram.com/ne_ld1999/?hl=ja | 確定 | Reservation / Access / Footer候補 / QR生成元 |
| LINK-02 | Hot Pepper Beauty | https://beauty.hotpepper.jp/kr/slnH000813087/?cstt=1 | 確定・既存実装 | Reservation Hubへ集約 |
| LINK-03 | LINE友だち追加 | https://line.me/R/ti/p/@240pmolc?ts=06281635&oat_content=url | 確定・既存実装 | Reservation Hubへ集約 |
| LINK-04 | Google Maps / Googleビジネスプロフィール | https://www.google.com/maps?sca_esv=ec734b9ba2f66c6f&rlz=1C5LDPL_enJP1194JP1202&output=search&q=LA+LEGENDA&source=lnms&fbs=ABfTbFWgnFHONIVUY2_FI1XmLOwBj8exaHm1K20WHOGaMeonhMV3kP2WYeEnGxffUz-KC66Q6yr12oVdM0HlG2G_7TnUGwA0bButCWrzdsg55x1xYALlb86iYKrIOCIwJOo9tkRs5H1Nmc2AE9VFIBZTl4FlxLVUDRBwkrtTvGVmyIJzrgBhsHeEnUiKrsStZVWdY2IZ734kcU1k4QO0yaIKKd2efj8CEZIxar5tSH4f0ipeGIKZ2SU&entry=mc&ved=1t:200715&ictx=111 | 確定 | Access |
| LINK-05 | インタビュー記事（Local Style Yokohama） | https://localstyle-yokohama.jp/hodogaya-ku/beauty_list/facilities/10335 | 確定 | 参考情報 / 必要時のみ外部記事導線 |
| LINK-06 | YouTube撮影実績の公式URL | 未取得 | 要確認・任意 | Shooting Text Linkのみ |

Hot Pepper / LINE / Instagram / Google Maps は実装に使用可。外部リンクは最終公開前に到達確認する。

### Google Maps / Googleビジネスプロフィール

Google Maps導線として以下のURLを受領済み。

`https://www.google.com/maps?sca_esv=ec734b9ba2f66c6f&rlz=1C5LDPL_enJP1194JP1202&output=search&q=LA+LEGENDA&source=lnms&fbs=ABfTbFWgnFHONIVUY2_FI1XmLOwBj8exaHm1K20WHOGaMeonhMV3kP2WYeEnGxffUz-KC66Q6yr12oVdM0HlG2G_7TnUGwA0bButCWrzdsg55x1xYALlb86iYKrIOCIwJOo9tkRs5H1Nmc2AE9VFIBZTl4FlxLVUDRBwkrtTvGVmyIJzrgBhsHeEnUiKrsStZVWdY2IZ734kcU1k4QO0yaIKKd2efj8CEZIxar5tSH4f0ipeGIKZ2SU&entry=mc&ved=1t:200715&ictx=111`

LPでは `Google Mapsで見る` の外部リンクとして使用する。
Google評価値・口コミ数などは今回の必須要件ではないため追加しない。
将来、より短い共有URLや店舗固有URLを受領した場合は差し替えてよい。

---

## 3. QR

| ID | 対象 | 状態 | 方針 |
|---|---|---|---|
| QR-01 | Instagram正式URL | 生成可能 | Desktop Access中心。Mobileは直接リンク優先 |

QRのエンコード先は `https://www.instagram.com/ne_ld1999/?hl=ja` とする。
QRだけを唯一の導線にせず、必ずInstagram直接リンクを併設する。

---

## 4. 既存画像

現行リポジトリ `public/images/` には以下を確認済み。

- `hero_personal_training_desktop.webp`
- `hero_personal_training_mobile.webp`
- `training_personal_session.webp`
- `training_personal_session_mobile.webp`
- `care_bodywork_wide.webp`
- `care_bodywork_mobile.webp`
- `inbody_counseling.webp`
- `space_training_floor_main.webp`
- `space_reception_wellness.webp`
- `space_dumbbell_area.webp`
- `space_dumbbell_detail.webp`
- `first_visit_reception_guidance.webp`
- `access_exterior_entrance.webp`
- Brand logo / favicon一式

`access_exterior_entrance.webp` はAccess外観写真候補として確認する。

---

## 5. 新規写真

| Asset ID | 内容 | 状態 |
|---|---|---|
| IMG-NEW-01 | 店舗から別送予定 | 受領待ち |
| IMG-NEW-02 | 店舗から別送予定 | 受領待ち |
| IMG-NEW-03 | 店舗から別送予定 | 受領待ち |

受領後、Web掲載許可と用途を確認して既存写真との差し替え可否を決める。

---

## 6. InBody

確定表示：

- InBodyによる体成分測定
- 会員の方はいつでも測定可能

未確認：

- 非会員の利用可否
- 非会員の予約条件
- 会員の予約要否
- 測定料金
- 「いつでも」の具体的範囲

未確認項目はLPへ出さない。

---

## 7. Hyper Knife

確定：

- お顔 70分：¥11,000
- お腹＆トレ 70分：¥19,000
- お体＆トレ 100分：¥24,000
- 「サブスクコースあり」

未確認：

- サブスク料金
- 回数
- 対象メニュー
- 最低期間
- 解約条件

詳細は推測して掲載しない。

---

## 8. リポジトリ資料

`docs/asset-map.md` がBashiiin! coffee用内容になっているため、LA LEGENDA用へ置換必須。

要件 / デザイン定義も実装完了時に最新版へ同期する。

---

## 9. 公開情報との照合メモ（2026-10-05確認）

- Hot Pepper Beauty公開ページでも、住所 `星川1丁目25番地10 Aletta星川1F`、営業時間 `10:00〜20:00`、定休日 `不定休`、店前無料駐車場2台が確認できる。
- InBody公式の公開施設一覧には、LA LEGENDAについて `誰でも測定可能（要予約・無料）` と掲載されている。今回の店舗修正指示 `会員の方はいつでも測定可能` と差分があるため、LPでは店舗からの最新修正指示を優先し、旧公開条件を断定表示しない。
- インタビュー記事は店舗・代表者・サービス理解の参考資料として利用できるが、記事内表現を無断でそのまま転載せず、必要な場合は要件に沿って要約・再編集する。


## 10. 現在の残タスク

- 新規写真：受領待ち
- YouTube撮影実績の公式URL：必要な場合のみ
- InBody非会員条件：詳細掲載する場合のみ
- Hyper Knifeサブスク詳細：詳細掲載する場合のみ

Google Mapsを含む主要な外部リンクはすべて揃ったため、リンク起因の実装保留は解消。
