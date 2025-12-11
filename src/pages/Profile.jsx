const Profile = () => {
  return (
    <div className="container mt-5">
      <div className="card w-50 mx-auto shadow-sm">
        <div className="card-header bg-dark text-white">
          <h3 className="mb-0">👤 Mi Perfil</h3>
        </div>
        <div className="card-body">
          <h5 className="card-title">Información del Usuario</h5>
          <p className="card-text">
            <strong>📧 Email:</strong> usuario@mammamipizza.com
          </p>
          <hr />
          <div className="d-grid gap-2">
            <button className="btn btn-danger">
              🔒 Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;