# Chez Lam, site vitrine

Traiteur asiatique familial, 85 rue des Chesneaux, 95160 Montmorency. Astro 7 + Tailwind 4, site statique.

## En local
```bash
npm install
npm run dev        # http://localhost:4415
npm run build      # génère dist/
npm run preview    # sert dist/ sur le port 4415
npm run captures   # captures 390 px et 1440 px dans captures/ (après build)
npm run og         # régénère public/og.png et apple-touch-icon.png
```

## Déployer
Projet Vercel importé depuis le dépôt Git : chaque push sur `main` redéploie (Astro statique, détecté automatiquement).
Après le premier déploiement, mettre l'URL définitive dans `src/data/url.mjs` (sitemap, robots.txt, llms.txt, canonical et JSON-LD suivent).

## Où changer quoi
- **Nom, adresse, téléphone, note, paiements, prénom du patron, liens** : `src/data/site.ts`
- **Horaires** (2 services + jours d'ouverture) : `SERVICES` et `JOURS` dans `src/data/site.ts` ; le statut ouvert / coupure / fermé suit tout seul.
- **Vitrine du jour** (barquettes, prix, étiquettes) : `src/data/vitrine.json` (`prix: "6,50 €"`, `enVitrine: false` pour retirer un plat, `miseAJour: "2026-11-02"`).
- **Carte** : `src/data/carte.json`
- **Avis** : `AVIS` dans `src/data/site.ts` (uniquement de vrais avis).
- **Textes de l'accueil, histoire, frise 37 ans** : `src/pages/index.astro`
- **Photos** : les emplacements colorés de la frise (`frise` dans `src/pages/index.astro`). Placer les fichiers dans `src/assets/` et les afficher avec `<Image>` d'`astro:assets` (AVIF/WebP). Liste : `PHOTOS_A_PRENDRE.md`.
- Ce qui manque encore : `A_COMPLETER.md`.
