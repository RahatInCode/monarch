"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks ${form.name}, we’ll get back to you soon!`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          Have a question or need help? Drop us a message and we’ll respond quickly.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-gray-50 shadow-md rounded-2xl p-8 space-y-4 text-left"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black h-32"
            required
          />
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
