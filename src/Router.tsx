import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
    </Routes>
  );
}
export default Router;
