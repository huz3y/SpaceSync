import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Spaces from "./pages/Spaces";
import CreateUser from "./pages/CreateUser";
import Settings from "./pages/Settings";
import UpdateAccount from "./pages/UpdateAccount";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="spaces" element={<Spaces />} />
          <Route path="create-user" element={<CreateUser />} />
          <Route path="settings" element={<Settings />} />
          <Route path="update-account" element={<UpdateAccount />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
