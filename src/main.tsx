import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { PlantillaAnimales } from "./Componentes/Paginas/PaginaAnimal";
import { PlantillaVeterinarios } from "./Componentes/Paginas/PaginaVeterinario";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PlantillaInventario } from "./Componentes/Paginas/PaginaInventario";
import { PlantillaRevisiones } from "./Componentes/Paginas/PaginaRevison";
import { Navbar } from "./Componentes/Organismos/Header";
import { Footer } from "./Componentes/Organismos/Footer";
import { PlantillaAlimentacion } from "./Componentes/Paginas/PaginaAlimentacion";
import { PlantillaSolicitudPersonal } from "./Componentes/Paginas/PaginaSolicitudPersonal";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Inventario" element={<PlantillaInventario />} />
        <Route path="/Animales" element={<PlantillaAnimales />} />
        <Route path="/Veterinarios" element={<PlantillaVeterinarios />} />
        <Route path="/Revisiones" element={<PlantillaRevisiones />} />
        <Route path="/Alimentacion" element={<PlantillaAlimentacion />} />
        <Route path="/Solicitud" element={<PlantillaSolicitudPersonal />} />
      </Routes>
    </BrowserRouter>
    <Footer></Footer>
  </StrictMode>
);
