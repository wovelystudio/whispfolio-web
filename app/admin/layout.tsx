import AdminSidebar from "@/components/layout/AdminSidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#0F172A" }}>
      <AdminSidebar />
      <main style={{ flex: 1, minWidth: 0, overflowY: "auto", background: "#0F172A" }}>
        {children}
      </main>
    </div>
  );
}
