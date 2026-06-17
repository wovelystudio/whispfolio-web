"use client";
import { useState } from "react";
import { Plus, Check, MoreHorizontal, GripVertical } from "lucide-react";

const TASKS = [
  { id: 1, group: "Design", text: "Create wireframes for landing page", completed: true },
  { id: 2, group: "Design", text: "Finalize color palette and typography", completed: true },
  { id: 3, group: "Development", text: "Set up Next.js project and routing", completed: true },
  { id: 4, group: "Development", text: "Implement user authentication with Supabase", completed: false },
  { id: 5, group: "Development", text: "Build the database schema for projects", completed: false },
  { id: 6, group: "Marketing", text: "Write the first 'Building in public' tweet", completed: false },
  { id: 7, group: "Marketing", text: "Set up Product Hunt upcoming page", completed: false },
];

export default function ChecklistPage() {
  const [tasks, setTasks] = useState(TASKS);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("All");

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const groups = Array.from(new Set(tasks.map(t => t.group)));

  return (
    <div style={{ padding: "32px 36px", maxWidth: 800, margin: "0 auto" }}>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 24, color: "#0F172A", marginBottom: 6 }}>Checklist</h1>
        <p style={{ fontSize: 14, color: "#64748B" }}>Break down big dreams into actionable steps.</p>
      </div>

      {/* Input */}
      <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 12, padding: "16px", marginBottom: 32, display: "flex", alignItems: "center", gap: 12, boxShadow: "0 4px 12px rgba(0,0,0,0.02)" }}>
        <Plus size={20} color="var(--purple-wisp)" />
        <input 
          placeholder="Add a new task..." 
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={{ flex: 1, border: "none", outline: "none", fontSize: 15, color: "#0F172A" }}
        />
        <button className="btn-primary" style={{ padding: "8px 16px" }}>Add</button>
      </div>

      {/* Filters */}
      <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
        {["All", "Active", "Completed"].map(f => (
          <button 
            key={f} 
            onClick={() => setFilter(f)}
            style={{ padding: "6px 14px", borderRadius: 999, fontSize: 13, fontWeight: 600, background: filter === f ? "#0F172A" : "white", color: filter === f ? "white" : "#64748B", border: filter === f ? "1px solid #0F172A" : "1px solid #E2E8F0", cursor: "pointer", transition: "all 0.2s ease" }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Tasks List */}
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        {groups.map(group => {
          const groupTasks = tasks.filter(t => t.group === group);
          const filtered = groupTasks.filter(t => filter === "All" ? true : filter === "Active" ? !t.completed : t.completed);
          
          if (filtered.length === 0) return null;

          const progress = Math.round((groupTasks.filter(t => t.completed).length / groupTasks.length) * 100);

          return (
            <div key={group}>
              {/* Group Header */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: "#0F172A" }}>{group}</h3>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontSize: 13, color: "#64748B", fontWeight: 500 }}>{progress}%</span>
                  <div style={{ width: 100, height: 6, background: "#E2E8F0", borderRadius: 999, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${progress}%`, background: progress === 100 ? "#16A34A" : "var(--purple-wisp)", borderRadius: 999, transition: "width 0.3s ease" }} />
                  </div>
                </div>
              </div>

              {/* Tasks */}
              <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 12, overflow: "hidden" }}>
                {filtered.map((t, i) => (
                  <div key={t.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px", borderBottom: i === filtered.length - 1 ? "none" : "1px solid #F1F5F9", transition: "background 0.2s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#F8FAFF")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "white")}
                  >
                    <GripVertical size={16} color="#CBD5E1" style={{ cursor: "grab" }} />
                    <button 
                      onClick={() => toggleTask(t.id)}
                      style={{ width: 22, height: 22, borderRadius: 6, border: t.completed ? "none" : "2px solid #CBD5E1", background: t.completed ? "var(--purple-wisp)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0, transition: "all 0.2s ease" }}
                    >
                      {t.completed && <Check size={14} color="white" strokeWidth={3} />}
                    </button>
                    <span style={{ flex: 1, fontSize: 15, color: t.completed ? "#94A3B8" : "#334155", textDecoration: t.completed ? "line-through" : "none", transition: "all 0.2s ease" }}>
                      {t.text}
                    </span>
                    <button style={{ background: "none", border: "none", color: "#94A3B8", cursor: "pointer", padding: 4 }}>
                      <MoreHorizontal size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
