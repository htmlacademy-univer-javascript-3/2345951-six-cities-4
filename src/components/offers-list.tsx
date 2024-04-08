import { OfferType } from '../types/offer';
import Card from './card';

type OffersListProps = {
  offers: OfferType[];
  listType: 'default' | 'near';
};

export default function OffersList({offers, listType}: OffersListProps) {
  return (
    <div className={`${listType === 'default' ? 'cities__places-list places__list tabs__content' : 'near-places__list places__list'}`}>
      {offers.map((offer) => (
        <Card key={offer.id} offer={offer}/>
      ))}
    </div>
  );
}
