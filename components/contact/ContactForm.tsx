"use client";

import { FormEvent, useState } from "react";

const budgetOptions = [
  "Under $3,000",
  "$3,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
  "Not sure yet",
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);

    // Temporary until we connect a form backend.
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        {/* Name */}
        <div className="space-y-3">
          <label
            htmlFor="name"
            className="text-xs font-medium uppercase tracking-[0.14em] text-muted"
          >
            Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full border-b border-border bg-transparent pb-4 text-base text-foreground outline-none placeholder:text-muted/60 transition-colors focus:border-foreground"
          />
        </div>

        {/* Email */}
        <div className="space-y-3">
          <label
            htmlFor="email"
            className="text-xs font-medium uppercase tracking-[0.14em] text-muted"
          >
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full border-b border-border bg-transparent pb-4 text-base text-foreground outline-none placeholder:text-muted/60 transition-colors focus:border-foreground"
          />
        </div>
      </div>

      {/* Business */}
      <div className="space-y-3">
        <label
          htmlFor="business"
          className="text-xs font-medium uppercase tracking-[0.14em] text-muted"
        >
          Business
        </label>

        <input
          id="business"
          name="business"
          type="text"
          placeholder="Your business name"
          className="w-full border-b border-border bg-transparent pb-4 text-base text-foreground outline-none placeholder:text-muted/60 transition-colors focus:border-foreground"
        />
      </div>

      {/* Project type */}
      <div className="space-y-3">
        <label
          htmlFor="project"
          className="text-xs font-medium uppercase tracking-[0.14em] text-muted"
        >
          What are you looking to build?
        </label>

        <select
          id="project"
          name="project"
          required
          defaultValue=""
          className="w-full appearance-none border-b border-border bg-transparent pb-4 text-base text-foreground outline-none transition-colors focus:border-foreground"
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="new-website">A new website</option>
          <option value="redesign">Redesign my existing website</option>
          <option value="ecommerce">E-commerce website</option>
          <option value="other">Something else</option>
        </select>
      </div>

      {/* Budget */}
      <div className="space-y-3">
        <label
          htmlFor="budget"
          className="text-xs font-medium uppercase tracking-[0.14em] text-muted"
        >
          Approximate budget
        </label>

        <select
          id="budget"
          name="budget"
          defaultValue=""
          className="w-full appearance-none border-b border-border bg-transparent pb-4 text-base text-foreground outline-none transition-colors focus:border-foreground"
        >
          <option value="" disabled>
            Select a range
          </option>

          {budgetOptions.map((budget) => (
            <option key={budget} value={budget}>
              {budget}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="space-y-3">
        <label
          htmlFor="message"
          className="text-xs font-medium uppercase tracking-[0.14em] text-muted"
        >
          Tell me about the project
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="A little about what you're looking to build..."
          className="w-full resize-none border-b border-border bg-transparent pb-4 text-base leading-7 text-foreground outline-none placeholder:text-muted/60 transition-colors focus:border-foreground"
        />
      </div>

      {/* Submit */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group inline-flex items-center gap-3 rounded-xl bg-accent px-6 py-3.5 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sending..." : "Send inquiry"}

          {!isSubmitting && (
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          )}
        </button>
      </div>
    </form>
  );
}