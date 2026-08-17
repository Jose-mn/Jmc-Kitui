import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Sermons from "./pages/Sermons";
import Contact from "./pages/Contact";
import Pastorate from "./pages/Pastorate";
import Devotionals from "./pages/Devotionals";
import DevotionalDetail from "./pages/DevotionalDetail";
import Events from "./pages/Events";
import Give from "./pages/Give";
import Contacts from "./pages/Contact";
import Ladies from "./pages/ministries/Ladies";
import Men from "./pages/ministries/Men";
import Youth from "./pages/ministries/Youth";
import SundaySchool from "./pages/ministries/SundaySchool";
import Login from "./pages/admin/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRouter from "./routes/AdminRouter";
import AdminLayout from "./pages/admin/AdminLayout";

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
        <Route path="/give" element={<Give />} />

        {/* Departments Routes */}
        <Route path="/departments/ladies" element={<Ladies />} />
        <Route path="/departments/men" element={<Men />} />
        <Route path="/departments/youth" element={<Youth />} />
        <Route path="/departments/sundayschool" element={<SundaySchool />} />

        <Route path="/contact" element={<Contact />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>} />
        <Route path="/admin/messages" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>} />
        <Route path="/admin/devotions" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>} />
        <Route path="/admin/leadership" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>} />
        <Route path="/admin/events" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>} />
        <Route path="/admin/sermons" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>} />
        <Route path="/admin/media" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>} />
        <Route path="/admin/analytics" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>} />
        <Route path="/admin/*" element={<ProtectedRoute><AdminRouter /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;