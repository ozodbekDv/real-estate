import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRegister } from "@/hooks/useRegister";
import { Link } from "react-router-dom";

function SignUp() {
  const { register } = useRegister();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const email = formData.get("email");
    const password = formData.get("password");
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");

    register(
      typeof email === "string" ? email : null,
      typeof password === "string" ? password : null,
      typeof firstName === "string" ? firstName : null,
      typeof lastName === "string" ? lastName : null
    );
  };
  return (
    <div className="grid grid-cols-[10fr_7fr]  gap-[50px] justify-between items-center">
      <img
        className="object-contain h-[100dvh]"
        src="../images/login-bg.png"
        alt="house image"
      />
      <div>
        <div>
          <div className="mb-[30px] mt-[50px]">
            <h2 className="text-[30px] font-bold font-secondary">
              Create New Account
            </h2>
            <p className="text-gray-500">Please enter details</p>
          </div>
          <form className="w-[445px] text-center" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <div className="grid w-full items-center gap-3">
                <Label className="text-dark-500" htmlFor="email">
                  First Name
                </Label>
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Type here..."
                />
              </div>
              <div className="grid w-full items-center gap-3">
                <Label className="text-dark-500" htmlFor="password">
                  Last Name
                </Label>
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Type here..."
                />
              </div>
              <div className="grid w-full items-center gap-3">
                <Label className="text-dark-500" htmlFor="password">
                  Email Address
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Type here..."
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
                  placeholder="Type here..."
                />
              </div>
              <div className="flex">
                <div className="flex gap-[10px] items-center">
                  <Checkbox id="rememberMe" />
                  <Label className="text-dark-500" htmlFor="rememberMe">
                    I agree to the
                    <Link
                      to=""
                      className="text-primary-500 font-bold text-[14px] hover:underline"
                    >
                      Terms & Conditions
                    </Link>
                  </Label>
                </div>
              </div>
            </div>
            <button className="bg-primary-500 text-white rounded-[10px] inline-block w-full py-4 mt-[30px] cursor-pointer">
              Signup
            </button>
            <Link to="/login" className="mx-auto underline text-primary-500">
              already have acount please login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
