import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useStore } from './store';
import { useNavigate } from 'react-router-dom';
import Button from './button';
import devil from './../assets/devil.svg';
export const MyDropzone = ({ getVideo }: { getVideo: Function }) => {
  const setState = useStore((state) => state.setState);
  let navigate = useNavigate();
  const routeChange = (path: string) => {
    navigate(path);
  };
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file && file.type.startsWith('image/')) {
      const imageUrl = URL.createObjectURL(file);
      setState({ photo: imageUrl });
      setState({ file: acceptedFiles[0] });
    }
    routeChange('/last_step');
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      className="relative flex bg-[#320C4B] h-[420px] w-[420px] rounded-[35px] glow"
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col w-full h-full items-center justify-center">
        <img src={devil} alt="devil emoji" />
        {isDragActive ? (
          <p className="text-black font-bold text-[37px] titleFrozen">
            Drop the photo here...
          </p>
        ) : (
          <p className="text-black font-bold text-[18px] w-[26ch] text-center ">
            <span className="titleFrozen text-[#E3B6FF] text-[37px]">
              Drag & drop
            </span>
            <br />
            <span className="text[#E5BDFF]">
              your photo here, or click to select from files
            </span>
          </p>
        )}
      </div>
      <div className="w-full flex items-center justify-center absolute bottom-[50px]">
        <Button
          onClick={(e) => {
            e.stopPropagation();
            setState({ takePic: true });
            getVideo();
          }}
          text="Disguise me"
        />
      </div>
    </div>
  );
};
