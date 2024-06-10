import ScrollTop from '../components/scroll-top.ts';
import { NavLink } from 'react-router-dom';
import { memo, useState } from 'react';
import { AuthorizationStatus, Place } from '../types/offer.tsx';
import { useAppDispatch, useAppSelector } from '../hooks';
import { updateFavourite } from '../api/api-action.ts';
import { FavouritesStatus } from '../consts/favourites-consts.ts';
import { updateFavouritesCounter } from '../store/action.ts';
import { rareCard } from '../consts/cities.tsx';
import { useNavigate } from 'react-router-dom';

type CardProps = {
  place: Place;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

function Card({ place, onMouseEnter, onMouseLeave }: CardProps): JSX.Element {
  const isAuthorized = useAppSelector((state) => state.user.authorizationStatus);
  const favouritesCounter = useAppSelector((state) => state.favourites.favouritesCounter);
  const [isFavourite, setIsFavourite] = useState(place.isFavorite);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleIsFavorite() {
    if (isAuthorized !== AuthorizationStatus.Auth) {
      navigate('/login');
      return;
    }
    if (isFavourite) {
      dispatch(updateFavourite({
        id: place.id,
        status: FavouritesStatus.DELETE
      }));
      setIsFavourite(false);
      dispatch(updateFavouritesCounter(favouritesCounter - 1));
    } else {
      dispatch(updateFavourite({
        id: place.id,
        status: FavouritesStatus.ADD
      }));
      setIsFavourite(true);
      dispatch(updateFavouritesCounter(favouritesCounter + 1));
    }
  }

  return (
    <article className="cities__card place-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {place.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={place.image}
            width={260}
            height={200}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{place.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={isFavourite ? 'place-card__bookmark-button place-card__bookmark-button--active button' : 'place-card__bookmark-button button'}
            type="button" onClick={handleIsFavorite}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use href="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isFavourite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        {rareCard(place.rating)}
        <h2 className="place-card__name">
          <ScrollTop />
          <NavLink to={`/offer/${place.id}`}>{place.roomName}</NavLink>
        </h2>
        <p className="place-card__type">{place.roomType}</p>
      </div>
    </article>
  );
}

export default memo(Card);
