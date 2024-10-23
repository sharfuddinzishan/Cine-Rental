/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import Tag from "../assets/tag.svg";
import { MovieContext } from "../context";
import { getImgUrl } from "../utils/cine-utils";
import MovieDetailModal from "./MovieDetailModal";
import Rating from "./Rating";

const MovieCard = ({ movie }) => {
  const { price, cover, rating, genre, description, title, id } = movie || {};
  const { state, dispatch } = useContext(MovieContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  function handleModalClose() {
    setSelectedMovie(null);
    setShowModal(false);
  }
  function handleMovieSelection(movie) {
    setSelectedMovie(movie);
    setShowModal(true);
  }

  function handleAddToCart(e, movie) {
    e.stopPropagation();
    const found = state.cartData.find((item) => item.id === movie.id);
    if (!found) {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          ...movie,
        },
      });
    } else {
      alert("Movie Already Added To The Cart");
    }
  }
  return (
    <>
      {showModal && (
        <MovieDetailModal
          movie={selectedMovie}
          onClose={handleModalClose}
          onCartAdd={handleAddToCart}
        ></MovieDetailModal>
      )}
      <figure className="rounded-xl border border-black/10 p-4 shadow-sm dark:border-white/10">
        <a href="#" onClick={() => handleMovieSelection(movie)}>
          <img
            className="w-full object-cover"
            src={getImgUrl(cover)}
            alt={title}
          />
          <figcaption className="pt-4">
            <h3 className="mb-1 text-xl">{title}</h3>
            <p className="mb-2 text-sm text-[#575A6E]">{genre}</p>
            <div className="mb-5 flex items-center space-x-1">
              <Rating value={rating}></Rating>
            </div>
            <a
              className="flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-[#171923]"
              href="#"
              onClick={(e) => handleAddToCart(e, movie)}
            >
              <img src={Tag} alt="Tag" />
              <span>${price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovieCard;
