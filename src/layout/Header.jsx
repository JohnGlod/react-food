import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className='header'>
      <nav>
        <div className='nav-wrapper'>
          <Link className='brand-logo' to='/'>
            Logo
          </Link>
          <a href='#!' data-target='mobile-demo' className='sidenav-trigger'>
            <i className='material-icons'>menu</i>
          </a>
          <ul className='right hide-on-med-and-down'>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contacts'>Contacts </Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className='sidenav' id='mobile-demo'>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contacts'>Contacts </Link>
        </li>
      </ul>
    </header>
  );
};

export { Header };
