import { Spinner } from "./ui/spinner";

interface GlobalSpinnerProps {
  text: string;
}

function GlobalSpinner({ text }: GlobalSpinnerProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="flex flex-col items-center">
        <Spinner size={45} color="white" />
        <p className="text-xl mt-3 text-white">{text}</p>
      </div>
    </div>
  );
}

export default GlobalSpinner;
