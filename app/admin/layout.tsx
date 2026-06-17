import AdminSidebar from "@/components/layout/AdminSidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F8FAFF" }}>
      <AdminSidebar />
      <main style={{ flex: 1, minWidth: 0, overflowY: "auto" }}>{children}</main>
    </div>
  );
}
