import { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Importamos el contexto

const Cart = () => {
  // Obtenemos el carrito, las funciones y el total del contexto
  const { cart, addToCart, removeFromCart, total } = useContext(CartContext);

  return (
    <div className="container mt-5 p-5">
      <h2 className="mb-4">Detalles del pedido:</h2>
      
      <div className="list-group shadow-sm p-3 mb-5 bg-body rounded">
        {cart.length === 0 ? (
          <p className="text-center p-4">El carrito está vacío 😔</p>
        ) : (
          cart.map((pizza) => (
            <div key={pizza.id} className="list-group-item d-flex justify-content-between align-items-center">
              
              <div className="d-flex align-items-center">
                <img src={pizza.img} alt={pizza.name} style={{ width: '80px' }} className="rounded me-3"/>
                <div>
                  <h6 className="mb-0 text-capitalize fw-bold">{pizza.name}</h6>
                  <small className="text-muted">Precio unitario: ${pizza.price.toLocaleString('es-CL')}</small>
                </div>
              </div>

              <div className="d-flex align-items-center gap-2">
                <button 
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(pizza.id)}
                >
                  -
                </button>
                
                <span className="fw-bold fs-5 mx-2">{pizza.count}</span>
                
                <button 
                  className="btn btn-primary btn-sm"
                  onClick={() => addToCart(pizza)}
                >
                  +
                </button>
              </div>
              
              <div className="fw-bold">
                ${(pizza.price * pizza.count).toLocaleString('es-CL')}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="d-flex justify-content-end align-items-end flex-column">
        <h3 className="mb-3">Total a pagar: ${total.toLocaleString('es-CL')}</h3>
        <button className="btn btn-success btn-lg" disabled={cart.length === 0}>
          Ir a Pagar
        </button>
      </div>
    </div>
  );
};

export default Cart;