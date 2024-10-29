import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>tarea formulario</h1>
      <p>Esta tarea es para registrar usuarios.</p>
      <Link href="/registro">
        <button className="btn btn-primary mt-3">Ir a Registro</button>
      </Link>
    </div>
  );
}
