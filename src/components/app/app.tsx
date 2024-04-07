import Main from '../../pages/main';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Favorites from '../../pages/favorites';
import Login from '../../pages/login';
import NotFoundScreen from '../../pages/not-found';
import Offer from '../../pages/offer';
import PrivateRoute from '../private-route';
import { OfferType } from '../../types/offer';

type AppScreenProps = {
  placesNumber: number;
  offers: OfferType[];
  favorites: OfferType[];
}

export default function App({placesNumber, offers, favorites}: AppScreenProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main placesNumber={placesNumber} offers={offers} />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <Favorites favorites={favorites}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<Offer />}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}