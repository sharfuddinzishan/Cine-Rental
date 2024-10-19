import Tag from "../assets/tag.svg";
import { getImgUrl } from "../utils/cine-utils";
import Rating from "./Rating";

const MovieCard = ({ movie }) => {
  const { price, cover, rating, genre, description, title, id } = movie || {};
  return (
    <>
      <figure className="rounded-xl border border-black/10 p-4 shadow-sm dark:border-white/10">
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
          >
            <img src={Tag} alt="Tag" />
            <span>${price} | Add to Cart</span>
          </a>
        </figcaption>
      </figure>
    </>
  );
};

export default MovieCard;
