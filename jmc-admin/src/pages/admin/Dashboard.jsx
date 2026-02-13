import { Card, CardContent } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-jmcPrimary mb-8">
        Dashboard Overview
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <p className="text-sm text-gray-500">Total Events</p>
            <h2 className="text-3xl font-bold text-jmcSecondary mt-2">12</h2>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <p className="text-sm text-gray-500">Total Sermons</p>
            <h2 className="text-3xl font-bold text-jmcSecondary mt-2">48</h2>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <p className="text-sm text-gray-500">New Messages</p>
            <h2 className="text-3xl font-bold text-jmcSecondary mt-2">5</h2>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
