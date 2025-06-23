'use client';

import { useEffect, useState } from 'react';
import './project.css';

export default function ProjectsPage() {
  const [joke, setJoke] = useState('Chargement de la blague...');

  const fetchJoke = async () => {
    try {
      const res = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
      const data = await res.json();
      setJoke(data.joke || "Aucune blague trouvée !");
    } catch {
      setJoke("Erreur lors du chargement de la blague !");
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <main className="projects-main">
      <h1 className="projects-title">Test API</h1>

      <div className="joke-section">
        <h2>🎭 Une blague pour la route</h2>
        <p className="joke">{joke}</p>
        <button onClick={fetchJoke}>🔄 Une autre blague</button>
      </div>
    </main>
  );
}
