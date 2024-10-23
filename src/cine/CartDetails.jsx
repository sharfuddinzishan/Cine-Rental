/* eslint-disable react/prop-types */

import { useContext } from "react";
import { toast } from "react-toastify";
import Delete from "../assets/delete.svg";
import Checkout from "../assets/icons/checkout.svg";
import { MovieContext } from "../context";
import { getImgUrl } from "../utils/cine-utils";

const CartDetails = ({ onClose }) => {
  const { state, dispatch } = useContext(MovieContext);

  function handleDeleteCart(event, item) {
    event.preventDefault();
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: item,
    });
    toast.success(`Removed  ${item.title} from cart`, {
      position: "bottom-right",
    });
  }

  return (
    <>
      <div className="fixed left-0 top-0 z-50 h-screen w-screen bg-black/60 backdrop-blur-sm">
        <div className="absolute left-1/2 top-1/2 max-h-[90vh] w-full max-w-[420px] -translate-x-1/2 -translate-y-1/2 overflow-auto p-4 sm:max-w-[600px] lg:max-w-[790px]">
          <div className="overflow-hidden rounded-2xl bg-white p-5 shadow-md dark:bg-[#12141D] md:p-9">
            <h2 className="mb-10 text-2xl font-bold lg:text-[30px]">
              Your Carts
            </h2>
            <div className="mb-10 max-h-[450px] space-y-8 overflow-auto lg:mb-14 lg:space-y-12">
              {state.cartData.length === 0 ? (
                <p className="text-3xl">The Cart is empty.</p>
              ) : (
                state.cartData?.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-[1fr_auto] gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        className="h-12 w-12 overflow-hidden rounded"
                        src={getImgUrl(item.cover)}
                        alt={item.title}
                      />
                      <div>
                        <h3 className="text-base font-bold md:text-xl">
                          {item.title}
                        </h3>
                        <p className="text-[#575A6E] max-md:text-xs">
                          {item.genre}
                        </p>
                        <span className="max-md:text-xs">${item.price}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <button
                        className="inline-flex items-center space-x-2 rounded-md bg-[#D42967] p-2 text-white md:px-4"
                        onClick={() => handleDeleteCart(event, item)}
                      >
                        <img className="h-5 w-5" src={Delete} alt="" />
                        <span className="max-md:hidden">Remove</span>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="flex items-center justify-end gap-2">
              <a
                className="inline-flex items-center space-x-2 rounded-md bg-primary p-2 text-sm text-[#171923] md:px-4"
                href="#"
              >
                <img src={Checkout} width="24" height="24" alt="" />
                <span>Checkout</span>
              </a>
              <a
                className="flex items-center justify-center gap-2 rounded-lg border border-[#74766F] px-5 py-2 text-sm font-semibold text-[#6F6F6F] dark:text-gray-200"
                href="#"
                onClick={onClose}
              >
                Cancel
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDetails;
