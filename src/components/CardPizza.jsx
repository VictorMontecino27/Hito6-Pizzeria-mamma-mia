import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CardPizza = ({ pizza }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card h-100">
      <img 
        src={pizza.img} 
        className="card-img-top" 
        alt={pizza.name} 
        style={{ height: "200px", objectFit: "cover" }} 
      />
      
      <div className="card-body">
        <h5 className="card-title text-capitalize">{pizza.name}</h5>
        <hr />
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Ingredientes:</li>
          <li className="list-group-item fs-6">
            🍕 {pizza.ingredients.join(", ")}
          </li>
        </ul>
        <hr />
        <div className="d-flex justify-content-center mb-3">
            <p className="h4">Precio: ${pizza.price.toLocaleString('es-CL')}</p>
        </div>
        
        <div className="d-flex justify-content-around pb-3">
            <button className="btn btn-light border">Ver Más 👀</button>
            <button 
              className="btn btn-dark" 
              onClick={() => addToCart(pizza)}
            >
              Añadir 🛒
            </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;