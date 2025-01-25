import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/appContext";
import { use } from "react";

function Nav({onclick}) {
  const { user } = useContext(AppContext);
  console.log("Nav user : ", user);

  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src="./public/SDGS-1.png" fill="none" stroke="currentColor"  stroke-linejoin="round" stroke-width="4" class="w-16 h-16 text-white p-2  rounded-full" viewBox="0 0 24 24 hover:scale-2"/>
    
      <span class="ml-3 text-2xl hover:text-blue-800">GlobalGoalsHub</span>
    </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center mr-10">
          <Link to="/" ss=" hover:text-gray-900">
            Home
          </Link>
          
          
    
          {user ? (
            <Link to="/profile" class=" hover:text-gray-900">
              Profile
            </Link>
          ) : null}
        </nav>
        {user ? (
          <Link to="/">
            <button onClick={onclick} class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Log Out
            </button>
          </Link>
        ) : (
          <Link to="/signup">
            <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Get started
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Nav;
