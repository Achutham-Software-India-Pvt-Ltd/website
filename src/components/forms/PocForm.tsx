"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { pocSchema, type PocFormValues, pocCategoryOptions } from "@/lib/schemas";
import { Field, inputClass } from "./FormField";
import { trackEvent } from "@/lib/analytics";

export function PocForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PocFormValues>({ resolver: zodResolver(pocSchema) });

  const onSubmit = async (values: PocFormValues) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/poc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      trackEvent("poc_request_submit", { category: values.category });
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
        <label htmlFor="poc-website">Company Website</label>
        <input id="poc-website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <Field label="Name" htmlFor="poc-name" error={errors.name?.message}>
        <input id="poc-name" className={inputClass} {...register("name")} />
      </Field>
      <Field label="Work Email" htmlFor="poc-email" error={errors.email?.message}>
        <input id="poc-email" type="email" className={inputClass} {...register("email")} />
      </Field>
      <Field label="Company" htmlFor="poc-company" error={errors.company?.message}>
        <input id="poc-company" className={inputClass} {...register("company")} />
      </Field>
      <Field label="POC Category" htmlFor="poc-category" error={errors.category?.message}>
        <select id="poc-category" className={inputClass} defaultValue="" {...register("category")}>
          <option value="" disabled>
            Select a category
          </option>
          {pocCategoryOptions.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Target Timeline" htmlFor="poc-timeline" optional error={errors.timeline?.message}>
        <input id="poc-timeline" className={inputClass} placeholder="e.g. 2-4 weeks" {...register("timeline")} />
      </Field>
      <div className="sm:col-span-2">
        <Field label="What do you want to prove out?" htmlFor="poc-description" error={errors.description?.message}>
          <textarea id="poc-description" rows={4} className={inputClass} {...register("description")} />
        </Field>
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          data-cta-id="poc_form_submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark disabled:opacity-70 sm:w-auto"
        >
          {status === "submitting" ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          Discuss a POC
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
