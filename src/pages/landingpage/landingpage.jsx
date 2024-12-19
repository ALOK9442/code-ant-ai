import WelcomePanel from "../../components/welcomepanel/welcomepanel";
import Login from "../auth/login";

export default function Landing() {
  return (
    <div className="flex h-screen w-screen">
      <div className="hidden md:flex-1 md:flex items-center justify-center">
        <WelcomePanel />
      </div>
      <div className="flex-1 flex items-center justify-center text-black">
        <Login />
      </div>
    </div>
  );
}
