import CreatorSidebar from "@/components/layout/CreatorSidebar";

export default function CreatorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="creator-studio-layout" style={{ display: "flex", minHeight: "100vh", background: "#F8FAFF" }}>
      <CreatorSidebar />
      <main style={{ flex: 1, minWidth: 0, overflowY: "auto" }}>
        {/* On mobile: paddingTop pushes content below the fixed top bar, paddingBottom clears the bottom tab bar */}
        <div className="studio-main-content" style={{ width: "100%", minHeight: "100vh" }}>
          {children}
        </div>
      </main>
    </div>
  );
}
