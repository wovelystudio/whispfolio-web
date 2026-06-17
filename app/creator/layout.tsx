import CreatorSidebar from "@/components/layout/CreatorSidebar";

export default function CreatorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F8FAFF" }}>
      <CreatorSidebar />
      <main style={{ flex: 1, minWidth: 0, overflowY: "auto" }}>
        {children}
      </main>
    </div>
  );
}
