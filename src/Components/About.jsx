import React from 'react';
import aboutImage from '../assets/about.jpg';

const About = () => {
  return (
    <section className="bg-gray-100 py-10">
      <h2 className="section-title text-3xl font-semibold text-center mb-6">About</h2>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side: Image */}
          <div className="about__img mb-6 md:mb-0 md:w-1/2 flex justify-center">
            <img src={aboutImage} alt="About Me" className="rounded-lg shadow-md w-3/4 h-auto" />
          </div>

          {/* Right Side: Text */}
          <div className="md:w-1/2">
            <h2 className="about__subtitle text-2xl font-semibold mb-4">I am Prasanthkumar</h2>
            <p className="about__text text-lg text-gray-700 mb-4">
              I am an IT professional and freelancer with a passion for building clean, scalable, and user-friendly applications. With hands-on experience in both frontend and backend development, I specialize in crafting modern web and mobile solutions using the MERN stack and Flutter.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              As a self-motivated freelancer, I help businesses and startups transform their ideas into digital reality. From UI/UX design to API integrations and full-stack solutions, I bring dedication and creativity to every project I take on.
            </p>
          </div>
        </div>

        {/* My Goals Section */}
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">My Goals</h3>
          <p className="text-lg text-gray-700 mb-4">
            I aim to contribute to meaningful projects that make a positive impact. My goal is to continuously evolve as a developer and work with teams that value innovation, collaboration, and learning.
          </p>
          <p className="text-lg text-gray-700">
            I also aspire to build long-term relationships with clients and deliver solutions that go beyond expectations — ensuring satisfaction, scalability, and performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;