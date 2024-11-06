"use client";

import { useState, useRef } from "react";

export default function BlogPage() {
  const aboutSectionRef = useRef(null);
  return (
    <>
      <main
        ref={aboutSectionRef}
        className="lg:px-20 px-10 py-10 transition-all duration-300"
      >
        <div className="grid gap-5 text-justify">
          <div className="grid gap-2">
            <h1 className="font-bold text-2xl">Welcome to Our Blog</h1>
            <h3>
              At DNYX, we are passionate about providing businesses with the
              tools, strategies, and insights they need to succeed in today’s
              fast-paced digital landscape. In this blog, we will share our
              expertise in business solutions, web development, and digital
              marketing, helping you stay ahead of the curve with actionable
              insights and tips from industry experts.
            </h3>
          </div>

          <div className="grid gap-5">
            <h1 className="font-bold text-xl">Latest Posts</h1>

            <div className="grid gap-2">
              <h2 className="font-bold text-lg">Who We Are</h2>
              <h3>
                Welcome to DNYX, a leading business solutions company designed
                to help you navigate today’s competitive market. We offer a
                variety of services, including business consulting, digital
                marketing, and app development through our specialized unit,
                DNYX Web. In this blog, you'll learn more about how we empower
                businesses to achieve their goals with a holistic approach.
              </h3>
            </div>

            <div className="grid gap-2">
              <h2 className="font-bold text-lg">Our Journey</h2>
              <h3>
                At DNYX, we started with a simple goal: to be a one-stop
                solution for all business needs. As we grew, we created DNYX Web
                to cater specifically to digital demands. Read about our journey
                and how we have adapted to meet the growing needs of the online
                business ecosystem.
              </h3>
            </div>

            <div className="grid gap-5">
              <h2 className="font-bold text-lg">What We Do</h2>

              <div className="">
                <h3 className="font-bold">DNYX Business Solutions:</h3>
                <p>
                  Our core services focus on helping businesses optimize their
                  operations through strategic consulting, planning, and
                  operational support. Whether you're looking to streamline
                  operations or achieve long-term growth, our expert team is
                  here to assist you every step of the way.
                </p>
              </div>

              <div className="">
                <h3 className="font-bold">DNYX Web:</h3>
                <p>
                  From web development and design to mobile app creation, DNYX
                  Web is dedicated to providing cutting-edge digital solutions.
                  In our blog, we dive into the latest trends in web design,
                  app development, and digital marketing to help your business
                  thrive in the online world.
                </p>
                <ul className="list-disc ml-5">
                  <li>
                    <strong>Web Development:</strong> Explore the latest web
                    development techniques, tools, and trends that will make
                    your website both beautiful and functional.
                  </li>
                  <li>
                    <strong>App Development:</strong> Discover how custom apps
                    can elevate your business, providing seamless user
                    experiences across all platforms.
                  </li>
                  <li>
                    <strong>Design Services:</strong> Learn how impactful design
                    enhances your brand’s identity and keeps customers coming
                    back.
                  </li>
                  <li>
                    <strong>Digital Marketing:</strong> Stay up to date with
                    expert strategies on social media marketing (SMM), search
                    engine marketing (SEM), and much more, ensuring your brand
                    is seen by the right audience.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
