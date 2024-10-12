import { useRef, useState } from "react";
import Swal from "sweetalert2";
import { MyDropzone } from "./dropzone";

export const PhotoDropZone = ({ setPhoto, setFile, takePic, setTakePic }: { setPhoto: Function, takePic: boolean, setTakePic: Function, setFile: Function }) => {
  let videoRef = useRef<HTMLVideoElement | null>(null);
  let photoRef = useRef<HTMLCanvasElement | null>(null);
  const [cameraReplace, setCameraReplace] = useState(false);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
      })
      .then((stream) => {
        let video: any = videoRef.current;
        if (!video) {
          Swal.fire("Camera not found");
        }
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        Swal.fire(err);
      });
  };

  const stopVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
      })
      .then((stream: MediaStream | null) => {
        stream!.getTracks().forEach((track) => {
          track.stop();
          track.enabled = false;
          let video: any = videoRef.current;
          video.srcObject = null;
        });
        stream = null;
      });
  };

  const printPicture = async (_: any, option?: "replace") => {
    if (!option) {
      setTakePic(false);
      setCameraReplace(true);
      stopVideo();
      const width = 400;
      const height = width / (16 / 9);
      let video = videoRef.current!;
      let photo = photoRef.current!;
      photo.width = width;
      photo.height = height;
      let ctx = photo.getContext("2d")!;
      ctx.drawImage(video, 0, 0, width, height);
      photo.toBlob(async function (blob) {
        if (!blob) return Swal.fire("Something went wrog");
        let file = new File([blob], "image.jpg", { type: "image/jpeg" });
        const imageUrl = URL.createObjectURL(file);
        setFile(file)
        setPhoto(imageUrl)
      }, "image/jpeg");
    }
    if (option === "replace") {
      setTakePic(false);
      stopVideo();
      const width = 400;
      const height = width / (16 / 9);
      let video = videoRef.current!;
      let photo = photoRef.current!;
      photo.width = width;
      photo.height = height;
      let ctx = photo.getContext("2d")!;
      ctx.drawImage(video, 0, 0, width, height);
      photo.toBlob(async function (blob) {
        if (!blob) return Swal.fire("Camera not found");
        let file = new File([blob], "image.jpg", { type: "image/jpeg" });
        Swal.fire({
          icon: "success",
          title: "Notification",
          text: "Document written with ID: " + "answer",
        });
      }, "image/jpeg");
      //
      setCameraReplace(false);
    }
  };

  return (
    <div className="flex w-full h-[700px] items-center justify-center">
      {takePic ? (
        <div className="flex flex-col">
          <video className="w-full h-[500px]" ref={videoRef}></video>
          {cameraReplace ? (
            <div className="flex items-center justify-center p-8">
              <button
                onClick={(e) => {
                  printPicture(e, "replace");
                }}
                className='bg-[#9d00ff] px-4 py-3 rounded-sm font-bold'
              >
                Print Picture
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-center p-8">
              <button
                onClick={(e) => {
                  printPicture(e);
                }}
                className='bg-[#9d00ff] px-4 py-3 rounded-sm font-bold'
              >
                Print Picture
              </button></div>
          )}
        </div>
      ) : (
        <video ref={videoRef} className="hidden"></video>
      )}

      <canvas className="hidden" ref={photoRef}></canvas>
      {!takePic ? <MyDropzone setPhoto={setPhoto} setFile={setFile} getVideo={getVideo} settakePic={setTakePic} /> : null}
      <input type="file" id="file-input" style={{ display: "none" }} />
    </div>
  );
};
