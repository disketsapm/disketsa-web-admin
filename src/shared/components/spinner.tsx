import { Loader2 } from "lucide-react";
import { cn } from "../lib/clsx";

type ISpinnerProps = {
  className?: string;
};

const Spinner: React.FC<ISpinnerProps> = ({ className }) => {
  return (
    <Loader2 className={cn("text-primary animate-spin", className)}></Loader2>
  );
};

export default Spinner;
