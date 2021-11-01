import "./appHeader.scss";

const AppHeader = () => {
  return (
    <header className="app__header">
      <div className="wrapper app__header-wrapper">
        <h1 className="app__title">
          <a href="#">
            <span>Marvel</span> information portal
          </a>
        </h1>
        <nav className="app__menu">
          <ul>
            <li>
              <a href="#">Characters</a>
            </li>
            /
            <li>
              <a href="#">Comics</a>
            </li>
          </ul>
        </nav>
      </div>      
    </header>
  );
};

export default AppHeader;
