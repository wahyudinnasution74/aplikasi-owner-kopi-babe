import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userReducer";
export default function Logout() {
  const dispatch = useDispatch();

  const onSubmit = async () => {
    dispatch(logout());
  };

  useEffect(() => {
    onSubmit();
  }, []);
}
