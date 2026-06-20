import AdminSidebar from "@/components/layout/AdminSidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F8FAFF" }}>
      <AdminSidebar />
      <main className="admin-main" style={{ flex: 1, minWidth: 0, overflowY: "auto", background: "#F8FAFF" }}>
        {children}
      </main>
    </div>
  );
}
