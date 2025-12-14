import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Cart = () => {
  // Traemos el carrito y el total (ESTO ES LO QUE TE FALTABA)
  const { cart, total, increase, decrease } = useContext(CartContext);
  const { token } = useContext(UserContext);

  return (
    <div className="container mt-5">
      <div className="p-5">
        <h2 className="mb-4">Detalles del pedido:</h2>
        <ul className="list-group">
          {cart.map((pizza) => (
            <li key={pizza.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src={pizza.img} alt={pizza.name} style={{ width: "50px" }} className="me-3" />
                <div>
                  <h6 className="mb-0 text-capitalize">{pizza.name}</h6>
                  <small className="text-muted">${pizza.price.toLocaleString()}</small>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <button className="btn btn-sm btn-danger me-2" onClick={() => decrease(pizza.id)}>-</button>
                <span className="fw-bold">{pizza.count}</span>
                <button className="btn btn-sm btn-primary ms-2" onClick={() => increase(pizza.id)}>+</button>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <h3>Total: ${total.toLocaleString()}</h3>
          <button
            className="btn btn-dark"
            disabled={!token}
          >
            Pagar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;