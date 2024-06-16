import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { Navbar, ScrollToTop } from "@/widgets/layout";
import routes from "@/routes";
import { CartProvider } from '@/pages';

function App() {
  const { pathname } = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    // Reset scroll position on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <CartProvider>
      <>
        {!(
          pathname === '/sign-in' ||
          pathname === '/sign-up' ||
          pathname === '/form'
        ) && (
          <div className="container mx-auto">
            <Navbar routes={routes} />
            <ScrollToTop routes={routes} />
          </div>
        )}
        <Routes>
          {routes.map(({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
          )}
          <Route path="*" element={<Navigate to="/form" replace />} />
        </Routes>
      </>
    </CartProvider>
  );
}

export default App;
  