import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  BookOpen,
  Mic,
  Image,
  Users,
  BarChart3,
  Mail,
} from "lucide-react";
import Dashboard from "./Dashboard";
import Messages from "./Messages";
import Devotions from "./Devotions";
import Leadership from "./Leadership";
import AdminEvents from "./Events";
import AdminSermons from "./Sermons";
import AdminMedia from "./Media";
import Analytics from "./Analytics";

export default function AdminLayout() {
  const location = useLocation();

  const navItem = (to, icon, label) => {
    const active = location.pathname === to;
    return (
      <Link
        to={to}
        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all
        ${active
            ? "bg-jmcSecondary text-jmcDark font-semibold"
            : "text-white hover:bg-white/10"
        }`}
      >
        {icon}
        {label}
      </Link>
    );
  };

  const renderContent = () => {
    const path = location.pathname;
    if (path === "/admin" || path === "/admin/") return <Dashboard />;
    if (path === "/admin/messages") return <Messages />;
    if (path === "/admin/devotions") return <Devotions />;
    if (path === "/admin/leadership") return <Leadership />;
    if (path === "/admin/events") return <AdminEvents />;
    if (path === "/admin/sermons") return <AdminSermons />;
    if (path === "/admin/media") return <AdminMedia />;
    if (path === "/admin/analytics") return <Analytics />;
    return <Dashboard />;
  };

  return (
    <div className="flex min-h-screen bg-jmcLight">

      {/* SIDEBAR */}
      <aside className="w-72 bg-jmcPrimary text-white p-6 flex flex-col">

        {/* Logo Area */}
        <div className="mb-10">
          <h1 className="text-2xl font-bold">
            JMC Admin
          </h1>
          <p className="text-sm text-white/70">
            Jesus Manifestation Church
          </p>
        </div>

        {/* Navigation */}
        <nav className="space-y-3 flex-1">
          {navItem("/admin", <LayoutDashboard size={18} />, "Dashboard")}
          {navItem("/admin/messages", <Mail size={18} />, "Messages")}
          {navItem("/admin/events", <Calendar size={18} />, "Events")}
          {navItem("/admin/devotions", <BookOpen size={18} />, "Devotions")}
          {navItem("/admin/sermons", <Mic size={18} />, "Sermons")}
          {navItem("/admin/media", <Image size={18} />, "Media")}
          {navItem("/admin/leadership", <Users size={18} />, "Leadership")}
          {navItem("/admin/analytics", <BarChart3 size={18} />, "Analytics")}
        </nav>

        <div className="pt-6 border-t border-white/20 text-xs text-white/60">
          © {new Date().getFullYear()} JMC
        </div>
      </aside>

      {/* CONTENT */}
      <main className="flex-1 p-10">
        {renderContent()}
      </main>
    </div>
  );
}
