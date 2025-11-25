import { useState } from "react";
import { PostAlimentacion } from "../../Servicios/ServicioAlimentacion";
import { LabelInputText } from "../Moleculas/InputLabelText";
import { LabelInputNumber } from "../Moleculas/InputLabelNumber";
import { BotonObtenerdatos } from "../Moleculas/BotonAlerta";
import "../../CssGlobal/PagVeterinario.css";

export function FormularioAlimentacion() {
  const [form, setForm] = useState({
    CodigoAnimal: "",
    NombreAlimento: "",
    Tipo: "",
    Descripcion: "",
    Fecha: "",
    Cantidad: 0,
    Estado: "",
  });

  const handleChange = (key: keyof typeof form, value: string | number) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Enviando Alimentación:", form); 

    PostAlimentacion({
      CodigoAnimal: form.CodigoAnimal,
      NombreAlimento: form.NombreAlimento,
      Tipo: form.Tipo,
      Descripcion: form.Descripcion,
      Fecha: form.Fecha, 
      Cantidad: form.Cantidad,
      Estado: form.Estado,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-container">
      <div className="formulario-row">
        <LabelInputText
          label="Código Animal"
          value={form.CodigoAnimal}
          onChange={(v) => handleChange("CodigoAnimal", v)}
        />

        <LabelInputText
          label="Nombre del Alimento"
          value={form.NombreAlimento}
          onChange={(v) => handleChange("NombreAlimento", v)}
        />
      </div>

      <div className="formulario-row">
        <LabelInputText
          label="Tipo"
          value={form.Tipo}
          onChange={(v) => handleChange("Tipo", v)}
        />

        <LabelInputText
          label="Estado"
          value={form.Estado}
          onChange={(v) => handleChange("Estado", v)}
        />
      </div>

      <div className="formulario-row">
        <LabelInputText
          label="Descripción"
          value={form.Descripcion}
          onChange={(v) => handleChange("Descripcion", v)}
        />

        <LabelInputText
          label="Fecha"
          value={form.Fecha}
          onChange={(v) => handleChange("Fecha", v)}
        />
      </div>

      <div className="formulario-row">
        <LabelInputNumber
          label="Cantidad"
          value={form.Cantidad}
          onChange={(v) => handleChange("Cantidad", v)}
        />
      </div>

      <div className="formulario-row">
        <BotonObtenerdatos />
      </div>
    </form>
  );
}
