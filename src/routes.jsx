import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    Outlet
} from "react-router-dom";

import SignUp from "./pages/SingUp";
import History from "./pages/History";

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/SingUp' element={<SignUp />} />
        <Route path='/History' element={<History />} />

      </Routes>
    </BrowserRouter>
  )
}