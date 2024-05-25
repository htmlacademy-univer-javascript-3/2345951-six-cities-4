import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Offer from '../pages/offer.tsx';
import Login from '../pages/login.tsx';
import Favourites from '../pages/Favourites.tsx';
import PrivateRoute from '../private/private-route.tsx';
import {useAppSelector} from '../hooks';
import NotFoundPage from '../error/NotFound.tsx';
import Main from '../pages/main.tsx';
import Spinner from '../pages/Loading-Screen.tsx';

function App(): JSX.Element {
  const isOffersDataLoading = useAppSelector((state) => state.offers.isOffersDataLoading);
  const offers = useAppSelector((state) => state.offers.cityOffers);
  if (isOffersDataLoading) {
    return (
      <Spinner />
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Main />} />
          <Route path="login" element={<Login />} />
          <Route path="favourites" element={
            <PrivateRoute>
              <Favourites />
            </PrivateRoute>
          }
          />
          <Route path="offer/">
            <Route path=":id" element={<Offer offers={ offers } />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
