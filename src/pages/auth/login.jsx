import { useState } from "react";
import Button from "../../components/button/button";
import GithubLogo from "../../assets/github.png";
import SaasKey from "../../assets/key.png";
import AzureLogo from "../../assets/azure.png";
import Bitbucket from "../../assets/bucket.png";
import Gitlab from "../../assets/gitlab.png";
import Logo from "../../assets/Subtract.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [activeTab, setActiveTab] = useState("saas");
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-6 py-44">
      <header className="flex items-center gap-2 text-xl font-normal">
        <img src={Logo} alt="CodeAnt Logo" className="w-8 h-8" />
        CodeAnt AI
      </header>
      <div className="text-2xl font-semibold">Welcome to CodeAnt AI</div>
      <div className="flex gap-4 w-full max-w-md">
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
      <div className="w-full max-w-md mt-6 min-h-[192px]">
        {activeTab === "saas" ? (
          <>
            <Button
              onClick={handleLogin}
              className="w-full font-semibold text-base py-3 rounded-lg flex items-center justify-center gap-3"
              icon={GithubLogo}
            >
              Sign in with Github
            </Button>
            <Button
              onClick={handleLogin}
              className="w-full py-3 font-semibold text-base rounded-lg flex items-center justify-center gap-3"
              icon={Bitbucket}
            >
              Sign in with Bitbucket
            </Button>
            <Button
              onClick={handleLogin}
              className="w-full py-3 font-semibold text-base rounded-lg flex items-center justify-center gap-3"
              icon={AzureLogo}
            >
              Sign in with Azure DevOps
            </Button>
            <Button
              onClick={handleLogin}
              className="w-full py-3 font-semibold text-base rounded-lg flex items-center justify-center gap-3"
              icon={Gitlab}
            >
              Sign in with GitLab
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={handleLogin}
              className="w-full py-3 font-semibold text-base rounded-lg flex items-center justify-center gap-3"
              icon={SaasKey}
            >
              Self Hosted SSO
            </Button>
            <Button
              onClick={handleLogin}
              className="w-full py-3 font-semibold text-base rounded-lg flex items-center justify-center gap-3"
              icon={GithubLogo}
            >
              Sign in with GitLab
            </Button>
          </>
        )}
      </div>

      <div className="p-0 h-6 mt-6">
        <p className="font-normal text-base text-[#181D27]">
          By signing up you agree to the{" "}
          <b className="cursor-pointer">Privacy Policy</b>.
        </p>
      </div>
    </div>
  );
}
