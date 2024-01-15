import { useEffect, useState } from "react";
import { ref, get, child } from "firebase/database";
import database from "../firebase/fire";

function ApiList() {
  const [pizzaData, setPizzaData] = useState();

  useEffect(() => {
    const pizzaRef = ref(database);
    get(child(pizzaRef, `pizza/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setPizzaData(snapshot.val());
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {pizzaData ? (
        <ul>
          {pizzaData.map((item, id) => (
            <li key={id}>
              {`Категория: ${item.category} Цена: ${item.price} Рейтинг: ${item.rating} Размер: ${item.sizes} Название: ${item.title} ${item.types}`}{" "}
              <img src={item.imageUrl} alt="" /> <button>yes</button>{" "}
            </li>
          ))}
        </ul>
      ) : (
        <p> Loading...</p>
      )}
    </div>
  );
}

export default ApiList;
