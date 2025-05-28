"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import clsx from "clsx";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    subtitle: "+380 99 47 59 953",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    subtitle: "serhii.kokorskyi@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    subtitle: "Ukraine, Rivne",
  },
];

const initialFormData = () => ({
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});

const Status = {
  IDLE: "idle",
  SENDING: "sending",
  SUCCESS: "success",
  ERROR: "error",
};

const sendMessageToTelegram = async (formData) => {
  const res = await fetch("/api/telegram", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: `${formData.firstname} ${formData.lastname}`.trim(),
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    }),
  });
  return res;
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData());
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubjectChange = (value) =>
    setFormData({ ...formData, subject: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(Status.SENDING);
    setError("");

    try {
      const res = await sendMessageToTelegram(formData);
      if (res.ok) {
        setStatus(Status.SUCCESS);
        setFormData(initialFormData());
      } else {
        const data = await res.json();
        setError(data.error || "Щось пішло не так");
        setStatus(Status.ERROR);
      }
    } catch {
      setError("Помилка з'єднання з сервером");
      setStatus(Status.ERROR);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] w-full xl:w-[70%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className={clsx(
                "flex flex-col gap-6 p-10",
                "bg-[#27272c]",
                "rounded-xl"
              )}
            >
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                Tell me about your project and I&apos;ll get back to you as soon as possible.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  type="text"
                  placeholder="First name"
                  required
                />
                <Input
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  type="text"
                  placeholder="Last name"
                  required
                />
                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email address"
                  required
                />
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="Phone, Telegram, WhatsApp, other"
                  required
                />
              </div>
              <Select
                onValueChange={handleSubjectChange}
                value={formData.subject}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="User Interface (UI) Development">
                      User Interface (UI) Development
                    </SelectItem>
                    <SelectItem value="Client-Side Logic Programming">
                      Client-Side Logic Programming
                    </SelectItem>
                    <SelectItem value="API Integration">
                      API Integration
                    </SelectItem>
                    <SelectItem value="Performance Optimization">
                      Performance Optimization
                    </SelectItem>
                    <SelectItem value="Authentication Handling">
                      Authentication Handling
                    </SelectItem>
                    <SelectItem value="SEO and Accessibility">
                      SEO and Accessibility
                    </SelectItem>
                    <SelectItem value="Interface Maintenance and Updates">
                      Interface Maintenance and Updates
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="h-[200px]"
                placeholder="Your message"
                required
              />
              <Button type="submit" className="self-center w-[200px]">
                {status === Status.SENDING ? "Sending..." : "Submit"}
              </Button>
              {status === Status.SUCCESS && (
                <p className="text-green-500 text-center">
                  ✅ Повідомлення надіслано
                </p>
              )}
              {status === Status.ERROR && (
                <p className="text-red-500 text-center">❌ {error}</p>
              )}
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none w-full xl:w-[30%] mb-8 xl:mb-0">
            <ul>
              {info.map((item, index) => {
                const isPhone = item.title.toLowerCase() === "phone";
                const isEmail = item.title.toLowerCase() === "email";

                const linkHref = isPhone
                  ? `tel:${item.subtitle.replace(/\s+/g, "")}`
                  : isEmail
                  ? `mailto:${item.subtitle}`
                  : null;

                const content = (
                  <li
                    key={index}
                    className="flex items-center gap-4 mb-8 group border border-transparent hover:border-accent/30 p-4 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20"
                  >
                    <div className="w-[52px] h-[52px] bg-[#232329] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-accent group-hover:shadow-lg group-hover:scale-105 ring-accent focus:ring-2 focus:outline-none">
                      <span className="text-2xl text-accent transition-colors duration-300 group-hover:text-primary">
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-lg text-white group-hover:text-accent transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-white/60 group-hover:text-white transition-colors duration-300">
                        {item.subtitle}
                      </p>
                    </div>
                  </li>
                );

                return linkHref ? (
                  <a
                    href={linkHref}
                    key={index}
                    className="block hover:no-underline"
                  >
                    {content}
                  </a>
                ) : (
                  content
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
