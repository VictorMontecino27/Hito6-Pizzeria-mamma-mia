import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getPizza = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        const data = await res.json();
        setPizza(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getPizza();
  }, [id]);

  if (!pizza) return <div className="text-center mt-5">Cargando...</div>;

  return (
    <div className="container mt-5">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={pizza.img} className="img-fluid rounded-start" alt={pizza.name} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-capitalize">{pizza.name}</h5>
              <p className="card-text">{pizza.desc}</p>
              <ul>
                {pizza.ingredients?.map((i) => (
                  <li key={i}>🍕 {i}</li>
                ))}
              </ul>
              <div className="d-flex justify-content-between">
                <h4>Precio: ${pizza.price}</h4>
                <button className="btn btn-dark">Añadir 🛒</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;