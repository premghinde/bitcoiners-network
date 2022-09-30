import { BrowserRouter, Route, Routes } from "react-router-dom";
import Connections from "./routes/connections/Connections";
import Dashboard from "./routes/dashboard/Dashboard";

// All React Routes are using the basename '/u' as included in the catch-all
// laravel route in frontend.php, when using components such as <Link>, there is
// no need to include the /u/ part. IE: <Link to='/followers> will correctly point
// to localhost/u/followers.

export default function AppRoutes() {
  return (
    <BrowserRouter basename="/u">
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/followers' element={<Connections initialType='followers' />} />
        <Route path='/following' element={<Connections initialType='following' />} />
        <Route path='/available' element={<Connections initialType='available' />} />
      </Routes>
    </BrowserRouter>
  )
}