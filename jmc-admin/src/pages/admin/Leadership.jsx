import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Leadership() {
  const [leaders, setLeaders] = useState([]);
  const [form, setForm] = useState({
    name: "",
    position: "",
    bio: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.position) return;

    setLeaders([...leaders, form]);
    setForm({ name: "", position: "", bio: "" });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-jmcPrimary mb-6">
        Leadership Management
      </h1>

      <Card className="mb-8">
        <CardContent className="p-6 space-y-4">
          <Input
            placeholder="Leader Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <Input
            placeholder="Position"
            value={form.position}
            onChange={(e) => setForm({ ...form, position: e.target.value })}
          />
          <Textarea
            placeholder="Bio"
            rows={5}
            value={form.bio}
            onChange={(e) => setForm({ ...form, bio: e.target.value })}
          />
          <Button
            onClick={handleSubmit}
            className="bg-jmcPrimary hover:bg-jmcPrimary/90"
          >
            Add Leader
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-3">
          {leaders.length === 0 && (
            <p className="text-gray-500">No leaders added yet.</p>
          )}
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <p className="font-semibold">{leader.name}</p>
                <p className="text-sm text-gray-500">{leader.position}</p>
                <p className="text-xs text-gray-400">{leader.bio}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
