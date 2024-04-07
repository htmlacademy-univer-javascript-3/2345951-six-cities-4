import { OfferType } from '../types/offer';
import Card from './card';

type OffersListProps = {
  offers: OfferType[];
};

export default function OffersList({offers}: OffersListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card key={offer.id} offer={offer}/>
      ))}
    </div>
  );
}
