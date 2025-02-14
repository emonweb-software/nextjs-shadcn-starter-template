import type { FieldValues, UseFormProps, UseFormReturn } from "react-hook-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";

type ZodSchema = z.ZodType<FieldValues>;
type InferredZodSchema<T extends ZodSchema> = z.infer<T>;
type UseZodFormProps<T extends ZodSchema> = Omit<
  UseFormProps<InferredZodSchema<T>>,
  "resolver"
> & {
  schema: T;
};

export default function useZodForm<T extends ZodSchema>({
  schema,
  ...formConfig
}: UseZodFormProps<T>): UseFormReturn<InferredZodSchema<T>> {
  const form = useForm<InferredZodSchema<T>>({
    ...formConfig,
    resolver: zodResolver(schema),
  });

  return form;
}
