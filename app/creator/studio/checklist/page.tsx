"use client";
import { useState } from "react";
import { CheckSquare, Plus, X, Circle, CheckCircle2, Flag, Trash2, GripVertical } from "lucide-react";

type Task = { id: number; text: string; done: boolean; priority: "high" | "medium" | "low"; section: string };

const INIT_TASKS: Task[] = [
  { id: 1, text: "Finalise onboarding copy", done: false, priority: "high", section: "This week" },
  { id: 2, text: "Fix mobile nav overflow bug", done: false, priority: "high", section: "This week" },
  { id: 3, text: "Write landing page FAQ", done: true, priority: "medium", section: "This week" },
  { id: 4, text: "Set up Plausible analytics", done: false, priority: "medium", section: "This week" },
  { id: 5, text: "Record demo video", done: false, priority: "medium", section: "Next up" },
  { id: 6, text: "Publish to Product Hunt", done: false, priority: "high", section: "Next up" },
  { id: 7, text: "Write post-launch blog post", done: false, priority: "low", section: "Later" },
  { id: 8, text: "Set up email automation", done: false, priority: "low", section: "Later" },
  { id: 9, text: "Design v2 feature list", done: false, priority: "low", section: "Later" },
];

const PRIORITY_META = {
  high: { label: "High", color: "#FEE2E2", tc: "#DC2626" },
  medium: { label: "Medium", color: "#FEF9C3", tc: "#CA8A04" },
  low: { label: "Low", color: "#F1F5F9", tc: "#64748B" },
};

const SECTIONS = ["This week", "Next up", "Later"];

