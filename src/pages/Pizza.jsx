import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  const PIZZA_ID_FIJA = "P001"; 
  const API_URL = `http://localhost:5000/api/pizzas/${PIZZA_ID_FIJA}`;


  useEffect(() => {

    const fetchPizza = async () => {
      try {
        const response = await fetch(API_URL);
        

        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        setPizza(data);
        setError(null);
      } catch (err) {
        console.error("Error al obtener la pizza:", err);

        setError("Error al cargar los detalles de la pizza. Asegúrate de que el backend esté levantado en el puerto 5000.");
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, [API_URL]); 

  const formatearPrecio = (valor) => valor.toLocaleString('es-CL');

  if (loading) return <div className="container mt-5"><p>Cargando detalles de la pizza...</p></div>;
  if (error) return <div className="container mt-5"><p className="text-danger">{error}</p></div>;
  if (!pizza) return <div className="container mt-5"><p>Pizza no encontrada.</p></div>;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={pizza.img} className="img-fluid rounded shadow" alt={`Pizza ${pizza.name}`} />
        </div>
        <div className="col-md-6">
          <h1 className="text-capitalize fw-bold">{pizza.name}</h1>
          <p className="lead mt-3">{pizza.desc}</p>
          <hr />
          
          <p className="mb-2"><b>Ingredientes:</b></p>
          <ul className="list-unstyled">
            {pizza.ingredients.map((ingrediente, index) => (
              <li key={index} className="text-capitalize">
                🍕 {ingrediente}
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <h2 className="text-danger">Precio: ${formatearPrecio(pizza.price)}</h2> 
          </div>

          <div className="mt-4">
            <button className="btn btn-danger btn-lg me-2">
              Añadir al Carrito
            </button>
            
            <Link to="/" className="btn btn-info btn-lg">Volver al Menú</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;