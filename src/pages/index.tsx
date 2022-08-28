import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { Auth } from "aws-amplify";
import { useUser } from "../context/AuthContext";
import { useRouter } from "next/router";
import { NextPage } from "next";

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
    <div>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <TextField
          id="email"
          label="Email"
          type="email"
          error={errors.email ? true : false}
          helperText={errors.email ? errors.email.message : null}
          {...register("email", {
            required: { value: true, message: "Please enter an email." },
            pattern: {
              value:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please enter a valid email.",
            },
          })}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          error={errors.password ? true : false}
          helperText={errors.password ? errors.password.message : null}
          {...register("password", {
            required: { value: true, message: "Please enter a password." },
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message:
                "Your password must be at least 8 characters long, contain at least one number and one special character and have a mixture of uppercase and lowercase letters.",
            },
          })}
        />

        <Button variant="contained" type="submit" className="text-black">
          Sign in
        </Button>
      </form>
    </div>
  );
};

export default Home;
