import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

const Dashboard = () => {
    return (
        <SafeAreaView forceInset={true}>
            <Text>Dash</Text>
            <Text>
                You Chose:{"\n"}Wine:
                {"\n"}Pax:
                {"\n"}Cheese:
            </Text>
        </SafeAreaView>
    );
};

export default Dashboard;

const styles = StyleSheet.create({});
