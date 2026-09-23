"use client";
import { assetPath } from "@/lib/asset-path";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
export function Header({ book = false }: { book?: boolean }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const links = book
    ? [
        ["The book", "/cookbook"],
        ["The story", "/cookbook/about"],
        ["Questions", "/cookbook/faq"],
      ]
    : [
        ["Restaurant", "/restaurant"],
        ["Our menu", "/restaurant/menu"],
        ["Our story", "/restaurant/about"],
        ["Visit us", "/restaurant/contact"],
      ];
  return (
    <header className="site-header">
      <Link
        href="/"
        className="brand"
      >
        <Image
          src={assetPath("/images/white black logo.png")}
          alt=""
          width={46}
          height={46}
        />
        <span>
          FOUR FRIENDS<small>KITCHEN · CANADA</small>
        </span>
      </Link>
      <button
        className="mobile-toggle"
        aria-expanded={open}
        aria-controls="navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close ✕" : "Menu ☰"}
      </button>
      <nav
        id="navigation"
        className={open ? "nav open" : "nav"}
        aria-label="Main navigation"
      >
        {links.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            aria-current={path === href ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
        <Link
          className="switch-link"
          href={book ? "/restaurant" : "/cookbook"}
          onClick={() => setOpen(false)}
        >
          {book ? "The restaurant" : "The cookbook"} ↗
        </Link>
        <Link
          className="button small"
          href={book ? "/cookbook#order" : "/restaurant/reservations"}
          onClick={() => setOpen(false)}
        >
          {book ? "Get the book" : "Reserve a table"}
        </Link>
      </nav>
    </header>
  );
}
