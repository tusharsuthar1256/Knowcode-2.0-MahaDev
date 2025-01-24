/* eslint-disable jsx-a11y/anchor-is-valid */
import { useRef, useState } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { sidebarStructure } from "./structure.js";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = ({ setExpand }) => {
  const username = "Miles Heizer";
  const company = "Unilever";
  const profilePic =
    "https://img.mbiz.web.id/180x180/erp/R2p1IXoyVEpBMk01WOEAdaI3hHVlkuIg0wW5_pn-CJCKHSrA_n1-U1tfE7Bl5H4_4Z7AxgL0DPOmUCdPuCHHC5lWvMU5Ig3t1uDrkVN53MlWlnA";
  const link = "/";

  const [openedMenu, setOpenedMenu] = useState({});
  const [activeName, setActiveName] = useState("");
  const activeLink = window.location.pathname;

  const listRef = useRef({});

  const [isExpand, setIsExpand] = useState(true);
  const [isExpandOnHover, setIsExpandOnHover] = useState(false);

  const handleHoverExpand = (value) => {
    if (!isExpand) {
      setIsExpandOnHover(value);
    }
  };

  const handleNavigate = (path) => {
    setActiveName(path);
  };

  const handleToggle = (name) => {
    const rootEl = name.split(".")[0];

    if (openedMenu[name]?.open === true) {
      setOpenedMenu((prevState) => ({
        ...prevState,
        [name]: {
          open: false,
          height: "0px",
        },
        [rootEl]: {
          open: rootEl === name ? false : true,
          height: `${
            (listRef.current[rootEl]?.scrollHeight || 0) -
            (listRef.current[name]?.scrollHeight || 0)
          }px`,
        },
      }));
    } else {
      setOpenedMenu((prevState) => ({
        ...prevState,
        [name]: {
          open: true,
          height: `${listRef.current[name]?.scrollHeight || 0}px`,
        },
        [rootEl]: {
          open: true,
          height: `${
            (listRef.current[rootEl]?.scrollHeight || 0) +
            (listRef.current[name]?.scrollHeight || 0)
          }px`,
        },
      }));
    }
  };

  const generateIcon = (icon) => {
    const iconsMap = {
      dasbor: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-current"
          viewBox="0 0 24 24"
          version="1.1"
        >
          <g
            id="ic_kanban"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <path
              d="M20,3 C21.1045695,3 22,3.8954305 22,5 L22,15 C22,16.1045695 21.1045695,17 20,17 L4,17 C2.8954305,17 2,16.1045695 2,15 L2,5 C2,3.8954305 2.8954305,3 4,3 L20,3 Z M11.5,6 L6.5,6 C5.67157288,6 5,6.67157288 5,7.5 L5,7.5 L5,9.5 C5,10.3284271 5.67157288,11 6.5,11 L6.5,11 L11.5,11 C12.3284271,11 13,10.3284271 13,9.5 L13,9.5 L13,7.5 C13,6.67157288 12.3284271,6 11.5,6 L11.5,6 Z"
              id="Combined-Shape"
              fill="currentColor"
            />
            <path
              d="M8,21 L16,21 M12,17 L12,21"
              id="Combined-Shape"
              stroke="currentColor"
              strokeWidth="2"
              opacity="0.48"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      ),
      transaksi: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-current"
          viewBox="0 0 24 24"
        >
          <path
            d="m20.247634 1c1.0125221 0 1.8333334.82081129 1.8333334 1.83333333s-.8208113 1.83333334-1.8333334 1.83333334c-.3158442 0-.6130339-.07986936-.8724738-.22051281l-3.0249251 3.47961717c.1346337.25513483.2108509.5458717.2108509.85441003 0 1.01252204-.8208113 1.83333334-1.8333334 1.83333334-.9820883 0-1.7838173-.7722101-1.8311257-1.74256896l-2.2033918-.75849737c-.336256.40778098-.84535009.66773299-1.41515923.66773299-.32712483 0-.63423886-.08567643-.90012689-.2358141l-2.87560465 2.41277624c.05416355.1730906.08335496.3572185.08335496.5481644 0 1.012522-.8208113 1.8333333-1.83333334 1.8333333s-1.83333333-.8208113-1.83333333-1.8333333c0-1.0125221.82081129-1.83333335 1.83333333-1.83333335.33090488 0 .64133381.08766791.90932763.24104456l2.86960725-2.40787374c-.05621505-.1760311-.0865583-.3636207-.0865583-.55829735 0-1.01252204.8208113-1.83333333 1.83333334-1.83333333.97577423 0 1.77350093.76231258 1.83011983 1.7238777l2.2160025.76325559c.336304-.39976002.8402621-.65379996 1.4035544-.65379996.2130474 0 .4176071.03634016.6078186.10315996l3.1693503-3.64581344c-.0588143-.17965899-.0906208-.37154554-.0906208-.57086091 0-1.01252204.8208113-1.83333333 1.8333333-1.83333333z"
            opacity=".48"
            fill="currentColor"
          />
        </svg>
      ),
    };

    return iconsMap[icon] || null;
  };

  const generateMenu = (item, index, recursive = 0) => {
     if (activeName === "" && activeLink.includes(item.link)) {
       setActiveName(item.name);
     }
     const classesActive = activeName === item.name ? "active" : "";
   
     return (
       <li key={index}>
         <a
           role="button"
           tabIndex={0}
           id={item.id}
           onClick={() => {
             if ("child" in item) {
               handleToggle(item.name);
             } else if ("link" in item) {
               handleNavigate(item.name);
             }
           }}
           onKeyDown={(event) => {
             const { code } = event;
             if (code === "Space") {
               if ("child" in item) {
                 handleToggle(item.name);
               } else if ("link" in item) {
                 handleNavigate(item.name);
               }
             }
           }}
           className={[
             "group m-0 flex cursor-pointer rounded-lg items-center justify-between h-12 py-0 pr-3 mb-1 focus:outline-none",
             recursive === 0 ? "pl-4" : recursive === 1 ? "pl-11" : "pl-16",
             activeName === item.name || activeName.split(".")[0] === item.name
               ? `text-blue-600 font-semibold ${
                   item.parent ? "bg-blue-200/20 " : "bg-transparent"
                 }`
               : `text-slate-500 ${item.parent && ""}`,
             "hover:bg-slate-300/20",
             classesActive,
           ].join(" ")}
         >
           <div className="flex items-center gap-3">
             {item.icon ? (
               item.icon === "dot" ? (
                 <div className="h-3 w-3 flex items-center justify-center">
                   <div
                     className={[
                       `${classesActive ? "h-2 w-2" : "h-1 w-1"}`,
                       "bg-current rounded-full duration-200",
                     ].join(" ")}
                   ></div>
                 </div>
               ) : (
                 generateIcon(item.icon)
               )
             ) : null}
             <div
               className={`truncate ${
                 isExpand ? "" : isExpandOnHover ? "" : "w-0 h-0 opacity-0"
               }`}
             >
               {item.title}
             </div>
           </div>
           {"child" in item ? (
             <div
               className={`${
                 isExpand ? "" : isExpandOnHover ? "" : "w-0 h-0 opacity-0"
               }`}
             >
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 className="h-5 w-5"
                 viewBox="0 0 20 20"
                 fill="currentColor"
               >
                 <path
                   fillRule="evenodd"
                   d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                   clipRule="evenodd"
                 />
               </svg>
             </div>
           ) : (
             false
           )}
         </a>
         {"child" in item ? (
           <ul
             ref={(el) => (listRef.current[item.name] = el)}
             className={[
               "overflow-hidden duration-300 ease-in-out",
               isExpand ? "" : isExpandOnHover ? "" : "h-0",
             ].join(" ")}
             style={{ maxHeight: `${openedMenu[item.name]?.height || "0px"}` }}
             key={item.name}
           >
             {item.child.map((value, idx) =>
               generateMenu(value, idx, recursive + 1)
             )}
           </ul>
         ) : (
           false
         )}
       </li>
     );
   };
   

  return (
     <nav
     role="navigation"
     className={[
       "bg-slate-50 border-r border-slate-100 shadow-sm absolute inset-y-0 left-0",
       "duration-300 ease-in-out md:fixed md:translate-x-0",
       `${
         isExpand
           ? "bg-slate-50 w-72"
           : isExpandOnHover
           ? "bg-slate-50/70 w-72 backdrop-blur-md"
           : "bg-slate-50 w-20"
       }`
     ].join(" ")}
   >
     <button
       className="absolute z-50 top-16 -right-3 bg-white hover:bg-slate-100 text-slate-500 p-0.5 rounded-full border border-slate-200"
       onClick={() => {
         setIsExpand(!isExpand);
         setExpand(!isExpand);
       }}
     >
       <svg
         xmlns="http://www.w3.org/2000/svg"
         className={`${
           isExpand ? "rotate-0" : "rotate-180"
         } transform duration-500 h-4 w-4`}
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
     <div
       onMouseEnter={() => handleHoverExpand(true)}
       onMouseLeave={() => handleHoverExpand(false)}
       className={`relative h-screen overflow-hidden`}
     >
       <SimpleBar style={{ height: "100%" }} autoHide timeout={100}>
         <div className="text-slate-500">
           <div className="my-8 flex flex-col items-center h-44 overflow-x-hidden">
             <a
               href={link}
               className={`text-center flex flex-col items-center justify-center`}
             >
               <div
                 className={`rounded-full border-4 border-white overflow-hidden duration-300 ${
                   isExpand
                     ? "h-28 w-28"
                     : isExpandOnHover
                     ? "h-28 w-28"
                     : "h-12 w-12"
                 }`}
               >
                 <img src={profilePic} className="block" alt="" />
               </div>
               <div
                 className={`text-base font-semibold text-slate-700 mt-3 truncate duration-300 ${
                   isExpand ? "" : isExpandOnHover ? "" : "w-0 h-0 opacity-0"
                 }`}
               >
                 {username}
               </div>
               <div
                 className={`duration-300 text-sm text-slate-500 truncate ${
                   isExpand ? "" : isExpandOnHover ? "" : "w-0 h-0 opacity-0"
                 }`}
               >
                 {company}
               </div>
             </a>
           </div>

           <div className="mt-3 mb-10 p-0">
             <ul className="list-none text-sm font-normal px-3">
               {sidebarStructure.map((item, index) =>(
                                <ul class="menu">
                                <li>
                                  <Link to={item.link}
                                    role="button"
                                    tabIndex="0"
                                    class="group m-0 flex cursor-pointer rounded-lg items-center justify-between h-12 py-0 pr-3 mb-1 focus:outline-none pl-4 hover:bg-slate-300/20"
                                  >
                                    <div class="flex items-center gap-3">
                                        <MdOutlineSpaceDashboard />
                                      <div class="truncate">{item.title}</div>
                                    </div>
                                    {/* <!-- Optional dropdown arrow --> */}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      class="h-5 w-5"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clip-rule="evenodd"
                                      />
                                    </svg>
                                  </Link>
                                  <ul class="overflow-hidden duration-300 ease-in-out h-0">
                                    <li>
                                      <a
                                        role="button"
                                        tabIndex="0"
                                        class="group m-0 flex cursor-pointer rounded-lg items-center justify-between h-12 py-0 pr-3 mb-1 focus:outline-none pl-11 hover:bg-slate-300/20"
                                      >
                                        <div class="flex items-center gap-3">
                                          <div class="truncate">Submenu Item Title</div>
                                        </div>
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
               ))}
 

             </ul>
           </div>
         </div>
       </SimpleBar>
     </div>
   </nav>
  );
};

export default Sidebar;
