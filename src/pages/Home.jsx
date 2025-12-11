import { useState, useEffect } from 'react';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  const getPizzas = async () => {
    const data = [
      {
        id: "p001",
        name: "napolitana",
        price: 5950,
        ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
        img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
      },
      {
        id: "p002",
        name: "española",
        price: 6950,
        ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
        img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
      },
      {
        id: "p003",
        name: "pepperoni",
        price: 6950,
        ingredients: ["mozzarella", "pepperoni", "orégano"],
        img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
      },
      {
        id: "p004",
        name: "dionisia",
        price: 7950,
        ingredients: ["mozzarella", "champiñones", "pimentón"],
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=640&auto=format&fit=crop"
      },
      {
        id: "p005",
        name: "vegetariana",
        price: 6500,
        ingredients: ["mozzarella", "pimientos", "aceitunas", "choclo"],
        img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=640&auto=format&fit=crop"
      },
      {
        id: "p006",
        name: "cuatro quesos",
        price: 7200,
        ingredients: ["mozzarella", "gorgonzola", "fontina", "parmesano"],
        // NUEVA IMAGEN: Formato horizontal, encuadre perfecto 🧀
        img: "https://images.unsplash.com/photo-1589187151053-5ec8818e661b?q=80&w=640&auto=format&fit=crop"
      }
    ];

    setPizzas(data);
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <>
      <Header />
      <div className="container my-4">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {pizzas.map((pizza) => (
            <div className="col" key={pizza.id}>
              <CardPizza pizza={pizza} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;