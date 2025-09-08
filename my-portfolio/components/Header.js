"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("darkMode") === "true";
    setDarkMode(saved);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const html = document.documentElement;
    if (darkMode) html.classList.add("dark");
    else html.classList.remove("dark");
    localStorage.setItem("darkMode", darkMode ? "true" : "false");
  }, [darkMode, mounted]);

  if (!mounted) return null;

  return (
    <header className="site-header">
      <nav className="nav">
        <h1 className="brand">Noemi Soares</h1>
        <ul className="nav-list">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">Sobre</Link></li>
          <li><Link href="/projects">Projetos</Link></li>
          <li><Link href="/contact">Contato</Link></li>
        </ul>
        <button
          className="theme-toggle"
          onClick={() => setDarkMode((s) => !s)}
          aria-label="Alternar tema claro/escuro"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  );
}