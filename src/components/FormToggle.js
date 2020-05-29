import React from "react";
import { StyleSheet } from "react-native";
import Login from "./Login";
import Signup from "./Signup";

const FormToggle = ({ show }) => {
    const showing = show === "login" ? <Login /> : <Signup />;
    return showing;
};

export default FormToggle;

const styles = StyleSheet.create({});
