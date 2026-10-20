import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";

function ShoppingList() {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    [],
  );

  return (
    <div className="lmj-shopping-list">
      <ul className="lmj-categories">
        {categories.map((cat) => (
          <li key={cat} className="lmj-category">
            {cat}
          </li>
        ))}
      </ul>

      <ul className="lmj-plant-list">
        {plantList.map((plant) => (
          <li key={plant.id} className="lmj-plant-item">
            {plant.isSpecialOffer && <span className='lmj-sale'>Solde</span>}
            {plant.isBestSale && (
              <span className="lmj-badge">🔥 Best seller</span>
            )}

            {plant.cover && (
              <img
                src={plant.cover}
                alt={`${plant.name} cover`}
                className="lmj-plant-cover"
              />
            )}

            <div className="lmj-plant-body">
              <h3 className="lmj-plant-name">{plant.name}</h3>
              <span className="lmj-plant-category">{plant.category}</span>

              <div className="lmj-plant-details">
                {plant.light !== undefined && (
                  <span>☀️ Light: {plant.light}/3</span>
                )}
                {plant.water !== undefined && (
                  <span>💧 Water: {plant.water}/3</span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
