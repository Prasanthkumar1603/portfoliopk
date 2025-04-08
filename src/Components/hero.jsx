// // src/components/Hero.js
// import React from 'react';
// import { ReactTyped as Typed } from 'react-typed';
// import profile from '../assets/profile.png'
// const Hero = () => {
//   return (
//     <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white h-screen flex flex-col md:flex-row justify-between items-center px-6 md:px-16" >
//       {/* Left Side Content */}
//       <div className="md:w-1/2 flex flex-col justify-center">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">
//           Hi, I&apos;m <span className="text-yellow-300">Prasanthkumar</span>
//         </h1>
//         <h2 className="text-2xl md:text-3xl font-semibold mb-6">
//           <Typed
//             strings={[
//               'MERN Stack Developer',
//               'UI & UX Designer',
//               'App Developer',
//             ]}
//             typeSpeed={80}
//             backSpeed={60}
//             loop
//           />
//         </h2>
//         <p className="text-lg md:text-xl mb-6">
//           I am passionate about creating innovative web and mobile applications with seamless user experiences.
//         </p>
//       </div>

//       {/* Right Side Image */}
//       <div className="pt-16  md:w-1/2 flex justify-center items-center opacity-0 translate-y-10 animate-fadeIn">
//       <img src={profile} alt="" />
//        </div>
//     </div>
//   );
// };

// export default Hero;

import React from 'react';
import { ReactTyped as Typed } from 'react-typed';
import profile from '../assets/profile.png';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white min-h-screen flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-12 md:py-0">

      {/* Left Side Content */}
      <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center items-center md:items-start">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I&apos;m <span className="text-yellow-300">Prasanthkumar</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          <Typed
            strings={[
              'MERN Stack Developer',
              'UI & UX Designer',
              'App Developer',
              'Freelancer for Hire',
            ]}
            typeSpeed={80}
            backSpeed={60}
            loop
          />
        </h2>

        <p className="text-lg md:text-xl mb-4 max-w-xl">
          I am passionate about creating innovative web and mobile applications with seamless user experiences.
        </p>

        <p className="text-md md:text-lg mb-6 max-w-xl">
          As a dedicated freelancer, I help startups and businesses bring their ideas to life with modern, scalable, and responsive solutions. Whether it’s a website, app, or UI/UX design, I deliver high-quality results tailored to your goals.
        </p>

        <a
          href="#contact"
          className="inline-block bg-yellow-300 hover:bg-yellow-400 text-black font-semibold py-2 px-6 rounded-full transition duration-300"
        >
          Let’s Work Together
        </a>
      </div>

      {/* Right Side Image */}
      <div className="pt-16  md:w-1/2 flex justify-center items-center opacity-0 translate-y-10 animate-fadeIn">
        <img src={profile} alt="" />
      </div>

    </div>
  );
};

export default Hero;
