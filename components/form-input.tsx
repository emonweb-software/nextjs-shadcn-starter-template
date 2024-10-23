import { Control, FieldValues, Path } from "react-hook-form";
import { Input } from "./ui/input";
import {
  FormItem,
  FormLabel,
  FormMessage,
  FormField,
  FormControl,
} from "./ui/form";

interface FormInputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  type?: string;
  placeholder: string;
}

export default function FormInput<T extends FieldValues>({
  control,
  name,
  label,
  type = "text",
  placeholder,
}: FormInputProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
