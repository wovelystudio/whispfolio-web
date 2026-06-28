import { z } from "zod";

/* ─────────────────────────────────────────────
   AUTH
───────────────────────────────────────────── */

export const signUpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  role: z.enum(["creator", "follower"]).default("follower"),
});

export const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

/* ─────────────────────────────────────────────
   PROJECTS
───────────────────────────────────────────── */

export const projectSchema = z.object({
  name: z.string().min(2, "Project name is required").max(100),
  slug: z
    .string()
    .min(2)
    .max(100)
    .regex(/^[a-z0-9-]+$/, "Slug can only contain lowercase letters, numbers, and hyphens"),
  tagline: z.string().max(200).optional(),
  description: z.string().max(2000).optional(),
  category: z.string().optional(),
  stage: z.enum(["planning", "design", "development", "beta", "launched"]).optional(),
  visibility: z.enum(["public", "private"]).default("public"),
  website_url: z.string().url().optional().or(z.literal("")),
  github_url: z.string().url().optional().or(z.literal("")),
  twitter_url: z.string().url().optional().or(z.literal("")),
});

export const projectUpdateSchema = projectSchema.partial();

/* ─────────────────────────────────────────────
   UPDATES (Proof Wall / Milestone posts)
───────────────────────────────────────────── */

export const updateSchema = z.object({
  title: z.string().min(1, "Title is required").max(200),
  content: z.string().min(1, "Content is required").max(5000),
  tag: z.string().max(50).optional(),
  is_milestone: z.boolean().default(false),
});

/* ─────────────────────────────────────────────
   COMMENTS
───────────────────────────────────────────── */

export const commentSchema = z.object({
  content: z.string().min(1, "Comment cannot be empty").max(1000),
});

/* ─────────────────────────────────────────────
   INSPIRATION
───────────────────────────────────────────── */

export const inspirationSchema = z.object({
  title: z.string().min(1).max(200),
  url: z.string().url().optional().or(z.literal("")),
  category: z.enum(["Design", "Code", "UX", "Marketing", "Other"]).default("Other"),
  note: z.string().max(500).optional(),
});

/* ─────────────────────────────────────────────
   CHECKLIST
───────────────────────────────────────────── */

export const checklistItemSchema = z.object({
  title: z.string().min(1, "Task title is required").max(300),
  sort_order: z.number().int().optional(),
});

export const checklistUpdateSchema = z.object({
  is_done: z.boolean().optional(),
  title: z.string().min(1).max(300).optional(),
  sort_order: z.number().int().optional(),
});

/* ─────────────────────────────────────────────
   MILESTONES
───────────────────────────────────────────── */

export const milestoneSchema = z.object({
  label: z.string().min(1).max(200),
  is_done: z.boolean().default(false),
  target_date: z.string().optional(), // ISO date string
  sort_order: z.number().int().optional(),
});

/* ─────────────────────────────────────────────
   SHARE SETTINGS
───────────────────────────────────────────── */

export const shareSettingsSchema = z.object({
  show_progress: z.boolean().optional(),
  show_checklist: z.boolean().optional(),
  show_proof_wall: z.boolean().optional(),
  show_followers: z.boolean().optional(),
  custom_slug: z.string().min(2).max(100).regex(/^[a-z0-9-]+$/).optional(),
});

/* ─────────────────────────────────────────────
   PROFILE
───────────────────────────────────────────── */

export const profileUpdateSchema = z.object({
  display_name: z.string().min(2).max(50).optional(),
  bio: z.string().max(300).optional(),
  website: z.string().url().optional().or(z.literal("")),
  twitter: z.string().max(50).optional(),
});

/* ─────────────────────────────────────────────
   INFERRED TYPES
───────────────────────────────────────────── */

export type SignUpInput = z.infer<typeof signUpSchema>;
export type SignInInput = z.infer<typeof signInSchema>;
export type ProjectInput = z.infer<typeof projectSchema>;
export type UpdateInput = z.infer<typeof updateSchema>;
export type CommentInput = z.infer<typeof commentSchema>;
export type InspirationInput = z.infer<typeof inspirationSchema>;
export type ChecklistItemInput = z.infer<typeof checklistItemSchema>;
export type MilestoneInput = z.infer<typeof milestoneSchema>;
export type ShareSettingsInput = z.infer<typeof shareSettingsSchema>;
export type ProfileUpdateInput = z.infer<typeof profileUpdateSchema>;
