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
        <img
          onClick={() => {
            routeChange('/');
          }}
          className="logo h-[60px] rounded-[16px]"
          src={logo}
          alt=""
        />
        <div className="flex items-center gap-[40px] pl-4">
          <button
            onClick={() => {
              routeChange('/');
            }}
            className="text-[12px] sm:text-[14px]"
          >
            DisguiseMe
          </button>

          <button
            className="text-[12px] sm:text-[14px]"
            onClick={() => {
              routeChange('/spooky');
            }}
          >
            Read the story
          </button>
          <button>
            <a
              href="https://github.com/LuisAguilarDev/costume-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] sm:text-[14px]"
            >
              View on GitHub
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
