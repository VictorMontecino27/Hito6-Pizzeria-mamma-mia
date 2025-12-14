import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container text-center mt-5">
      <div className="p-5 bg-light border rounded-3">
        <h1 className="display-4 fw-bold">😕 404 - Página No Encontrada</h1>
        <p className="lead">
          ¡Chuta! Parece que la página que buscas no existe o fue movida.
        </p>
        <hr className="my-4" />
        <p>No te preocupes, puedes volver a nuestra página principal y pedir una rica pizza.</p>
        <Link to="/" className="btn btn-primary btn-lg">
          🏠 Volver al Inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;