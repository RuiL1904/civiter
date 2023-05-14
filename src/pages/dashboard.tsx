import { Layout } from "@/components/Layout";
import { Sidebar } from "@/components/Sidebar";

export default function Dashboard() {
  return (
    <Layout>
      <div className="flex h-full">
        <Sidebar />

        <h1>Dashboard</h1>
      </div>
    </Layout>
  );
}
