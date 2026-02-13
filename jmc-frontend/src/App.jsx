import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Sermons from "./pages/Sermons";
import Contact from "./pages/Contact";
import Pastorate from "./pages/Pastorate";
import Devotionals from "./pages/Devotionals";
import DevotionalDetail from './pages/devotionaldetail';
import Events from "./pages/Events";
import Contacts from "./pages/Contact";
import AdminLayout from "./pages/admin/AdminLayout";
import Youth from "./pages/ministries/Youth";
import Choir from "./pages/ministries/Choir";
import Ushers from "./pages/ministries/Ushers";
import Media from "./pages/ministries/Media";
import Login from "./pages/admin/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRouter from "./routes/AdminRouter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/pastorate" element={<Pastorate />} />
        
        {/* Devotionals Routes */}
        <Route path="/devotionals" element={<Devotionals />} />
        <Route path="/devotionals/:id" element={<DevotionalDetail />} />
        
        <Route path="/events" element={<Events />} />
        
        {/* Ministries Routes */}
        <Route path="/ministries/youth" element={<Youth />} />
        <Route path="/ministries/choir" element={<Choir />} />
        <Route path="/ministries/ushers" element={<Ushers />} />
        <Route path="/ministries/media" element={<Media />} />
        
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Admin Routes */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />} />
        <Route path="/admin/messages" element={<AdminLayout />} />
        <Route path="/admin/devotions" element={<AdminLayout />} />
        <Route path="/admin/leadership" element={<AdminLayout />} />
        <Route path="/admin/events" element={<AdminLayout />} />
        <Route path="/admin/sermons" element={<AdminLayout />} />
        <Route path="/admin/media" element={<AdminLayout />} />
        <Route path="/admin/analytics" element={<AdminLayout />} />
        <Route path="/admin/*" element={<ProtectedRoute><AdminRouter /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;