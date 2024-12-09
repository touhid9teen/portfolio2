import React from 'react'
import RU from '../icons/Logo_of_rajshahi_university.jpg'
import VS from '../icons/vivasoft.png'
import upaylogo from '../icons/upaylogo.png'

function About() {
  return (
    <div className="p-10 flex flex-col items-center justify-center font-serif pt-40">
      <h1 className="text-3xl mb-10 font-bold text-blue-500">
        From Classroom to Career
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 m-4 md:m-8 font-serif">
        <div className="flex flex-col bg-white shadow-lg rounded-lg max-w-md px-4 md:px-6 py-2 md:py-4 hover:shadow-neon transition-shadow duration-500">
          <h1 className="font-bold text-2xl md:text-3xl mb-4 md:mb-6 text-blue-500">
            Education
          </h1>

          <h4 className="text-lg md:text-xl font-semibold mt-2 md:mt-4">
            University of Rajshahi
          </h4>
          <h5 className="text-sm md:text-base text-gray-600 font-semibold mt-1 md:mt-2">
            Jan 2019 - July 2024
          </h5>
          <img
            src={RU}
            className="h-16 md:h-24 w-16 md:w-24 rounded-full mx-auto mt-2 md:mt-4"
          />
          <h2 className="text-base md:text-lg font-semibold mt-4 text-center">
            Bachelor of Science in{' '}
            <b>Information and Communication Engineering</b>
          </h2>

          <h3 className="mt-4 text-base md:text-lg font-semibold text-gray-700">
            Coursework:
          </h3>
          <ul className="mt-4 text-base md:text-lg text-gray-600 list-disc pl-5">
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
          <h1 className="font-bold text-2xl md:text-3xl mb-4 md:mb-6 text-blue-500">
            Experience
          </h1>

          <h4 className="text-lg md:text-xl font-semibold mt-2 md:mt-4">
            Upay (UCB Fintech Company Limited)
          </h4>
          <h5 className="text-sm md:text-base text-gray-600 font-semibold mt-1 md:mt-2">
            Aug 2024 – Nov 2024 | Gulshan, Dhaka
          </h5>

          <img
            src={upaylogo}
            className="h-16 md:h-24 w-16 md:w-24 rounded-full mx-auto mt-2 md:mt-4"
          />
          <h2 className="text-base md:text-lg font-semibold mt-4 text-center">
            Technology Intern (Back-end)
          </h2>

          <p className="mt-4 text-base md:text-lg text-gray-700 font-bold">
            Work area:
          </p>
          <ul className="mt-4 text-base md:text-lg text-gray-600 list-disc pl-5">
            <li>
              Developed scalable and maintainable APIs using{' '}
              <b>Django Rest Framework</b>.
            </li>
            <li>
              Implemented diverse authentication methods, enhancing API
              security.
            </li>
            <li>
              Optimized microservice communication using <b>RESTful APIs</b>.
            </li>
            <li>
              Leveraged <b>Celery</b> for asynchronous task management.
            </li>
            <li>
              Reinforced data integrity through advanced validation techniques.
            </li>
          </ul>
        </div>

        <div className="flex flex-col bg-white shadow-lg rounded-lg max-w-md px-4 md:px-6 py-2 md:py-4 hover:shadow-neon transition-shadow duration-500">
          <h1 className="font-bold text-2xl md:text-3xl mb-4 md:mb-6 text-blue-500">
            Experience
          </h1>

          <h4 className="text-lg md:text-xl font-semibold mt-2 md:mt-4">
            Vivasoft Limited
          </h4>
          <h5 className="text-sm md:text-base text-gray-600 font-semibold mt-1 md:mt-2">
            Sep 2023 - Feb 2024 | (Remote)
          </h5>
          <img
            src={VS}
            className="h-16 md:h-24 w-16 md:w-24 rounded-full mx-auto mt-2 md:mt-4"
          />
          <h2 className="text-base md:text-lg font-semibold mt-4 text-center">
            Geeky Solution's Learnathon 2.0,
            <br /> Internship (Front-end)
          </h2>

          <p className="mt-4 text-base md:text-lg text-gray-700 font-bold">
            Work areas:
          </p>
          <ul className="mt-4 text-base md:text-lg text-gray-600 list-disc pl-5">
            <li>
              Gained proficiency in <b>JavaScript</b>, <b>ReactJS</b>, and{' '}
              <b>Tailwind-CSS</b>.
            </li>
            <li>Designed and developed responsive user interfaces.</li>
            <li>
              Enhanced functionality and performance of the Vivasoft Contract
              Management applications.
            </li>
            <li>
              Built reusable UI components with React hooks and state
              management.
            </li>
            <li>Improved user experience by refining page responsiveness.</li>
            <li>Contributed to agile workflows and team collaboration.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
