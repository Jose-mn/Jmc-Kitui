import { Routes, Route } from "react-router-dom";
import AdminLayout from "../pages/admin/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import Analytics from "../pages/admin/Analytics";
import Events from "../pages/admin/Events";
import Sermons from "../pages/admin/Sermons";
import Devotions from "../pages/admin/Devotions";
import Media from "../pages/admin/Media";
import Leadership from "../pages/admin/Leadership";
import Messages from "../pages/admin/Messages";

export default function AdminRouter() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="events" element={<Events />} />
        <Route path="sermons" element={<Sermons />} />
        <Route path="devotions" element={<Devotions />} />
        <Route path="media" element={<Media />} />
        <Route path="leadership" element={<Leadership />} />
        <Route path="messages" element={<Messages />} />
      </Route>
    </Routes>
  );
}
