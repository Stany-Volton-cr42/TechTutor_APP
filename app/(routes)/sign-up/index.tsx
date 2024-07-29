import { useToast, ToastProvider } from "react-native-toast-notifications";
import SignUpScreen from "@/Screens/auth/signup/signup.screen";

export default function SignUp() {
  return (
    <ToastProvider>
      <SignUpScreen />
    </ToastProvider>
  );
}