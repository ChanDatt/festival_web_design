import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage/HomePage";
import CharityPage from "./pages/CharityPage/CharityPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import PlacePage from "./pages/PlacePage/PlacePage";
import LineupPage from "./pages/LineupPage/LineupPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import TicketsPage from "./pages/TicketsPage/TicketsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage/PrivacyPolicyPage";
import ScrollToTop from "./components/ScrollToTop";
import TermsPage from "./pages/TermsPage/TermsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/charity" element={<CharityPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/place" element={<PlacePage />} />
          <Route path="/lineup" element={<LineupPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/tickets" element={<TicketsPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
