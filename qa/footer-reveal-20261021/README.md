# Footer Reveal修正・料金再確認（2026-10-21）

## 変更

- `app/components/RevealOnScroll.tsx`：明示されたFooter末尾行だけ、下端を縮小しない別のIntersectionObserverへ接続。その他の要素は既存のrootMargin（下端-8%）・threshold（0.12）を維持。コールバック・CSSアニメーション・reduced-motion時の即時表示は維持し、両Observerをクリーンアップする。
- `app/components/LandingSections.tsx`：Footer末尾行に`data-reveal-viewport`属性を追加。Menu & Priceの内容・Footerのデザイン・文言は変更なし。
- `qa/formal-20261021/README.md`：前回の既知不具合を解消済みとして追記。
- このフォルダー：4幅の料金画面・ページ最下部画面と8条件の結果を保存。

## 確認結果

本番用Static Exportをローカルの`/la-legenda-sample-lp/`配下で配信し、Chromeで実表示を確認。

| 幅 | 料金3件・時間・税込注記 | Footer末尾表示 | reduced-motion | 横スクロール |
|---|---|---|---|---|
| 1440px | OK | OK | OK | なし |
| 1024px | OK | OK | OK | なし |
| 768px | OK | OK | OK | なし |
| 375px | OK | OK | OK | なし |

全4幅のスクリーンショットを目視確認。各幅で以下の画面表示を確認済み。

- ハイパーナイフ お顔：70分 / ¥11,000
- ハイパーナイフ お腹＆トレ：70分 / ¥19,000
- ハイパーナイフ お体＆トレ：100分 / ¥24,000
- 「表示価格はすべて税込です。」

通常スクロール後、Footer末尾行は`is-revealed`・opacity 1・移動量0となり、注記と著作権の両方が画面内に表示される。全可視Reveal要素の未表示は0件。reduced-motion時も全4幅で同じ内容が移動なしで表示される。

`npm run build`、`npm run lint`、`npx tsc --noEmit`、`git diff --check`はすべて成功。デプロイ未実施。
