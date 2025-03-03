import { useState } from "react";
import { XIcon } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const MultipleSelect = (): JSX.Element => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  const toggleOption = (option: string): void => {
    setSelectedOptions(prev =>
      prev.includes(option)
        ? prev.filter(item => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="w-64">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select options" />
        </SelectTrigger>
        <SelectContent>
          {options.map(option => (
            <div
              key={option}
              className="flex items-center p-2 cursor-pointer"
              onClick={() => toggleOption(option)}>
              <input
                readOnly
                checked={selectedOptions.includes(option)}
                className="mr-2"
                type="checkbox"
              />
              {option}
            </div>
          ))}
        </SelectContent>
      </Select>

      {/* Hiển thị danh sách các option đã chọn */}
      <div className="mt-4 flex flex-wrap gap-2">
        {selectedOptions.map(option => (
          <div
            key={option}
            className="px-3 py-1 bg-blue-500 text-white rounded-lg flex items-center">
            {option}
            <button
              className="ml-2 text-white hover:text-red-500"
              onClick={() => toggleOption(option)}>
              <XIcon className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleSelect;
