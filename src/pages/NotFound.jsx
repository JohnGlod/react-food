import {Link} from 'react-router-dom'

const NotFound = () => {
  return <div className='row center'>
    Страница не найдена. Вернуться на <Link to={'/'}> главную.</Link>
  </div>
}
export {NotFound}