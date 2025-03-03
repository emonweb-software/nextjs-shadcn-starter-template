"use client";

import * as React from "react";
import { format } from "date-fns";
import { Clock as ClockIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface TimePickerProps {
  value?: string;
  onChange?: (date: string) => void;
}

const TimePicker = ({ value, onChange }: TimePickerProps): JSX.Element => {
  const [date, setDate] = React.useState<Date | undefined>(
    value ? new Date(value) : undefined
  );

  const handleSelect = (selectedDate: Date | undefined): void => {
    setDate(selectedDate);
    if (selectedDate && onChange) onChange(selectedDate.toISOString());
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            "min-w-8 justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
          variant="outline">
          {date ? format(date, "HH:mm") : <span>Chọn giờ</span>}
          <ClockIcon className="ml-auto h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto flex flex-col space-y-2 p-4">
        <div className="flex space-x-2">
          <select
            className="w-20 rounded-md border p-2"
            value={date ? format(date, "HH") : "00"}
            onChange={e => {
              const newDate = date || new Date();
              newDate.setHours(parseInt(e.target.value));
              handleSelect(newDate);
            }}>
            {Array.from({ length: 24 }).map((_, i) => (
              <option key={`hour-${i}`} value={i.toString().padStart(2, "0")}>
                {i.toString().padStart(2, "0")}
              </option>
            ))}
          </select>
          <span className="flex items-center">:</span>
          <select
            className="w-20 rounded-md border p-2"
            value={date ? format(date, "mm") : "00"}
            onChange={e => {
              const newDate = date || new Date();
              newDate.setMinutes(parseInt(e.target.value));
              handleSelect(newDate);
            }}>
            {Array.from({ length: 60 }).map((_, i) => (
              <option key={i} value={i.toString().padStart(2, "0")}>
                {i.toString().padStart(2, "0")}
              </option>
            ))}
          </select>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default TimePicker;
