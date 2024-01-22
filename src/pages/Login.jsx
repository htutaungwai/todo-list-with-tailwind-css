import { TextInput, Button, Group, Box, PasswordInput } from "@mantine/core";
import { useForm } from "@mantine/form";

const Login = () => {
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
    <div className="mainContainer min-w-screen min-h-screen flex flex-row">
      <div className="min-w-1/2 bg-red-500 w-1/2 min-h-screen hidden md:block"></div>

      <div className="w-1/2 min-h-screen flex items-center flex-col justify-center ">
        <h1 className="text-2xl font-bold poppins">Log In</h1>
        <Box maw={340} mx={"auto"} style={{ minWidth: 300 }}>
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <TextInput
              mt={"md"}
              label="Email"
              placeholder="your@email.com"
              {...form.getInputProps("email")}
            />

            <PasswordInput
              label="Password"
              mt={"md"}
              {...form.getInputProps("password", { type: "password" })}
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit">Submit</Button>
            </Group>
          </form>
        </Box>
      </div>
    </div>
  );
};

export default Login;
