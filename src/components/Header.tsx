// Bibliothèques de routage et icônes
import { Link } from 'react-router';
import { ShoppingCart, User, LogOut } from 'lucide-react';
// Hooks personnalisés pour l'authentification et le panier
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
// Logo utilisé dans le bandeau
import jazztechLogo from '../data/jazztech.png';

export function Header() {
  const { user, logout, isAuthenticated } = useAuth();
  const { totalItems } = useCart();

  return (
    // encadré supérieur fixé en haut de page
    <header className="bg-black shadow-sm sticky top-0 z-50" style={{ backgroundColor: 'black' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* logo cliable renvoyant à l'accueil */}
          <Link to="/" className="flex items-center">
            <img
              src={jazztechLogo}
              alt="JazzTech"
              className="h-16 w-auto object-contain block"
            />
          </Link>

          {/* liens de navigation principaux */}
          <nav className="flex items-center gap-6">
            <Link to="/" className="text-white hover:text-orange-400 transition">
              Accueil
            </Link>

            {/* icône panier avec nombre d'articles */}
            <Link to="/cart" className="relative text-gray-700 hover:text-orange-600 transition">
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* zone utilisateur : connexion ou profil/logout */}
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                {/* lien vers profil avec nom si connecté */}
                <Link to="/profile" className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition">
                  <User className="w-6 h-6" />
                  <span className="hidden sm:inline">{user?.name}</span>
                </Link>
                <button
                  onClick={logout}
                  className="text-gray-500 hover:text-red-600 transition"
                  title="Déconnexion"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              // bouton de connexion lorsqu'aucun utilisateur n'est loggé
              <Link
                to="/login"
                className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition"
              >
                <User className="w-5 h-5" />
                <span>Connexion</span>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}