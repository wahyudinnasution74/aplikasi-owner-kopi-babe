import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  Link,
  Pressable,
  VStack,
} from "native-base";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import AppAlert from "../component/AppAlert";
import UserService from "../service/user";
import { login } from "../redux/userReducer";

export default function Login() {
  const dispatch = useDispatch();
  const userService = new UserService();
  const [error, setError] = useState();

  const [data, setData] = React.useState({});
  const [show, setShow] = React.useState(false);

  const onSubmit = async () => {
    const payload = {
      ...data,
    };
    const resp = await userService.login(payload);
    if (!resp._id) return setError(resp);
    dispatch(login(resp));
  };
  return (
    <Center w="100%" h={"100%"}>
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <AppAlert
            status={"error"}
            title={error}
            show={error}
            onClose={() => setError()}
          />
          <FormControl>
            <FormControl.Label>Username</FormControl.Label>
            <Input
              onChangeText={(value) => setData({ ...data, username: value })}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              onChangeText={(value) => setData({ ...data, password: value })}
              type={show ? "text" : "password"}
              InputRightElement={
                <Pressable onPress={() => setShow(!show)}>
                  <Ionicons
                    name={show ? "eye" : "eye-off"}
                    style={{ marginRight: 8 }}
                    size={20}
                  />
                </Pressable>
              }
            />
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "indigo.500",
              }}
              alignSelf="flex-end"
              mt="1"
            >
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={onSubmit}>
            Sign in
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}
