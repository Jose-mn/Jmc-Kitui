import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Pastorate() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1 px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-6">Pastorate</h1>
        <p className="text-lg text-gray-600 mb-4">Meet our pastoral team. We are a group of ministers serving Jesus Manifestation Church, committed to shepherding the flock and equipping believers.</p>
        <p className="text-gray-700">(Add pastor bios and photos in <strong>/src/assets</strong> and I'll wire them into this page.)</p>
      </div>
    </div>
        <Footer />
    </div>
  );
}

