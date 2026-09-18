# LA LEGENDA Sample LP — Agent Instructions

## 0. Project Overview

このリポジトリは、  
**LA LEGENDA 保土ケ谷パーソナルジム** の  
**営業提案用サンプルLP** を実装するためのプロジェクトです。

目的は、実店舗・実ブランドの魅力を伝えつつ、  
問い合わせ・予約・来店意欲につながる  
**実装可能な高品質LP** を構築することです。

これは本番商用サイトではなく営業提案用サンプルですが、  
**実際に公開・閲覧できる完成度** を前提としてください。

---

## 1. Source of Truth（参照優先順位）

実装判断は、必ず以下の優先順位で行ってください。

1. `docs/LA_LEGENDA_サンプルLP_要件定義書_v1.1.md`
2. `docs/LA_LEGENDA_サンプルLP_デザイン定義書_v1.2.md`
3. `docs/LA_LEGENDA_Asset_Source_Memo_v1.1.md`
4. `docs/asset-map.md`
5. `references/` 配下のReference画像
6. `public/images/` 配下の実装用画像素材

### ルール
- 文書とReference画像が矛盾する場合は、**文書を優先**する
- Asset Source Memoに反する画像使用はしない
- 未確認情報を勝手に補完しない
- 実装に必要な判断で不明点がある場合は、**保守的な解釈**を行う
- 公開情報から確認できない固有情報は**推測しない**

---

## 2. LPの目的

このLPの目的は以下です。

- LA LEGENDAのブランド印象を伝える
- 「パーソナルトレーニング × ボディケア」の独自性を分かりやすく伝える
- 大人世代にとって通いやすく、上質で、安心感のあるジムという印象を与える
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
- 空間の質
- 個別対応
- 継続しやすさ
- 来店時の安心感

---

## 4. Design Implementation Policy

実装時は、`デザイン定義書 v1.2` を正として、以下を必ず守ってください。

### 4-1. 基本方針
- **Reference画像をそのまま模写するだけでなく、実装可能なHTML/CSS/React UIに落とし込む**
- ただし、見た目の方向性はReferenceに忠実に再現する
- セクションごとに役割と強弱を持たせる
- 行政サイト的・無個性な均一デザインにはしない
- 写真、余白、タイポグラフィ、背景差、情報量の強弱でリズムをつける
- 同じカードUIや均等レイアウトの繰り返しを避ける

### 4-2. デザイン上の重要注意
- デジタル庁デザインシステムは**アクセシビリティ・可読性・情報設計の品質基準としてのみ参照**
- デジタル庁の視覚表現の模倣は禁止
- 「白背景 + 均等カード + 単調レイアウト」にならないようにする
- 黒×金の過剰演出はしない
- 高級感は**落ち着き・余白・光・質感・タイポグラフィ**で表現する
- 装飾過多にしない
- 写真が主役のセクションでは、UIが写真を邪魔しないようにする

---

## 5. Responsive Policy

### Desktop
- デザイン定義書のDesktop設計を基準とする
- 写真と余白の見せ方を重視する
- 見出し・写真・導線のメリハリを強く出す

### Mobile
- Desktopの単純縮小は禁止
- 必要に応じて以下を行う
  - レイアウトの縦積み化
  - 画像順の変更
  - コピー改行の最適化
  - 情報量の整理
  - CTA配置の調整
  - 装飾の簡略化
- Hero、Final CTA、Guest / Shooting などはモバイル体験で破綻しないよう特に注意する

---

## 6. Asset Usage Rules

## 6-1. 実装で使用する素材
実装画像は原則として **`public/images/` 内の素材のみ** 使用してください。

- `public/images/brand/`  
  ロゴ・ヘッダーロゴ・フッターロゴ・favicon
- `public/images/`  
  Hero / Training / Care / Space / Access / Guest系などの実装用WebP

### 重要
- `references/` の画像は**見本であり、実装素材として直接使わない**
- `Reference画像をそのままページ画像として出す` ことは禁止
- 画像使用可否・用途・権利メモは  
  `docs/LA_LEGENDA_Asset_Source_Memo_v1.1.md` を正とする
- 未確認の外部画像・ネット画像を勝手に追加しない

## 6-2. ロゴの扱い
- `public/images/brand/` のロゴ類を使用する
- ロゴ比率を崩さない
- 視認性を優先する
- 過剰な装飾や色変更はしない
- 背景に応じて適切な余白とサイズで使用する

## 6-3. 画像実装上の注意
- 画像には適切な `alt` を付与する
- `next/image` を適切に使用する
- レイアウトシフト（CLS）を避ける
- 画像比率を不自然に崩さない
- セクションごとに必要なら `object-fit` / `object-position` を調整する
- Hero / Training / Care は構図の意図を壊さない
- Mobile用画像がある場合はそれを優先利用する

---

## 7. Content Rules（文言・事実表現）

### 7-1. 未確認情報の禁止
以下のような情報は、公開情報や資料で確認できない限り**記載しない**でください。

- スタッフの資格・経歴
- 実績・受賞歴
- 体験料金
- 明確なキャンペーン内容
- 口コミ件数やレビュー評価
- 営業時間
- 定休日
- 支払い方法
- 入会特典
- キャンセルポリシー
- 医療的効能を断定する表現
- 芳賀セブンさんの推薦・監修・愛用・在籍等の誤認表現

