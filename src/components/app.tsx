import Main from '../pages/main';

type AppScreenProps = {
  placesNumber: number;
}

export default function App({placesNumber}: AppScreenProps) {
  return (
    <Main placesNumber={placesNumber} />
  );
}
