import { useEffect, useRef } from 'react';
import Swal from 'sweetalert2';
import { MyDropzone } from './dropzone';
import { useStore } from './store';
import { useNavigate } from 'react-router-dom';

export const PhotoDropZone = () => {
  const takePic = useStore((state) => state.takePic);
  const setState = useStore((state) => state.setState);
  let videoRef = useRef<HTMLVideoElement | null>(null);
  let photoRef = useRef<HTMLCanvasElement | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  let navigate = useNavigate();
  const routeChange = (path: string) => {
    navigate(path);
  };
  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
      })
      .then((stream) => {
        let video: any = videoRef.current;
        mediaStreamRef.current = stream;
        if (!video) {
          Swal.fire('Camera not found');
        } else {
          video.srcObject = stream;
          video.play();
        }
      })
      .catch((err) => {
        Swal.fire('Someting went worng...');
      });
  };
  useEffect(() => {
    if (takePic) {
      getVideo();
    }
  }, []);

  const stopVideo = () => {
    if (mediaStreamRef?.current) {
      mediaStreamRef.current.getAudioTracks().forEach((track) => track.stop());
      mediaStreamRef.current.getVideoTracks().forEach((track) => track.stop());
      mediaStreamRef.current.getTracks().forEach((track) => {
        track.stop();
        track.enabled = false;
        let video: any = videoRef.current;
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
    const width = 400;
    const height = width / (16 / 9);
    let video = videoRef.current!;
    let photo = photoRef.current!;
    photo.width = width;
    photo.height = height;
    let ctx = photo.getContext('2d')!;
    ctx.drawImage(video, 0, 0, width, height);
    photo.toBlob(async function (blob) {
      if (!blob) return Swal.fire('Something went wrog');
      let file = new File([blob], 'image.jpg', { type: 'image/jpeg' });
      const imageUrl = URL.createObjectURL(file);
      setState({ file: file, photo: imageUrl, takePic: false });
      stopVideo();
    }, 'image/jpeg');
    // }
    // if (option === "replace") {
    //   setState({ takePic: false });
    //   const width = 400;
    //   const height = width / (16 / 9);
    //   let video = videoRef.current!;
    //   let photo = photoRef.current!;
    //   photo.width = width;
    //   photo.height = height;
    //   let ctx = photo.getContext("2d")!;
    //   ctx.drawImage(video, 0, 0, width, height);
    //   photo.toBlob(async function (blob) {
    //     if (!blob) return Swal.fire("Camera not found");
    //     let file = new File([blob], "image.jpg", { type: "image/jpeg" });
    //     const imageUrl = URL.createObjectURL(file);
    //     setState({ file: file })
    //     setState({ photo: imageUrl })
    //     stopVideo();
    //   }, "image/jpeg");
    //   //
    //   setCameraReplace(false);
    // }
  };

  return (
    <div className="flex w-full h-[700px] items-center justify-center">
      {takePic ? (
        <div className="flex flex-col">
          <video className="w-full h-[500px]" ref={videoRef}></video>
          <div className="flex items-center justify-center p-8">
            <button
              onClick={() => {
                printPicture();
                routeChange('last_step');
              }}
              className="bg-[#9d00ff] px-4 py-3 rounded-sm font-bold"
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
