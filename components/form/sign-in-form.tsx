"use client";

import { useTranslations } from "next-intl";
import { z } from "zod";

import { useZodForm } from "@/hooks";
import { Button } from "@/components/ui/button";
import { delay as performSignIn } from "@/helpers/common";
import { Form as FormProvider } from "@/components/ui/form";

import FormInput from "./form-input";

const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type SignInFormValues = z.infer<typeof SignInSchema>;

export default function SignInForm() {
  const t = useTranslations("LoginPage");

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
        className="space-y-8 min-w-96 max-w-[600px] p-6 background shadow-lg rounded-lg border">
        <FormInput
          control={control}
          name="email"
          label={t("Email")}
          placeholder={t("PlaceholderEmail")}
        />
        <FormInput
          control={control}
          type="password"
          name="password"
          label={t("Password")}
          placeholder={t("PlaceholderPassWord")}
        />
        <Button type="submit" disabled={isSubmitting}>
          {(isSubmitting && `${t("SignUp")}...`) || t("SignUp")}
        </Button>
      </form>
    </FormProvider>
  );
}
