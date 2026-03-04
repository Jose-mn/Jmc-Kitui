import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, X } from "lucide-react";

export default function Media() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    loadGallery();
  }, []);

  const loadGallery = () => {
    // Load images from localStorage for demo
    const savedImages = localStorage.getItem("mediaGallery");
    if (savedImages) {
      try {
        setGallery(JSON.parse(savedImages));
      } catch (err) {
        console.error("Error loading gallery:", err);
      }
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        setError("Please select an image file");
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError("Image size must be less than 5MB");
        return;
      }

      setImage(file);
      setError("");
      setPreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setImage(null);
    setPreview(null);
    setError("");
  };

  const handleUpload = async () => {
    if (!image) return;

    setUploading(true);
    setError("");
    setSuccess("");

    try {
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target.result;
        const token = localStorage.getItem("token");

        // For demo: store in localStorage
        // In production: send to backend API
        const newImage = {
          id: Date.now(),
          name: image.name,
          data: dataUrl,
          uploadedAt: new Date().toLocaleDateString(),
        };

        const updatedGallery = [newImage, ...gallery];
        setGallery(updatedGallery);
        localStorage.setItem("mediaGallery", JSON.stringify(updatedGallery));

        setSuccess("Image uploaded successfully!");
        removeImage();

        setTimeout(() => setSuccess(""), 3000);
      };
      reader.readAsDataURL(image);
    } catch (err) {
      console.error("Error uploading image:", err);
      setError("Failed to upload image. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const deleteImage = (id) => {
    if (!window.confirm("Delete this image?")) return;

    const updatedGallery = gallery.filter((img) => img.id !== id);
    setGallery(updatedGallery);
    localStorage.setItem("mediaGallery", JSON.stringify(updatedGallery));
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-jmcPrimary">
        Media Gallery Upload
      </h1>

      {error && (
        <div className="p-4 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      {success && (
        <div className="p-4 bg-green-100 text-green-700 rounded-lg">
          {success}
        </div>
      )}

      <Card className="rounded-2xl shadow-xl">
        <CardContent className="p-6 space-y-6">
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-10 h-10 text-gray-400 mb-2" />
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>

          {preview && (
            <div className="space-y-4">
              <div className="flex justify-center">
                <img
                  src={preview}
                  alt="Preview"
                  className="rounded-xl shadow-md max-h-64 object-fit"
                />
              </div>

              <div className="flex justify-center gap-4">
                <Button
                  onClick={handleUpload}
                  disabled={uploading}
                  className="bg-jmcPrimary hover:bg-jmcPrimary/90 disabled:opacity-50"
                >
                  {uploading ? "Uploading..." : "Upload Image"}
                </Button>

                <Button
                  variant="outline"
                  onClick={removeImage}
                  disabled={uploading}
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Gallery Display */}
      {gallery.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-jmcPrimary mb-4">
            Gallery ({gallery.length} images)
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((img) => (
              <div key={img.id} className="relative group">
                <img
                  src={img.data}
                  alt={img.name}
                  className="w-full h-32 object-cover rounded-lg shadow-md"
                />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition rounded-lg flex items-center justify-center gap-2">
                  <button
                    onClick={() => deleteImage(img.id)}
                    className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-full"
                  >
                    <X size={16} />
                  </button>
                </div>

                <p className="text-xs text-gray-600 mt-1 truncate">{img.name}</p>
                <p className="text-xs text-gray-500">{img.uploadedAt}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {gallery.length === 0 && !preview && (
        <p className="text-center text-gray-500 py-8">
          No images uploaded yet. Upload one to get started!
        </p>
      )}
    </div>
  );
}
