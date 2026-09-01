import { z } from "zod";

// Shared across client (react-hook-form) and server (route handlers) so
// validation never drifts between the two. The `website` field on every
// schema is a honeypot: real users never see or fill it (see the forms),
// so any submission with it populated is treated as spam and dropped.

export const requirementTypes = [
  "Staff Augmentation",
  "Dedicated Resource",
  "Software Development",
  "QA Automation",
  "Performance Engineering",
  "DevOps / Cloud",
  "AI / Data",
  "POC",
  "Other",
] as const;

export const experienceLevels = [
  "0-2 years",
  "3-5 years",
  "6-9 years",
  "8+ years / Specialist",
] as const;

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid work email."),
  company: z.string().min(2, "Please enter your company name."),
  jobTitle: z.string().min(2, "Please enter your job title."),
  phone: z.string().optional().or(z.literal("")),
  requirementType: z.enum(requirementTypes),
  technology: z.string().min(1, "Please tell us the technology or skill."),
  numberOfResources: z.string().min(1, "Please tell us how many resources you need."),
  experienceLevel: z.enum(experienceLevels),
  startDate: z.string().optional().or(z.literal("")),
  message: z.string().min(10, "Please add a little more detail (10+ characters)."),
  website: z.string().max(0, "Spam detected.").optional().or(z.literal("")),
});
export type ContactFormValues = z.infer<typeof contactSchema>;

export const requestResourceSchema = z.object({
  role: z.string().min(2, "Please enter the role you need."),
  technology: z.string().min(1, "Please enter the primary technology."),
  yearsOfExperience: z.string().min(1, "Please select an experience level."),
  numberOfResources: z.string().min(1, "Please tell us how many resources you need."),
  locationTimezone: z.string().min(1, "Please tell us your preferred timezone overlap."),
  contractDuration: z.string().min(1, "Please tell us the expected duration."),
  budgetRange: z.string().optional().or(z.literal("")),
  startDate: z.string().optional().or(z.literal("")),
  jobDescription: z.string().min(10, "Please add a short job description (10+ characters)."),
  email: z.string().email("Please enter a valid work email."),
  company: z.string().min(2, "Please enter your company name."),
  website: z.string().max(0, "Spam detected.").optional().or(z.literal("")),
});
export type RequestResourceValues = z.infer<typeof requestResourceSchema>;

export const pocCategoryOptions = [
  "QA Automation",
  "Performance Testing",
  "AI Automation",
  "Software Development",
  "Cloud/DevOps",
  "Data Engineering",
] as const;

export const pocSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid work email."),
  company: z.string().min(2, "Please enter your company name."),
  category: z.enum(pocCategoryOptions),
  timeline: z.string().optional().or(z.literal("")),
  description: z.string().min(10, "Please describe what you'd like to prove out (10+ characters)."),
  website: z.string().max(0, "Spam detected.").optional().or(z.literal("")),
});
export type PocFormValues = z.infer<typeof pocSchema>;
