"use client";

import React from "react";
import { z } from "zod";

import { Button } from "@/components/atom-ui/button";
import { Form as FormProvider } from "@/components/atom-ui/form";
import FormInput from "@/components/mole-ui/form-input";
import { delay as performSignIn } from "@/helpers/common";
import { useZodForm } from "@/hooks";

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormValues = z.infer<typeof FormSchema>;

export default function FormExample(): React.ReactElement {
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
        className="space-y-8 min-w-96 max-w-[600px] p-6 background shadow-lg rounded-lg border"
        onSubmit={handleSubmit(onSending)}>
        <FormInput
          control={control}
          label="Email"
          name="email"
          placeholder="Email"
        />
        <FormInput
          control={control}
          label="Password"
          name="password"
          placeholder="Password"
          type="password"
        />
        <Button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Submitting" : "Submit"}
        </Button>
      </form>
    </FormProvider>
  );
}
