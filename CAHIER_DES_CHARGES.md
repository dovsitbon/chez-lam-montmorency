# Prompt Claude Code : site « Chez Lam » (traiteur asiatique familial, Montmorency)

Tu es un développeur front-end et directeur artistique senior. Crée le site vitrine complet de **Chez Lam**, traiteur et petit restaurant asiatique familial de Montmorency. Objectif business : montrer la **vitrine du jour** et la carte, générer des **commandes à emporter par téléphone** (midi et soir), et raconter l'histoire d'une famille installée dans la région **depuis 37 ans**.

## Fiche d'identité (informations vérifiées)
- **Nom** : Chez Lam (EURL CHEZ LAM, créée en 2009 au 85 rue des Chesneaux)
- **Type** : traiteur asiatique (chinois, vietnamien, thaï), plats cuisinés sur place, petite salle avec service à table, vente à emporter, livraison
- **Adresse** : 85 rue des Chesneaux, 95160 Montmorency
- **Téléphone** : 01 39 64 27 86
- **Horaires** : lundi au samedi 10h45–13h45 et 16h45–20h30 · dimanche fermé
- **Note Google** : 4,7/5 sur 46 avis · TripAdvisor 4,7/5 · référencé sur montmorency-tourisme.fr
- **La famille** : un client écrit « 37 ans que tu as débarqué avec ta cuisine et ta famille dans cette région » ; d'autres citent le patron sous le prénom **Paul** `[À CONFIRMER : comment le patron souhaite être présenté]`
- **Spécificité** : le **poulet est halal** (le reste non : à formuler `[À CONFIRMER]`)
- **Paiements** : CB, sans contact, titres-restaurant (Pluxee…)
- **Schema.org** : `Restaurant` + `FoodEstablishment` (servesCuisine : Chinese, Vietnamese, Thai)

## Ce que disent les clients
Accueil chaleureux, « on se sent comme à la maison », patron très gentil, clients fidèles depuis 20 ans, « le meilleur traiteur du coin », vraie cuisine maison. Plats cités : **bo bun** (« un régal et pas cher »), **nems** au poulet, **samoussas aux légumes** (« les meilleurs de ma vie »), **bouchées et raviolis de crevette**, **porc et poulet caramélisés**, **poulet citronnelle**, **poulet au curry**, **riz cantonais**, **bánh cuốn au porc**, **bouillon pour fondue chinoise**. La vitrine et les odeurs donnent envie dès l'entrée.

Extraits d'avis utilisables (« Avis Google ») :
- « Quelle agréable surprise lorsque l'on pousse la porte de ce petit restaurant asiatique. La vitrine et les odeurs des plats cuisinés sur place vous invitent à tout déguster. »
- « Nous avons pris un peu de tout : riz cantonais, nems au poulet, bouchées et raviolis de crevette, porc et poulet caramélisés, poulet citronnelle et poulet au curry. Tout était délicieux ! »
- « Les samoussas aux légumes sont les meilleurs que j'ai mangés de ma vie ! »
- « On y mange depuis 20 ans maintenant et c'est toujours aussi bon. »
- « Le bo bun est un régal et pas cher. »

## Direction artistique (angle : « la vitrine du traiteur et l'album de famille »)
- Inspiration : **la vitrine réfrigérée avec ses plats en barquettes, les étiquettes de prix écrites à la main, le carrelage blanc, l'album photo de famille** (37 ans d'histoire). Chaleureux, modeste, généreux.
- Palette : jaune moutarde, bleu pétrole, blanc carrelage, rouge brique en accent. (Différente du rouge laque/jade d'un restaurant chinois classique.)
- Typo : une serif douce et ronde (ex. Young Serif) + une sans robuste (ex. Public Sans) ; étiquettes de prix en écriture manuscrite **dessinée** (ex. Caveat), avec parcimonie.
- Idée signature : **la vitrine du jour** : une grille de « barquettes » avec étiquettes manuscrites (nom + prix), alimentée par `src/data/vitrine.json`, et une frise « 37 ans » en photos de famille (à fournir par le patron).

## Structure
1. **Accueil** : « Le traiteur asiatique de Montmorency, en famille depuis 37 ans », note 4,7/5, boutons « Commander par téléphone » + « Voir la vitrine », statut ouvert/fermé (midi / soir).
2. **La vitrine du jour** : plats cités ci-dessus, prix `[À CONFIRMER]`.
3. **La carte complète** : entrées (nems, samoussas, raviolis, bouchées), plats (caramélisé, citronnelle, curry), bo bun, riz, spécialités (bánh cuốn), fondue chinoise sur commande `[À CONFIRMER]`. `src/data/carte.json`.
4. **L'histoire** : 37 ans dans la région, une cuisine familiale (texte court, photos d'archives à fournir).
5. **Commander** : téléphone, horaires de retrait midi et soir, titres-restaurant acceptés, livraison `[À CONFIRMER]`.
6. **Avis** : 5 extraits + 4,7/5.
7. **Infos pratiques** : horaires (coupure 13h45–16h45 très visible), adresse rue des Chesneaux, carte.

---

## Règles communes (à respecter strictement)

