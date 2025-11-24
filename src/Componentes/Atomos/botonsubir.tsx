import { VeterinarioServicioPost } from "../../Servicios/EndpointsVeterinarios";

<button
  onClick={() =>
    VeterinarioServicioPost({
      Nombre: "Jose",
      Apellido: "Lopez",
      Telefono: "12345678",
      Ci: "112233",
      Especialidad: "vaca",
      Correo: "jode@gmail",
      Sueldo: 67,
    })
  }
>
  Agregar
</button>;
