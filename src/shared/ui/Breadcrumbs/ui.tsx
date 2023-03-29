import { RiArrowRightSLine } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <nav className={'py-5'}>
      <ul className={'flex items-center gap-1'}>
        <li className={'flex items-center'}>
          <Link to={'/'} className={'text-gray-hot'}>
            Home
          </Link>
          <RiArrowRightSLine color={'#8B96A5'} width={6} height={10} />
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          return (
            <li key={routeTo} className={'flex items-center text-gray-hot'}>
              <Link
                to={routeTo}
                className={'text-gray-hot first-letter:uppercase'}>
                {name}
              </Link>
              {index !== pathnames.length - 1 && (
                <RiArrowRightSLine color={'#8B96A5'} width={6} height={10} />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
