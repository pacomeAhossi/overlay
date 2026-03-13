/**
 * PARTNERS LOGOS COMPONENT
 *
 * Affichage des logos partenaires avec scroll horizontal sur mobile
 *
 * RESPONSIVE (Mobile First) :
 * - Mobile : Scroll horizontal, 2-3 logos visibles
 * - Tablet : Grille 3×2
 * - Desktop : Grille 6×1 (tous visibles)
 */

interface Partner {
  name: string;
  logo: string; // Emoji ou chemin image
}

export default function PartnersLogos() {
  const partners: Partner[] = [
    { name: "Lumina", logo: "🌟" },
    { name: "Vortex", logo: "🌀" },
    { name: "Velocity", logo: "⚡" },
    { name: "Synergy", logo: "🔗" },
    { name: "Enigma", logo: "🎯" },
    { name: "Spectrum", logo: "🌈" },
  ];

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Texte descriptif */}
      <p
        className="
        text-center
        text-sm sm:text-md
        text-muted-foreground
        font-medium
      "
      >
        Trusted by 50,000+ businesses for innovative design and growth.
      </p>

      {/* 
        MOBILE : Scroll horizontal
        TABLET+ : Grille
      */}

      {/* Container mobile avec scroll */}
      <div className="sm:hidden">
        <div
          className="
          flex gap-8
          overflow-x-auto
          snap-x snap-mandatory
          scrollbar-hide
          px-4
          -mx-4
        "
        >
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="
                snap-center
                shrink-0
                flex flex-col items-center gap-2
                w-24
              "
            >
              <div
                className="
                text-3xl
                opacity-60
                hover:opacity-100
                transition-opacity
              "
              >
                {partner.logo}
              </div>
              <span
                className="
                text-xs
                text-muted-foreground
                font-medium
              "
              >
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Grille tablet et desktop */}
      <div
        className="
        hidden sm:grid
        grid-cols-3 lg:grid-cols-6
        gap-8 lg:gap-12
        items-center
        justify-items-center
      "
      >
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="
              flex flex-col items-center gap-2
              opacity-60
              hover:opacity-100
              transition-opacity
              cursor-default
            "
          >
            <div className="text-3xl lg:text-4xl">{partner.logo}</div>
            <span
              className="
              text-xs sm:text-sm
              text-muted-foreground
              font-medium
            "
            >
              {partner.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * EXPLICATIONS :
 *
 * 1. MOBILE FIRST (< 640px)
 *    - Scroll horizontal avec overflow-x-auto
 *    - snap-x snap-mandatory pour snap sur chaque logo
 *    - scrollbar-hide pour masquer la scrollbar
 *    - flex gap-8 pour espacement
 *    - w-24 pour largeur fixe des logos
 *
 * 2. TABLET (640px - 1024px)
 *    - grid-cols-3 pour 3 colonnes
 *    - 2 lignes de logos
 *    - gap-8 entre les logos
 *
 * 3. DESKTOP (≥ 1024px)
 *    - lg:grid-cols-6 pour 6 colonnes
 *    - Tous les logos sur 1 ligne
 *    - gap-12 pour plus d'espace
 *
 * 4. HIDDEN/BLOCK SWITCH
 *    - sm:hidden sur le container scroll (mobile only)
 *    - hidden sm:grid sur la grille (tablet+ only)
 *    - Évite de dupliquer le HTML
 *
 * 5. SCROLLBAR-HIDE
 *    - Classe Tailwind pour masquer la scrollbar
 *    - Garde le scroll fonctionnel
 *    - UI plus clean
 *
 * 6. SNAP SCROLL
 *    - snap-x snap-mandatory sur container
 *    - snap-center sur items
 *    - Scroll "magnétique" vers chaque logo
 *
 * 7. HOVER EFFECTS
 *    - opacity-60 par défaut
 *    - hover:opacity-100 pour mise en avant
 *    - transition-opacity smooth
 *
 * 8. REMPLACER LES EMOJIS
 *    Pour utiliser de vraies images :
 *
 *    <Image
 *      src={`/partners/${partner.logo}`}
 *      alt={partner.name}
 *      width={48}
 *      height={48}
 *      className="object-contain"
 *    />
 */
