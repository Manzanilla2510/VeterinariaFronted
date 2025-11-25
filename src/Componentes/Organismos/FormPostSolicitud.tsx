import { useState } from "react";
import { PostSolicitudrevision } from "../../Servicios/ServicioSolicitud";
import { LabelInputText } from "../Moleculas/InputLabelText";
import { BotonObtenerdatos } from "../Moleculas/BotonAlerta";
import "../../CssGlobal/PagVeterinario.css";

export function FormularioSolicitud() {
  const [form, setForm] = useState({
    CodSolicitante: "",
    CodDestino: "",
    TipoSolicitud: "",
    Asunto: "",
    Descripcion: "",
    Prioridad: "",
  });

  const handleChange = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Enviando Solicitud:", form);

    PostSolicitudrevision({
      CodSolicitante: form.CodSolicitante,
      CodDestino: form.CodDestino,
      TipoSolicitud: form.TipoSolicitud,
      Asunto: form.Asunto,
      Descripcion: form.Descripcion,
      Prioridad: form.Prioridad,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-container">
      <div className="formulario-row">
        <LabelInputText
          label="Código Solicitante"
          value={form.CodSolicitante}
          onChange={(v) => handleChange("CodSolicitante", v)}
        />

        <LabelInputText
          label="Código Destino"
          value={form.CodDestino}
          onChange={(v) => handleChange("CodDestino", v)}
        />
      </div>

      <div className="formulario-row">
        <LabelInputText
          label="Tipo de Solicitud"
          value={form.TipoSolicitud}
          onChange={(v) => handleChange("TipoSolicitud", v)}
        />

        <LabelInputText
          label="Prioridad"
          value={form.Prioridad}
          onChange={(v) => handleChange("Prioridad", v)}
        />
      </div>

      <div className="formulario-row">
        <LabelInputText
          label="Asunto"
          value={form.Asunto}
          onChange={(v) => handleChange("Asunto", v)}
        />

        <LabelInputText
          label="Descripción"
          value={form.Descripcion}
          onChange={(v) => handleChange("Descripcion", v)}
        />
      </div>

      <div className="formulario-row">
        <BotonObtenerdatos />
      </div>
    </form>
  );
}
