import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import AppFooter from "../appFooter/AppFooter";
import MainPage from "../pages/MainPage";
import ComicsPage from "../pages/ComicsPage";

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/comics" element={<ComicsPage />} />
          </Routes>
        </main>
        <AppFooter />
      </div>
    </Router>
  );
};

export default App;
