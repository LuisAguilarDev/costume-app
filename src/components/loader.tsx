import { useEffect, useState } from 'react';

export default function Loader() {
  const messages = [
    'Hola estoy trabajando',
    'no cierres la ventana es algo lento',
    'calma espera un poco',
  ];
  const [message, setMessage] = useState(messages[0]);

  function updateMessage() {
    let index = 0;
    const intervalId = setInterval(() => {
      index = (index + 1) % messages.length; // Cicla entre los mensajes
      setMessage(messages[index]);
    }, 3000); // Cambia el mensaje cada 3 segundos

    return () => clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonta
  }

  useEffect(() => {
    const cleanup = updateMessage(); // Llama a la función cuando se monta el componente
    return cleanup; // Limpia el intervalo cuando el componente se desmonta
  }, []);
  return (
    <div
      id="loader-overlay"
      className="fixed inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 z-50 gap-8"
    >
      <div>{message}</div>
      <div className="loader"></div>
    </div>
  );
}
