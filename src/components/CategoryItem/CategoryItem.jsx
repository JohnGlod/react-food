import './CategoryItem.css';
import {Link} from 'react-router-dom'
const CategoryItem = (props) => {
  const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } =
    props;

  return (
    <div className='catalog-item'>
      <div className='card'>
        <div className='card-image'>
          <img src={strCategoryThumb} alt={strCategory} />
          <span className='card-title'>{strCategory}</span>
        </div>
        <div className='card-content'>
          <p>{strCategoryDescription.slice(0, 90)}...</p>
        </div>
        <div className='card-action'>
          <Link to={`./category/${strCategory}`} className='btn'>Watch category</Link>
        </div>
      </div>
    </div>
  );
};

export { CategoryItem };
