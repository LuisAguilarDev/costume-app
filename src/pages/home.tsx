import { PhotoDropZone } from '../components/photo_uploader';
import { useStore } from '../components/store';

export default function Home() {
  const takePic = useStore((state) => state.takePic);

  return (
    <>
      {!takePic ? (
        <header className="flex flex-col items-center">
          <p>
            Count Stitch is ready to craft a hauntingly beautiful costume just
            for you, bringing your wildest Halloween fantasies to life!
          </p>
          <br />
          <p className="w-[80ch]">
            Will you dare to trust him with your next eerie transformation?
            Upload a photo or snap a new one, and let the magic begin as he
            transports you to a world of mystery and enchantment.
          </p>
          <br />
        </header>
      ) : null}
      <PhotoDropZone />
    </>
  );
}