### 1. Avant de coder
- Liste les skills et plugins disponibles dans ta session et **utilise toutes celles qui s'appliquent** : design frontend (ex. `frontend-design`), tests navigateur / captures (Playwright, `webapp-testing`), images, déploiement, etc. Dis-moi lesquelles tu utilises.
- Propose-moi en 10 lignes max la direction artistique (palette en hex, 2 polices, ambiance, 1 idée de mise en page signature) **puis enchaîne sans attendre ma validation**.

### 2. Stack technique
- **Astro + Tailwind CSS**, site statique, zéro framework JS lourd côté client (îlots JS seulement si nécessaire).
- Polices auto-hébergées (`@fontsource`), pas d'appel Google Fonts.
- Images en AVIF/WebP via `astro:assets`, `loading="lazy"` sauf la première image.
- Déploiement prévu sur **Vercel** (ajoute la config si besoin). Si un accès Vercel est connecté dans ta session, fais un déploiement **preview** et donne-moi l'URL.
- Objectif Lighthouse : ≥ 95 sur les 4 scores, mobile.

### 3. Design qui NE FAIT PAS « site généré par IA » (priorité n°1)
Interdit :
- dégradés violet/bleu, « glassmorphism », blobs flous en fond, néons, ombres molles partout ;
- la grille « 3 cartes avec une icône + titre + 2 lignes » ;
- les emojis comme icônes, les icônes génériques type Heroicons/Lucide posées partout ;
- Inter/Poppins/Montserrat seules, tout centré, tout arrondi en `rounded-2xl` ;
- les phrases creuses : « Bienvenue chez… », « Découvrez… », « Plongez dans… », « Votre partenaire de confiance », « Une expérience unique », « Notre passion, votre satisfaction » ;
- les fausses stats (« +500 clients satisfaits »), les faux témoignages, les photos de banque d'images clichés (poignée de main, personnes en costume qui sourient).

À faire :
- une **identité propre au lieu** (voir la direction artistique plus haut), avec un ou deux partis pris forts : typographie éditoriale, mise en page asymétrique, détails réels (ardoise, ticket, plaque, carte routière, numéro de rue en très grand…) ;
- des textes **courts, concrets, à la voix du commerçant**, avec de vrais détails (horaires, plats, adresses, noms de rues, parkings) ;
- du rythme : alterner sections pleines et aérées, une grande typo, des espaces généreux ;
- des micro-interactions sobres (hover, apparition légère au scroll), rien de plus ;
- `prefers-reduced-motion` respecté.

### 4. Contenu : zéro invention
- Utilise **uniquement** les informations fournies dans ce prompt.
- Tout ce qui manque (prix, plats exacts, photos, nom du gérant, SIRET…) = un marqueur visible **`[À CONFIRMER]`** et une entrée dans le fichier `A_COMPLETER.md` à la racine.
- Avis clients : n'utilise **que** les extraits fournis, attribués « Avis Google ». Jamais d'avis inventé, jamais de nom inventé.

### 5. Photos
- **Ne télécharge pas et n'intègre pas** de photos Google Maps / Facebook / Instagram (droits d'auteur des clients et du commerce).
- Mets des emplacements propres (bloc couleur + légende du cliché attendu, pas de gris « placeholder ») et crée `PHOTOS_A_PRENDRE.md` : la liste précise des photos à faire (cadrage, lumière, format), pour que je les prenne moi-même chez le commerçant.

### 6. SEO local (indispensable)
- `<html lang="fr">`, title + meta description uniques, Open Graph, favicon.
- **JSON-LD schema.org** adapté (type indiqué plus haut) avec nom, adresse, téléphone, horaires `openingHoursSpecification`, géolocalisation, `sameAs` (réseaux sociaux).
- Nom / adresse / téléphone identiques partout (NAP), pied de page compris.
- Carte : iframe Google Maps chargée **au clic** (façade légère) pour ne pas plomber la perf.
- `sitemap.xml`, `robots.txt`, URLs propres, H1 unique, balises `alt` descriptives.
- Mots-clés locaux naturels : la ville + les communes voisines (Groslay, Montmorency, Saint-Brice-sous-Forêt, Sarcelles, Deuil-la-Barre, Montmagny, Domont, Ézanville).

### 7. Conversion et mobile
- Mobile d'abord. **Bouton d'appel fixe en bas d'écran sur mobile** (`tel:`), + bouton itinéraire (lien Google Maps).
- Horaires lisibles, avec indication « Ouvert maintenant / Fermé » calculée en JS léger (fuseau Europe/Paris).
- Accessibilité AA : contrastes, focus visibles, navigation clavier, tailles de cibles ≥ 44 px.

### 8. Légal
- Page **Mentions légales** (éditeur, hébergeur Vercel, SIRET `[À CONFIRMER]`) et **Politique de confidentialité**.
- Pas de traceur, donc pas de bandeau cookies. Si un formulaire existe : consentement RGPD + envoi via un service sans backend (ex. Formspree / Web3Forms, clé `[À CONFIRMER]`).

### 9. Livraison
1. `npm run build` sans erreur ni warning.
2. Captures Playwright **mobile (390 px) et desktop (1440 px)** de chaque page ; regarde-les toi-même et corrige ce qui fait « template » ou « IA » avant de me rendre la main.
3. Un `README.md` court : lancer en local, déployer, où changer textes / photos / horaires.
4. Les fichiers `A_COMPLETER.md` et `PHOTOS_A_PRENDRE.md`.
5. Un résumé final de 10 lignes max : ce qui est fait, ce qui manque.
