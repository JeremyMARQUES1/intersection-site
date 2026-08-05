/**
 * Déclaration de type pour le widget Netlify Identity (script externe).
 * Ce fichier étend l'interface Window globale de TypeScript
 * pour éviter les erreurs ts(2339) sur window.netlifyIdentity.
 */
 
interface NetlifyIdentityWidget {
  on: (event: string, cb: (user?: unknown) => void) => void;
  off: (event: string, cb?: (user?: unknown) => void) => void;
  open: (tab?: 'login' | 'signup') => void;
  close: () => void;
  logout: () => void;
  currentUser: () => unknown | null;
}
 
declare global {
  interface Window {
    netlifyIdentity?: NetlifyIdentityWidget;
  }
}
 
// Export vide nécessaire pour que TypeScript traite ce fichier
// comme un module et applique la déclaration globale correctement
export {};