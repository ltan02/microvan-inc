import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { Auth } from "aws-amplify";
import { useUser } from "../context/AuthContext";
import { useRouter } from "next/router";
import { NextPage } from "next";
import Header from "../components/header";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";

interface IFormInput {
  email: string;
  password: string;
}

const Home: NextPage = () => {
  const { user, setUser } = useUser();
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  // Check if a user is already logged in
  // if (user) {
  //   router.push("/gallery");
  //   return <div></div>;
  // }

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const amplifyUser = await Auth.signIn(data.email, data.password);
    if (amplifyUser) {
      router.push("/gallery");
    }
  };

  return (
    <div className="w-full h-full m-0">
      <Header />

      <main className="flex flex-col flex-grow flex-shrink basis-0">
        <div className="flex flex-col flex-grow flex-shrink basis-0 h-full">
          <div className="ml-auto mr-auto p-[20px]">
            <form
              className="bg-white border-[1px] border-solid rounded-[10px] border-[#e5e8eb] m-0 flex flex-col items-center justify-center"
              onSubmit={handleSubmit(onSubmit)}
              autoComplete="off"
            >
              <div className="flex flex-row p-[30px]">
                <div className="flex items-center justify-center border-r-0 border-solid border-[2px] rounded-l-[10px] rounded-r-none border-[#e5e8eb] bg-white w-[50px]">
                  <AccountCircleIcon className="text-[30px] text-[#a0a3a4]" />
                </div>
                <div className="border-solid border-[2px] rounded-r-[10px] rounded-l-none border-[#e5e8eb] bg-white outline-none">
                  <TextField
                    id="email"
                    label="Email"
                    type="email"
                    error={errors.email ? true : false}
                    helperText={errors.email ? errors.email.message : null}
                    className="w-[300px] border-none focus:outline-none border-0"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Please enter an email.",
                      },
                      pattern: {
                        value:
                          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Please enter a valid email.",
                      },
                    })}
                  />
                </div>
              </div>

              <div className="flex flex-row pt-0 p-[30px]">
                <div className="flex items-center justify-center border-r-0 border-solid border-[2px] rounded-l-[10px] rounded-r-none border-[#e5e8eb] bg-white w-[50px]">
                  <KeyIcon className="text-[30px] text-[#a0a3a4]" />
                </div>
                <div className="border-solid border-[2px] rounded-r-[10px] rounded-l-none border-[#e5e8eb] bg-white outline-none">
                  <TextField
                    id="password"
                    label="Password"
                    type="password"
                    error={errors.password ? true : false}
                    helperText={
                      errors.password ? errors.password.message : null
                    }
                    className="w-[300px] border-none focus:outline-none border-0"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Please enter a password.",
                      },
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message:
                          "Your password must be at least 8 characters long, contain at least one number and one special character and have a mixture of uppercase and lowercase letters.",
                      },
                    })}
                  />
                </div>
              </div>

              <Button variant="contained" type="submit" className="text-black">
                Sign in
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
