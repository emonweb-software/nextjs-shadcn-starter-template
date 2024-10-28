import { ModeToggle } from "@/components/toggle-theme";
import SignInForm from "@/components/sign-in-form";
import { LocaleSwitcherSelect } from "@/components/locale-switcher-select";

export default function Home() {
  return (
    <div className="h-screen w-full flex justify-center items-center background">
      <ModeToggle />
      <LocaleSwitcherSelect />
      <SignInForm />
    </div>
  );
}
