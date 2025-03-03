"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface DatePickerProps {
  value?: string;
  onChange?: (date: string) => void;
}

const DatePicker = ({ value, onChange }: DatePickerProps): JSX.Element => {
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
            "min-w-[120px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
          variant="outline">
          {date ? format(date, "dd/MM/yyyy") : <span>Chọn ngày</span>}
          <CalendarIcon className="ml-auto h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          initialFocus
          mode="single"
          selected={date}
          onSelect={handleSelect}
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
