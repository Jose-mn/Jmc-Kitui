import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Media() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setImage(null);
    setPreview(null);
  };

  const handleUpload = async () => {
    if (!image) return;
    // TODO: Implement backend file upload
    // For now, just clear the form
    removeImage();
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-jmcPrimary">
        Media Gallery Upload
      </h1>

      <Card className="rounded-2xl shadow-xl">
        <CardContent className="p-6 space-y-6 text-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block mx-auto"
          />

          {preview && (
            <div className="space-y-4">
              <img
                src={preview}
                alt="Preview"
                className="mx-auto rounded-xl shadow-md max-h-64"
              />

              <div className="flex justify-center gap-4">
                <Button
                  onClick={handleUpload}
                  className="bg-jmcPrimary hover:bg-jmcPrimary/90"
                >
                  Upload
                </Button>

                <Button
                  variant="destructive"
                  onClick={removeImage}
                >
                  Remove
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
