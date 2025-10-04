"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MultiDirectionHero from "./MultiDirectionHero";
import { MultiDirectionSlide } from "./MultiDirectionSlide";
import ServiceCard from "./ServiceCard";



const data = [
  {
    name: 'Liam',
    position: 'Data Engineer',
    image:
      'https://ik.imagekit.io/codeui/Framer Components/join-waitlist/pexels-andrewpersonaltraining-697509.jpg?updatedAt=1724857708196',
    message:
      "I can't express how thrilled I am with the service I received from HomeHub. From the moment I contacted them about selling my property, they were professional, efficient, and incredibly knowledgeable. The team went above and beyond to market my home.",
  },
  {
    name: 'Lucas',
    position: 'Accountant',
    image:
      'https://ik.imagekit.io/codeui/Framer Components/join-waitlist/profile.jpg?updatedAt=1712651590417',
    message:
      "I can't express how thrilled I am with the service I received from HomeHub. From the moment I contacted them about selling my property, they were professional, efficient, and incredibly knowledgeable. The team went above and beyond to market my home.",
  },
  {
    name: 'Charlotte',
    position: 'Graphic Designer',
    image:
      'https://ik.imagekit.io/codeui/Framer Components/join-waitlist/1600w-WAhofEY5L1U.webp?updatedAt=1724857708043',
    message:
      "I can't express how thrilled I am with the service I received from HomeHub. From the moment I contacted them about selling my property, they were professional, efficient, and incredibly knowledgeable. The team went above and beyond to market my home.",
  },
];



export default function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <div className="min-h-screen text-base-content">
      <header>
        <main>
          <MultiDirectionHero
            bgImage="/Assets/A.jpg"
          />
        </main>
      </header>

      <section className="bg-gray-100 pt-12 pb-12">
        <div>
          <MultiDirectionSlide
            className="font-display text-center text-4xl font-bold -tracking-widest  text-black dark:text-black md:text-7xl md:leading-[5rem]"
            textLeft="Everything you need to consult online"
            textRight="From quick booking to AI triage and digital prescriptions—built for speed & safety."
          />
        </div>

        <div>
          <ServiceCard></ServiceCard>
        </div>

      </section>

      <main className="max-w-8xl mx-auto px-12 py-8">
        <section id="home" className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Doctors Who Listen</h1>
            <p className="mt-4 w-2/3 text-lg text-muted-foreground">Our doctors spend time to get to know you and your health. They treat you with the respect and empathy you deserve and have years of local and international experience to give you advice you can rely on.</p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-lg shadow-md" data-aos="zoom-in" data-aos-delay="100">
                <h3 className="font-semibold">First</h3>
                <p className="text-sm text-muted-foreground">Optimized for performance</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md" data-aos="zoom-in" data-aos-delay="300">
                <h3 className="font-semibold">Second</h3>
                <p className="text-sm text-muted-foreground">Built with accessibility in mind</p>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" className="relative">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img src="/Assets/Why.webp" alt="hero" className="w-full h-[500px] object-cover" />
            </div>
            {/* <div className="absolute -bottom-6 left-6 bg-white rounded-xl p-4 shadow-xl w-64" data-aos="fade-up" data-aos-delay="400">
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=60" alt="avatar" />
                  </div>
                </div>
                <div>
                  <div className="font-semibold">Jane Doe</div>
                  <div className="text-sm text-muted-foreground">Product Designer</div>
                </div>
              </div>
            </div> */}
          </div>
        </section>

      </main>

      <section id="features" className=" max-w-8xl mx-auto px-12 py-8 bg-gray-200">
        {/* <h2 className="text-3xl font-bold" data-aos="fade-up">Features</h2> */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <img src="/Assets/Lab.webp" alt="Lab_test" className="rounded-xl shadow-lg w-full h-[500px] object-cover" />
          </div>

          <div>
            <div data-aos="fade-left">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Diagnosis You Can Trust</h1>
              <p className="mt-4 w-2/3 text-lg text-muted-foreground">You can depend on the quality of our diagnosis and test results. Our laboratories are set up according to international standards and protocols and Praava's diagnostic lab is one of six internationally accredited labs in Bangladesh.</p>

            </div>
            <div className="pt-8">
              <h2 className="btn text-white font-bold bg-cyan-800 w-40 flex justify-center items-center h-12" data-aos="fade-up">Our Services</h2>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-8xl mx-auto px-12 py-8">
        <section id="home" className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Healthcare Anytime, Anywhere</h1>
            <p className="mt-4 w-2/3 text-lg text-muted-foreground">We use technology to make healthcare accessible to you no matter where you are. You can access your health data, book appointments, review your prescriptions, and view your medical records, anywhere at your convenience.</p>
          </div>

          <div data-aos="fade-left" className="relative">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img src="/Assets/Care.webp" alt="hero" className="w-full h-[500px] object-cover" />
            </div>
          </div>
        </section>
      </main>









      <main className="max-w-8xl mx-auto px-6 py-16">
        
      </main>

      <div className="bg-gray-300 h-[600px]">
      
      </div>
    </div>
  );
}
