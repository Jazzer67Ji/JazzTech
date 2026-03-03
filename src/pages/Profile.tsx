import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import { User, Mail, ShoppingBag, Heart, Settings } from 'lucide-react';

export function Profile() {
  // contexte d'authentification pour vérifier l'accès
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // redirection vers la page de login si l'utilisateur n'est pas connecté
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!user) {
    return null;
  }

  const stats = [
    { label: 'Commandes', value: '12', icon: ShoppingBag, color: 'bg-blue-500' },
    { label: 'Favoris', value: '8', icon: Heart, color: 'bg-red-500' },
    { label: 'Points', value: '420', icon: Settings, color: 'bg-green-500' },
  ];

  const recentOrders = [
    {
      id: '1',
      date: '10 Fév 2026',
      total: 299.99,
      status: 'Livrée',
      items: 1
    },
    {
      id: '2',
      date: '5 Fév 2026',
      total: 1759.98,
      status: 'En transit',
      items: 2
    },
    {
      id: '3',
      date: '28 Jan 2026',
      total: 449.99,
      status: 'Livrée',
      items: 1
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="flex items-center gap-6">
            {user.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="w-24 h-24 rounded-full"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-orange-600 flex items-center justify-center">
                <User className="w-12 h-12 text-white" />
              </div>
            )}
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>{user.email}</span>
              </div>
              <div className="mt-3 inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
                Membre Premium
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
                <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Commandes récentes */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Commandes récentes</h2>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="border border-gray-200 rounded-lg p-4 hover:border-orange-300 transition"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="font-semibold">Commande #{order.id}</span>
                      <span className="text-gray-600 text-sm">{order.date}</span>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        order.status === 'Livrée'
                          ? 'bg-green-100 text-green-600'
                          : 'bg-blue-100 text-blue-600'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {order.items} article{order.items > 1 ? 's' : ''}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold">{order.total.toFixed(2)} €</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Paramètres du compte */}
        <div className="bg-white rounded-xl shadow-md p-8 mt-8">
          <h2 className="text-2xl font-bold mb-6">Paramètres du compte</h2>
          <div className="space-y-4">
            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition flex items-center justify-between">
              <span>Modifier le profil</span>
              <span className="text-gray-400">›</span>
            </button>
            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition flex items-center justify-between">
              <span>Adresses de livraison</span>
              <span className="text-gray-400">›</span>
            </button>
            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition flex items-center justify-between">
              <span>Moyens de paiement</span>
              <span className="text-gray-400">›</span>
            </button>
            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition flex items-center justify-between">
              <span>Notifications</span>
              <span className="text-gray-400">›</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}