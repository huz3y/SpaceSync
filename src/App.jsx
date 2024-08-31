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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import Booking from "./pages/Booking";
import CreateBooking from "./pages/CreateBooking";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="/dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="bookings/:bookingId" element={<Booking />} />
            <Route
              path="create-booking/:bookingId"
              element={<CreateBooking />}
            />
            <Route path="spaces" element={<Spaces />} />
            <Route path="create-user" element={<CreateUser />} />
            <Route path="settings" element={<Settings />} />
            <Route path="update-account" element={<UpdateAccount />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="bottom-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
            style: {
              border: "1px solid var(--color-green-700)",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-green-700)",
            },
          },
          error: {
            duration: 4500,
            style: {
              border: "1px solid var(--color-red-700)",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-red-700)",
            },
          },
          style: {
            fontSize: "1.3rem",
            maxWidth: "40rem",
            padding: "1.6rem 2.4rem",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
            borderRadius: "8px",
            boxShadow: "var(--shadow-medium)",
          },
        }}
      />
    </QueryClientProvider>
  );
}