### 7-2. Guest / Shooting セクションの扱い
Guest / Shooting に関して表現できるのは、  
**「芳賀セブンさんが動画撮影のため来店した」**  
という確認済み範囲までです。

禁止事項：
- アンバサダー扱い
- 公式提携扱い
- 監修扱い
- 継続利用者扱い
- 所属トレーナー扱い
- 推薦コメントの捏造

### 7-3. 文体
- 過度な煽りをしない
- 誠実で上質、落ち着いたトーン
- 大人世代に配慮した可読性
- 読みやすく短く整理されたコピー
- 断定しすぎず、魅力が自然に伝わる言い回し

---

## 8. Required Sections

セクション構成は、要件定義書・デザイン定義書・Reference画像を踏まえ、以下を基本としてください。  
厳密な名称は文書に従って調整してよいですが、役割は維持してください。

1. Header / Navigation
2. Hero
3. Problem / Concept
4. Personal Training
5. Body Care / Wellness
6. Space / Facility
7. Menu / Price
8. Guest / Shooting
9. Final CTA
10. Footer

必要に応じて、以下を要件・資料に沿って含めること
- Access
- FAQ
- Reservation / Contact
- InBody / Counseling
- First Visit Flow

ただし、要件定義書にない大きな新設セクションは勝手に追加しないこと。

---

## 9. Frontend / Technical Requirements

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
- トークン的に再利用できる色・余白・文字サイズは整理する
- 定数化できる文言・画像パスは整理する
- CSSは責務が追いやすい構造にする

### 推奨コンポーネント例
- `Header`
- `MobileMenu`
- `HeroSection`
- `ProblemConceptSection`
- `TrainingSection`
- `CareSection`
- `SpaceSection`
- `MenuPriceSection`
- `GuestShootingSection`
- `FinalCtaSection`
- `FaqSection`
- `AccessSection`
- `Footer`

---

## 10. Accessibility / UX Rules

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
- FAQなど開閉UIは操作しやすくする
- フォームやCTAは分かりやすくする

---

## 11. SEO / Meta / Indexing

このLPは営業提案用サンプルのため、**検索流入を目的としない**。  
そのため以下を必須とする。

- `noindex, nofollow`
- 適切な `title` / `meta description`
- OGPは必要最低限でよい
- 事実と異なる構造化データは入れない
- ローカルビジネス情報は、未確認項目を補完しない

---

## 12. GitHub Pages / Build Rules

実装は GitHub Pages での公開を想定する。

### 必須
- Static Export対応
- `npm run build` が通ること
- 画像パス・アセットパスが崩れないこと
- GitHub Pages用のベースパス等が必要な場合は適切に設定する
- 実装完了時に、公開時の破綻がない構成にする

---

## 13. Things to Avoid（NG）

以下は禁止または非推奨です。

### デザイン面
- 行政サイトのような見た目
- 画一的なカード並びだけで全体を構成すること
- 白背景 + 均等グリッドの繰り返し
- 過度な金装飾
- 過度なアニメーション
- 余白不足
- 写真を小さく潰すこと
- 文字が読みにくいヒーロー構成

### コンテンツ面
- 未確認事実の追加
- 推薦・愛用・監修の捏造
- 過剰なビフォーアフター訴求
- 医療的効果の断定
- 強引な煽り文句
- 口コミや実績の創作

### 実装面
- Reference画像の直使用
- 使ってはいけない素材の流用
- 横スクロール発生
- Build失敗状態の放置
- Lintエラー放置
- 不要に複雑な実装
- 画像最適化・レスポンシブ未対応

---

## 14. Reference Handling

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

---

## 15. Expected Output Quality

完成物は、以下を満たすこと。

- サンプルLPとして十分見栄えがよい
- 実店舗提案に使える説得力がある
- 実装可能で保守可能
- Desktop / Mobileともに整っている
- 画像・余白・コピー・CTAが機能している
- 「Personal Training × Body Care × Quiet Strength」のブランド印象が出ている

---

## 16. Final Checklist

作業完了前に必ず以下を確認してください。

### 機能
- [ ] ヘッダーが正常
- [ ] モバイルメニューが正常
- [ ] 各CTAが適切に機能
- [ ] FAQがある場合は正常に開閉
- [ ] 画像がすべて正しく表示される
- [ ] リンク先が破綻していない

### 表示
- [ ] Desktop表示確認
- [ ] Tablet相当表示確認
- [ ] Mobile表示確認
- [ ] 横スクロールなし
- [ ] 写真トリミング破綻なし
- [ ] 文字可読性に問題なし
- [ ] セクションごとの強弱がある
- [ ] 単調な見た目になっていない

### 品質
- [ ] `npm run lint` が通る
- [ ] `npm run build` が通る
- [ ] Static Export前提で破綻しない
- [ ] `noindex, nofollow` が設定されている
- [ ] 未確認事実が追加されていない
- [ ] Asset Source Memoに反する素材使用がない

---

## 17. When in Doubt

迷った場合は、以下の順で判断してください。

1. 要件定義書に従う
2. デザイン定義書に従う
3. Asset Source Memoに従う
4. Reference画像の方向性に合わせる
5. 不明な固有情報は追加せず、保守的に実装する


<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
