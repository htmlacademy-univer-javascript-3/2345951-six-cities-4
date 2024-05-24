import Main from '../pages/main.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Offer from '../pages/offer.tsx';
import Login from '../pages/login.tsx';
import Favourites from '../pages/Favourites.tsx';
import PrivateRoute from '../private/private-route.tsx';
import {useAppSelector} from '../hooks';
import LoadingScreen from '../pages/Loading-Screen.tsx';
import NotFoundPage from '../error/NotFound.tsx';

function App(): JSX.Element {
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);
  const offers = useAppSelector((state) => state.offers);
  const cityOffers = useAppSelector((state) => state.cityOffers);
  if (isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Main />} />
          <Route path="login" element={<Login />} />
          <Route path="favorites" element={
            <PrivateRoute>
              <Favourites favorites={offers} />
            </PrivateRoute>
          }
          />
          <Route path="offer/">
            <Route path=":id" element={<Offer offers={ cityOffers } />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
