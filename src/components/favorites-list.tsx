import { OfferType } from '../types/offer';
import Card from './card';

type FavoritesListProps = {
  favorites: OfferType[];
};

export default function FavoritesList({favorites}: FavoritesListProps) {
  return (
    <div className="favorites__places">
      {favorites.map((favorite) => (
        <Card key={favorite.id} offer={favorite}/>
      ))}
    </div>
  );
}
