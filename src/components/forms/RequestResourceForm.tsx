"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { requestResourceSchema, type RequestResourceValues } from "@/lib/schemas";
import { Field, inputClass } from "./FormField";
import { trackEvent } from "@/lib/analytics";

export function RequestResourceForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RequestResourceValues>({ resolver: zodResolver(requestResourceSchema) });

  const onSubmit = async (values: RequestResourceValues) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/request-resource", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      trackEvent("resource_request_submit", { role: values.role });
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
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="rr-website">Company Website</label>
        <input id="rr-website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <Field label="Role" htmlFor="rr-role" error={errors.role?.message}>
        <input id="rr-role" className={inputClass} placeholder="e.g. Senior QA Automation Engineer" {...register("role")} />
      </Field>
      <Field label="Technology" htmlFor="rr-technology" error={errors.technology?.message}>
        <input id="rr-technology" className={inputClass} placeholder="e.g. Playwright, Java, AWS" {...register("technology")} />
      </Field>
      <Field label="Years of Experience" htmlFor="rr-yearsOfExperience" error={errors.yearsOfExperience?.message}>
        <input id="rr-yearsOfExperience" className={inputClass} placeholder="e.g. 5+ years" {...register("yearsOfExperience")} />
      </Field>
      <Field label="Number of Resources" htmlFor="rr-numberOfResources" error={errors.numberOfResources?.message}>
        <input id="rr-numberOfResources" className={inputClass} placeholder="e.g. 1" {...register("numberOfResources")} />
      </Field>
      <Field label="Location / Timezone" htmlFor="rr-locationTimezone" error={errors.locationTimezone?.message}>
        <input id="rr-locationTimezone" className={inputClass} placeholder="e.g. EST overlap" {...register("locationTimezone")} />
      </Field>
      <Field label="Contract Duration" htmlFor="rr-contractDuration" error={errors.contractDuration?.message}>
        <input id="rr-contractDuration" className={inputClass} placeholder="e.g. 6 months, long-term" {...register("contractDuration")} />
      </Field>
      <Field label="Budget Range" htmlFor="rr-budgetRange" optional error={errors.budgetRange?.message}>
        <input id="rr-budgetRange" className={inputClass} placeholder="e.g. $25-40/hr" {...register("budgetRange")} />
      </Field>
      <Field label="Start Date" htmlFor="rr-startDate" optional error={errors.startDate?.message}>
        <input id="rr-startDate" type="date" className={inputClass} {...register("startDate")} />
      </Field>
      <div className="sm:col-span-2">
        <Field label="Job Description" htmlFor="rr-jobDescription" error={errors.jobDescription?.message}>
          <textarea id="rr-jobDescription" rows={4} className={inputClass} {...register("jobDescription")} />
        </Field>
      </div>
      <Field label="Work Email" htmlFor="rr-email" error={errors.email?.message}>
        <input id="rr-email" type="email" className={inputClass} {...register("email")} />
      </Field>
      <Field label="Company" htmlFor="rr-company" error={errors.company?.message}>
        <input id="rr-company" className={inputClass} {...register("company")} />
      </Field>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          data-cta-id="request_resource_submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark disabled:opacity-70 sm:w-auto"
        >
          {status === "submitting" ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          Find My Resource
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
