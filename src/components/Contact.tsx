import React, { useState } from "react";
import { toast } from "react-toastify";
import { CheckIcon, InboxIcon } from "@heroicons/react/24/outline";
import { WhatsApp } from "@mui/icons-material";
import CallIcon from "@mui/icons-material/Call";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function ContactComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // clear error live while typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    let newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate before setting loading state
    if (!validate()) {
      return; // Don't proceed if validation fails
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Message sent successfully! 🚀");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[1190px] md:ms-3">
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <form
          className="
            relative p-6 rounded-xl glass
            shadow-[0_0_10px_rgba(255,255,255,0.05),0_0_20px_rgba(255,255,255,0.1)]
            border border-white/10
            hover:shadow-[0_0_15px_rgba(255,255,255,0.1),0_0_30px_rgba(255,255,255,0.15)]
            transition-all duration-300
          "
          onSubmit={handleSubmit}
          noValidate
        >
          {/* NAME */}
          <label className="block text-xs text-slate-300">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your name"
            className={`w-full text-sm sm:text-base text mt-1 p-3 rounded-md bg-white/5 text-slate-100 transition-all outline-none
            border ${
              errors.name
                ? "border-red-500/70 glow-error"
                : "border-white/10 focus:border-white/50"
            }`}
          />
          {errors.name && (
            <div className="mt-1 text-xs text-red-300 px-1 animate-fadeIn">
              {errors.name}
            </div>
          )}

          {/* EMAIL */}
          <label className="block text-xs text-slate-300 mt-4">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            placeholder="you@company.com"
            onChange={handleInputChange}
            className={`w-full text-sm sm:text-base text mt-1 p-3 rounded-md bg-white/5 text-slate-100 transition-all outline-none
            border ${
              errors.email
                ? "border-red-500/70 glow-error"
                : "border-white/10 focus:border-white/50"
            }`}
          />
          {errors.email && (
            <div className="mt-1 text-xs text-red-300 px-1 animate-fadeIn">
              {errors.email}
            </div>
          )}

          {/* MESSAGE */}
          <label className="block text-xs text-slate-300 mt-4">Message</label>
          <textarea
            name="message"
            rows={5}
            placeholder="Tell me about the project"
            value={formData.message}
            onChange={handleInputChange}
            className={`w-full text-sm sm:text-base text mt-1 p-3 rounded-md bg-white/5 text-slate-100 transition-all outline-none
            border ${
              errors.message
                ? "border-red-500/70 glow-error"
                : "border-white/10 focus:border-white/50"
            }`}
          />
          {errors.message && (
            <div className="mt-1 text-xs text-red-300 px-1 animate-fadeIn">
              {errors.message}
            </div>
          )}

          <div className="mt-4 flex items-center gap-3">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center px-4 cursor-pointer py-2 rounded-md border border-white/10 text-sm sm:text-base text
               transition-transform duration-200 hover:scale-98 hover:bg-slate-100 text-slate-300 hover:text-slate-950"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>

        <div className="rounded-xl glass flex flex-col md:ms-2">
          <div className="flex flex-col">
            <div className="border rounded-xl border-white/10 flex flex-col p-5 hover:border-white/65 transition-all duration-300 group">
              <h3 className="font-semibold">Say hi</h3>
              <div className="flex flex-row gap-6 mt-1">
                {[
                  {
                    href: "https://linkedin.com/in/md-asjad-reza-683203193",
                    icon: <LinkedInIcon />,
                  },
                  {
                    href: "https://github.com/asjadreza",
                    icon: <GitHubIcon />,
                  },
                  {
                    href: "https://instagram.com/asjadreza_",
                    icon: <InstagramIcon />,
                  },
                  {
                    href: "https://twitter.com/asjad_forreal",
                    icon: <TwitterIcon />,
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                    aria-label={`Visit ${social.href.split(".")[1]}`}
                  >
                    <div className="text-[#8E9EB6] hover:text-white hover:scale-110 transition-all duration-300">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-2">
                <EmailIcon className="text-[#8E9EB6] mr-2" />
                <a
                  href="mailto:asjadreza64@gmail.com"
                  className="text-slate-300 text-sm sm:text-base text"
                >
                  asjadreza64@gmail.com
                </a>
              </div>

              <div className="mt-4">
                <h4 className="text-slate-400 mb-2 text-sm sm:text-base text">
                  Tools I use
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["VSCode", "Figma", "Git", "Vercel"].map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-md bg-white/4"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 border rounded-xl border-white/10 flex flex-col p-5 hover:border-white/65 transition-all duration-300 group">
            <h4 className="text-slate-400 text-sm sm:text-base text">
              Availability
            </h4>
            <div className="mt-2 flex items-center gap-2 text-sm text-slate-300">
              <CheckIcon className="w-4 h-4" /> Open to freelance projects
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm text-slate-300">
              <InboxIcon className="w-4 h-4" /> Reply within 24-48 hours
            </div>
          </div>

          <div className="mt-6 border rounded-xl border-white/10 flex flex-col p-5 hover:border-white/65 transition-all duration-300 group">
            <div className="flex flex-row gap-6">
              <a
                href="https://wa.me/919709392790"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row gap-2 items-center hover:text-green-400 transition"
              >
                <WhatsApp className="w-5 h-5 text-green-400" />
                <div className="text-slate-300 text-sm sm:text-base text hover:text-green-400">
                  Send Message
                </div>
              </a>
              <a
                href="tel:+919709392790"
                className="flex flex-row gap-2 items-center hover:text-indigo-400 transition"
              >
                <CallIcon className="w-5 h-5 text-indigo-400" />
                <div className="text-slate-300 text-sm sm:text-base text hover:text-indigo-400">
                  +91 9709392790
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
