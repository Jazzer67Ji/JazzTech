import { Outlet } from 'react-router';
import { Header } from './Header';
import { Toaster } from 'sonner';

export function RootLayout() {
  // layout global partagé par toutes les routes enfants
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Outlet />
      </main>
      {/* toasts pour notifications globales */}
      <Toaster position="top-right" richColors />
    </div>
  );
}
