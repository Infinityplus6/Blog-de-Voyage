
import React from "react";
import "./App.css";

const sections = [
  {
    id: "golden-gate",
    number: "01",
    title: "Ce n’est pas vraiment doré?",
    image: "/ggb.jpg",
    alt: "The Golden Gate Bridge in San Francisco",
    caption: "Le célèbre Golden Gate Bridge à San Francisco.",
    side: "left",
    paragraphs: [
      "Dès nos premiers jours à San Francisco, nous avons pris la direction du légendaire Golden Gate Bridge. On le voit sur d'innombrables cartes postales, mais se tenir à ses pieds est une tout autre expérience. Son architecture rouge internationale se détache majestueusement sur les eaux bleues de la baie.",
      "Sur place, j'ai beaucoup apprécié la promenade le long de la côte, qui offre une vue imprenable sur l'océan Pacifique et la ligne d'horizon de la ville. C'est le genre d'endroit emblématique dont on entend parler toute sa vie, et je peux vous assurer que cela vaut tout autant le détour. Entre l'air marin et la grandeur de l'ouvrage, nous n'avons pas été déçus par cette visite."
    ]
  },
  {
    id: "milky-way",
    number: "02",
    title: "Regarder l'infini en face",
    image: "/sfmilkyway.webp",
    alt: "The Milky Way visible in the night sky above the Pacific Ocean",
    caption: "La Voie lactée illuminant le ciel nocturne au-dessus du Pacifique.",
    side: "right",
    paragraphs: [
      "Le moment le plus fort de ce séjour est survenu tard le soir, à l'écart des lumières intenses du centre-ville. En regardant vers le large au-dessus de l'océan Pacifique, le ciel révélait toute sa splendeur : la Voie lactée était clairement visible dans le ciel, s'étendant d'un horizon à l'autre. Ce contraste saisissant entre le silence sombre de l'océan et l'éclat de milliards d'étoiles était l'occasion d'apprécier l'immensité de la nature. C'est un souvenir particulièrement précieux que je garderai toute ma vie."
    ]
  },
  {
    id: "snowbirds",
    number: "03",
    title: "Est-ce un (snow)bird? Est-ce un avion?",
    image: "/snowbirds.jpg",
    alt: "The Canadian Snowbirds performing at the San Francisco Fleet Week airshow",
    caption: "Les Snowbirds canadiens en pleine démonstration aérienne à la Fleet Week.",
    side: "right",
    paragraphs: [
      "Le lendemain, changement de décor ! Nous avons assisté aux démonstrations aériennes de la Fleet Week de San Francisco 2025. Le moment fort du spectacle a sans aucun doute été la performance des célèbres Snowbirds canadiens. Nous avons été impressionnés de voir les pilotes effectuer des figures aériennes aussi précises et coordonnées au-dessus de la baie de San Francisco."
    ]
  }
];

function IntroAnimation() {
  return (
    <div className="intro-animation" aria-hidden="true">
      <div className="intro-plane" />
    </div>
  );
}

function Hero() {
  return (
    <header className="hero">
      <div className="hero-overlay" />

      <div className="hero-top">
        <span>Maaz Siddiqui - FSF3U0</span>
        <span className="hero-location">San Francisco, Californie</span>
      </div>

      <div className="hero-title">
        <p className="hero-eyebrow">
          UN VOYAGE EN CALIFORNIE · OCTOBRE 2025
        </p>
        <h1>
          Des souvenirs
          <br />
          sous les étoiles
        </h1>
        <div className="title-underline" />
      </div>

      <div className="hero-bottom">
        <span>Trois jours sur la côte ouest</span>
        <span>↓</span>
      </div>
    </header>
  );
}

function Introduction() {
  return (
    <section className="introduction">
      <div className="intro-content">
        <span className="section-label">
          BIENVENUE À SAN FRANCISCO
        </span>

        <p className="intro-hook">
          Avez-vous déjà levé les yeux vers la nuit noire pour y découvrir
          un spectacle à couper le souffle, là où l'immensité de l'océan
          rencontre l'infini du ciel ?
        </p>

        <div className="intro-divider" />

        <p className="intro-description">
          En octobre 2025, à l'occasion du week-end prolongé de Thanksgiving,
          j'ai pris l'avion en direction de San Francisco, en Californie,
          pour rendre visite à mes oncles. Même si ce séjour n'a duré que
          trois jours, nous avons vécu un voyage incroyable, rempli de beaux
          paysages et de moments inoubliables. Récit d'une escapade expresse
          mais inoubliable sur la côte ouest.
        </p>
      </div>
    </section>
  );
}

function SectionDivider() {
  return (
    <div className="section-divider" aria-hidden="true">
      <span />
      <div className="divider-decoration">✦</div>
      <span />
    </div>
  );
}

function SectionCard({ section }) {
  const image = (
    <figure className="image-panel">
      <div className="image-frame">
        <img
          src={section.image}
          alt={section.alt}
          loading="lazy"
        />
      </div>
      <figcaption>{section.caption}</figcaption>
    </figure>
  );

  const text = (
    <article className="text-panel">
      <span className="section-number">{section.number}</span>
      <h3>{section.title}</h3>

      {section.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </article>
  );

  return (
    <section
      className={`story-section ${
        section.side === "left" ? "image-right" : "image-left"
      }`}
    >
      {section.side === "left" ? (
        <>
          {text}
          {image}
        </>
      ) : (
        <>
          {image}
          {text}
        </>
      )}
    </section>
  );
}

function MainStory() {
  return (
    <main className="story">
      <SectionCard section={sections[0]} />

      <section className="chapter-heading">
        <span className="section-label">
          LES MOMENTS DU VOYAGE
        </span>

        <h2>
          Du silence des étoiles au bruit des réacteurs
        </h2>

        <p>
          Si les visites de jour vous en mettent plein la vue,
          la véritable magie opère parfois une fois la nuit tombée.
        </p>
      </section>

      <SectionCard section={sections[1]} />

      <SectionDivider />

      <SectionCard section={sections[2]} />
    </main>
  );
}

function Conclusion() {
  return (
    <>
      <section className="closing-hero">
        <div className="closing-overlay" />

        <div className="closing-heading">
          <span>MES SOUVENIRS DE CALIFORNIE</span>
          <h2>Un week-end, mille souvenirs</h2>
          <div className="title-underline" />
        </div>
      </section>

      <section className="conclusion">
      <p>
        Même si notre séjour n'a duré que trois jours, il m'a laissé
        de très beaux souvenirs. Entre la découverte du Golden Gate
        Bridge, la vue impressionnante sur la Voie lactée et le spectacle
        aérien des Snowbirds, chaque journée nous a réservé quelque chose
        de différent. Mais c'est surtout le ciel étoilé au-dessus de
        l'océan Pacifique qui restera mon meilleur souvenir de ce voyage.
        Cette escapade m'a donné envie de découvrir encore davantage la
        Californie, et j'espère avoir l'occasion d'y retourner un jour !
      </p>
    </section>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <span>MAAZ SIDDIQUI · FSF3U0</span>
      <span>Des souvenirs sous les étoiles</span>
      <a href="#top">Retour en haut ↑</a>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <IntroAnimation />

      <div className="page-content" id="top">
        <Hero />
        <Introduction />
        <MainStory />
        <Conclusion />
        <Footer />
      </div>
    </>
  );
}
