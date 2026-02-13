import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Sermons() {
  const [sermons, setSermons] = useState([]);
  const [form, setForm] = useState({
    title: "",
    speaker: "",
    video: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.speaker || !form.video) return;

    setSermons([...sermons, form]);
    setForm({ title: "", speaker: "", video: "" });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-jmcPrimary mb-6">
        Manage Sermons
      </h1>

      <Card className="mb-8">
        <CardContent className="p-6 space-y-4">
          <Input
            placeholder="Sermon Title"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
          />
          <Input
            placeholder="Speaker"
            value={form.speaker}
            onChange={(e) =>
              setForm({ ...form, speaker: e.target.value })
            }
          />
          <Input
            placeholder="YouTube / Video Link"
            value={form.video}
            onChange={(e) =>
              setForm({ ...form, video: e.target.value })
            }
          />
          <Button
            onClick={handleSubmit}
            className="bg-jmcPrimary hover:bg-jmcPrimary/90"
          >
            Add Sermon
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
