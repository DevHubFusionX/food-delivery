import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { useLoginHandler } from '../../App';

const CartButton = () => {
  const { getItemCount } = useCart();
  const { isAuthenticated } = useAuth();
  const { openLogin } = useLoginHandler();
  const itemCount = getItemCount();

  const handleClick = (e) => {
    if (!isAuthenticated && itemCount > 0) {
      e.preventDefault();
      openLogin();
    }
  };

  return (
    <Link 
      to="/cart" 
      onClick={handleClick}
      className="relative inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 text-sm font-semibold text-gray-800 shadow-sm transition hover:bg-gray-50 hover:border-black/20"
    >
      <svg className="h-5 w-5 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 6h15l-1.5 9h-12L6 6Z" />
        <path d="M6 6l-1-3H3" />
        <circle cx="9" cy="20" r="1.25" />
        <circle cx="18" cy="20" r="1.25" />
      </svg>
      <span>Cart</span>
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-orange-600 text-[10px] font-bold text-white">
          {itemCount}
        </span>
      )}
    </Link>
  );
};

export default CartButton;