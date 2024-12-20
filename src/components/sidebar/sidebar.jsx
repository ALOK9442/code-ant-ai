import { useState, useEffect } from "react";
import { NavigationLinks } from "../../utils/sidebardata/sidebardata";
import Logo from "../../assets/Subtract.png";
import {
  faChevronDown,
  faPhone,
  faSignOut,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SidebarButton from "../button/sidebarbutton";
import { useNavigate } from "react-router-dom";
import Menu from "../menu/menu";

export default function Sidebar({ activeLink, setActiveLink }) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isMenuOpen &&
        !e.target.closest(".sidebar") &&
        !e.target.closest(".menu-toggle")
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="relative">
      <div className="hidden md:flex w-64 h-full flex-col border items-center gap-4">
        <div className="p-4 flex items-center gap-2 text-2xl font-normal">
          <img src={Logo} alt="logo" className="w-6 h-6" />
          CodeAnt AI
        </div>
        <div className="px-4 w-full">
          <div className="p-2 flex items-center gap-2 justify-around border rounded-md h-fit w-full">
            <p className="text-base font-normal w-32 truncate overflow-hidden whitespace-nowrap text-ellipsis">
              UtkarshDhairyaParmar
            </p>
            <FontAwesomeIcon
              icon={faChevronDown}
              className="w-[13.51px] h-[7.24px] color-[#181D27]"
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-2 px-4">
          {NavigationLinks.map((link) => (
            <SidebarButton
              key={link.id}
              icon={link.icon}
              label={link.label}
              active={activeLink === link.id}
              onClick={() => setActiveLink(link.id)}
            />
          ))}
        </div>
        <div className="mt-auto w-full flex flex-col items-center justify-center gap-2 px-4">
          <SidebarButton icon={faPhone} label="Support" onClick={() => {}} />
          <SidebarButton
            icon={faSignOut}
            label="Logout"
            onClick={handleLogout}
          />
        </div>
      </div>

      <div className="md:hidden fixed top-0 left-0 w-full h-[64px] flex justify-between items-center p-4 bg-white shadow-md z-50">
        <div className="flex items-center">
          <img src={Logo} alt="logo" className="w-6 h-6" />
          <span className="text-xl font-bold ml-2">CodeAnt AI</span>
        </div>
        <FontAwesomeIcon
          icon={isMenuOpen ? faTimes : faBars}
          className="text-2xl cursor-pointer menu-toggle"
          onClick={toggleMenu}
        />
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {isMenuOpen && (
        <Menu
          isMenuOpen={isMenuOpen}
          activeLink={activeLink}
          setIsMenuOpen={setIsMenuOpen}
          setActiveLink={setActiveLink}
          handleLogout={handleLogout}
        />
      )}
    </div>
  );
}
