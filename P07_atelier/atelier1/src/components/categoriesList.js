import { plantList } from "../datas/plantList";

export function ListCategories() {
  let categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    [],
  );

  return (
    <div >
      <ul>
        {categories.map((cat) => (
          <li className="StyleList" key={cat}>
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
}
