import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    Outlet
} from "react-router-dom";

import Login from "./pages/Login";
import Calculation from "./pages/Form-Calculation";
import SignUp from "./pages/SingUp";
import History from "./pages/History";
import Result from "./pages/Calcutation-Result";


export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/SingUp' element={<SignUp />} />
        <Route path='/History' element={<History />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Calculation' element={<Calculation />} />
        <Route path='/Result' element={<Result />} />
      </Routes>
    </BrowserRouter>
  )
}