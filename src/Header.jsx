import { useContext, useState } from "react";
import Moon from "./assets/icons/moon.svg";
import Logo from "./assets/logo.svg";
import Ring from "./assets/ring.svg";
import Cart from "./assets/shopping-cart.svg";
import CartDetails from "./cine/CartDetails";
import { MovieContext } from "./context";
const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { cartData } = useContext(MovieContext);
  function handleCartShow() {
    setShowCart(true);
  }
  return (
    <>
      <header>
        {showCart && (
          <CartDetails onClose={() => setShowCart(false)}></CartDetails>
        )}
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={Logo} width="139" height="26" alt="" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="inline-block rounded-lg bg-primary/20 p-1 backdrop-blur-[2px] dark:bg-primary/[7%]"
                href="#"
              >
                <img src={Ring} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="inline-block rounded-lg bg-primary/20 p-1 backdrop-blur-[2px] dark:bg-primary/[7%]"
                href="#"
              >
                <img src={Moon} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="inline-block rounded-lg bg-primary/20 p-1 backdrop-blur-[2px] dark:bg-primary/[7%]"
                href="#"
                onClick={handleCartShow}
              >
                <img src={Cart} width="24" height="24" alt="" />
                {cartData?.length > 0 && (
                  <span className="absolute left-[20px] top-[-12px] h-[24px] w-[24px] rounded-full bg-[#12CF6F] text-center text-white">
                    {cartData.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
