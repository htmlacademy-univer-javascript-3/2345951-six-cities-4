export default function NotFoundScreen(): JSX.Element {
  return (
    <section className="not__found">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"></img>
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="not__found__screen">
        <h1>404. Page not found</h1>
        <a href="/">Вернуться на главную</a>
      </section>
    </section>
  );
}
