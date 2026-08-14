import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      console.log(data);

      if (data.success) {
        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setStatusMessage("Message sent successfully!");
      } else {
        setStatusMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);

      setStatusMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Header */}
        <header className="max-w-3xl">
          <p className="uppercase tracking-[0.3em] text-blue-400 text-sm">
            Contact
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">
            Let's build something meaningful together.
          </h2>

          <p className="mt-4 text-lg text-slate-400 leading-relaxed">
            Have a project in mind or want to work together? I'd love to hear
            from you.
          </p>
        </header>

        {/* Contact content */}
        <div className="mt-12 grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Left side */}
          <div className="rounded-3xl border border-slate-700/50 bg-slate-900/40 p-6 md:p-8 transition-all duration-300 hover:border-blue-500/30">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Get in touch
            </h3>

            <p className="mt-4 text-slate-400 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to work together.
            </p>

            {/* Social links */}
            <div className="flex flex-wrap gap-3 pt-6">
              <a
                href="https://github.com/OBED-4k"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-slate-700/50 bg-slate-900/50 px-4 py-3 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:text-white"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/isaiah-obed-5b449a427"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-slate-700/50 bg-slate-900/50 px-4 py-3 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:text-white"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:simonmike299@gmail.com"
                className="flex items-center gap-2 rounded-xl border border-slate-700/50 bg-slate-900/50 px-4 py-3 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:text-white"
              >
                <HiOutlineMail />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right side */}
          <div className="rounded-3xl border border-slate-700/50 bg-slate-900/40 p-6 md:p-8 transition-all duration-300 hover:border-blue-500/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-3 text-white outline-none transition-all placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-3 text-white outline-none transition-all placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  className="w-full resize-none rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-3 text-white outline-none transition-all placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {statusMessage && (
                <p className="text-sm text-blue-400">{statusMessage}</p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 px-5 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed
                disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
