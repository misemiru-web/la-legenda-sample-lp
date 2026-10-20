# 正式情報反映 QA（2026-10-21）

## 今回の変更

- `app/components/LandingSections.tsx`：予約URLを正式な3件へ同期。主要CTAは既存の`#reservation`を維持し、選択肢をLINE／Instagram／Hot Pepper Beautyの予約・相談ラベルへ整理。税込共通注記、初回2プラン、予約後の確認事項、支払い・予約変更・キャンセルのご利用案内を追加。カウンセリングのみの選択と矛盾しないよう既存フローのトレーニング工程を任意として明示。駐車場の表記を正式文言に同期。
- `app/page.module.css`：初回料金・ご利用案内のスタイルとMobileでの配置を追加。予約リンクの長いラベルに合わせてMobileの余白を調整。
- `public/images/instagram_qr.png`：クエリなしの正式プロフィールURLに更新。CoreImageで読み取り、`https://www.instagram.com/ne_ld1999/`との完全一致を確認。
- `docs/LA_LEGENDA_Asset_Source_Memo_v1.2.md`、`docs/LA_LEGENDA_素材・リンク管理表_v1.3.md`：正式予約URL・QR生成先を同期。2026-10-20指示書を優先する注記を追加。
- `qa/formal-20261021/`：Desktop／Mobileの6画面と検証結果を保存。

作業開始時から変更済みだった写真反映・コピー・CSS・資料と未追跡ファイルは維持。Gitへの一括コミットはせず、変更前の追跡ファイル差分とコードの控えを`/private/tmp/la-legenda-before-formal.patch`および`/private/tmp/la-legenda-before-formal/`に保存した。これらは一時ファイルであり永続バックアップではない。

## 技術確認

- `npm run lint`：成功。
- `npm run build`：成功。Static Exportの`out/`生成を確認。
- `npx tsc --noEmit`：成功（専用typecheckスクリプトは未定義）。
- `git diff --check`：成功。
- 既存11メニューの価格配列が作業開始時から完全に同一であることを確認。
- Hero・Concept・Why・Training・Care・InBody・Space・Guest・Final CTA・Footerの各コンポーネントが作業開始時から完全に同一であることを確認。
- 指定の特定人物名、「LA LEGENDAの思い」、仮文章を追加していない。

## ブラウザ確認

Chromeのヘッドレス表示でGitHub Pagesと同じ`/la-legenda-sample-lp/`配下から静的出力を配信し、1440／1024／768／375pxで確認。DesktopとMobileのMenu、First Visit、ご利用案内、ReservationはPNGを目視確認。

- 全4幅で横スクロールなし、画面外へはみ出す本文・ボタンなし。
- 表示対象画像の読み込み失敗なし。Mobileで非表示のQR・装飾写真は遅延読み込みされないため欠落判定から除外。
- 未解決のページ内アンカーなし。
- 全外部リンクに別タブと`rel="noopener noreferrer"`あり。
- 主要CTAで`#reservation`へ移動し、上余白はDesktop／Tablet 96px、Mobile 80px。
- Mobileメニューの開閉とEscapeでの閉鎖を確認。
- 変更箇所のReveal表示を確認。既存のReveal実装・CSS・reduced-motion対応は変更していない。
- `noindex, nofollow, nocache`を静的HTMLから確認。

### 既存状態で残る表示上の注意

**追加修正で解消済み。** 同日の再確認結果は[Footer Reveal再確認](../footer-reveal-20261021/README.md)を参照。以下は修正前の記録。

高さ900pxのDesktop／Tablet画面では、Footer最下部のサンプル注記・著作権行が未Revealのままになる。既存Observerの下端`rootMargin: -8%`とページ最下部の配置により発火領域へ届かないため。FooterとReveal実装は作業開始時から変更しておらず、既存演出を維持する指定に従い今回は対象外とした。375px幅では表示される。詳細は`results.json`の`unrevealed`に記録。

## 予約先の確認

2026-10-21に読み取り専用HTTPリクエストでリダイレクトを追跡。

| 表示導線 | 実装URL | 到達結果 |
|---|---|---|
| LINEで予約・相談 | https://lin.ee/njpSzY5 | HTTP 200、LINEの`@240pmolc`へ |
| Instagramで予約・相談 | https://www.instagram.com/ne_ld1999/ | HTTP 200 |
| Hot Pepper Beautyで予約 | http://b.hpr.jp/kr/sd/H000813087 | HTTP 200、店舗ID `H000813087`の予約ページへ |

アカウントログイン・友だち追加・実予約・問い合わせ送信は行っていない。外部サービスの実機アプリ切替や予約完了までの確認は別途必要。

## 維持・未実施事項

全体デザイン、Hero、既存コピー、写真構成、アニメーション実装、noindex設定、GitHub PagesのbasePath／assetPrefix、デプロイ設定は維持。Maps URLは既存の受領済みURLを維持し、新規生成していない。

「LA LEGENDAの思い」は文章受領待ちのため未実装。Hyper Knifeサブスク詳細、InBody非会員条件、カード・決済ブランド名等の未確認情報は追加していない。デプロイ・公開・クライアント送付は行っていない。
