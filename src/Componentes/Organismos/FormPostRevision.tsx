import { useState } from "react";
import { PostRevision } from "../../Servicios/ServicioRevisiones";
import { LabelInputText } from "../Moleculas/InputLabelText";
import { LabelInputNumber } from "../Moleculas/InputLabelNumber";
import { BotonObtenerdatos } from "../Moleculas/BotonAlerta";
import "../../CssGlobal/PagVeterinario.css";

export function FormularioRevision() {
  const [form, setForm] = useState({
    FechaRevision: "",
    Condicion: "",
    FechaRecuperacion: "",
    Diagnostico: "",
    Temperatura: 0,
    PesoActual: 0,
    Tratamiento: "",
    Observaciones: "",
  });

  const handleChange = (key: keyof typeof form, value: string | number) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // AQUI VERIFICÁS LO QUE MANDÁS
    console.log("Enviando:", form);

    PostRevision({
      FechaRevision: form.FechaRevision, // YYYY-MM-DD
      Condicion: form.Condicion,
      FechaRecuperacion: form.FechaRecuperacion, // YYYY-MM-DD
      Diagnostico: form.Diagnostico,
      Temperatura: form.Temperatura,
      PesoActual: form.PesoActual,
      Tratamiento: form.Tratamiento,
      Observaciones: form.Observaciones,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-container">
      <div className="formulario-row">
        <LabelInputText
          label="Fecha Revisión"
          value={form.FechaRevision}
          onChange={(v) => handleChange("FechaRevision", v)}
        />

        <LabelInputText
          label="Condición"
          value={form.Condicion}
          onChange={(v) => handleChange("Condicion", v)}
        />
      </div>

      <div className="formulario-row">
        <LabelInputText
          label="Fecha Recuperación"
          value={form.FechaRecuperacion}
          onChange={(v) => handleChange("FechaRecuperacion", v)}
        />

        <LabelInputText
          label="Diagnóstico"
          value={form.Diagnostico}
          onChange={(v) => handleChange("Diagnostico", v)}
        />
      </div>

      <div className="formulario-row">
        <LabelInputNumber
          label="Temperatura"
          value={form.Temperatura}
          onChange={(v) => handleChange("Temperatura", v)}
        />

        <LabelInputNumber
          label="Peso Actual"
          value={form.PesoActual}
          onChange={(v) => handleChange("PesoActual", v)}
        />
      </div>

      <div className="formulario-row">
        <LabelInputText
          label="Tratamiento"
          value={form.Tratamiento}
          onChange={(v) => handleChange("Tratamiento", v)}
        />

        <LabelInputText
          label="Observaciones"
          value={form.Observaciones}
          onChange={(v) => handleChange("Observaciones", v)}
        />
      </div>

      <div className="formulario-row">
        <BotonObtenerdatos />
      </div>
    </form>
  );
}
