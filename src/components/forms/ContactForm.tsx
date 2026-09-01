"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import {
  contactSchema,
  type ContactFormValues,
  requirementTypes,
  experienceLevels,
} from "@/lib/schemas";
import { Field, inputClass } from "./FormField";
import { trackEvent } from "@/lib/analytics";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      trackEvent("contact_form_submit", { requirement_type: values.requirementType });
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-white p-10 text-center card-shadow">
        <CheckCircle2 className="h-10 w-10 text-emerald-600" />
        <h3 className="text-lg font-semibold text-ink">Thank you.</h3>
        <p className="max-w-sm text-sm text-body">
          Our team will review your requirement and get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 gap-5 rounded-2xl border border-border bg-white p-7 card-shadow sm:grid-cols-2"
    >
      {/* Honeypot — hidden from real users via CSS, not `type=hidden`, so
          basic bots that only skip hidden inputs still fill it in. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="cf-website">Company Website</label>
        <input id="cf-website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <Field label="Name" htmlFor="cf-name" error={errors.name?.message}>
        <input id="cf-name" className={inputClass} {...register("name")} />
      </Field>
      <Field label="Work Email" htmlFor="cf-email" error={errors.email?.message}>
        <input id="cf-email" type="email" className={inputClass} {...register("email")} />
      </Field>
      <Field label="Company" htmlFor="cf-company" error={errors.company?.message}>
        <input id="cf-company" className={inputClass} {...register("company")} />
      </Field>
      <Field label="Job Title" htmlFor="cf-jobTitle" error={errors.jobTitle?.message}>
        <input id="cf-jobTitle" className={inputClass} {...register("jobTitle")} />
      </Field>
      <Field label="Phone" htmlFor="cf-phone" optional error={errors.phone?.message}>
        <input id="cf-phone" type="tel" className={inputClass} {...register("phone")} />
      </Field>
      <Field label="What do you need?" htmlFor="cf-requirementType" error={errors.requirementType?.message}>
        <select id="cf-requirementType" className={inputClass} defaultValue="" {...register("requirementType")}>
          <option value="" disabled>
            Select a requirement type
          </option>
          {requirementTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Technology / Skill" htmlFor="cf-technology" error={errors.technology?.message}>
        <input id="cf-technology" className={inputClass} placeholder="e.g. React, Java, AWS" {...register("technology")} />
      </Field>
      <Field label="Number of Resources" htmlFor="cf-numberOfResources" error={errors.numberOfResources?.message}>
        <input id="cf-numberOfResources" className={inputClass} placeholder="e.g. 1, 2-3, 5+" {...register("numberOfResources")} />
      </Field>
      <Field label="Experience Level" htmlFor="cf-experienceLevel" error={errors.experienceLevel?.message}>
        <select id="cf-experienceLevel" className={inputClass} defaultValue="" {...register("experienceLevel")}>
          <option value="" disabled>
            Select experience level
          </option>
          {experienceLevels.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Expected Start Date" htmlFor="cf-startDate" optional error={errors.startDate?.message}>
        <input id="cf-startDate" type="date" className={inputClass} {...register("startDate")} />
      </Field>
      <div className="sm:col-span-2">
        <Field label="Message" htmlFor="cf-message" error={errors.message?.message}>
          <textarea id="cf-message" rows={4} className={inputClass} {...register("message")} />
        </Field>
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          data-cta-id="contact_form_submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark disabled:opacity-70 sm:w-auto"
        >
          {status === "submitting" ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          Submit Requirement
        </button>
        {status === "error" ? (
          <p className="mt-3 text-sm text-red-600">
            Something went wrong. Please try again, or email us directly.
          </p>
        ) : null}
      </div>
    </form>
  );
}