export default function ChecklistPage() {
  const [tasks, setTasks] = useState<Task[]>(INIT_TASKS);
  const [newText, setNewText] = useState("");
  const [newSection, setNewSection] = useState("This week");
  const [newPriority, setNewPriority] = useState<"high" | "medium" | "low">("medium");
  const [showAdd, setShowAdd] = useState(false);
  const [filter, setFilter] = useState<"all" | "active" | "done">("all");

  const done = tasks.filter(t => t.done).length;
  const total = tasks.length;

  function toggle(id: number) {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  }
  function remove(id: number) {
    setTasks(prev => prev.filter(t => t.id !== id));
  }
  function add() {
    if (!newText.trim()) return;
    setTasks(prev => [...prev, { id: Date.now(), text: newText, done: false, priority: newPriority, section: newSection }]);
    setNewText("");
    setShowAdd(false);
  }

  const visibleTasks = tasks.filter(t => filter === "all" ? true : filter === "done" ? t.done : !t.done);

  return (
    <div style={{ padding: "32px 40px", width: "100%" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28, flexWrap: "wrap", gap: 16 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <div style={{ width: 34, height: 34, background: "#EDE9FE", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <CheckSquare size={17} color="#7C3AED" />
            </div>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#7C3AED", fontFamily: "Sora, sans-serif" }}>Checklist</span>
          </div>
          <h1 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 24, color: "#0F172A", letterSpacing: "-0.02em", marginBottom: 4 }}>
            Tasks & milestones
          </h1>
          <p style={{ fontSize: 14, color: "#64748B" }}>{done} of {total} tasks complete</p>
        </div>
        <button onClick={() => setShowAdd(true)} style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 18px", background: "#7C3AED", color: "white", border: "none", borderRadius: 9, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "Sora, sans-serif", transition: "background 0.15s" }}
          onMouseEnter={e => (e.currentTarget.style.background = "#6D28D9")}
          onMouseLeave={e => (e.currentTarget.style.background = "#7C3AED")}>
          <Plus size={14} /> Add task
        </button>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 24 }}>
        {[
          { label: "Total", val: total, color: "#F8FAFF", tc: "#0F172A" },
          { label: "Done", val: done, color: "#DCFCE7", tc: "#16A34A" },
          { label: "In progress", val: total - done, color: "#DBEAFE", tc: "#2563EB" },
          { label: "High priority", val: tasks.filter(t => t.priority === "high" && !t.done).length, color: "#FEE2E2", tc: "#DC2626" },
        ].map(s => (
          <div key={s.label} style={{ background: s.color, border: "1px solid #E2E8F0", borderRadius: 10, padding: "12px 14px" }}>
            <div style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 22, color: s.tc }}>{s.val}</div>
            <div style={{ fontSize: 12, color: "#64748B", fontWeight: 500, marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div style={{ height: 6, background: "#F1F5F9", borderRadius: 999, marginBottom: 24, overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${Math.round((done/total)*100)}%`, background: "linear-gradient(90deg, #7C3AED, #2563EB)", borderRadius: 999, transition: "width 0.5s cubic-bezier(0.16,1,0.3,1)" }} />
      </div>

      {/* Filter tabs */}
      <div style={{ display: "flex", gap: 4, marginBottom: 24, background: "#F1F5F9", borderRadius: 10, padding: 4, width: "fit-content" }}>
        {[["all","All"],["active","Active"],["done","Done"]].map(([v,l]) => (
          <button key={v} onClick={() => setFilter(v as typeof filter)} style={{ padding: "7px 16px", borderRadius: 7, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600, transition: "all 0.15s", background: filter === v ? "white" : "transparent", color: filter === v ? "#0F172A" : "#64748B", boxShadow: filter === v ? "0 1px 4px rgba(0,0,0,0.08)" : "none" }}>
            {l}
          </button>
        ))}
      </div>

      {/* Sections */}
      {SECTIONS.map(section => {
        const sectionTasks = visibleTasks.filter(t => t.section === section);
        if (sectionTasks.length === 0) return null;
        return (
          <div key={section} style={{ marginBottom: 28 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <span style={{ fontFamily: "Sora, sans-serif", fontSize: 13, fontWeight: 700, color: "#0F172A" }}>{section}</span>
              <span style={{ background: "#F1F5F9", color: "#94A3B8", padding: "2px 8px", borderRadius: 999, fontSize: 11, fontWeight: 700 }}>{sectionTasks.filter(t => !t.done).length}</span>
              <div style={{ flex: 1, height: 1, background: "#F1F5F9", marginLeft: 4 }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {sectionTasks.map(task => (
                <div key={task.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", background: "white", border: "1.5px solid", borderColor: task.done ? "#F1F5F9" : "#E2E8F0", borderRadius: 10, transition: "all 0.15s", opacity: task.done ? 0.7 : 1, group: "task" } as any}
                  onMouseEnter={e => !task.done && ((e.currentTarget as HTMLElement).style.borderColor = "#BFDBFE")}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = task.done ? "#F1F5F9" : "#E2E8F0"}>
                  <button onClick={() => toggle(task.id)} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, flexShrink: 0, transition: "transform 0.15s" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.2)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}>
                    {task.done
                      ? <CheckCircle2 size={20} color="#7C3AED" fill="#EDE9FE" strokeWidth={1.5} />
                      : <Circle size={20} color="#CBD5E1" strokeWidth={1.5} />}
                  </button>
                  <span style={{ flex: 1, fontSize: 14, color: task.done ? "#94A3B8" : "#0F172A", textDecoration: task.done ? "line-through" : "none", transition: "all 0.2s" }}>{task.text}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ background: PRIORITY_META[task.priority].color, color: PRIORITY_META[task.priority].tc, padding: "2px 8px", borderRadius: 999, fontSize: 11, fontWeight: 700 }}>
                      {PRIORITY_META[task.priority].label}
                    </span>
                    <button onClick={() => remove(task.id)} style={{ background: "none", border: "none", cursor: "pointer", color: "#E2E8F0", padding: 2, transition: "color 0.15s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#DC2626")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#E2E8F0")}>
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* Add task modal */}
      {showAdd && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(15,23,42,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, backdropFilter: "blur(6px)" }}>
          <div style={{ background: "white", borderRadius: 20, padding: "32px", width: "100%", maxWidth: 420, boxShadow: "0 28px 80px rgba(0,0,0,0.22)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <h3 style={{ fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 18, color: "#0F172A" }}>Add task</h3>
              <button onClick={() => setShowAdd(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "#94A3B8" }}><X size={18} /></button>
            </div>
            <div style={{ marginBottom: 14 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Task *</label>
              <input value={newText} onChange={e => setNewText(e.target.value)} onKeyDown={e => e.key === "Enter" && add()}
                placeholder="What needs to get done?"
                style={{ width: "100%", padding: "10px 14px", border: "1.5px solid #E2E8F0", borderRadius: 9, fontSize: 14, outline: "none", boxSizing: "border-box" }}
                onFocus={e => (e.target.style.borderColor = "#7C3AED")}
                onBlur={e => (e.target.style.borderColor = "#E2E8F0")} autoFocus />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Section</label>
                <select value={newSection} onChange={e => setNewSection(e.target.value)}
                  style={{ width: "100%", padding: "10px 14px", border: "1.5px solid #E2E8F0", borderRadius: 9, fontSize: 14, outline: "none", background: "white", color: "#0F172A" }}>
                  {SECTIONS.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Priority</label>
                <select value={newPriority} onChange={e => setNewPriority(e.target.value as typeof newPriority)}
                  style={{ width: "100%", padding: "10px 14px", border: "1.5px solid #E2E8F0", borderRadius: 9, fontSize: 14, outline: "none", background: "white", color: "#0F172A" }}>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              <button onClick={() => setShowAdd(false)} style={{ flex: 1, padding: "11px", border: "1.5px solid #E2E8F0", borderRadius: 9, background: "white", fontSize: 14, fontWeight: 600, color: "#64748B", cursor: "pointer" }}>Cancel</button>
              <button onClick={add} style={{ flex: 1, padding: "11px", border: "none", borderRadius: 9, background: "#7C3AED", color: "white", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "Sora, sans-serif" }}>Add task</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
