import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { Auth } from "aws-amplify";
import { useUser } from "../context/AuthContext";
import { CognitoUser } from "@aws-amplify/auth";
import { useRouter } from "next/router";

interface IFormInput {
  email: string;
  password: string;
  code: string;
}

const SignUp = () => {
  const [showCode, setShowCode] = useState<boolean>(false);
  const { user, setUser } = useUser();
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      if (showCode) {
        confirmSignUp(data);
      } else {
        await signUp(data);
        setShowCode(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  async function confirmSignUp(data: IFormInput) {
    const { email, password, code } = data;
    try {
      await Auth.confirmSignUp(email, code);
      const amplifyUser = await Auth.signIn(email, password);
      console.log("Success signed in a user:", amplifyUser);
      if (amplifyUser) {
        router.push("/gallery");
      } else {
        throw new Error("Error signing in user");
      }
    } catch (err) {
      console.log("Error confirming sign up:", err);
    }
  }

  async function signUp({ email, password }: IFormInput): Promise<CognitoUser> {
    try {
      const { user } = await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
        },
        autoSignIn: {
          enabled: true,
        },
      });
      console.log("Signed up a user:", user);
      return user;
    } catch (error) {
      throw error;
    }
  }

  console.log("The value of the user from the hook is", user);

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

        {showCode && (
          <TextField
            id="code"
            label="Verification Code"
            type="text"
            error={errors.code ? true : false}
            helperText={errors.code ? errors.code.message : null}
            {...register("code", {
              required: {
                value: true,
                message: "Please enter a verification code.",
              },
              minLength: {
                value: 6,
                message: "Please enter your 6 digit verification code.",
              },
              maxLength: {
                value: 6,
                message: "Please enter your 6 digit verification code.",
              },
            })}
          />
        )}

        <Button variant="contained" type="submit" className="text-black">
          {showCode ? "Confirm Code" : "Sign up"}
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
