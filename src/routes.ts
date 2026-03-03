// définition des routes de l'application
import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { Home } from "./pages/Home";
import { ProductDetail } from "./pages/ProductDetail";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { Cart } from "./pages/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "product/:id", Component: ProductDetail },
      { path: "login", Component: Login },
      { path: "profile", Component: Profile },
      { path: "cart", Component: Cart },
    ],
  },
]);
