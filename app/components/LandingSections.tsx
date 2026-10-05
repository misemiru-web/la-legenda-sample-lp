import { ArrowUpRight, CalendarCheck2, CalendarDays, Car, Clock3, Instagram, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";
import styles from "../page.module.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const imagePath = (name: string) => `${basePath}/images/${name}`;
const externalLinks = {
  instagram: "https://www.instagram.com/ne_ld1999/?hl=ja",
  hotPepper: "https://beauty.hotpepper.jp/kr/slnH000813087/?cstt=1",
  line: "https://line.me/R/ti/p/@240pmolc?ts=06281635&oat_content=url",
  googleMaps: "https://www.google.com/maps?sca_esv=ec734b9ba2f66c6f&rlz=1C5LDPL_enJP1194JP1202&output=search&q=LA+LEGENDA&source=lnms&fbs=ABfTbFWgnFHONIVUY2_FI1XmLOwBj8exaHm1K20WHOGaMeonhMV3kP2WYeEnGxffUz-KC66Q6yr12oVdM0HlG2G_7TnUGwA0bButCWrzdsg55x1xYALlb86iYKrIOCIwJOo9tkRs5H1Nmc2AE9VFIBZTl4FlxLVUDRBwkrtTvGVmyIJzrgBhsHeEnUiKrsStZVWdY2IZ734kcU1k4QO0yaIKKd2efj8CEZIxar5tSH4f0ipeGIKZ2SU&entry=mc&ved=1t:200715&ictx=111",
  interview: "https://localstyle-yokohama.jp/hodogaya-ku/beauty_list/facilities/10335",
};

const reservationLinks = [
  { label: "Instagram", href: externalLinks.instagram, icon: Instagram },
  { label: "Hot Pepper Beauty", href: externalLinks.hotPepper, icon: CalendarCheck2 },
  { label: "LINE", href: externalLinks.line, icon: MessageCircle },
];

// 営業提案用の外観候補。店舗提供写真の受領後にここを差し替える。
const accessImage = {
  src: "access_exterior_entrance.webp",
  alt: "LA LEGENDAの店舗外観・入口（サンプル用イメージ）",
  width: 1536,
  height: 1024,
};

const trainingPlans = [
  { number: "01", label: "1回 / 70分", price: "¥14,000" },
  { number: "02", label: "月2回 ライト", price: "¥26,000" },
  { number: "03", label: "月4回 メイン", price: "¥48,000" },
  { number: "04", label: "月8回 プレミアム", price: "¥88,000" },
];

const wellnessPlans = [
  { number: "01", label: "スポーツマッサージ 30分", price: "¥4,620" },
  { number: "02", label: "アロマリラックス 70分", price: "¥14,000" },
  { number: "03", label: "スポーツアロマ 70分", price: "¥14,000" },
  { number: "04", label: "エサレンBODYワーク 70分", price: "¥16,000" },
];

const hyperKnifePlans = [
  { number: "05", label: "ハイパーナイフお顔 70分", price: "¥11,000" },
  { number: "06", label: "ハイパーナイフお腹＆トレ 70分", price: "¥19,000" },
  { number: "07", label: "ハイパーナイフお体＆トレ 100分", price: "¥24,000" },
];

const firstVisitSteps = [
  ["01", "予約・相談", "まずは現在の悩みや、始めたいことをお聞かせください。"],
  ["02", "カウンセリング", "これまでの運動経験や生活のことを丁寧に確認します。"],
  ["03", "身体・目的の確認", "今の状態と、これから目指したい身体を一緒に整理します。"],
  ["04", "体験", "相談した内容をもとに、自分に合う進め方を確かめます。"],
  ["05", "今後の利用を相談", "続け方は体験後に相談。無理のない選択肢を考えます。"],
];

function SectionHeading({ eyebrow, title, light = false, id }: { eyebrow: string; title: ReactNode; light?: boolean; id?: string }) {
  return <div className={`${styles.sectionHeading} ${light ? styles.light : ""}`} data-reveal="heading"><p className={styles.eyebrow}>{eyebrow}</p><span className={styles.goldRule} aria-hidden="true" /><h2 id={id}>{title}</h2></div>;
}

function PriceList({ items, showDuration = false }: { items: typeof trainingPlans; showDuration?: boolean }) {
  return <dl className={styles.priceList}>{items.map((item) => {
    const durationStart = item.label.lastIndexOf(" ");
    return <div className={styles.priceRow} key={item.number}>
      <dt><span>{item.number}</span>{showDuration ? <div className={styles.priceMenuLabel}>{item.label.slice(0, durationStart)}<small>{item.label.slice(durationStart)}</small></div> : item.label}</dt>
      <dd>{item.price}</dd>
    </div>;
  })}</dl>;
}

export function HeroSection() {
  return <section id="top" className={styles.hero} aria-labelledby="hero-title">
    <div className={styles.heroArc} aria-hidden="true" />
    <div className={styles.heroCopy}>
      <p className={styles.heroEyebrow}>PERSONAL TRAINING × BODY CARE</p>
      <h1 id="hero-title" data-reveal="heading"><span className={styles.heroTitleDesktop}><span>ただ鍛えるのではない。</span><span>身体を、人生ごと整える。</span></span><span className={styles.heroTitleMobile}><span>ただ鍛えるのではない。</span><span>身体を、</span><span>人生ごと整える。</span></span></h1>
      <p className={styles.heroLead} data-reveal="body" data-reveal-order="1"><span>パーソナルトレーニングと身体のケアをひとつの場所で。</span><span>大人世代のためのフィットネス＆ウェルネス。</span></p>
      <div className={styles.heroActions} data-reveal="body" data-reveal-order="1"><a className={styles.goldButton} href="#reservation">体験・相談を予約する</a><a className={styles.darkTextLink} href="#price">メニューを見る</a></div>
      <p className={styles.location}>神奈川県横浜市保土ケ谷区星川1-25-10 Aletta星川1階</p><p className={styles.location}>星川駅から徒歩約3分</p>
    </div>
    <picture className={styles.heroVisual} data-reveal="image-right" data-reveal-order="2"><source media="(max-width: 767px)" srcSet={imagePath("hero_personal_training_mobile.webp")} /><Image src={imagePath("hero_personal_training_desktop.webp")} alt="LA LEGENDAのトレーニングスペースで受けるパーソナルトレーニング" width={1536} height={1024} priority unoptimized sizes="(max-width: 767px) 100vw, 58vw" /></picture>
    <p className={styles.heroSignature}><span>QUIET STRENGTH</span>Train. Care. Live Well.</p>
  </section>;
}

export function ProblemSection() {
  return <section id="problem" className={styles.problem} aria-labelledby="problem-title"><div className={styles.problemArc} aria-hidden="true" /><div className={styles.container}><div className={styles.problemGrid}>
    <div className={styles.sideNote}><p className={styles.eyebrow}>FOR YOUR BODY</p><span className={styles.goldRule} aria-hidden="true" /><p>A HEALTHIER YOU<br />FOR A BRIGHTER<br />TOMORROW.</p></div>
    <div><h2 id="problem-title" data-reveal="heading"><span className={styles.problemTitleDesktop}><span>動きたい。</span><span>でも、自分に合う方法が</span><span>分からない。</span></span><span className={styles.problemTitleMobile}><span>動きたい。</span><span>でも、自分に合う</span><span>方法が分からない。</span></span></h2><ul className={styles.problemList} data-reveal="body" data-reveal-order="1"><li>久しぶりの運動に不安がある</li><li>自分の年齢に合う方法を知りたい</li><li>鍛えるだけでなく身体も整えたい</li><li>無理なく続けられる場所を探している</li></ul></div>
  </div></div></section>;
}

export function ConceptSection() {
  return <section id="concept" className={styles.concept} aria-labelledby="concept-title"><div className={`${styles.container} ${styles.conceptContainer}`}>
    <div className={styles.conceptLayout}>
      <div className={styles.conceptCopy}>
        <p className={styles.eyebrow}>TRAINING × CARE</p>
        <h2 id="concept-title" data-reveal="heading"><span className={styles.conceptTitleDesktop}><span>鍛える。</span><span>整える。</span><span>これからの身体へ。</span></span><span className={styles.conceptTitleMobile}><span>鍛える。</span><span>整える。</span><span>これからの身体へ。</span></span></h2>
        <p data-reveal="body" data-reveal-order="1"><span className={styles.conceptTextDesktop}><span>今の身体を知り、</span><span>必要なトレーニングを行い、</span><span>必要に応じてケアする。</span><span>短期的な変化だけではなく、</span><span>10年、20年先も</span><span>動ける身体を目指します。</span></span><span className={styles.conceptTextMobile}><span>今の身体を知り、</span><span>必要なトレーニングを行い、</span><span>必要に応じてケアする。</span><span>短期的な変化だけではなく、</span><span>10年、20年先も</span><span>動ける身体を目指します。</span></span></p>
      </div>
      <div className={styles.conceptStage}>
        <figure className={styles.conceptTraining} data-reveal="image-right" data-reveal-order="2"><Image src={imagePath("training_personal_session.webp")} alt="トレーナーのサポートを受けながら行うパーソナルトレーニング" width={1536} height={1024} unoptimized sizes="(max-width: 767px) calc(100vw - 48px), 48vw" /><figcaption className={styles.conceptMobileCaption}><span>TRAINING</span>動ける身体を、これからも。</figcaption></figure>
        <figure className={styles.conceptCare} data-reveal="image-right" data-reveal-order="2"><Image src={imagePath("care_bodywork_mobile.webp")} alt="落ち着いた空間で受けるボディケア" width={819} height={1024} unoptimized sizes="(max-width: 767px) 74vw, 22vw" /><figcaption className={styles.conceptMobileCaption}><span>CARE</span>整えて、日々を軽やかに。</figcaption></figure>
      </div>
    </div>
  </div></section>;
}

export function WhySection() {
  return <section className={styles.why} aria-labelledby="why-title"><div className={`${styles.container} ${styles.whyContainer}`}><SectionHeading id="why-title" eyebrow="WHY LA LEGENDA" title={<span className={styles.whyTitle}><span>一か所で、</span><span>身体と向き合う。</span></span>} /><div className={styles.whyGrid} data-reveal="body" data-reveal-order="1">
    <article><span className={styles.whyNumber}>01</span><div className={styles.whyItemBody}><h3>PERSONAL</h3><p><span>一人ひとりの目的や状態に</span><span>向き合う。</span></p></div></article>
    <article><span className={styles.whyNumber}>02</span><div className={styles.whyItemBody}><h3>TRAINING + CARE</h3><p><span>トレーニングとマッサージ／</span><span>ウェルネスケアを同じ場所で。</span></p></div></article>
    <article><span className={styles.whyNumber}>03</span><div className={styles.whyItemBody}><h3>KNOW YOUR BODY</h3><p><span>InBody測定器などを通して、</span><span>まず今の状態を知る。</span></p></div></article>
    <article><span className={styles.whyNumber}>04</span><div className={styles.whyItemBody}><h3>COMFORTABLE SPACE</h3><p><span>快適な空間で</span><span>自分の心と体を整える。</span></p></div></article>
  </div></div></section>;
}

export function TrainingSection() {
  return <section id="service" className={styles.training} aria-labelledby="training-title">
    <picture className={styles.serviceVisual} data-reveal="image-left" data-reveal-order="2"><source media="(max-width: 767px)" srcSet={imagePath("training_personal_session_mobile.webp")} /><Image src={imagePath("training_personal_session.webp")} alt="トレーナーのサポートを受けながら行うパーソナルトレーニング" width={1536} height={1024} unoptimized sizes="(max-width: 767px) 100vw, 58vw" /></picture>
    <div className={styles.serviceCopy}><SectionHeading id="training-title" eyebrow="PERSONAL TRAINING" title={<span className={styles.trainingTitle}><span>今の身体に合わせた、</span><span>自分のためのトレーニング。</span></span>} /><p data-reveal="body" data-reveal-order="1">運動経験や年齢に関係なく、一人ひとりの目的や身体の状態に合わせて。無理なく続けられるトレーニングを考えます。</p><ol className={styles.serviceList} data-reveal="body" data-reveal-order="1"><li><span>01</span>筋力・体力づくり</li><li><span>02</span>ボディメイク</li><li><span>03</span>身体の使い方を見直す</li></ol><a className={styles.primaryButton} href="#price" data-reveal="body" data-reveal-order="1">料金を見る</a></div>
  </section>;
}

export function CareSection() {
  return <section id="care" className={styles.care} aria-labelledby="care-title">
    <div className={styles.careInner}>
      <div className={styles.careCopy}><SectionHeading id="care-title" eyebrow="BODY CARE / WELLNESS" title={<><span>鍛えた身体を、</span><span>整える時間まで。</span></>} /><p data-reveal="body" data-reveal-order="1">トレーニングだけで終わらず、身体の状態や目的に応じたケアメニューも同じ場所で。</p><dl className={styles.careList} data-reveal="body" data-reveal-order="1"><div><dt>RECOVER</dt><dd>スポーツマッサージ</dd></div><div><dt>RELAX</dt><dd>アロマリラックス等</dd></div><div><dt>DETOX</dt><dd>ハイパーナイフ</dd></div></dl></div>
      <picture className={styles.careVisual} data-reveal="image-right" data-reveal-order="2"><source media="(max-width: 767px)" srcSet={imagePath("care_bodywork_mobile.webp")} /><Image src={imagePath("care_bodywork_wide.webp")} alt="落ち着いた空間で受けるボディケア" width={1536} height={1024} unoptimized sizes="(max-width: 767px) calc(100vw - 40px), 58vw" /></picture>
    </div>
  </section>;
}

export function InbodySection() {
  return <section id="inbody" className={styles.inbody} aria-labelledby="inbody-title"><div className={styles.container}><div className={styles.inbodyGrid}>
    <div className={styles.inbodyVisual} data-reveal="image-left" data-reveal-order="2"><Image src={imagePath("inbody_counseling.webp")} alt="InBodyで身体の状態を確認する様子" width={1448} height={1086} unoptimized sizes="(max-width: 767px) 100vw, 36vw" /></div>
    <div className={styles.inbodyMessage}><p className={styles.eyebrow}>INBODY / COUNSELING</p><h2 id="inbody-title" data-reveal="heading">まずは、<br />今の身体を知る。</h2><p data-reveal="body" data-reveal-order="1">数字にこだわるためでなく、自分に合う始め方を一緒に考える入口として。</p></div>
    <dl className={styles.factList} data-reveal="body" data-reveal-order="1"><div><dt>MEASUREMENT</dt><dd>InBodyによる体成分測定</dd></div><div><dt>MEMBER</dt><dd>会員の方はいつでも測定可能</dd></div></dl>
  </div><p className={styles.factNote}>店舗提供の最新情報を反映しています。</p></div></section>;
}

export function SpaceSection() {
  return <section id="space" className={styles.space} aria-labelledby="space-title"><div className={styles.spaceArc} aria-hidden="true" /><div className={styles.container}>
    <SectionHeading id="space-title" eyebrow="THE SPACE" light title={<><span className={styles.spaceTitleDesktop}><span>身体と向き合うための、</span><span>静かな場所。</span></span><span className={styles.spaceTitleMobile}><span>身体と向き合う</span><span>ための、静かな場所。</span></span></>} /><p className={styles.spaceLead} data-reveal="body" data-reveal-order="1">トレーニングもケアも、ひとつの場所で。落ち着いた空間と充実した設備が、自分のコンディションに向き合う時間を支えます。</p>
    <div className={styles.spaceGallery} data-reveal="image-right" data-reveal-order="2"><figure className={styles.spaceMain}><Image src={imagePath("space_training_floor_main.webp")} alt="LA LEGENDAのトレーニングスペース" width={1254} height={1254} unoptimized sizes="(max-width: 767px) 100vw, 56vw" /></figure><figure className={styles.spaceReception}><Image src={imagePath("space_reception_wellness.webp")} alt="LA LEGENDAの受付とウェルネスエリア" width={1254} height={1254} unoptimized sizes="(max-width: 767px) 100vw, 34vw" /></figure><figure className={styles.spaceDumbbell}><Image src={imagePath("space_dumbbell_area.webp")} alt="ダンベルを備えたLA LEGENDAのトレーニングエリア" width={1254} height={1254} unoptimized sizes="(max-width: 767px) 100vw, 34vw" /></figure><figure className={styles.spaceDetail}><Image src={imagePath("space_dumbbell_detail.webp")} alt="LA LEGENDAのダンベル設備" width={1122} height={1402} unoptimized sizes="24vw" /></figure></div>
  </div></section>;
}

export function GuestShootingSection() {
  return <section id="guest" className={styles.guest} aria-labelledby="guest-title"><div className={styles.container}><div className={styles.guestGrid}>
    <div className={styles.guestVisual} data-reveal="image-left" data-reveal-order="2"><Image src={imagePath("space_training_floor_main.webp")} alt="LA LEGENDAのトレーニング空間" width={1254} height={1254} unoptimized sizes="(max-width: 767px) 100vw, 50vw" /></div>
    <div className={styles.guestCopy}><p className={styles.eyebrow}>GUEST / SHOOTING</p><span className={styles.goldRule} aria-hidden="true" /><h2 id="guest-title" data-reveal="heading"><span className={styles.guestTitleDesktop}><span>YouTube撮影</span><span>LA LEGENDAで</span></span><span className={styles.guestTitleMobile}><span>YouTube撮影</span><span>LA LEGENDAで</span></span></h2><p data-reveal="body" data-reveal-order="1">本格的なトレーニング設備を備えた空間は、YouTube等の撮影の場としても利用されています。</p></div>
  </div></div></section>;
}

export function MenuPriceSection() {
  return <section id="price" className={styles.price} aria-labelledby="price-title"><div className={styles.priceArc} aria-hidden="true" /><div className={styles.container}>
    <SectionHeading id="price-title" eyebrow="MENU & PRICE" light title={<span className={styles.priceTitle}><span>続け方に合わせて選べる、</span><span>シンプルな料金。</span></span>} /><p className={styles.priceLead} data-reveal="body" data-reveal-order="1">目的やライフスタイルに合わせたプランを用意しています。表示価格は公式Instagram掲載情報と店舗提供の最新情報を基にしたサンプルです。</p>
    <div className={styles.priceColumns} data-reveal="body" data-reveal-order="1"><div><div className={styles.priceTitleRow}><h3>PERSONAL TRAINING</h3><p>1回70分</p></div><PriceList items={trainingPlans} /></div><div className={styles.wellnessPricing}>
      <div><div className={styles.priceTitleRow}><h3>CARE &amp; WELLNESS</h3><p>代表メニュー</p></div><PriceList items={wellnessPlans} showDuration /></div>
      <div><div className={styles.priceTitleRow}><h3>HYPER KNIFE</h3></div><PriceList items={hyperKnifePlans} showDuration /><p className={styles.subscriptionNote}>サブスクコースあり</p></div>
    </div></div>
    <p className={styles.priceNote} data-reveal="body" data-reveal-order="1">価格の税込・税別区分、最新料金は正式公開前に店舗確認が必要です。</p><a className={styles.goldButton} href="#reservation" data-reveal="body" data-reveal-order="1">体験・相談を予約する</a>
  </div></section>;
}

export function FirstVisitSection() {
  return <section id="first-visit" className={styles.firstVisit} aria-labelledby="first-visit-title"><div className={styles.container}>
    <div className={styles.firstVisitIntro}><SectionHeading id="first-visit-title" eyebrow="FIRST VISIT" title="はじめての方へ。" /><p data-reveal="body" data-reveal-order="1"><span>最初から決めきらなくても大丈夫です。</span><span>身体や目的を確かめながら、これからの進め方を相談します。</span></p></div>
    <div className={styles.firstVisitBody}><div className={styles.firstVisitVisual} data-reveal="image-left" data-reveal-order="2"><Image src={imagePath("first_visit_reception_guidance.webp")} alt="LA LEGENDAの受付で案内を受ける来店者" width={1448} height={1086} unoptimized sizes="(max-width: 767px) 100vw, 46vw" /></div><ol className={styles.timeline} data-reveal="body" data-reveal-order="1">{firstVisitSteps.map(([number, title, copy]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol></div>
  </div></section>;
}

export function AccessSection() {
  return <section id="access" className={styles.access} aria-labelledby="access-title">
    <div className={styles.container}>
      <div className={styles.accessGrid}>
        <div className={styles.accessCopy}>
          <p className={styles.eyebrow}>ACCESS</p>
          <span className={styles.goldRule} aria-hidden="true" />
          <h2 id="access-title" data-reveal="heading"><span className={styles.accessTitleDesktop}><span>星川で、</span><span>自分の身体と向き合う。</span></span><span className={styles.accessTitleMobile}><span>星川で、</span><span>自分の身体と向き合う。</span></span></h2>
          <address data-reveal="body" data-reveal-order="1"><strong>LA LEGENDA</strong>神奈川県横浜市保土ケ谷区星川1-25-10 Aletta星川1階</address>
          <dl className={styles.accessMetaList} data-reveal="body" data-reveal-order="1">
            <div><dt><MapPin className={`${styles.icon} ${styles.accessIcon}`} aria-hidden="true" />最寄駅</dt><dd>星川駅から徒歩約3分</dd></div>
            <div><dt><Car className={`${styles.icon} ${styles.accessIcon}`} aria-hidden="true" />駐車場</dt><dd>GYM前 無料駐車場2台</dd></div>
            <div><dt><Clock3 className={`${styles.icon} ${styles.accessIcon}`} aria-hidden="true" />営業時間</dt><dd>10:00〜20:00</dd></div>
            <div><dt><CalendarDays className={`${styles.icon} ${styles.accessIcon}`} aria-hidden="true" />定休日</dt><dd>不定休</dd></div>
          </dl>
          <a className={styles.mapLink} href={externalLinks.googleMaps} target="_blank" rel="noopener noreferrer" data-reveal="body" data-reveal-order="1">Google Mapsで見る<ArrowUpRight className={styles.icon} aria-hidden="true" /></a>
        </div>
        <figure className={styles.accessVisual} data-reveal="image-right" data-reveal-order="2">
          <Image src={imagePath(accessImage.src)} alt={accessImage.alt} width={accessImage.width} height={accessImage.height} unoptimized sizes="(max-width: 767px) calc(100vw - 40px), 55vw" />
          <figcaption>外観・入口のサンプルイメージ</figcaption>
        </figure>
        <div className={styles.instagramInfo} data-reveal="body" data-reveal-order="1">
          <Image className={styles.instagramQr} src={imagePath("instagram_qr.png")} alt="LA LEGENDA公式Instagramを開くQRコード" width={592} height={592} unoptimized sizes="160px" />
          <div><p>INSTAGRAM</p><a className={styles.mapLink} href={externalLinks.instagram} target="_blank" rel="noopener noreferrer"><Instagram className={styles.icon} aria-hidden="true" />Instagramを開く<ArrowUpRight className={styles.icon} aria-hidden="true" /></a></div>
        </div>
      </div>
      <section id="reservation" className={styles.reservationHub} aria-labelledby="reservation-title">
        <div data-reveal="heading"><p className={styles.eyebrow}>RESERVATION</p><h2 id="reservation-title">ご予約・ご相談</h2></div>
        <nav className={styles.reservationLinks} aria-label="外部サービスで予約・相談" data-reveal="body" data-reveal-order="1">
          {reservationLinks.map(({ label, href, icon: Icon }, index) => <a href={href} key={label} target="_blank" rel="noopener noreferrer"><span className={styles.reservationNumber} aria-hidden="true">0{index + 1}</span><span className={styles.reservationLabel}><Icon className={styles.icon} aria-hidden="true" />{label}</span><ArrowUpRight className={styles.icon} aria-hidden="true" /></a>)}
        </nav>
      </section>
    </div>
  </section>;
}

export function FinalCtaSection() {
  return <section id="final-cta" className={styles.finalCta} aria-labelledby="final-cta-title">
    <Image className={styles.finalCtaBackground} src={imagePath("space_training_floor_main.webp")} alt="" fill unoptimized sizes="100vw" />
    <div className={styles.finalCtaShade} aria-hidden="true" /><div className={styles.finalArc} aria-hidden="true" />
    <div className={styles.container}>
      <p className={styles.eyebrow}>START FROM TODAY</p><span className={styles.goldRule} aria-hidden="true" />
      <h2 id="final-cta-title" data-reveal="heading"><span className={styles.finalTitleDesktop}><span>これからの身体のために、</span><span>まずは今を知るところから。</span></span><span className={styles.finalTitleMobile}><span>これからの身体のために、</span><span>まずは今を知るところから。</span></span></h2>
      <p className={styles.finalLead} data-reveal="body" data-reveal-order="1"><span>トレーニングも、身体のケアも。</span><span>あなたに合った一歩を<span className={styles.noWrap}>LA LEGENDA</span>で。</span></p>
      <a className={`${styles.goldButton} ${styles.finalButton}`} href="#reservation" data-reveal="body" data-reveal-order="1">体験・相談を予約する</a>
    </div>
  </section>;
}

export function Footer() {
  return <footer className={styles.footer}><div className={styles.container}><div className={styles.footerGrid}><Image className={styles.footerLogo} src={imagePath("brand/la_legenda_footer_logo.png")} alt="LA LEGENDA Personal Training & Wellness" width={1122} height={1402} unoptimized data-reveal="image-left" data-reveal-order="2" /><div data-reveal="body" data-reveal-order="1"><p>LA LEGENDA</p><address>神奈川県横浜市保土ケ谷区星川1-25-10 Aletta星川1階<br />星川駅から徒歩約3分</address></div><nav aria-label="フッターナビゲーション" data-reveal="body" data-reveal-order="1"><a href="#concept">Concept</a><a href="#service">Service</a><a href="#price">Price</a><a href="#access">Access</a></nav></div><div className={styles.footerBottom} data-reveal="body" data-reveal-order="1"><small>営業提案用サンプル — 掲載内容・予約先は正式公開前に要確認</small><small>© LA LEGENDA Sample</small></div></div></footer>;
}
