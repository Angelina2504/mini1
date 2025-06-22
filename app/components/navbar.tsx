'use client';

import Link from 'next/link';
import './navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Next.Js test</div>
      <ul className="navbar-links">
        <li><Link href="/">Accueil</Link></li>
        <li><Link href="/projects">Projets</Link></li>
        <li><Link href="/about">À propos</Link></li>
      </ul>
    </nav>
  );
}
