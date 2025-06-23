import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLogin } from "@/hooks/useLogin";
import { Link } from "react-router-dom";

function Login() {
  const { login } = useLogin();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");

    login(email, password);
  };
  return (
    <div className="md:grid md:grid-cols-[10fr_7fr] md:gap-[50px] items-center">
      <img
        className="object-cover w-[100vw] md:h-[100dvh] absolute md:static -z-99"
        src="../images/login-bg.png"
        alt="house image"
      />
      <div className="bg-white/70 absolute top-0 bottom-0 right-0 left-0 z-10" />
      <div className="ml-[100px] relative z-11 ">
        <img className="" src="../logo.svg" alt="site logo" />
        <div>
          <div className="mb-[30px] mt-[50px]">
            <h2 className="text-[30px] font-bold font-secondary z-11">
              Welcome 👋
            </h2>
            <p className="text-gray-500">Please login here</p>
          </div>
          <form className="w-[445px] text-center" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <div className="grid w-full items-center gap-3">
                <Label className="text-dark-500" htmlFor="email">
                  Email Address
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="grid w-full items-center gap-3">
                <Label className="text-dark-500" htmlFor="password">
                  Password
                </Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
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
            <button className="bg-primary-500 text-white rounded-10 inline-block w-full py-4 mt-[30px] cursor-pointer">
              Login
            </button>
            <Link to="/signup" className="mx-auto underline text-primary-500">
              or need create acount?
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
