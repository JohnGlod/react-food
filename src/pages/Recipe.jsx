import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMealById } from '../api';
import { Preloader } from '../components/Preloader/Preloader';

const Recipe = () => {
  const [recipe, setRecipe] = useState({});
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  const { id } = useParams();

  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, [id]);

  return (
    <>
      <button className='btn' onClick={handleClick}>
        Go back!
      </button>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className='recipe'>
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className='recipe__img'
          />
          <h2 className='recipe__title'>{recipe.strMeal}</h2>

          <h6 className='recipe__subtitle'>Category: {recipe.strCategory}</h6> 
          {recipe.strArea ? (
            <h6 className='recipe__subtitle'>Area: {recipe.strArea}</h6>
          ) : null}
          <p className="recipe__descr">{recipe.strInstructions}</p>
          <div className="recipe__help">
          <table className='ingredients centered'>
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {
                Object.keys(recipe).map(key => {
                  if (key.includes('Ingredient') && recipe[key]){
                    return (
                      <tr key={key}>
                        <td>{recipe[key]}</td>
                        <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                      </tr>
                    )
                  }
                  return null
                })
              }
            </tbody>
          </table>
          
          {recipe.strYoutube ? (
            <div className='video'>
              <h5>Video Recipe</h5>
              <iframe title={id} src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}` } allowFullScreen ></iframe>
            </div>
          ) : null}
          </div>

        </div>
      )}
    </>
  );
};

export { Recipe };
