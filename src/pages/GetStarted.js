import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import WineChoice from "../components/WineChoice";
import PaxChoice from "../components/PaxChoice";
import CheeseChoice from "../components/CheeseChoice";

const GetStarted = ({ navigation }) => {
    const [showing, setShowing] = useState("wine");
    const [wine, setWine] = useState("");
    const [pax, setPax] = useState("");
    const [cheese, setCheese] = useState(false);

    const navToDash = () => {
        navigation.navigate("Main", { Wine: wine, Pax: pax, Cheese: cheese });
    };

    const choiceRender = () => {
        if (showing === "wine") {
            return (
                <WineChoice
                    showingSetter={() => setShowing("pax")}
                    wineSetter={(w) => setWine(w)}
                />
            );
        } else if (showing === "pax") {
            return (
                <PaxChoice
                    showingSetter={() => setShowing("cheese")}
                    paxSetter={(p) => setPax(p)}
                />
            );
        } else {
            return (
                <CheeseChoice
                    cheeseSetter={(c) => setCheese(c)}
                    navHelper={() => navToDash()}
                />
            );
        }
    };

    return (
        <SafeAreaView forceInset={true} style={styles.container}>
            {choiceRender()}
        </SafeAreaView>
    );
};

export default GetStarted;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
});
