import Main from '../pages/main.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from '../error/NotFound.tsx';
import Offer from '../pages/offer.tsx';
import Login from '../pages/login.tsx';
import Favourites from '../pages/Favourites.tsx';
import PrivateRoute from '../private/private-route.tsx';
import {OfferType} from '../types/offer';

type AppProps = {
  offers: OfferType[];
}

export default function App ({offers}: AppProps){
  const favorites = offers.filter((o) => o.isFavorite);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={<PrivateRoute><Favourites favorites={favorites}/></PrivateRoute>} />
        <Route path="offer/">
          <Route path=":id" element={<Offer offers={offers}/>} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
