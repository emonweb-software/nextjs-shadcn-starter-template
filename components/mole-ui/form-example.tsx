"use client";

import { z } from "zod";

import { useZodForm } from "@/hooks";
import { Button } from "@/components/atom-ui/button";
import { delay as performSignIn } from "@/helpers/common";
import { Form as FormProvider } from "@/components/atom-ui/form";
import FormInput from "@/components/mole-ui/form-input";

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormValues = z.infer<typeof FormSchema>;

export default function FormExample() {
  const form = useZodForm({
    schema: FormSchema,
    defaultValues: {
      email: "test-email@gmail.com",
      password: "",
    },
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = form;

  const onSending = async (formData: FormValues) => {
    try {
      console.log("Submitted data:", formData);
      await performSignIn(10000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleSubmit(onSending)}
        className="space-y-8 min-w-96 max-w-[600px] p-6 background shadow-lg rounded-lg border">
        <FormInput
          control={control}
          name="email"
          label="Email"
          placeholder="Email"
        />
        <FormInput
          control={control}
          type="password"
          name="password"
          label="Password"
          placeholder="Password"
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting" : "Submit"}
        </Button>
      </form>
    </FormProvider>
  );
}
