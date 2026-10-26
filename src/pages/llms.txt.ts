import type { APIRoute } from 'astro';
import { SITE, SERVICES, AVIS, fmtHeure } from '../data/site';
import carte from '../data/carte.json';

const [midi, soir] = SERVICES;
const u = (p: string) => new URL(p, SITE.url).href;

export const GET: APIRoute = () => {
  const plats = carte.rubriques.map((r) => `- ${r.titre} : ${r.plats.map((p) => p.nom).join(', ')}`).join('\n');
  const txt = `# Chez Lam, traiteur asiatique à Montmorency

> Traiteur et petit restaurant asiatique familial (cuisine chinoise, vietnamienne et thaïe), au ${SITE.adresse.rue}, ${SITE.adresse.cp} ${SITE.adresse.ville} (Val-d'Oise). Plats cuisinés sur place, vente à emporter, petite salle avec service à table. La famille est installée dans la région depuis ${SITE.anneesRegion} ans ; ${SITE.societe} existe depuis ${SITE.creation}.

## Infos pratiques
- Téléphone (commandes à emporter) : ${SITE.telAffiche}
- Horaires : lundi au samedi, ${fmtHeure(midi.ouvre)}–${fmtHeure(midi.ferme)} et ${fmtHeure(soir.ouvre)}–${fmtHeure(soir.ferme)} ; fermé entre ${fmtHeure(midi.ferme)} et ${fmtHeure(soir.ouvre)} ; dimanche fermé
- Paiement : ${SITE.paiements.join(', ')}
- Le poulet est halal ; les autres viandes ne le sont pas
- Note : ${SITE.note}/5 sur ${SITE.nbAvis} avis Google ; TripAdvisor ${SITE.noteTripadvisor}/5
- Communes proches : ${SITE.voisines.join(', ')}

## Plats cités par les clients
${plats}

## Avis Google (extraits)
${AVIS.map((a) => `- « ${a} »`).join('\n')}

## Pages
- [Accueil : vitrine du jour, carte, histoire, horaires](${u('/')})
- [Mentions légales](${u('/mentions-legales/')})
- [Confidentialité](${u('/confidentialite/')})
`;
  return new Response(txt, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
