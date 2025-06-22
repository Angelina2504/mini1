'use client';

import './about.css';

export default function AboutPage() {
  return (
    <main className="about-modern">
      <header className="hero">
        <h1>👋 Salut, moi c’est Angélina</h1>
        <p>Développeuse web curieuse, créative et orientée utilisateur.</p>
      </header>

      <section className="grid">
        <div className="card accent">
          <h2>💡 Compétences</h2>
          <ul>
            <li>React, Vue.js, HTML, CSS, JS</li>
            <li>Node.js, Express, MySQL</li>
            <li>Adaptabilité, rigueur, autonomie</li>
          </ul>
        </div>

        <div className="card">
          <h2>🚀 Projets</h2>
          <ul>
            <li><strong>Nounou Project</strong> – app pour assistantes maternelles</li>
            <li><strong>Geocode</strong> – bornes de recharge géolocalisées</li>
            <li><strong>Empathy</strong> – serious game (Hackathon)</li>
          </ul>
        </div>

        <div className="card">
          <h2>💼 Expériences</h2>
          <ul>
            <li>Dév. Web Front — iObeya (2024)</li>
            <li>Libraire — Ill aux trésors</li>
            <li>Responsable — Pressing La Lavandière</li>
          </ul>
        </div>

        <div className="card accent">
          <h2>🎓 Formation</h2>
          <ul>
            <li>Wild Code School (2024)</li>
            <li>Licence Métiers du Livre</li>
            <li>Master Projets Culturels</li>
          </ul>
        </div>

        <div className="card wide">
          <h2>🌍 En résumé</h2>
          <p>
            Après une carrière dans le livre et la culture, je me suis reconvertie dans le développement web pour créer des
            applications utiles, accessibles et belles. Je suis disponible pour une alternance ou un poste passionnant ✨
          </p>
        </div>
      </section>
    </main>
  );
}
