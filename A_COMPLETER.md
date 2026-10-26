# À compléter avant mise en ligne définitive

Chaque point apparaît sur le site avec un marqueur **[À CONFIRMER]**.

## Contenu
- [ ] **Prix** de chaque plat de la vitrine (`src/data/vitrine.json`) et de la carte (`src/data/carte.json`).
- [ ] **Carte complète** : seuls les plats cités par les clients sont listés ; garniture du bo bun.
- [ ] **Date de mise à jour de la vitrine** (`miseAJour` dans `vitrine.json`) : à tenir à jour, ou retirer la ligne.
- [ ] **Halal** : formulation exacte souhaitée (« Le poulet est halal. Les autres viandes ne le sont pas. » pour l'instant).
- [ ] **Patron** : comment il souhaite être présenté. Des clients l'appellent « Paul » : si c'est d'accord, passer `patron.confirme` à `true` dans `src/data/site.ts`.
- [ ] **Année d'arrivée** de la famille dans la région (frise « Il y a 37 ans »).
- [ ] **Fondue chinoise** : bouillon sur commande, délai et quantités.
- [ ] **Livraison** : zone, jours, minimum de commande (ou retirer si arrêtée).
- [ ] **Stationnement** : où se garer près du 85 rue des Chesneaux.

## Légal
- [ ] SIRET, capital social, nom du gérant (directeur de la publication) : `src/pages/mentions-legales.astro`.

## SEO / référencement
- [ ] **Coordonnées GPS** (`geo` du JSON-LD) : non renseignées faute de coordonnées sûres. Ajouter latitude / longitude exactes dans `src/layouts/Base.astro`.
- [ ] **Liens `sameAs`** : URL de la fiche Google, de la page TripAdvisor et de la page montmorency-tourisme.fr, à mettre dans `SITE.sameAs` (`src/data/site.ts`).
- [ ] URL définitive du site dans `src/data/url.mjs` (actuellement `https://chez-lam-montmorency.vercel.app`).

## Photos
- [ ] Voir `PHOTOS_A_PRENDRE.md` (frise de famille : 4 photos d'album à fournir par la famille).
