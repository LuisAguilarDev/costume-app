import { useStore } from '../components/store';
import { useNavigate } from 'react-router-dom';

export default function Result() {
  const result = useStore((state) => state.result);
  let navigate = useNavigate();
  const routeChange = (path: string) => {
    navigate(path);
  };
  function download() {
    console.log(result[result.length - 1]!.slice(0, 30));
    const link = document.createElement('a');
    link.href = result[result.length - 1]!;
    link.download = 'HauntedImage.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div>
      {result ? (
        <>
          <div className="p-[12px] flex items-center justify-center">
            <h1 className="w-[65ch] text-center iniria">
              Count Stitch stands before you, needle in hand, ready to weave
              your darkest dreams into reality! 'Your haunting transformation
              awaits.
            </h1>
          </div>
          <img
            className="w-full px-[12px] pt-[24px] sm:pt-[0px] h-[400px] object-contain"
            src={result[result.length - 1]}
            alt="costume_photo"
          />{' '}
          <div className="flex flex-col justify-center items-center p-8 gap-8">
            <p className="iniria">Ask Count Stitch 🧛‍♂️ to:</p>
            <div className="flex gap-8">
              <button
                onClick={() => {
                  routeChange('/last_step');
                }}
                className="bg-[#9d00ff] px-4 py-3 rounded-[16px] font-bold"
              >
                <span className="iniria">Transform Another Image!</span>
              </button>
              <button
                onClick={() => {
                  download();
                }}
                className="bg-[#9d00ff] px-4 py-3 rounded-[16px] font-bold"
              >
                <span className="iniria">Download</span>
              </button>
            </div>
            {result.length > 1 ? (
              <button
                onClick={() => {
                  routeChange('/history');
                }}
                className="bg-[#9d00ff] px-4 py-3 rounded-[16px] font-bold"
              >
                <span className="iniria">View all!</span>
              </button>
            ) : null}
          </div>
        </>
      ) : null}
    </div>
  );
}
