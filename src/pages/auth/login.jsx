import { useState } from "react";
import Button from "../../components/button/button";
import GithubLogo from "../../assets/github.png";
import SaasKey from "../../assets/key.png";
import AzureLogo from "../../assets/azure.png";
import Bitbucket from "../../assets/bucket.png";
import Gitlab from "../../assets/gitlab.png";
import Logo from "../../assets/Subtract.png";
import { useNavigate } from "react-router-dom";
import {
  SaasLoginTypes,
  SelfHostedTypes,
} from "../../utils/loginbuttondata/loginbuttondata";

export default function Login() {
  const [activeTab, setActiveTab] = useState("saas");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 300);
  };
  const icons = {
    GithubLogo,
    SaasKey,
    AzureLogo,
    Bitbucket,
    Gitlab,
  };

  const renderButtons = (types) => {
    return types.map((type, index) => (
      <Button
        key={index}
        onClick={handleLogin}
        className="w-full py-4 border border-[#D8DAE5] font-semibold text-base rounded-lg flex items-center justify-center gap-3"
        icon={icons[type.icon]}
      >
        {type.label}
      </Button>
    ));
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 px-6 py-44 w-full">
      <header className="flex items-center gap-2 text-xl font-normal">
        <img src={Logo} alt="CodeAnt Logo" className="w-8 h-8" />
        CodeAnt AI
      </header>
      <div className="sm:text-2xl text-xl font-semibold">
        Welcome to CodeAnt AI
      </div>
      <div className="flex w-full">
        <Button
          onClick={() => setActiveTab("saas")}
          className={`flex-1 text-xl font-semibold py-3 rounded-lg text-center transition-all duration-300 ${
            activeTab === "saas"
              ? "bg-[#1570EF] text-white"
              : "bg-gray-100 text-[#414651]"
          }`}
        >
          SAAS
        </Button>
        <Button
          onClick={() => setActiveTab("selfhosted")}
          className={`flex-1 text-xl font-semibold py-3 rounded-lg text-center transition-all duration-300 ${
            activeTab === "selfhosted"
              ? "bg-[#1570EF] text-white"
              : "bg-gray-100 text-[#414651]"
          }`}
        >
          Self Hosted
        </Button>
      </div>
      <div className="w-full flex flex-col max-w-md gap-4 mt-6 min-h-[280px]">
        {activeTab === "saas"
          ? renderButtons(SaasLoginTypes)
          : renderButtons(SelfHostedTypes)}
      </div>

      <div className="p-0 h-6 mt-6">
        <p className="font-normal text-sm sm:text-base text-[#181D27]">
          By signing up you agree to the{" "}
          <b className="cursor-pointer">Privacy Policy</b>.
        </p>
      </div>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-10">
          <div className="w-16 h-16 border-4 border-t-4 border-gray-300 border-solid rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}
