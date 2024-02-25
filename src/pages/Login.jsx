// REACT
import { useEffect, useState } from "react";
// MANTINE-CORE
import {
  TextInput,
  Button,
  Group,
  Box,
  PasswordInput,
  Text,
} from "@mantine/core";

// MANTINE-FORM
import { useForm } from "@mantine/form";

//REACT-REDUX
import { useDispatch, useSelector } from "react-redux";

// REACT-ROUTER-DOM
import { useNavigate, Link } from "react-router-dom";

// MUTATIONS
import { useLoginMutation } from "../features/usersApiSlice/usersApiSlice";

// AUTH
import { setCredentials } from "../features/authSlice/authSlice";

// REACT-TOASTIFY
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../components/Loading/Spinner";

const Login = () => {
  // hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);

  // LOGIN MUTAION
  const [login, { isLoading }] = useLoginMutation();

  //checking whether if the end user has the cookies or not
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        /^(?=.*[a-z]).{6,}$/.test(value)
          ? null
          : "Password must contain atleast 6 letters.",
    },
  });

  return (
    <>
      {isLoading && <Spinner />}
      <div className="mainContainer min-w-screen min-h-screen flex flex-row">
        <div className="min-w-1/2 bg-red-500 w-1/2 min-h-screen hidden md:block"></div>

        <div className=" w-full md:w-1/2 min-h-screen flex items-center flex-col justify-center">
          <h1 className="text-2xl font-bold poppins">Log In</h1>
          <Box maw={340} mx={"auto"} style={{ minWidth: 300 }}>
            <form
              onSubmit={form.onSubmit(async ({ email, password }) => {
                try {
                  const res = await login({ email, password }).unwrap();
                  dispatch(setCredentials({ ...res }));
                  navigate("/");
                } catch (error) {
                  console.log(error?.data?.message || error);

                  toast.error(` ${error?.data?.message || error?.error}`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                  });

                  // form.setValues({
                  //   email: "",
                  //   password: "",
                  // });

                  form.setValues({
                    email: "",
                    password: "",
                  });

                  form.setErrors({
                    email:
                      error?.data?.message ||
                      error?.error ||
                      "Unknown Error occurs",
                    password:
                      error?.data?.message ||
                      error?.error ||
                      "Unknown Error occurs",
                  });
                }
              })}
            >
              <TextInput
                mt={"md"}
                label="Email"
                placeholder="example@email.com"
                {...form.getInputProps("email")}
              />

              <PasswordInput
                label="Password"
                mt={"md"}
                placeholder="***********"
                {...form.getInputProps("password", { type: "password" })}
              />

              <Text mt="sm" fw={500} size="sm">
                Don't you have an account yet?{"  "}
                <Link
                  to="/signup"
                  className="underline text-blue-600 font-normal"
                >
                  Signup here
                </Link>
              </Text>

              <Group justify="flex-end" mt="md">
                <Button type="submit">Submit</Button>
              </Group>
            </form>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Login;
