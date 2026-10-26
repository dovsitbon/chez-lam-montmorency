// Données de la maison : NAP, horaires, liens, paiements. Modifier ici, tout le site suit.
import { URL_SITE } from './url.mjs';

export const SITE = {
  url: URL_SITE,
  nom: 'Chez Lam',
  societe: 'EURL CHEZ LAM',
  creation: 2009,
  anneesRegion: 37,
  adresse: { rue: '85 rue des Chesneaux', cp: '95160', ville: 'Montmorency', pays: 'FR' },
  telAffiche: '01 39 64 27 86',
  telLien: '+33139642786',
  note: '4,7',
  noteNum: 4.7,
  nbAvis: 46,
  noteTripadvisor: '4,7',
  itineraire: 'https://www.google.com/maps/dir/?api=1&destination=85%20rue%20des%20Chesneaux%2C%2095160%20Montmorency',
  carte: 'https://www.google.com/maps?q=85%20rue%20des%20Chesneaux%2C%2095160%20Montmorency&output=embed',
  voisines: ['Groslay', 'Deuil-la-Barre', 'Montmagny', 'Saint-Brice-sous-Forêt', 'Sarcelles', 'Domont', 'Ézanville'],
  paiements: ['Carte bancaire', 'Sans contact', 'Titres-restaurant (Pluxee…)'],
  // Le prénom « Paul » est cité par des clients : il ne s'affiche que si confirme = true.
  patron: { prenom: 'Paul', confirme: false },
  // Liens à ajouter quand on les a (fiche Google, TripAdvisor, page montmorency-tourisme.fr).
  sameAs: [] as string[],
};

// Horaires. jour : 0 = dimanche … 6 = samedi. Deux services par jour, format "HH:MM".
export const SERVICES = [
  { nom: 'Midi', ouvre: '10:45', ferme: '13:45' },
  { nom: 'Soir', ouvre: '16:45', ferme: '20:30' },
];
export const JOURS = [
  { jour: 1, nom: 'Lundi', ouvert: true },
  { jour: 2, nom: 'Mardi', ouvert: true },
  { jour: 3, nom: 'Mercredi', ouvert: true },
  { jour: 4, nom: 'Jeudi', ouvert: true },
  { jour: 5, nom: 'Vendredi', ouvert: true },
  { jour: 6, nom: 'Samedi', ouvert: true },
  { jour: 0, nom: 'Dimanche', ouvert: false },
];

export const fmtHeure = (h: string) => h.replace(':', 'h');

// Les 5 extraits d'avis fournis (Avis Google). Ne pas en ajouter d'inventés.
export const AVIS = [
  "Quelle agréable surprise lorsque l'on pousse la porte de ce petit restaurant asiatique. La vitrine et les odeurs des plats cuisinés sur place vous invitent à tout déguster.",
  'Nous avons pris un peu de tout : riz cantonais, nems au poulet, bouchées et raviolis de crevette, porc et poulet caramélisés, poulet citronnelle et poulet au curry. Tout était délicieux !',
  "Les samoussas aux légumes sont les meilleurs que j'ai mangés de ma vie !",
  "On y mange depuis 20 ans maintenant et c'est toujours aussi bon.",
  'Le bo bun est un régal et pas cher.',
];
