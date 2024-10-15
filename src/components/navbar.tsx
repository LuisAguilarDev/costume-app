import { useNavigate } from 'react-router-dom';
import logo from './../assets/Logo Def.jpg';
export default function Navbar() {
  let navigate = useNavigate();
  const routeChange = (path: string) => {
    navigate(path);
  };
  return (
    <div className="flex w-full justify-center items-center h-[80px]">
      <div className="flex gap-8 items-center justify-between w-[1080px] ">
        <div className="flex items-center gap-8 pl-4">
          <img className="logo h-[60px] rounded-[16px]" src={logo} alt="" />
          <button
            onClick={() => {
              routeChange('/');
            }}
          >
            DisguiseMe
          </button>
        </div>
        <button
          onClick={() => {
            routeChange('/spooky');
          }}
        >
          Spooky History!
        </button>
        <button>
          <a
            href="https://github.com/LuisAguilarDev/costume-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </button>
      </div>
    </div>
  );
}
