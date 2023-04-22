import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Components */
import SW from "./components/SW";

/* Layouts */
import RootLayout from "./layouts/RootLayout";

/* Pages */
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import Error from "./pages/Error";

export default function App() {
  return (
    <BrowserRouter>
      <SW />
      <Routes>
        <Route path="/" element={<RootLayout />} errorElement={<Error />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="help" element={<Help />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
