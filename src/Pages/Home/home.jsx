import React from 'react'

function Appp() {
  return (
    <>
     {/* <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src="./public/SDGS-1.png" fill="none" stroke="currentColor"  stroke-linejoin="round" stroke-width="4" class="w-16 h-16 text-white p-2  rounded-full" viewBox="0 0 24 24 hover:scale-2"/>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    
      <span class="ml-3 text-2xl hover:text-blue-800">GlobalGoalsHub</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a href='' class="mr-5 hover:text-gray-900">Home</a>
      <a href='' class="mr-5 hover:text-gray-900">Goals</a>
      <a href='Community' class="mr-5 hover:text-gray-900">Community</a>
      <a href='' class="mr-5 hover:text-gray-900">Blogs</a>
    </nav>
    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-600 hover:text-white rounded text-base mt-4 md:mt-0 ">Know Us!!
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
  </header> */}
  
  <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 ">Empowering Change for a Sustainable Future</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Discover and learn about the 17 Global Goals driving global 
            progress towards a more sustainable, equitable, and prosperous world. Our platform offers engaging content, resources, 
            and interactive tools to help you understand the importance of each goal and how you can contribute. Whether you're a student, 
            an NGO, or a change-maker, together we can create real-world impact. Join us on this journey to drive positive change and build a greener, 
            more inclusive tomorrow for all..</p>
            </div>
            <div class="flex flex-wrap -m-2 ">
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full ">
                <div class=" h-full flex items-center border-gray-200 border p-4 rounded-lg  hover:bg-blue-100">
                    <img src="./public/poverty.png" alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"/>
                        <div class="flex-grow">
                        <h2 class="text-gray-900 title-font font-medium"><a href="##">No Poverty</a></h2>
                        <p class="text-gray-500">End Poverty, Empower Lives!</p>
                        </div>
                </div>
            </div>

            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:bg-blue-100">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="./public/hunger.jpg"/>
                <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium"><a href="##">Zero Hunger</a></h2>
                    <p class="text-gray-500">CTO</p>
                </div>
                </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:bg-blue-100">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="./public/being.jpg"/>
                <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium"><a href="##">Good Health & Well Being</a></h2>
                    <p class="text-gray-500">Founder</p>
                </div>
                </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:bg-blue-100">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="./public/education.jpg"/>
                <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium"><a href="##">Quality Education</a></h2>
                    <p class="text-gray-500">DevOps</p>
                </div>
                </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:bg-blue-100">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="./public/gender.jpg"/>
                <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium"><a href="##">Gender Equality</a></h2>
                    <p class="text-gray-500">Software Engineer</p>
                </div>
                </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:bg-blue-100">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="./public/sanitaion.jpg"/>
                <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium"><a href="##">Clean Water & Sanitation</a></h2>
                    <p class="text-gray-500">UX Researcher</p>
                </div>
                </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:bg-blue-100">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="./public/energy.jpg"/>
                <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium"><a href="##">Affordable & Clean Energy</a></h2>
                    <p class="text-gray-500">QA Engineer</p>
                </div>
                </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:bg-blue-100">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="./public/growth.jpg"/>
                <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium"><a href="##">Decent work and Economic Growth</a></h2>
                    <p class="text-gray-500">System</p>
                </div>
                </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:bg-blue-100">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="./public/industry.jpg"/>
                <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium"><a href="##">Industry, Innovation & Infrastucture</a></h2>
                    <p class="text-gray-500">Product Manager</p>
                </div>
                </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:bg-blue-100">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="./public/reduced.jpg"/>
                <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium"><a href="##">Reduce Inequalities</a></h2>
                    <p class="text-gray-500">Product Manager</p>
                </div>
                </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:bg-blue-100">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="./public/cities.jpg"/>
                <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium"><a href="##">Sustainable Cities & Communities</a></h2>
                    <p class="text-gray-500">Product Manager</p>
                </div>
                </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:bg-blue-100">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="./public/production.jpg"/>
                <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium"><a href="##">Responsible Consumption & Production</a></h2>
                    <p class="text-gray-500">Product Manager</p>
                </div>
                </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:bg-blue-100">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="./public/climate.jpg"/>
                <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium"><a href="##">Climate Action</a></h2>
                    <p class="text-gray-500">Product Manager</p>
                </div>
                </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:bg-blue-100">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="./public/water.jpg"/>
                <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium"><a href="##">Life Below Water</a></h2>
                    <p class="text-gray-500">Product Manager</p>
                </div>
                </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:bg-blue-100">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="./public/hand.jpg"/>
                <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium"><a href="##">Life On Land</a></h2>
                    <p class="text-gray-500">Product Manager</p>
                </div>
                </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:bg-blue-100">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="./public/peace.jpg"/>
                <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium"><a href="##">Peace, Justice & Strong Institution</a></h2>
                    <p class="text-gray-500">Product Manager</p>
                </div>
                </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:bg-blue-100">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="./public/partnership.jpg"/>
                <div class="flex-grow">
                    <h2 class="text-gray-900 title-font font-medium"><a href="##">Parterships for Goals</a></h2>
                    <p class="text-gray-500">Product Manager</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section class="text-gray-600 body-font overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
                <div class="-my-8 divide-y-2 divide-gray-100">
                <div class="py-8 flex flex-wrap md:flex-nowrap">
                    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span class="font-semibold title-font text-gray-700">Global Citizen Festival</span>
                    <span class="mt-1 text-gray-500 text-sm"> Jun 2012</span>
                    </div>
                    <div class="md:flex-grow">
                    <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">SDG Focus: No Poverty (SDG 1), Zero Hunger (SDG 2), Quality Education (SDG 4)</h2>
                    <p class="leading-relaxed">This music festival combines entertainment and activism to mobilize millions worldwide in support of ending poverty, ensuring access to education, 
                        and addressing hunger. Notable artists and speakers use the platform to raise awareness and funds for sustainable initiatives aligned with the SDGs..</p>
                    <a class="text-yellow-500 inline-flex items-center mt-4"><a href="##">Learn More</a>
                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    </div>
                </div>
                <div class="py-8 flex flex-wrap md:flex-nowrap">
                    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span class="font-semibold title-font text-gray-700">United Nations</span>
                    <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                    </div>
                    <div class="md:flex-grow">
                    <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Meditation bushwick direct trade taxidermy shaman</h2>
                    <p class="leading-relaxed"> COP27 focused on the implementation of commitments to combat climate change, including funding for developing countries to adapt to its effects. It emphasized the interconnectedness of SDGs, especially the impact of climate action on poverty and food security..</p>
                    <a class="text-yellow-500 inline-flex items-center mt-4"><a href="##">Learn More</a>
                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    </div>
                </div>
                <div class="py-8 flex flex-wrap md:flex-nowrap">
                    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span class="font-semibold title-font text-gray-700">COP27 </span>
                    <span class="text-sm text-gray-500">12 Jun 2019</span>
                    </div>
                    <div class="md:flex-grow">
                    <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">UN Global Compact Leaders Summit</h2>
                    <p class="leading-relaxed">This summit convened global leaders from business, government, and civil society to discuss progress toward achieving the SDGs. Key topics included sustainable economic recovery post-COVID-19, empowering women, and creating equitable partnerships.</p>
                    <a class="text-yellow-500 inline-flex items-center mt-4"><a href="##">Learn More</a>
                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </section>

            <footer class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap md:text-left text-center order-first">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a href='##' class="text-gray-600 hover:text-gray-800">Goals</a>
          </li>
          <li>
            <a href='##' class="text-gray-600 hover:text-gray-800">Blogs</a>
          </li>
          <li>
            <a href='##' class="text-gray-600 hover:text-gray-800">Our Community</a>
          </li>
          <li>
            <a href='##' class="text-gray-600 hover:text-gray-800">About Us</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a href='##' class="text-gray-600 hover:text-gray-800">LinkedIn</a>
          </li>
          <li>
            <a href='##' class="text-gray-600 hover:text-gray-800">Twitter</a>
          </li>
          <li>
            <a href='##' class="text-gray-600 hover:text-gray-800">Insttagram</a>
          </li>
          <li>
            <a href='##' class="text-gray-600 hover:text-gray-800">FaceBook</a>
          </li>
        </nav>
      </div>
    
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">LOGGIN WITH US!</h2>
        <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <label for="footer-field" class="leading-7 text-sm text-gray-600">E-mail</label>
            <input type="text" id="footer-field" name="footer-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
          </div>
          <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Connect</button>
        </div>
        <p class="text-gray-500 text-sm mt-2 md:text-left text-center">Empowering Change for a Sustainable Future
        </p>
      </div>
    </div>
  </div>
  <div class="bg-gray-100">
    <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <img src='./public/SDGS-1.png' fill="none" stroke="currentColor"  stroke-linejoin="round" stroke-width="4" class="w-16 h-16 text-white p-2  rounded-full" viewBox="0 0 24 24 hover:scale-2"/>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    
        <span class="ml-3 text-xl">GlobalGoalsHub</span>
      </a>
      <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4 ">© GlobalGoalsHub 
        <a href="##" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank"></a>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a class="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>


    </>
  )
}

export default Appp