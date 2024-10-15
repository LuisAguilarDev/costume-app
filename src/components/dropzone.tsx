import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useStore } from './store';
import { useNavigate } from 'react-router-dom';

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
      className="relative flex bg-white h-[420px] w-[420px] border-dashed border-[#9d00ff] border-[8px] glow"
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col w-full h-full items-center justify-center">
        {isDragActive ? (
          <p className="text-black font-bold text-[18px]">
            Drop the photo here...
          </p>
        ) : (
          <p className="text-black font-bold text-[18px] w-[26ch] text-center">
            Drag & drop your photo here, or click to select from files
          </p>
        )}
      </div>
      <div className="w-full flex items-center justify-center absolute bottom-[100px]">
        <button
          className="bg-[#9d00ff] px-4 py-3 rounded-[16px] font-bold"
          onClick={(e) => {
            e.stopPropagation();
            setState({ takePic: true });
            getVideo();
          }}
        >
          Disguise me
        </button>
      </div>
    </div>
  );
};
