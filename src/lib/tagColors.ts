// ─── Couleurs des tags d'actualités ─────────────────────────────────────────
// Source unique utilisée partout où un tag est affiché (homepage, page
// article, etc.) pour garantir que la même catégorie a toujours la même
// couleur, où qu'elle apparaisse sur le site.
// Chaque tag a une paire [couleur texte, couleur fond].

export const tagColors: Record<string, [string, string]> = {
  'Environnement':   ['#2d6a4f', '#d4edda'],
  'Économie':        ['#7a5000', '#fef3c7'],
  'Social':          ['#9b2335', '#fde8e8'],
  'Vote':            ['#5b21b6', '#ede9fe'],
  'Action':          ['#1c1c17', '#e5e5df'],
  'Communiqué':      ['#0e6272', '#d0f0f5'],
  'Vie associative': ['#9a3412', '#ffedd5'],
  'Événement':       ['#1e3a8a', '#dbeafe'],
};

const DEFAULT_TAG_COLOR: [string, string] = ['#1c1c17', '#e5e5df'];

/** Renvoie [couleurTexte, couleurFond] pour un tag donné, avec un repli neutre. */
export function getTagColor(tag: string): [string, string] {
  return tagColors[tag] ?? DEFAULT_TAG_COLOR;
}