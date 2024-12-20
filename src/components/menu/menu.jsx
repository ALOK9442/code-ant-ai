import {
  faChevronDown,
  faPhone,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import SidebarButton from "../button/sidebarbutton";
import { NavigationLinks } from "../../utils/sidebardata/sidebardata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Menu({
  isMenuOpen,
  activeLink,
  setIsMenuOpen,
  setActiveLink,
  handleLogout,
}) {
  return (
    <div
      className="fixed top-16 gap-4 px-4 py-3 font-sans left-0 w-full h-fit bg-white z-40 transition-all duration-300 ease-in-out transform sidebar"
      style={{
        transform: isMenuOpen ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <div className="p-2 flex items-center gap-2 border rounded-md h-fit w-full justify-between">
        <p className="text-base font-normal truncate overflow-hidden whitespace-nowrap text-ellipsis">
          UtkarshDhairyaParmar
        </p>
        <FontAwesomeIcon
          icon={faChevronDown}
          className="w-[13.51px] h-[7.24px] color-[#181D27]"
        />
      </div>
      <div className="flex flex-col gap-4">
        {NavigationLinks.map((link) => (
          <SidebarButton
            key={link.id}
            icon={link.icon}
            label={link.label}
            active={activeLink === link.id}
            onClick={() => {
              setActiveLink(link.id);
              setIsMenuOpen(false);
            }}
          />
        ))}
        <SidebarButton icon={faPhone} label="Support" onClick={() => {}} />
        <SidebarButton icon={faSignOut} label="Logout" onClick={handleLogout} />
      </div>
    </div>
  );
}
