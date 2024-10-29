
export default function calcularEdad(fechaNacimiento: string): number {
  const fechaNac = new Date(fechaNacimiento);
  const hoy = new Date();
  let edad = hoy.getFullYear() - fechaNac.getFullYear();
  const mesDif = hoy.getMonth() - fechaNac.getMonth();

 
  if (mesDif < 0 || (mesDif === 0 && hoy.getDate() < fechaNac.getDate())) {
    edad--;
  }

  return edad >= 0 ? edad : 0;
}
