export default function Loader() {
  return (
    <div
      id="loader-overlay"
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
    >
      <div className="loader"></div>
    </div>
  );
}
