import { useState } from "react";
import { VeterinarioServicioPost } from "../../Servicios/EndpointsVeterinarios";
import { LabelInputText } from "../Moleculas/InputLabelText";
import { LabelInputNumber } from "../Moleculas/InputLabelNumber";
import { BotonObtenerdatos } from "../Moleculas/BotonAlerta";
import "../../CssGlobal/PagVeterinario.css";

export function FormularioVeterinario() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    ci: "",
    especialidad: "",
    correo: "",
    sueldo: 0,
  });

  const handleChange = (key: keyof typeof form, value: string | number) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    VeterinarioServicioPost({
      Nombre: form.nombre,
      Apellido: form.apellido,
      Telefono: form.telefono,
      Ci: form.ci,
      Especialidad: form.especialidad,
      Correo: form.correo,
      Sueldo: form.sueldo,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-container">
      <div className="formulario-row">
        <LabelInputText
          label="Nombre"
          value={form.nombre}
          onChange={(v) => handleChange("nombre", v)}
        ></LabelInputText>

        <LabelInputText
          label="Apellido"
          value={form.apellido}
          onChange={(v) => handleChange("apellido", v)}
        />
      </div>
      <div className="formulario-row">
        <LabelInputText
          label="Teléfono"
          value={form.telefono}
          onChange={(v) => handleChange("telefono", v)}
        />

        <LabelInputText
          label="CI"
          value={form.ci}
          onChange={(v) => handleChange("ci", v)}
        />
      </div>
      <div className="formulario-row">
        <LabelInputText
          label="Especialidad"
          value={form.especialidad}
          onChange={(v) => handleChange("especialidad", v)}
        />

        <LabelInputText
          label="Correo"
          value={form.correo}
          onChange={(v) => handleChange("correo", v)}
        />
      </div>
      <div className="formulario-row">
        <LabelInputNumber
          label="Sueldo"
          value={form.sueldo}
          onChange={(v) => handleChange("sueldo", v)}
        ></LabelInputNumber>
      </div>
      <div className="formulario-row">
        <BotonObtenerdatos></BotonObtenerdatos>
      </div>
    </form>
  );
}
