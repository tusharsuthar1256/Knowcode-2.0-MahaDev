/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext, useState } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { MdOutlineQuiz, MdOutlineSpaceDashboard } from "react-icons/md";
import { RiUserCommunityLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AppContext } from "../../../Context/appContext";

const Sidebar = ({ onclick }) => {
  const username = "Miles Heizer";
  const company = "Unilever";
  const profilePic =
    "https://img.mbiz.web.id/180x180/erp/R2p1IXoyVEpBMk01WOEAdaI3hHVlkuIg0wW5_pn-CJCKHSrA_n1-U1tfE7Bl5H4_4Z7AxgL0DPOmUCdPuCHHC5lWvMU5Ig3t1uDrkVN53MlWlnA";
  const link = "/";
  const {isExpand,setIsExpand,loginData} = useContext(AppContext);
//   const [isExpand, setIsExpand] = useState(true);

  const toggleSidebar = () => {
    setIsExpand(!isExpand);
    setExpand(!isExpand);
  };

  // Auto expand the sidebar when hovered
  const handleHover = (value) => {
    if (!isExpand) {
      setIsExpand(value);
    }
  };

  return (
    <nav
      role="navigation"
      className={[
        "bg-slate-50 border-r border-slate-100 shadow-sm absolute inset-y-0 left-0",
        "duration-300 ease-in-out md:fixed",
        isExpand ? "w-72" : "w-20",
      ].join(" ")}
      onMouseEnter={() => handleHover(true)} // Expand when hovering
      onMouseLeave={() => handleHover(false)} // Collapse when not hovering
    >
      {/* Toggle Button */}
      <button
        aria-expanded={isExpand}
        className="absolute z-50 top-16 -right-3 bg-white hover:bg-slate-100 text-slate-500 p-0.5 rounded-full border border-slate-200"
        onClick={toggleSidebar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 transform duration-500 ${
            isExpand ? "rotate-0" : "rotate-180"
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Sidebar Content */}
      <div
        onMouseEnter={() => handleHover(true)} // Expand when mouse enters
        onMouseLeave={() => handleHover(false)} // Collapse when mouse leaves
        className="relative h-screen"
      >
        <SimpleBar style={{ height: "100%" }} autoHide timeout={100}>
          <div className="text-slate-500">
            {/* Profile Section */}
            <div className="my-8 flex flex-col items-center">
              <a href={link} className="text-center flex flex-col items-center justify-center">
                <div
                  className={`rounded-full border-4 border-white overflow-hidden duration-300 ${
                    isExpand ? "h-28 w-28" : "h-12 w-12"
                  }`}
                >
                  <img src={profilePic} className="block" alt="Profile" />
                </div>
                <div
                  className={`text-base font-semibold text-slate-700 mt-3 truncate duration-300 ${
                    isExpand ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                >
                  {loginData}
                </div>
                <div
                  className={`text-sm text-slate-500 truncate duration-300 ${
                    isExpand ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                >
                  {company}
                </div>
              </a>
            </div>

            {/* Navigation Links */}
            <ul className="list-none text-sm font-normal px-3">
              {[
                { id: "profile", icon: <MdOutlineSpaceDashboard />, label: "Profile" ,link:"/dashboard/profile"},
                { id: "quiz", icon: <MdOutlineQuiz />, label: "Quiz-Learning" ,link:"/quiz-test"},
                { id: "community", icon: <RiUserCommunityLine />, label: "Community" ,link:"/dashboard/community"},
              ].map((item) => (
                <li key={item.id}>
                  <Link to={item.link}
                    className={[
                      "group m-0 flex cursor-pointer rounded-lg h-12 py-0 pr-3 mb-1 focus:outline-none transition-all duration-300 hover:bg-slate-300/20",
                      isExpand ? "pl-4" : "pl-[20px]",
                    ].join(" ")}
                  >
                    <div
                      className={`flex items-center transition-all duration-300 ${
                        isExpand ? "gap-3" : "justify-center"
                      }`}
                    >
                      {item.icon}
                      <span
                        className={`truncate transition-opacity duration-300 ${
                          isExpand ? "opacity-100 visible" : "opacity-0 invisible"
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div onClick={onclick}  className={[
                      "group m-0 flex cursor-pointer rounded-lg h-12 py-0 pr-3 mb-1 focus:outline-none transition-all duration-300 hover:bg-slate-300/20 absolute bottom-0 w-full",
                      isExpand ? "pl-4" : "pl-[20px]",
                    ].join(" ")} >
               <button>Log Out</button>
          </div>
        </SimpleBar>
      </div>
    </nav>
  );
};

export default Sidebar;
