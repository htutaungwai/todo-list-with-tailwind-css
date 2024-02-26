import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  PasswordInput,
  Text,
} from "@mantine/core";

// MANTINE-FORM
import { useForm } from "@mantine/form";

// REACT-ROUTER-DOM
import { Link, useNavigate } from "react-router-dom";

// ICONS
import { IoLockClosed } from "react-icons/io5";

// REACT HOOKS
import { useEffect } from "react";

//REACT REDUX
import { useDispatch, useSelector } from "react-redux";

// TOAST
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../components/Loading/Spinner";

// MUTATIONS
import { useSignupMutation } from "../features/usersApiSlice/usersApiSlice";

// AUTH
import { setCredentials } from "../features/authSlice/authSlice";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  // ှ MUTAION
  const [signup, { isLoading }] = useSignupMutation();

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      termsOfService: false,
      password: "",
      confirmPassword: "",
    },

    validate: {
      name: (value) => (value !== "" ? null : "Username is required"),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      termsOfService: (value) =>
        value ? null : "You have to agree our terms of service first.",
      password: (value) =>
        /^(?=.*[a-z]).{6,}$/.test(value)
          ? null
          : "Password must contain atleast 6 letters.",

      confirmPassword: (value, values) =>
        value === values.password ? null : "Passwords do not match",
    },
  });

  const submitHandler = async ({ name, email, password }) => {
    try {
      console.log(signup);
      const res = await signup({ name, email, password }).unwrap();
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
    }
  };

  return (
    <div className="mainContainer flex flex-row">
      <div className="min-w-1/2 bg-red-500 w-1/2 min-h-screen hidden md:block"></div>

      <div className=" w-full md:w-1/2 min-h-screen flex items-center flex-col justify-center">
        <h1 className="text-2xl font-bold poppins">Sign Up</h1>
        <Box maw={340} mx="auto">
          <form onSubmit={form.onSubmit((values) => submitHandler(values))}>
            <TextInput
              withAsterisk
              label="Username"
              placeholder="John Doe"
              {...form.getInputProps("name")}
            />

            <TextInput
              withAsterisk
              label="Email"
              placeholder="your@email.com"
              mt={"md"}
              {...form.getInputProps("email")}
            />

            <PasswordInput
              withAsterisk
              label="Password"
              placeholder="***********"
              mt={"md"}
              {...form.getInputProps("password", { type: "password" })}
            />

            <PasswordInput
              withAsterisk
              rightSection={<IoLockClosed />}
              label="Confirm Password"
              placeholder="***********"
              mt="md"
              {...form.getInputProps("confirmPassword", {
                type: "confirmPassword",
              })}
            />

            <Checkbox
              mt="md"
              label="I agree terms and services of @TODOIST"
              {...form.getInputProps("termsOfService", { type: "checkbox" })}
            />

            <Text mt="sm" fw={500} size="sm">
              Already have an account?{"  "}
              <Link to="/login" className="underline text-blue-600 font-normal">
                Login here
              </Link>
            </Text>

            <Group justify="flex-end" mt="md">
              <Button type="submit">Submit</Button>
            </Group>
          </form>
        </Box>
      </div>
    </div>
  );
};

export default Signup;
