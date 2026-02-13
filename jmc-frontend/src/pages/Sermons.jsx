import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
export default function Sermons() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="min-h-screen px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Sermons</h1>
        <p className="text-lg text-gray-600">Watch our latest sermons and messages.</p>
      </div>
      <Footer />
    </div>
    </div>
  );
}
