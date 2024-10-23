import { PhotoDropZone } from '../components/photo_uploader';
import { useStore } from '../components/store';

export default function Home() {
  const takePic = useStore((state) => state.takePic);

  return (
    <>
      {!takePic ? (
        <header className="flex flex-col items-center w-full">
          <div className="flex items-center justify-center w-full">
            <h1 className="text-center">
              <span className="titleFrozen  leading-1 text-[27px] text-[#60f761]">
                Unleash Your Inner
              </span>
              <br />
              <span className="titleFrozen text-[62px] leading-[36px] text-[#9D00FF] line">
                Spooky Halloween
              </span>
              <br />
              <span className="text-[22px]">Spirit with Count Stitch!</span>
            </h1>
          </div>
          <div className="w-full p-[12px] sm:w-[62ch] text-[14px] ">
            <p>
              Count Stitch is ready to craft a hauntingly beautiful costume just
              for you, bringing your wildest Halloween fantasies to life!
            </p>
            <br />
            <p>
              Will you dare to trust him with your next eerie transformation?
              Upload a photo or snap a new one, and let the magic begin as he
              transports you to a world of mystery and enchantment.
            </p>
            <br />
          </div>
        </header>
      ) : null}
      <div className="p-[12px] sm:p-0">
        <PhotoDropZone />
      </div>
    </>
  );
}
