import React, { useContext } from 'react';
import { AppContext } from '../../../Context/appContext';
import { Link } from 'react-router-dom';

function QuizLearning() {
  const { isExpand } = useContext(AppContext);

  return (
    <>
      <div
        className={`transition-all duration-300 flex justify-center items-center ${
          isExpand ? ' w-[calc(100%-12rem)] ml-60' : 'ml-20 w-[calc(100%-5rem)] ' 
        } p-4`}
      >
        <section className={`text-gray-600 body-font overflow-hidden ${
          isExpand ? ' w-[calc(100%-12rem)] ' : ' w-[calc(100%-5rem)] ' 
        }`}>
          <div className="container px-5 py-24 mx-auto">
            <div className="-my-8 divide-y-2 divide-gray-100">
            <div className={`py-8 flex flex-wrap md:flex-nowrap ${isExpand ? "w-[90%]" : "w-full"}`}>
  <div className="md:w-64 w-full mb-6 flex-shrink-0 flex flex-col">
    <span className="font-semibold title-font text-gray-700">BEGINNER</span>
    <span className="mt-1 text-gray-500 text-sm">So easy.....</span>
  </div>
  <div className="md:flex-grow w-full">
    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
    Introduction to Sustainable Development Goals
    </h2>
    <p className="leading-relaxed">
    Explore the basics of Sustainable Development Goals (SDGs) and their significance in shaping a better world. This module covers the foundational understanding of SDGs, their history, and core principles.
    </p>
    <Link to="/module-one" className="text-indigo-500 inline-flex items-center mt-4">
      Learn More
      <svg
        className="w-4 h-4 ml-2"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
      </svg>
    </Link>
  </div>
</div>


              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 w-full mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700">INTERMIDATE</span>
                  <span className="mt-1 text-gray-500 text-sm">Littie bit thinking...</span>
                </div>
                <div className="md:flex-grow w-full">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  Challenges and Strategies for Achieving SDGs
                  </h2>
                  <p className="leading-relaxed">
                    Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.
                  </p>
                  <Link to="/module-two" className="text-indigo-500 inline-flex items-center mt-4">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 w-full mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700">ADVANCED</span>
                  <span className="text-sm text-gray-500">Need experience for that !!!</span>
                </div>
                <div className="md:flex-grow w-full">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  Mastering Sustainable Development Goals
                  </h2>
                  <p className="leading-relaxed">
                  Test your expertise on the intricate targets, metrics, and impacts of SDGs globally. Analyze advanced scenarios, policy implications, and innovative solutions.
                  </p>
                  <Link to="/module-three" className="text-indigo-500 inline-flex items-center mt-4">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default QuizLearning;
