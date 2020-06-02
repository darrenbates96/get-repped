import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import WineChoice from "../components/WineChoice";
import PaxChoice from "../components/PaxChoice";
import CheeseChoice from "../components/CheeseChoice";

const GetStarted = () => {
    const [showing, setShowing] = useState("wine");
    const [wine, setWine] = useState("");
    const [pax, setPax] = useState("");
    const [cheese, setCheese] = useState(false);

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
            return <CheeseChoice cheesSetter={(c) => setCheese(c)} />;
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
