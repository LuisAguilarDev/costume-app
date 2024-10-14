import { useNavigate } from 'react-router-dom';

export default function Nomatch() {
  let navigate = useNavigate();
  const routeChange = (path: string) => {
    navigate(path);
  };
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="w-[80ch] text-center">
        <p className="text-[24px]">
          Looks like you've wandered off the beaten path! 🧛‍♂️
        </p>
        <br />
        <p className="text-[24px]">
          Count Stitch seems to have stitched his way into a void, but fear not
          your costume dreams aren't lost forever!
        </p>
        <div className="p-20">
          <button
            onClick={() => routeChange('/')}
            className="bg-[#9d00ff] px-4 py-3 rounded-sm font-bold hover:text-[#3c0061]"
          >
            Back to the haunted road
          </button>
        </div>
        <br />
        <p className="text-[24px]">where the real magic happens. 🕸️👻</p>
      </div>
    </div>
  );
}
