import { Link } from 'react-router-dom';

const NavLinks = () => {
  const publicLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="flex items-center gap-1">
      {publicLinks.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          className="relative rounded-full px-3 py-2 text-sm font-semibold text-gray-700 transition hover:text-orange-700 hover:bg-orange-50"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;