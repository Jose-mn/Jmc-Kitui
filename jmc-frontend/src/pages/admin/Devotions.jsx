import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Devotions() {
  const [devotions, setDevotions] = useState([]);
  const [form, setForm] = useState({
    title: "",
    scripture: "",
    content: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.content) return;

    setDevotions([...devotions, form]);
    setForm({ title: "", scripture: "", content: "" });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-jmcPrimary mb-6">
        Manage Devotions
      </h1>

      <Card className="mb-8">
        <CardContent className="p-6 space-y-4">
          <Input
            placeholder="Devotion Title"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
          />
          <Input
            placeholder="Scripture Reference"
            value={form.scripture}
            onChange={(e) =>
              setForm({ ...form, scripture: e.target.value })
            }
          />
          <Textarea
            placeholder="Devotion Content"
            rows={6}
            value={form.content}
            onChange={(e) =>
              setForm({ ...form, content: e.target.value })
            }
          />
          <Button
            onClick={handleSubmit}
            className="bg-jmcPrimary hover:bg-jmcPrimary/90"
          >
            Publish Devotion
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
