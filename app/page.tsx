'use client';

import { useState } from 'react';
import Image from 'next/image';
import './globals.css';

export default function HomePage() {
  const [isPile, setIsPile] = useState(true);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleClick = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setIsPile(Math.random() < 0.5);
      setIsSpinning(false);
    }, 600);
  };

  return (
    <main className="container">
      <h1>Bienvenue !</h1>
      <p className="intro">
        Moi c’est Angélina — et voici une pièce un peu spéciale. Cliquez pour faire votre choix du destin 🪙
      </p>

      <div
        className={`image-wrapper ${isSpinning ? 'spin' : ''}`}
        onClick={handleClick}
        title="Clique pour lancer la pièce !"
      >
        <Image
          src="/pile.png"
          alt="Photo de profil"
          width={200}
          height={200}
        />
      </div>

      <p className="message">
        {isPile
          ? 'I win – vous me prenez dans l’entreprise.'
          : 'You win – je signe pour travailler dans votre entreprise.'}
      </p>
    </main>
  );
}
