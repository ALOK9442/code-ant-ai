import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarButton = ({ icon, label, active, onClick }) => {
  return (
    <div
      className={`p-2 w-full mx-auto flex items-center text-base font-normal gap-2 rounded-md cursor-pointer ${
        active ? "bg-[#1570EF] text-white" : "hover:bg-[#1570EF]"
      }`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} className="w-5 h-4" />
      {label}
    </div>
  );
};

export default SidebarButton;
