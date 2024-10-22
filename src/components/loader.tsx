import { useEffect, useState } from 'react';
import { useStore } from './store';

export default function Loader() {
  const messages = [
    'Patience weaves the finest threads.',
    'A masterpiece takes time.',
    'The magic is in the details, just a moment more.',
    'Hold still, greatness is nearly sewn.',
    'Even the darkest fabric needs precision.',
    'Your transformation is nearly complete.',
    'Perfection requires a few more stitches.',
    'The final touch is almost ready.',
    'Just a stitch away from your new self.',
    "Trust in the craft, it's worth the wait.",
  ];
  const [message, setMessage] = useState(messages[0]);
  function updateMessage() {
    let index = 0;
    const intervalId = setInterval(() => {
      index = (index + 1) % messages.length;
      setMessage(messages[index]);
    }, 5000);
    return () => clearInterval(intervalId);
  }

  useEffect(() => {
    const cleanup = updateMessage();
    return cleanup; // Limpia el intervalo cuando el componente se desmonta
  }, []);
  return (
    <div
      id="loader-overlay no-scroll"
      className="fixed inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 z-50 gap-8"
    >
      <div className="no-scroll">{message}</div>
      <div className="loader no-scroll"></div>
    </div>
  );
}
