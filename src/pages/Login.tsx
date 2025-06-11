import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="grid grid-cols-[10fr_7fr]  gap-[50px] justify-between items-center">
      <img
        className="object-contain h-[100dvh]"
        src="../images/login-bg.png"
        alt="house image"
      />
      <div>
        <img className="" src="../logo.svg" alt="site logo" />
        <div>
          <div className="mb-[30px] mt-[50px]">
            <h2 className="text-[30px] font-bold font-secondary">Welcome 👋</h2>
            <p className="text-gray-500">Please login here</p>
          </div>
          <form className="w-[445px]">
            <div className="flex flex-col gap-4">
              <div className="grid w-full items-center gap-3">
                <Label className="text-dark-500" htmlFor="email">
                  Email Address
                </Label>
                <Input type="email" id="email" placeholder="Email" />
              </div>
              <div className="grid w-full items-center gap-3">
                <Label className="text-dark-500" htmlFor="password">
                  Password
                </Label>
                <Input type="password" id="password" placeholder="Password" />
              </div>
              <div className="flex justify-between">
                <div className="flex gap-[10px] items-center">
                  <Checkbox id="rememberMe" />
                  <Label className="text-dark-500" htmlFor="rememberMe">
                    Remember Me
                  </Label>
                </div>
                <Link
                  to=""
                  className="text-primary-500 text-[14px] hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
            <button className="bg-primary-500 text-white rounded-[10px] inline-block w-full py-4 mt-[30px] cursor-pointer">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
