# LA LEGENDA Sample LP — Agent Instructions

## 0. Project Overview

このリポジトリは、  
**LA LEGENDA 保土ケ谷・星川パーソナルジム** の  
**営業提案用サンプルLP** を実装するためのプロジェクトです。

目的は、実店舗・実ブランドの魅力を伝えつつ、  
問い合わせ・予約・来店意欲につながる  
**実装可能な高品質LP** を構築することです。

これは本番商用サイトではなく営業提案用サンプルですが、  
**実際に公開・閲覧できる完成度** を前提としてください。

---

## 1. Source of Truth（参照優先順位）

実装判断は、必ず以下の資料を参照してください。

1. `docs/LA_LEGENDA_サンプルLP_要件定義書_v1.2.md`
2. `docs/LA_LEGENDA_サンプルLP_デザイン定義書_v1.3.md`
3. `docs/LA_LEGENDA_LP_実装修正指示書_v1.2.md`
4. `docs/LA_LEGENDA_Asset_Source_Memo_v1.2.md`
5. `docs/LA_LEGENDA_素材・リンク管理表_v1.3.md`
6. `references/` 配下のReference画像
7. `public/images/` 配下の実装用画像素材

### 各資料の役割

- **要件定義書 v1.2**：何を伝えるか、何を表示するか、どの行動につなげるかを決める
- **デザイン定義書 v1.3**：レイアウト、余白、UI、Desktop / Mobileの見せ方を決める
- **実装修正指示書 v1.2**：今回の改修で現行コードから何を変更するかを決める
- **Asset Source Memo v1.2**：画像・素材の出所、利用可否、権利上の扱いを決める
- **素材・リンク管理表 v1.3**：URL、素材、確認済み／未確認の状態を管理する
- **Reference画像**：構図・情報密度・写真比率・見せ方の参考にする
- **public/images/**：実際に実装へ使用する画像素材

### ルール

- 文書とReference画像が矛盾する場合は、**文書を優先**する
- コピー・構成・機能は要件定義書を優先する
- 視覚設計はデザイン定義書を優先する
- 今回の変更範囲は実装修正指示書を必ず確認する
- 画像の使用可否はAsset Source Memoを優先する
- 正式URL・素材ステータスは素材・リンク管理表を確認する
- 未確認情報を勝手に補完しない
- 実装に必要な判断で不明点がある場合は、**保守的な解釈**を行う
- 公開情報または店舗提示情報から確認できない固有情報は**推測しない**
- 旧版資料や削除済みの `asset-map.md` を参照しない

---

## 2. LPの目的

このLPの目的は以下です。

- LA LEGENDAのブランド印象を伝える
- 「パーソナルトレーニング × ボディケア」の独自性を分かりやすく伝える
- 大人世代にとって通いやすく、上質で、安心感のあるジムという印象を与える
- トレーニングだけでなく、ケア・InBody・空間・来店導線まで一体で理解できるようにする
- 体験・相談・予約・来店のアクションにつなげる
- 営業提案用サンプルとして、店舗オーナーに「この方向で作れる」と伝わる完成度にする

---

## 3. Brand / Core Concept

### ブランドコンセプト
**QUIET STRENGTH — Train. Care. Live Well.**

### 視覚・体験の中心テーマ
- 大人世代
- 上質
- 落ち着き
- 清潔感
- 整う感覚
- 鍛えるだけでなくケアまで含めた提案
- 強すぎない高級感
- 写真主導の説得力
- 実店舗らしさ
- 予約につながる導線

### 提供価値として重視する軸
- パーソナルトレーニング
- ボディケア / ウェルネス
- InBody / Counseling
- 空間の質
- 個別対応
- 継続しやすさ
- 来店時の安心感

---

## 4. Design Implementation Policy

実装時は、**`docs/LA_LEGENDA_サンプルLP_デザイン定義書_v1.3.md` を正**として、以下を必ず守ってください。

### 4-1. 基本方針
- **Reference画像をそのまま模写するだけでなく、実装可能なHTML/CSS/React UIに落とし込む**
- ただし、見た目の方向性はReferenceに忠実に再現する
- セクションごとに役割と強弱を持たせる
- 行政サイト的・無個性な均一デザインにはしない
- 写真、余白、タイポグラフィ、背景差、情報量の強弱でリズムをつける
- 同じカードUIや均等レイアウトの繰り返しを避ける
- 今回追加される情報量によって、既存の余白・行長・モバイル縦長が破綻しないよう再調整する

### 4-2. デザイン上の重要注意
- デジタル庁デザインシステムは**アクセシビリティ・可読性・情報設計の品質基準としてのみ参照**
- デジタル庁の視覚表現の模倣は禁止
- 「白背景 + 均等カード + 単調レイアウト」にならないようにする
- 黒×金の過剰演出はしない
- 高級感は**落ち着き・余白・光・質感・タイポグラフィ**で表現する
- 装飾過多にしない
- 写真が主役のセクションでは、UIが写真を邪魔しないようにする
- Hyper Knifeや予約導線を追加しても、美容サロン的な見た目へ寄せすぎない
- Trainingの本格性とWellnessの落ち着きを両立する

---

## 5. Responsive Policy

### Desktop
- デザイン定義書 v1.3 のDesktop設計を基準とする
- 写真と余白の見せ方を重視する
- 見出し・写真・導線のメリハリを強く出す
- Instagram QRは、必要に応じてDesktopの補助導線として使用してよい

### Mobile
- Desktopの単純縮小は禁止
- 必要に応じて以下を行う
  - レイアウトの縦積み化
  - 画像順の変更
  - コピー改行の最適化
  - 情報量の整理
  - CTA配置の調整
  - 装飾の簡略化
- Hero、Menu & Price、Access、Final CTA、Guest / Shooting はモバイル体験で破綻しないよう特に注意する
- QRコードを主導線にしない。スマートフォンでは直接リンクを優先する
- 情報を増やしたことでページが不必要に縦長にならないよう、グルーピングと余白を調整する

---

## 6. Asset Usage Rules

### 6-1. 実装で使用する素材
実装画像は原則として **`public/images/` 内の素材のみ** 使用してください。

- `public/images/brand/`  
  ロゴ・ヘッダーロゴ・フッターロゴ・favicon
- `public/images/`  
  Hero / Training / Care / InBody / Space / Access / Guest系などの実装用WebP

### 重要
- `references/` の画像は**見本であり、実装素材として直接使わない**
- `Reference画像をそのままページ画像として出す` ことは禁止
- 画像使用可否・用途・権利メモは  
  `docs/LA_LEGENDA_Asset_Source_Memo_v1.2.md` を正とする
- 素材の確定／未確定状態は  
  `docs/LA_LEGENDA_素材・リンク管理表_v1.3.md` も確認する
- 未確認の外部画像・ネット画像を勝手に追加しない
- 店舗から新しい写真が届くまでは、既存画像を仮素材として維持してよい
- 新しい写真を受領した場合は、Asset Source Memoと素材・リンク管理表を確認・更新してから置き換える

### 6-2. ロゴの扱い
- `public/images/brand/` のロゴ類を使用する
- ロゴ比率を崩さない
- 視認性を優先する
- 過剰な装飾や色変更はしない
- 背景に応じて適切な余白とサイズで使用する

### 6-3. 画像実装上の注意
- 画像には適切な `alt` を付与する
- `next/image` を適切に使用する
- レイアウトシフト（CLS）を避ける
- 画像比率を不自然に崩さない
- セクションごとに必要なら `object-fit` / `object-position` を調整する
- Hero / Training / Care は構図の意図を壊さない
- Mobile用画像がある場合はそれを優先利用する
- Accessでは既存の外観候補画像と店舗から受領する実写を区別して扱う

---

## 7. Content Rules（文言・事実表現）

### 7-1. 未確認情報の禁止
以下のような情報は、最新資料または店舗提示情報で確認できない限り**記載しない**でください。

- スタッフの資格・経歴
- 未確認の実績・受賞歴
- 未確認の体験料金
- 未確認のキャンペーン内容
- 口コミ件数やレビュー評価
- 支払い方法
- 入会特典
- キャンセルポリシー
- 医療的効能を断定する表現
- Hyper Knifeのサブスク料金・回数・契約条件など、確認されていない詳細
- InBodyの非会員利用条件・料金・予約条件など、今回の資料で確定していない情報

営業時間・定休日・住所・駐車場・予約先など、**今回の最新資料で確認済みの情報は記載してよい**。  
ただし、文言・表記・URLは最新資料に合わせ、推測で補完しない。

### 7-2. Guest / Shooting セクションの扱い
Guest / Shooting は、**特定人物の知名度を使うセクションではなく、LA LEGENDAの空間がYouTube等の撮影にも利用されていることを補助的に伝えるセクション**として扱う。

- 旧版で使用していた特定人物名を表示しない
- 推薦・愛用・監修・所属・提携等の意味に拡張しない
- 第三者の人物写真、動画、サムネイル、SNS投稿を無断転載しない
- セクションの視覚強度はTraining / Care / Menuより強くしない
- 正確な表示文言は要件定義書 v1.2 と実装修正指示書 v1.2 に従う

禁止事項：
- アンバサダー扱い
- 公式提携扱い
- 監修扱い
- 継続利用者扱い
- 所属トレーナー扱い
- 推薦コメントの捏造
- 未確認の人物名・チャンネル名・撮影実績の追加

### 7-3. 文体
- 過度な煽りをしない
- 誠実で上質、落ち着いたトーン
- 大人世代に配慮した可読性
- 読みやすく短く整理されたコピー
- 断定しすぎず、魅力が自然に伝わる言い回し
- 店舗側から指定されたコピーは、意味を変えずに反映する

---

## 8. Required Sections

セクション構成は、要件定義書 v1.2・デザイン定義書 v1.3・実装修正指示書 v1.2 を踏まえ、以下を基本としてください。

1. Header / Navigation
2. Hero
3. Problem / Empathy
4. Concept
5. Why LA LEGENDA
6. Personal Training
7. Body Care / Wellness
8. InBody / Counseling
9. Space / Facility
10. Guest / Shooting
11. Menu & Price
12. First Visit
13. Access
14. Final CTA
15. Footer

### 原則
- 現行LPに存在する上記セクションの役割を維持する
- 要件定義書にない大きな新設セクションは勝手に追加しない
- Staff / FAQ等は、最新要件で必要と明示されない限り、未確認情報を埋めるためだけに追加しない
- Guest / Shooting は補助要素として扱う
- Accessは単なる住所表示ではなく、来店・予約導線まで含めて整理する

---

## 9. Reservation / External Link Rules

予約・外部リンクは、**`docs/LA_LEGENDA_素材・リンク管理表_v1.3.md` に記載された正式URLのみ**使用してください。

### 予約導線
- Instagram
- Hot Pepper Beauty
- LINE

### 来店導線
- Google Maps

### 参考情報
- インタビュー記事は、予約CTAと同格のPrimary CTAにはしない
- 必要な場合のみ、補助的な参考リンクとして扱う

### 実装ルール
- URLを推測して作らない
- 古いURL・仮URL・`#` のまま公開しない
- 外部リンクの役割が分かるラベルを付ける
- Mobileでは直接タップできるリンクを優先する
- Instagram QRは直接リンクの代替ではなく補助とする
- Google Mapsは「地図を見る」「Google Mapsで見る」等の来店導線として扱う
- Googleレビュー評価・口コミ件数などを勝手に表示しない

---

## 10. Frontend / Technical Requirements

### 必須技術
- Next.js
- React
- TypeScript
- App Router
- 通常CSSベース（Tailwind前提で組まない）
- GitHub Pages公開を想定
- Static Export対応

### 実装方針
- 実装は保守しやすい構造にする
- セクションごとに適切にコンポーネント分割する
- ただし分割しすぎて可読性を落とさない
- 再利用できる色・余白・文字サイズは整理する
- 定数化できる文言・URL・画像パスは整理する
- CTA URLを複数箇所へ直接重複記述しすぎない
- CSSは責務が追いやすい構造にする
- 既存のNext.js / React / CSS構成を必要なく全面書き換えない

### 主な既存コンポーネント
- `Header`
- `HeroSection`
- `ProblemSection`
- `ConceptSection`
- `WhySection`
- `TrainingSection`
- `CareSection`
- `InbodySection`
- `SpaceSection`
- `GuestShootingSection`
- `MenuPriceSection`
- `FirstVisitSection`
- `AccessSection`
- `FinalCtaSection`
- `Footer`

---

## 11. Accessibility / UX Rules

以下は必須です。

- semantic HTML を使う
- 適切な見出し階層を守る
- コントラスト比に配慮する
- リンクとボタンの役割を正しく分ける
- タップ領域を十分に確保する
- `focus-visible` を実装する
- キーボード操作可能にする
- `prefers-reduced-motion` に配慮する
- モバイルで横スクロールを発生させない
- 画像に適切な `alt` を付ける
- メニュー開閉時の操作性・閉じ方を配慮する
- QRコードだけに情報アクセスを依存しない
- 外部予約先はリンクテキストだけでも意味が分かるようにする
- CTAを増やしても操作の優先順位が分からなくならないようにする

---

## 12. SEO / Meta / Indexing

このLPは営業提案用サンプルのため、**検索流入を目的としない**。  
そのため以下を必須とする。

- `noindex, nofollow`
- 適切な `title` / `meta description`
- OGPは必要最低限でよい
- 事実と異なる構造化データは入れない
- ローカルビジネス情報は、未確認項目を補完しない
- 正式公開前のサンプルであることと矛盾するSEO実装を追加しない

---

## 13. GitHub Pages / Build Rules

実装は GitHub Pages での公開を想定する。

### 必須
- Static Export対応
- `npm run lint` が通ること
- `npm run build` が通ること
- 画像パス・アセットパスが崩れないこと
- GitHub Pages用の `basePath` / `assetPrefix` を壊さないこと
- 実装完了時に、公開時の破綻がない構成にする
- 既存の `.github/workflows/deploy.yml` を必要なく変更しない

---

## 14. Things to Avoid（NG）

以下は禁止または非推奨です。

### デザイン面
- 行政サイトのような見た目
- 画一的なカード並びだけで全体を構成すること
- 白背景 + 均等グリッドの繰り返し
- 過度な金装飾
- 過度なアニメーション
- 余白不足
- 写真を小さく潰すこと
- 文字が読みにくいHero構成
- Hyper Knife追加を理由に美容サロンLPのような見た目へ変えること
- CTAを増やしすぎて主導線を不明瞭にすること

### コンテンツ面
- 未確認事実の追加
- 推薦・愛用・監修の捏造
- 過剰なBefore / After訴求
- 医療的効果の断定
- 強引な煽り文句
- 口コミや実績の創作
- 旧版の芳賀セブンさん訴求を残すこと
- InBody・Hyper Knifeの未確認条件を補完すること

### 実装面
- Reference画像の直使用
- 使ってはいけない素材の流用
- 横スクロール発生
- Build失敗状態の放置
- Lintエラー放置
- 不要に複雑な実装
- 画像最適化・レスポンシブ未対応
- 新しい仕様書を無視して旧版コピーを残すこと
- 正式URLがあるのに仮リンクを残すこと

---

## 15. Reference Handling

`references/` に格納されている画像は、  
セクションごとの**構図・余白・情報優先度・見せ方の見本**です。

### 取り扱いルール
- 参考にするのは以下
  - レイアウト
  - 情報密度
  - 写真の主従関係
  - 余白の取り方
  - 背景の切り替え
  - CTA位置
  - モバイル時の整理の仕方
- 参考にしすぎて実装不能な構図にしない
- 実装容易性を担保しつつ、見た目品質は極力維持する
- 最新の要件・デザイン修正とReferenceが矛盾する場合、Referenceを修正対象として扱う

---

## 16. Expected Output Quality

完成物は、以下を満たすこと。

- サンプルLPとして十分見栄えがよい
- 実店舗提案に使える説得力がある
- 実装可能で保守可能
- Desktop / Tablet / Mobileで整っている
- 画像・余白・コピー・CTAが機能している
- 「Personal Training × Body Care × Quiet Strength」のブランド印象が出ている
- 今回の店舗修正が漏れなく反映されている
- 予約方法がInstagram / Hot Pepper Beauty / LINEから迷わず選べる
- AccessからGoogle Mapsへ自然に移動できる
- 新規写真が後から届いても差し替えやすい

---

## 17. Final Checklist

作業完了前に必ず以下を確認してください。

### 仕様反映
- [ ] 要件定義書 v1.2 の変更が反映されている
- [ ] デザイン定義書 v1.3 の変更が反映されている
- [ ] 実装修正指示書 v1.2 の対象項目が完了している
- [ ] 旧版の特定人物訴求が残っていない
- [ ] Hyper Knifeメニューと注記が正しく反映されている
- [ ] Accessの住所・営業時間・定休日・駐車場が最新資料と一致している

### 機能
- [ ] ヘッダーが正常
- [ ] モバイルメニューが正常
- [ ] Instagramリンクが正常
- [ ] Hot Pepper Beautyリンクが正常
- [ ] LINEリンクが正常
- [ ] Google Mapsリンクが正常
- [ ] Instagram QRを使用する場合、正しいURLを指している
- [ ] 各CTAの役割が明確
- [ ] 画像がすべて正しく表示される
- [ ] 仮リンクや壊れたリンクが残っていない

### 表示
- [ ] Desktop表示確認
- [ ] Tablet相当表示確認
- [ ] Mobile表示確認
- [ ] 横スクロールなし
- [ ] 写真トリミング破綻なし
- [ ] 文字可読性に問題なし
- [ ] セクションごとの強弱がある
- [ ] Menu / Access追加後も縦長になりすぎていない
- [ ] CTA追加後も視覚的にうるさくなっていない

### 品質
- [ ] `npm run lint` が通る
- [ ] `npm run build` が通る
- [ ] Static Export前提で破綻しない
- [ ] `noindex, nofollow` が設定されている
- [ ] 未確認事実が追加されていない
- [ ] Asset Source Memo v1.2に反する素材使用がない
- [ ] 素材・リンク管理表 v1.3とURLが一致している

---

## 18. When in Doubt

迷った場合は、以下の順で判断してください。

1. 要件定義書 v1.2で、表示内容・目的を確認する
2. デザイン定義書 v1.3で、見せ方・レスポンシブを確認する
3. 実装修正指示書 v1.2で、今回の変更範囲を確認する
4. Asset Source Memo v1.2で、素材の利用可否を確認する
5. 素材・リンク管理表 v1.3で、正式URL・素材状態を確認する
6. Reference画像の方向性を確認する
7. それでも不明な固有情報は追加せず、保守的に実装する


<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
