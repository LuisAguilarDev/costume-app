import { useState } from 'react';
import './App.css'
import Navbar from './components/navbar'
import { PhotoDropZone } from './components/photo_uploader'
import FirstStep from './components/firstStep';
import Footer from './components/footer';
import Loader from './components/loader';

function App() {
  const [photo, setPhoto] = useState(null);
  const [result, setResult] = useState(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [takePic, setTakePic] = useState(false);
  function tryAgain() {
    setPhoto(null)
    setResult(null)
    setFile(null)
  }
  return (
    <div className='relative w-full h-full m:w-full lg:w-[1024px]'>
      <Navbar />
      {loading ? <Loader /> : null}
      <div className='flex flex-col content-container justify-between pt-8'>
        {!photo && !result && !takePic ? <header className='flex flex-col items-center'>
          <p className='w-[80ch]'>Count Stitch is ready to craft a hauntingly beautiful costume just for you, bringing your wildest Halloween fantasies to life!</p><br />
          <p className='w-[80ch]'> Will you dare to trust him with your next eerie transformation? Upload a photo or snap a new one, and let the magic begin as he transports you to a world of mystery and enchantment.</p><br />
        </header>
          : null}
        {!photo && !result ?
          <PhotoDropZone setPhoto={setPhoto} setFile={setFile} setTakePic={setTakePic} takePic={takePic} /> :
          (!result ? <FirstStep photo={photo!} setResult={setResult} file={file!} setLoading={setLoading} /> : null)}
        {result ? <><img className="w-full h-[400px] object-contain" src={result} alt="Costume_photo" /><button onClick={tryAgain}>Try it again!!!</button></> : null}
        <Footer />
      </div>
    </div>
  )
}

export default App
