import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import AppFooter from "../appFooter/AppFooter";
import MainPage from "../pages/MainPage";
import ComicsPage from "../pages/ComicsPage";
import SingleComicPage from "../pages/singleComicPage/SingleComicPage";
import SingleCharacterPage from "../pages/singleCharacterPage/SingleCharacterPage";
import Page404 from "../pages/404";

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Routes>
            <Route path="/marvel-portal/" element={<MainPage />} />
            <Route path="/marvel-portal/comics" element={<ComicsPage />} />
            <Route path="/marvel-portal/comics/:comicId" element={<SingleComicPage />} />
            <Route path="/marvel-portal/characters/:characterId" element={<SingleCharacterPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </main>
        <AppFooter />
      </div>
    </Router>
  );
};

export default App;
