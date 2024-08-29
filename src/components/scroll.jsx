import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Hace scroll al inicio de la página
  }, [pathname]); // Se ejecuta cada vez que cambia la ruta

  return null;
}

export default ScrollToTop;
