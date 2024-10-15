import { useNavigate } from 'react-router-dom';
import { useStore } from '../components/store';

const ImageGallery = () => {
  const images = useStore((state) => state.result);
  const setCurrentImageIndex = useStore((state) => state.setCurrentImageIndex);
  let navigate = useNavigate();
  const routeChange = (path: string) => {
    navigate(path);
  };
  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            onClick={() => {
              setCurrentImageIndex(index);
              routeChange('/result');
            }}
            style={{
              width: '250px',
              height: '250px',
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
        ))}
      </div>
      <div>
        <button
          onClick={() => {
            routeChange('/last_step');
          }}
          className="bg-[#9d00ff] px-4 py-3 rounded-sm font-bold"
        >
          Transform Another Image!
        </button>
      </div>
    </>
  );
};

export default ImageGallery;
