1. **Mise en route**
   - Initialisation du dépôt Git et configuration du projet avec Vite + React.
   - Installation des dépendances de base via `npm install`.
2. **Création du bandeau** :
   - Développement du composant `Header.tsx` (le "bandeau") qui apparaît sur toutes les pages.
   - Intégration dans `RootLayout.tsx` pour garantir un affichage global.
3. **Page d’accueil (`Home.tsx`)** :
   - Conception de la page principale listant les produits à partir de `src/data/products.ts`.
   - Utilisation du composant `ProductCard.tsx` pour afficher chaque produit avec image et description.
4. **Page panier (`Cart.tsx`)** :
   - Mise en place du `CartContext.tsx` pour gérer l’état du panier (ajouts, suppressions, quantités).
   - Interface permettant aux utilisateurs de visualiser et modifier leur sélection.
5. **Page produit (`ProductDetail.tsx`)** :
   - Route dynamique affichant les détails complets d’un produit.
   - Bouton "Ajouter au panier" interagissant avec le contexte du panier.
6. **Page de connexion (`Login.tsx`)** :
   - Création d’un `AuthContext.tsx` simplifié pour gérer l’authentification.
   - Formulaire de login avec validation et redirection.
7. **Page profil (`Profile.tsx`)** :
   - Affichage des informations utilisateur simulées et gestion de la déconnexion.
   - Protection de la route pour empêcher l’accès sans authentification.

Chaque fonctionnalité a été développée dans l’ordre indiqué, avec des commits réguliers et des tests locaux via `npm run dev`. La structure du code reflète ces choix :

- Pages dans `src/pages`.
- Composants réutilisables dans `src/components` et sous-dossiers `ui` pour les éléments d’interface.
- Contextes d’état global dans `src/contexts`.
- Routes configurées dans `routes.ts` et utilisées depuis `main.tsx`.

  # JazzTech

  This is a code bundle for JazzTech.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.