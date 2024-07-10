import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from "./components/Auth/authContext";
import IndexPage from "@/pages/index";
import Iniciar_sesion from "@/pages/login";
import Registro from "./pages/registro";
import Juego from './pages/juego';
import Comentario from './components/comentarios';


const App: React.FC = () => {
  return (
    <AuthProvider>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/iniciar_sesion" element={<Iniciar_sesion />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/juego" element={<Juego />} />
          <Route path="/comentario" element={<Comentario />} />
        </Routes>
      
    </AuthProvider>
  );
}

export default App;