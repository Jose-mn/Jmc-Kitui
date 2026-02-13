import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const payload = {
      full_name: name,
      email,
      phone,
      message,
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setSuccess(true);
      setSubmitted(true);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (err) {
      
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-20">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h1 className="text-4xl font-bold text-primary" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          Contact Us
        </motion.h1>
        <p className="mt-4 text-gray-600 text-lg">We would love to hear from you. Use the form or the contact details below.</p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="space-y-6">
          <div className="flex items-start gap-4">
            <MapPin className="text-gold w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-gray-600">Jesus Manifestation Church<br />Kitui County, Kenya</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="text-gold w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-600">+254 701 504 560</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="text-gold w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">jmckitui@gmail.com</p>
            </div>
          </div>

          <div className="mt-6">
            <div className="aspect-[16/9] w-full rounded-lg overflow-hidden border">
              <iframe
                title="Jesus Manifestation Church Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63820.607000139156!2d37.922412761184816!3d-1.3021761134670427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18245371df3859df%3A0x4c43808b5e4d1d75!2sJesus%20Manifestation%20Church!5e0!3m2!1sen!2ske!4v1770663176099!5m2!1sen!2ske"
                width="600"
                height="450"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">Click the map to open in Google Maps, or use the "Get Directions" button on the home page.</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="bg-white rounded-xl shadow-sm p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium mb-1">Full Name <span className="text-red-500">*</span></label>
              <Input id="fullName" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address <span className="text-red-500">*</span></label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
              <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+254..." />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message <span className="text-red-500">*</span></label>
              <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write your message here..." className="min-h-[120px]" />
            </div>

            <Button type="submit" disabled={loading} 
            className="w-full bg-primary text-white">{loading ? "Sending..." : "Send Message"}</Button>

            {submitted && (
              <p className="text-green-600 text-center mt-4">Thank you for reaching out! We will get back to you soon.</p>
            )}
          </form>
        </motion.div>

      </div>
      <p className="text-xs text-gray-400 text-center mt-4">Your information is kept private and used only for church communication.</p>
    </div>
  );
}
