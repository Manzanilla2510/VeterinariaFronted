import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { PlantillaAnimales } from "./Componentes/Plantillas/PlantillaAnimal";
import { PlantillaVeterinarios } from "./Componentes/Plantillas/PlantillaVeterinario";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PlantillaInventario } from "./Componentes/Plantillas/PlantillaInventario";
import { PlantillaRevisiones } from "./Componentes/Plantillas/PlantillaRevison";
import { Navbar } from "./Componentes/Organismos/Header";
import { Footer } from "./Componentes/Organismos/Footer";
import { PlantillaAlimentacion } from "./Componentes/Plantillas/PlantillaAlimentacion";
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
      </Routes>
    </BrowserRouter>
    <Footer></Footer>
  </StrictMode>
);
