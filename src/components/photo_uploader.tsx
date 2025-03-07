import { useEffect, useRef } from 'react';
import Swal from 'sweetalert2';
import { MyDropzone } from './dropzone';
import { useStore } from './store';
import { useNavigate } from 'react-router-dom';

export const PhotoDropZone = () => {
  const takePic = useStore((state) => state.takePic);
  const setState = useStore((state) => state.setState);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const photoRef = useRef<HTMLCanvasElement | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const navigate = useNavigate();
  const routeChange = (path: string) => {
    navigate(path);
  };
  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
      })
      .then((stream) => {
        const video = videoRef.current;
        mediaStreamRef.current = stream;
        if (!video) {
          Swal.fire('Camera not found');
        } else {
          video.srcObject = stream;
          video.play();
        }
      })
      .catch(() => {
        Swal.fire('Someting went worng...');
      });
  };
  useEffect(() => {
    if (takePic) {
      getVideo();
    }
  }, [takePic]);

  const stopVideo = () => {
    if (mediaStreamRef?.current) {
      mediaStreamRef.current.getAudioTracks().forEach((track) => track.stop());
      mediaStreamRef.current.getVideoTracks().forEach((track) => track.stop());
      mediaStreamRef.current.getTracks().forEach((track) => {
        track.stop();
        track.enabled = false;
        const video = videoRef.current;
        if (video) {
          video.srcObject = null;
        }
      });
      mediaStreamRef.current = null;
    }
    if (videoRef?.current) {
      videoRef.current.srcObject = null;
      videoRef.current = null;
    }
  };

  const printPicture = () => {
    const video = videoRef.current!;
    const photo = photoRef.current!;
    const width = video.videoWidth;
    const height = video.videoHeight;
    photo.width = width;
    photo.height = height;
    const ctx = photo.getContext('2d')!;
    ctx.drawImage(video, 0, 0, width, height);
    photo.toBlob(async function (blob) {
      if (!blob) return Swal.fire('Something went wrog');
      const file = new File([blob], 'image.jpg', { type: 'image/jpeg' });
      const imageUrl = URL.createObjectURL(file);
      setState({ file: file, photo: imageUrl, takePic: false });
      stopVideo();
    }, 'image/jpeg');
  };

  return (
    <div className="flex w-full h-full items-center justify-center">
      {takePic ? (
        <div className="flex flex-col h-full items-center justify-center">
          <video className="w-full h-[500px]" ref={videoRef}></video>
          <div className="flex items-center justify-center p-8">
            <button
              onClick={() => {
                printPicture();
                routeChange('last_step');
              }}
              className="bg-[#9d00ff] px-4 py-3 rounded-[16px] text-[#60f761] font-bold iniria hover:text-[#320C4B] "
            >
              Print Picture
            </button>
          </div>
        </div>
      ) : null}
      <canvas className="hidden" ref={photoRef}></canvas>
      {!takePic ? <MyDropzone getVideo={getVideo} /> : null}
    </div>
  );
};
