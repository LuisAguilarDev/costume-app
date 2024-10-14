import { useStore } from '../components/store';
import { useNavigate } from 'react-router-dom';

export default function Result() {
  const result = useStore((state) => state.result);
  const tryAgain = useStore((state) => state.tryAgain);
  let navigate = useNavigate();
  const routeChange = (path: string) => {
    navigate(path);
  };
  function download() {
    const link = document.createElement('a');
    link.href = result!;
    link.download = 'HauntedImage.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div>
      {result ? (
        <>
          <img
            className="w-full h-[400px] object-contain"
            src={result}
            alt="costume_photo"
          />{' '}
          <div className="flex flex-col justify-center items-center p-8 gap-8">
            <p>Ask Count Stitch 🧛‍♂️ to:</p>
            <div className="flex gap-8">
              <button
                onClick={() => {
                  tryAgain();
                  routeChange('/');
                }}
                className="bg-[#9d00ff] px-4 py-3 rounded-sm font-bold"
              >
                Transform Another Image!
              </button>
              <button
                onClick={() => {
                  download();
                }}
                className="bg-[#9d00ff] px-4 py-3 rounded-sm font-bold"
              >
                Download
              </button>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
