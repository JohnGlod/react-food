import './CategoryList.css';
import { CategoryItem } from '../CategoryItem/CategoryItem';
const CategoryList = ({ catalog = [] }) => {

  return (

      <div className='catalog-list'>
        {catalog.map((el) => (
          <CategoryItem key={el.idCategory} {...el} />
        ))}
      </div>
  );
};

export { CategoryList };
