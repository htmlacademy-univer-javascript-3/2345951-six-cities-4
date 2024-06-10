import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Offer from '../pages/offer.tsx';
import Login from '../pages/login.tsx';
import Favourites from '../pages/favourites.tsx';
import PrivateRoute from '../private/private-route.tsx';
import {useAppSelector} from '../hooks';
import NotFoundPage from '../error/not-found.tsx';
import Main from '../pages/main.tsx';
import Spinner from '../pages/loading-screen.tsx';
import {AuthorizationStatus} from '../types/offer.tsx';
import {Navigate} from 'react-router-dom';

function App(): JSX.Element {
  const isOffersDataLoading = useAppSelector((state) => state.offers.isOffersDataLoading);
  const offers = useAppSelector((state) => state.offers.cityOffers);
  const isAuthorized = useAppSelector((state) => state.user.authorizationStatus);
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
          <Route path="login" element={
            isAuthorized === AuthorizationStatus.Auth ? <Navigate to="/" /> : <Login />
          }
          />
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
