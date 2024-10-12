import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

export const MyDropzone = ({ setPhoto, setFile, getVideo, settakePic }: { setPhoto: Function, setFile: Function, getVideo: Function, settakePic: any }) => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        if (file && file.type.startsWith('image/')) {
            const imageUrl = URL.createObjectURL(file);
            setPhoto(imageUrl);
            setFile(acceptedFiles[0])
        }
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div className='relative flex bg-white h-[500px] w-[500px] border-dashed border-[#9d00ff] border-[8px]' {...getRootProps()}>
            <input {...getInputProps()} />
            <div className='flex flex-col w-full h-full items-center justify-center'>
                {
                    isDragActive ?
                        <p className='text-black'>Drop the files here ...</p> :
                        <p className='text-black text-[20px] w-[26ch] text-center'>Drag & drop your files here, or click to select files</p>
                }
            </div>
            <div className='w-full flex items-center justify-center absolute bottom-[150px]'>
                <button
                    className='bg-[#9d00ff] px-4 py-3 rounded-sm font-bold'
                    onClick={(e) => {
                        e.stopPropagation();
                        getVideo()
                        settakePic(true)
                        console.log(e)
                    }}
                >
                    Take a photo
                </button>
            </div>
        </div>
    )
}