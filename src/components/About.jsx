import React from 'react'
import RU from '../icons/Logo_of_rajshahi_university.jpg'
import VS from '../icons/vivasoft.png'
import upaylogo from '../icons/upaylogo.png'

function About() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 m-4 md:m-8 font-serif">
        <div className="flex flex-col bg-white shadow-lg rounded-lg max-w-md px-4 md:px-6 py-2 md:py-4 hover:shadow-neon transition-shadow duration-500">
          <h1 className="font-bold text-3xl md:text-4xl mb-4 md:mb-6 text-blue-500">
            Education
          </h1>

          <h4 className="text-xl md:text-2xl font-semibold mt-2 md:mt-4">
            University of Rajshahi
          </h4>
          <h5 className="text-md md:text-lg text-gray-600 font-semibold mt-1 md:mt-2">
            Jan 2019 - July 2024
          </h5>
          <img
            src={RU}
            className="h-16 md:h-24 w-16 md:w-24 rounded-full mx-auto mt-2 md:mt-4"
          />
          <h2 className="text-lg md:text-xl font-semibold mt-4 text-center">
            Bachelor of Science in{' '}
            <b>Information and Communication Engineering</b>
          </h2>

          <h3 className="mt-4 text-lg md:text-xl font-semibold text-gray-700">
            Coursework:
          </h3>
          <ul className="mt-4 text-lg md:text-xl text-gray-600 list-disc pl-5">
            <li>Programming with C</li>
            <li>Data Structure and Algorithm</li>
            <li>Java and Network Programming</li>
            <li>Discrete Mathematics</li>
            <li>Database Management Systems</li>
            <li>Software Engineering</li>
            <li>Information System Analysis Design</li>
            <li>Computer Network</li>
            <li>Fundamentals of Cryptography</li>
            <li>Information Theory and Coding</li>
            <li>Web Engineering</li>
          </ul>
        </div>

        <div className="flex flex-col bg-white shadow-lg rounded-lg max-w-md px-4 md:px-6 py-2 md:py-4 hover:shadow-neon transition-shadow duration-500">
          <h1 className="font-bold text-3xl md:text-4xl mb-4 md:mb-6 text-blue-500">
            Experience
          </h1>

          <h4 className="text-xl md:text-2xl font-semibold mt-2 md:mt-4">
            Upay (UCB Fintech Company Limited)
          </h4>
          <h5 className="text-md md:text-lg text-gray-600 font-semibold mt-1 md:mt-2">
            Aug 2024 – Nov 2024 | Gulshan, Dhaka
          </h5>

          <img
            src={upaylogo} // Replace with the logo or image source
            className="h-16 md:h-24 w-16 md:w-24 rounded-full mx-auto mt-2 md:mt-4"
          />
          <h2 className="text-lg md:text-xl font-semibold mt-4 text-center">
            Technology Intern (Back-end)
          </h2>

          <p className="mt-4 text-lg md:text-xl text-gray-700 font-bold">
            Work area:
          </p>
          <ul className="mt-4 text-lg md:text-xl text-gray-600 list-disc pl-5">
            <li>
              Developed scalable and maintainable APIs using{' '}
              <b>Django Rest Framework</b>, ensuring efficient back-end
              solutions.
            </li>
            <li>
              Implemented diverse authentication methods, including token-based,
              session-based, JWT, symmetric and asymmetric encryption, enhancing
              API security and compliance.
            </li>
            <li>
              Optimized <b>microservice</b>microservice communication using <b>RESTful APIs</b>,
              streamlining data exchange across distributed systems.
            </li>
            <li>
              Leveraged <b>Celery</b> for asynchronous task management,
              integrated <b>caching</b> mechanisms, and fine-tuned <b>Django ORM</b> queries
              for optimal performance.
            </li>
            <li>
              Reinforced data integrity through advanced validation techniques,
              safeguarding system reliability.
            </li>
          </ul>
        </div>

        <div className="flex flex-col bg-white shadow-lg rounded-lg max-w-md px-4 md:px-6 py-2 md:py-4 hover:shadow-neon transition-shadow duration-500">
          <h1 className="font-bold text-3xl md:text-4xl mb-4 md:mb-6 text-blue-500">
            Experience
          </h1>

          <h4 className="text-xl md:text-2xl font-semibold mt-2 md:mt-4">
            Vivasoft Limited
          </h4>
          <h5 className="text-md md:text-lg text-gray-600 font-semibold mt-1 md:mt-2">
            Sep 2023 - Feb 2024 | (Remote)
          </h5>
          <img
            src={VS}
            className="h-16 md:h-24 w-16 md:w-24 rounded-full mx-auto mt-2 md:mt-4"
          />
          <h2 className="text-lg md:text-xl font-semibold mt-4 text-center">
            Geeky Solution's Learnathon 2.0,
            <br /> Internship (Front-end)
          </h2>

          <p className="mt-4 text-lg md:text-xl text-gray-700 font-bold">
            Work areas:
          </p>
          <ul className="mt-4 text-lg md:text-xl text-gray-600 list-disc pl-5">
            <li>
              I've gained proficiency in <b>JavaScript</b>, <b>ReactJS</b>, and{' '}
              <b>Tailwind-CSS</b> through hands-on learning experiences. I've
              also collaborated with a dynamic team on an industry-level
              frontend development project.
            </li>
            <li>
              Designed and developed responsive user interfaces using
              JavaScript, ReactJS, and Tailwind CSS, delivering seamless
              cross-platform experiences.
            </li>
            <li>
              Collaborated on a real-world front-end project, enhancing the
              functionality and performance of the Vivasoft Contract Management
              applications.
            </li>
            <li>
              Built reusable, maintainable UI components by mastering React
              hooks, state management, and lifecycle methods.
            </li>
            <li>
              Strengthened the user experience by refining page responsiveness
              and implementing dynamic components.
            </li>
            <li>
              Contributed to agile workflows, prioritizing team collaboration
              and iterative development for continuous improvement.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
