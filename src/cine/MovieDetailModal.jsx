/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { getImgUrl } from "../utils/cine-utils";

const MovieDetailModal = ({ movie, onClose, onCartAdd }) => {
  const { price, cover, rating, genre, description, title, id } = movie || {};

  return (
    <>
      <div className="fixed left-0 top-0 z-50 h-screen w-screen bg-black/60 backdrop-blur-sm">
        <div className="absolute left-1/2 top-1/2 max-h-[90vh] w-full max-w-[420px] -translate-x-1/2 -translate-y-1/2 overflow-auto p-4 sm:max-w-[600px] lg:max-w-[984px]">
          <div className="overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#12141D] sm:grid sm:grid-cols-[2fr_1fr]">
            <img
              className="h-full w-full object-cover max-sm:max-h-[300px] sm:order-2"
              src={getImgUrl(cover)}
              alt={title}
            />
            <div className="p-5 lg:p-11">
              <div className="">
                <h2 className="mb-2 text-3xl font-bold lg:text-[50px]">
                  {title}
                </h2>
                <span className="my-3 block text-base text-[#9fa0a4] dark:text-[#575A6E]">
                  {genre}
                </span>
                <div></div>
              </div>
              <p className="mb-8 text-sm lg:mb-16 lg:text-base">
                {description}
              </p>
              <div className="grid gap-2 lg:grid-cols-2">
                <a
                  className="flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-[#171923]"
                  href="#"
                  onClick={(e) => onCartAdd(e, movie)}
                >
                  <img src="./assets/tag.svg" alt="" />
                  <span>${price} | Add to Cart</span>
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
      </div>
    </>
  );
};

export default MovieDetailModal;
