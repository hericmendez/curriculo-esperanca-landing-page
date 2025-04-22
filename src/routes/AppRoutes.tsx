// AppRoutes.tsx

import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Sobre from '@/pages/Sobre';
import Contato from '@/pages/Contato';
import AppLayout from '@/layout/AppLayout';
import Servicos from '@/pages/Servicos';
import Mentorados from '@/pages/Mentorados';
import Blog from '@/pages/Blog';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        {/* Essa rota será renderizada dentro do <Outlet /> */}
        <Route index element={<Home />} /> 
        <Route path="sobre" element={<Sobre />} />
        <Route path="contato" element={<Contato />} />
        <Route path="servicos" element={<Servicos />} />
        <Route path="mentorados" element={<Mentorados />} />
        <Route path="blog" element={<Blog />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
