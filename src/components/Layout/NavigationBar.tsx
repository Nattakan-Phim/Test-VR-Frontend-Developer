import { Button, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import container from "../../app/pages/movie/container";
import { useEffect } from "react";

interface NavigationBarProps {
  toggleSidebar: () => void;
  isOpen: boolean;
}

const NavigationBar: React.FC<NavigationBarProps> = ({
  toggleSidebar,
  isOpen,
}) => {
  const CartBadge: React.FC<{ badgeContent: number }> = ({ badgeContent }) => {
    return (
      <div className="relative">
        <ShoppingCartIcon />
        {badgeContent > 0 && (
          <span className="absolute top-8 left-5 bg-red-500 text-white rounded-full text-xl w-8 h-8 flex items-center justify-center">
            {badgeContent}
          </span>
        )}
      </div>
    );
  };

  const { cart } = container();
  useEffect(() => {
    console.log("cart :", cart.length);
  }, [cart]);
 

  return (
    <nav
      className={`mx-4 p-4 flex items-center justify-between rounded-xl bg-gray-400`}
    >
      {isOpen ? (
        <Button onClick={toggleSidebar} variant="contained">
          Open
        </Button>
      ) : (
        <div className="p-5"></div>
      )}
      <h1> Navigation Bar</h1>

      <Button variant="contained" href="/pages/cart" size="small">
        <IconButton>
          <CartBadge badgeContent={cart.length} />
        </IconButton>
      </Button>
    </nav>
  );
};

export default NavigationBar;
