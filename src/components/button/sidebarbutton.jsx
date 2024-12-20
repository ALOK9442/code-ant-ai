import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarButton = ({ icon, label, active, onClick }) => {
  return (
    <div
      className={`p-2 w-full mx-auto flex items-center text-base font-semibold gap-2 rounded-md cursor-pointer ${
        active ? "md:bg-[#1570EF] md:text-white" : "md:hover:bg-[#1570EF]"
      }`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} className="w-5 h-4" />
      {label}
    </div>
  );
};

export default SidebarButton;
