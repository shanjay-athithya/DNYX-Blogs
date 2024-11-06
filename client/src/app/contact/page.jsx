"use client";
import { API } from "@/config/config";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { RiThreadsFill } from "react-icons/ri";

const brandColor = "#FFC632"; // Example brand color
const blackki = "#000000";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    return phone.length === 10 && /^\d{10}$/.test(phone);
  };

  const validateForm = () => {
    let formErrors = {};
    if (!validateEmail(email)) {
      formErrors.email = "Please enter a valid email address.";
    }
    if (!validatePhone(phone)) {
      formErrors.phone = "Phone number must be 10 digits.";
    }
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const res = await axios.post(`${API}/api/send-email`, {
        name,
        email,
        phone,
        subject,
      });
      console.log(res.data);
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <main
        id="contact"
        className="bg-white dark:bg-black relative pt-[20px] lg:px-20 px-10 py-10"
      >
        <div className="text-center mb-10">
          <h1
            className="text-center font-semibold lg:text-4xl text-3xl tracking-wide"
            style={{ color: brandColor }}
          >
            Contact Us
          </h1>
          <h3 className="pt-2 text-lg text-gray-700 dark:text-gray-300">
            Let&apos;s turn your vision into reality!
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* About Us and Contact Info */}
          <div className="space-y-6">
            <h2
              className="font-bold lg:text-3xl text-2xl"
              style={{
                color: brandColor,
                position: "relative",
                display: "inline-block",
              }}
            >
              About DNYX
              <span
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "3px",
                  backgroundColor: brandColor,
                  bottom: "-3px",
                  left: 0,
                }}
              ></span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-7">
              Ready to take your business to the next level? Whether it&apos;s
              web, app, digital marketing, or design, we transform your vision
              into reality with precision and expertise. Our tailored solutions
              are designed to meet your unique needs, ensuring scalability and
              success. Let us help you unlock your business&apos;s full
              potential. Connect with us now and discover how our innovative
              strategies can drive growth and elevate your brand to new heights.
            </p>

            <h3
              className="font-semibold lg:text-2xl text-xl mt-10"
              style={{
                color: brandColor,
                position: "relative",
                display: "inline-block",
              }}
            >
              Contact Information
              <span
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "3px",
                  backgroundColor: brandColor,
                  bottom: "-3px",
                  left: 0,
                }}
              ></span>
            </h3>

            <div className="flex items-center gap-3">
              <IoMail className="text-xl text-black dark:text-white" />{" "}
              {/* Mail Icon Fix */}
              <h4 className="text-lg font-semibold dark:text-white">
                contact@dnyx.in
              </h4>{" "}
              {/* Text Fix */}
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-xl text-black dark:text-white" />
              {""}
              <h4 className="text-lg font-semibold dark:text-white">
                +91 8870086519
              </h4>
            </div>

            <h3
              className="font-semibold lg:text-2xl text-xl mt-10"
              style={{
                color: brandColor,
                position: "relative",
                display: "inline-block",
              }}
            >
              Follow Us On
              <span
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "3px",
                  backgroundColor: brandColor,
                  bottom: "-3px",
                  left: 0,
                }}
              ></span>
            </h3>

            <div className="grid grid-cols-6 gap-5">
              <Link
                href="https://x.com/dnyxofficial"
                target="_blank"
                className="transition-transform transform hover:scale-110"
              >
                <FaTwitter className="text-4xl text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" />
              </Link>

              <Link
                href="https://facebook.com/dnyx.in"
                target="_blank"
                className="transition-transform transform hover:scale-110"
              >
                <FaFacebook className="text-4xl text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" />
              </Link>

              <Link
                href="https://instagram.com/dnyx.in"
                target="_blank"
                className="transition-transform transform hover:scale-110"
              >
                <FaInstagram className="text-4xl text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" />
              </Link>

              <Link
                href="https://www.threads.net/dnyx.in"
                target="_blank"
                className="transition-transform transform hover:scale-110"
              >
                <RiThreadsFill className="text-4xl text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" />
              </Link>

              <Link
                href="https://linkedin.com/in/dnyx"
                target="_blank"
                className="transition-transform transform hover:scale-110"
              >
                <FaLinkedin className="text-4xl text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" />
              </Link>
              <Link
                href="https://youtube.com/c/dnyxofficial"
                target="_blank"
                className="transition-transform transform hover:scale-110"
              >
                <FaYoutube className="text-4xl text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" />
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl p-8 shadow-lg bg-white dark:bg-gray-800">
            <form action="" className="grid gap-5" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-gray-700 dark:text-gray-300 mb-2 font-semibold lg:text-lg text-md"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="Name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="px-3 py-3 focus:outline-none bg-gray-100 dark:bg-gray-700 dark:text-white rounded-md shadow-sm  transition-shadow text-sm"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-gray-700 dark:text-gray-300 mb-2 font-semibold lg:text-lg text-md"
                >
                  E-Mail ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="px-3 py-3 focus:outline-none bg-gray-100 dark:bg-gray-700 dark:text-white rounded-md shadow-sm  transition-shadow text-sm"
                  required
                />
                {errors.email && (
                  <p className="text-red-500 mt-1 text-sm">{errors.email}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="phone"
                  className="text-gray-700 dark:text-gray-300 mb-2 font-semibold lg:text-lg text-md"
                >
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your mobile number"
                  className="px-3 py-3 focus:outline-none bg-gray-100 dark:bg-gray-700 dark:text-white rounded-md shadow-sm  transition-shadow text-sm"
                  required
                />
                {errors.phone && (
                  <p className="text-red-500 mt-1 text-sm">{errors.phone}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="subject"
                  className="text-gray-700 dark:text-gray-300 mb-2 font-semibold lg:text-lg text-md"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="subject"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Tell us the Query"
                  className="px-3 py-3 min-h-[120px] focus:outline-none bg-gray-100 dark:bg-gray-700 dark:text-white rounded-md shadow-sm  transition-shadow text-sm"
                  required
                ></textarea>
              </div>

              <input
                type="submit"
                value={isSubmitting ? "Sending..." : "Send Message"}
                className="text-white w-full rounded-xl py-3 font-semibold transition-transform transform lg:text-lg text-md"
                style={{
                  backgroundColor: brandColor,
                  transform: isSubmitting ? "scale(1.05)" : "scale(1)",
                }}
                disabled={isSubmitting}
              />
            </form>
          </div>
        </div>

        {/* Thank You Modal */}
        {isSubmitted && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity">
            <div
              className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center transition-transform transform scale-100"
              style={{ animation: "pop-up 0.5s ease-out forwards" }}
            >
              <h2 className="text-2xl font-semibold" style={{ color: blackki }}>
                Thank you!
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                We will contact you soon.
              </p>
            </div>
          </div>
        )}

        <style jsx>{`
          @keyframes pop-up {
            0% {
              transform: scale(0);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}</style>
      </main>
    </div>
  );
};

export default Page;
