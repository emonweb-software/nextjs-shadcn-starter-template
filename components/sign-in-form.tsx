"use client";

import { z } from "zod";
import { useZodForm } from "@/hooks";
import { Button } from "./ui/button";
import { delay as performSignIn } from "@/helpers/common";
import { Form as FormProvider } from "./ui/form";
import FormInput from "./form-input";

const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type SignInFormValues = z.infer<typeof SignInSchema>;

export default function SignInForm() {
  const form = useZodForm({
    schema: SignInSchema,
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

  const onSignIn = async (formData: SignInFormValues) => {
    try {
      console.log("submitted data:", formData);
      await performSignIn(10000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleSubmit(onSignIn)}
        className="space-y-8 min-w-96 max-w-[600px] p-6 bg-white shadow-lg rounded-lg">
        <FormInput
          control={control}
          name="email"
          label="Email"
          placeholder="Enter your email"
        />
        <FormInput
          control={control}
          type="password"
          name="password"
          label="Password"
          placeholder="Enter your password"
        />
        <Button type="submit" disabled={isSubmitting}>
          {(isSubmitting && "Signing up...") || "Sign up"}
        </Button>
      </form>
    </FormProvider>
  );
}
