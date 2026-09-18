"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const hotPepperUrl = "https://beauty.hotpepper.jp/kr/slnH000813087/?cstt=1";

const links = [
  ["Concept", "#concept"],
  ["Service", "#service"],
  ["Price", "#price"],
  ["Access", "#access"],
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const panel = panelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>("a, button") ?? [];
    const focusFrame = requestAnimationFrame(() => focusable[0]?.focus());

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        requestAnimationFrame(() => buttonRef.current?.focus());
        return;
      }
      if (event.key !== "Tab" || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled || menuOpen ? styles.solid : ""}`}>
      <div className={styles.inner}>
        <a className={styles.logoLink} href="#top" aria-label="LA LEGENDA トップへ">
          <Image
            src={`${basePath}/images/brand/la_legenda_header_logo.png`}
            alt="LA LEGENDA"
            width={2172}
            height={724}
            priority
            unoptimized
          />
        </a>
        <nav className={styles.desktopNav} aria-label="メインナビゲーション">
          {links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          <a className={styles.headerCta} href={hotPepperUrl}>体験を予約する</a>
        </nav>
        <button
          ref={buttonRef}
          className={styles.menuButton}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <XMarkIcon aria-hidden="true" /> : <Bars3Icon aria-hidden="true" />}
        </button>
      </div>
      <div
        ref={panelRef}
        id="mobile-navigation"
        className={`${styles.mobilePanel} ${menuOpen ? styles.open : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="モバイルナビゲーション">
          {links.map(([label, href]) => <a href={href} key={href} onClick={closeMenu}>{label}</a>)}
          <a className={styles.mobileCta} href={hotPepperUrl} onClick={closeMenu}>体験を予約する</a>
        </nav>
      </div>
    </header>
  );
}
