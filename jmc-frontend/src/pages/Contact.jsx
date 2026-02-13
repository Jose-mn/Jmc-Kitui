import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
export default function Contacts() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-1 px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-6">Contact Us</h1>
        <p className="text-lg text-gray-600">Get in touch with Jesus Manifestation Church.</p>
      </div>
      </div>
      <Footer /> 
    </div>
  );
  }
