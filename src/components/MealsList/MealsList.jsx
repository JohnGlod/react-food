import {Meal} from '../Meal/Meal'

const MealsList = ( {meals}) => {
  return <div className="catalog-list">
    {meals.map(meal => 
      <Meal key={meals.idMeal} {...meal} />
  )}
  </div>
}

export {MealsList}