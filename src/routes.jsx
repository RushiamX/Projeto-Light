import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    Outlet
} from "react-router-dom";

import Login from "./pages/Login";
import Calculation from "./pages/Form-Calculation";
import SignUp from "./pages/SignUp";
import History from "./pages/History";
import Result from "./pages/Calcutation-Result";
import Help from "./pages/Help";

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/History' element={<History />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Calculation' element={<Calculation />} />
        <Route path='/Result' element={<Result />} />
        <Route path='/Help' element={<Help/>} />
      </Routes>
    </BrowserRouter>
  );
};