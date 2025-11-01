"use client";
import Carousel from "@/components/Carousel";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <div className="scroll-smooth">
      {/* Hero Section */}
      <section className="min-h-screen grid grid-cols-4 items-center px-8 gap-6">
        
        {/* Left side: Element (spans 2 columns) */}
        <Element
          name="home"
          className="col-span-2 flex flex-col justify-center text-left"
        >
          <h1 className="text-5xl font-bold mb-4">Jaden Pathammavong</h1>
          <p className="text-lg text-gray-600 max-w-lg">
            Computational Modeling and Data Analytics at Virginia Tech.
          </p>
        </Element>

        {/* Right side: Carousel (spans 2 columns) */}
        <main className="col-span-2 flex justify-center">
          <Carousel />
        </main>
      </section>


      {/* About Section */}
      <Element name="about" className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="max-w-xl text-gray-600">
        As a third-year student at Virginia Tech studying Computational Modeling and Data Analytics (CMDA), I have a strong interest in the intersection of design, technology, and data.
        </p>
        <p className="max-w-xl text-gray-600">
        In addition to my developing skills in data analysis, visualization, mathematics, and statistics. 
        I'm currently exploring full-stack programming with React, Next.js, and TailwindCSS.
        My career interests are consultant, business intelligence analyst, data engineer, or analyst.
        </p>
        <p className="max-w-xl text-gray-600">
        Outside of academics, I practice Kendo, a Japanese martial art that has taught me focus, discipline, and respect. I’m also deeply involved in music, which helps me stay creative and balanced both in life and in problem-solving.
        </p>
      </Element>

      {/* Projects Section */}
      <Element name="projects" className="min-h-screen flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          <div className="border rounded-lg p-6 shadow hover:shadow-md">
            <h3 className="text-2xl font-semibold mb-2">College Dataset Exploratory Data Analysis</h3>
            <p className="text-gray-600 mb-3">
            This analysis can help inform judgments about enhancing educational outcomes and is crucial for comprehending how financial aid affects
            student performance. I used R, R markdown, Linear Regression, and Git.
            </p>
            <a href="/final_project.pdf" className="text-blue-500 hover:underline" target="_blank">
              View
            </a>
          </div>

          <div className="border rounded-lg p-6 shadow hover:shadow-md">
            <h3 className="text-2xl font-semibold mb-2">RSVP Form</h3>
            <p className="text-gray-600 mb-3">
              Developed a full-stack wedding RSVP website using Next.js, React, and Google Sheets API for real-time guest submissions and tracking.
            </p>
            <a href="https://github.com/japath59/rsvp-form" target="_blank" className="text-blue-500 hover:underline">
            View on Github
            </a>

          </div>
        </div>
      </Element>

      {/* Contact Section */}
      <Element name="contact" className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-4">Contact</h2>
        <a href="mailto:japath59@vt.edu" className="text-blue-500 hover:underline mb-2">
          japath59@vt.edu
        </a>
        <a href="https://linkedin.com/in/jadenpathammavong" target="_blank" className="text-blue-500 hover:underline mb-2">
          LinkedIn
        </a>
        <a href="https://github.com/japath59" target="_blank" className="text-blue-500 hover:underline mb-2">
          Github
        </a>
      </Element>
    </div>
  );
}
