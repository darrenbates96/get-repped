import React, { useContext } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import choiceContext from "../context/choice/choiceContext";

const Dashboard = () => {
    const ChoiceContext = useContext(choiceContext);
    const { wine, pax, cheese } = ChoiceContext;
    return (
        <SafeAreaView forceInset={true}>
            <Text>Dash</Text>
            <Text>
                You Chose:{"\n"}Wine: {wine}
                {"\n"}Pax: {pax}
                {"\n"}Cheese: {cheese}
            </Text>
        </SafeAreaView>
    );
};

export default Dashboard;

const styles = StyleSheet.create({});
