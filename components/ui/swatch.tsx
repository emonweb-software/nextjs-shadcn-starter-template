import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SwatchProps {
  color: string;
  name: string;
  selected: boolean;
  onClick: () => void;
}

const Swatch = ({
  color,
  name,
  selected,
  onClick,
}: SwatchProps): JSX.Element => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          aria-label={`Select color ${name}`}
          style={{ backgroundColor: color }}
          className={`w-8 h-8 rounded border-2 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            selected ? "border-black" : "border-transparent"
          }`}
          onClick={onClick}
        />
      </TooltipTrigger>
      <TooltipContent side="top">{name}</TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default Swatch;
