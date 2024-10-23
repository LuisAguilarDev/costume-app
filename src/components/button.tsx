type props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  className?: string;
};

export default function button({ onClick, text, className }: props) {
  return (
    <button
      className={`bg-[#60F761] px-4 py-3 rounded-[16px] font-bold iniria text-[#320C4B] ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
