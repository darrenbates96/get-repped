import React from "react";
import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    TouchableOpacity,
    Slider,
} from "react-native";

const GetStarted = () => {
    return (
        <SafeAreaView forceInset={true} style={styles.container}>
            <Text style={styles.header}>Lets Get Started!</Text>
            <View style={styles.choice_container}>
                <Text style={styles.choice_text}>
                    What are you in the mood for?
                </Text>
                <TouchableOpacity style={styles.wine_choice}>
                    <Text style={styles.wine_choice_text}>Red</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.wine_choice}>
                    <Text style={styles.wine_choice_text}>White</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.wine_choice}>
                    <Text style={styles.wine_choice_text}>
                        A Little Bit of Both
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.choice_container}>
                <Text style={styles.choice_text}>
                    How big is the wolf pack today?
                </Text>
                <Slider
                    style={styles.pax_slider}
                    step={1}
                    minimumValue={2}
                    maximumValue={8}
                    minimumTrackTintColor='black'
                    maximumTrackTintColor='grey'
                />
            </View>
            <View style={styles.choice_container}>
                <Text style={styles.choice_text}>
                    Want to pair those wines with some cheese?
                </Text>
                <View style={styles.cheese_toggle_container}>
                    <TouchableOpacity style={styles.cheese_choice}>
                        <Text style={styles.cheese_choice_text}>
                            Heck yeah!
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cheese_choice}>
                        <Text style={styles.cheese_choice_text}>
                            No Thanks...
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
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
        justifyContent: "space-between",
        alignItems: "center",
    },
    header: {
        fontFamily: "MontserratMedium",
        fontSize: 35,
        marginTop: 30,
    },
    choice_container: {
        width: "90%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    },
    choice_text: {
        fontFamily: "Montserrat",
        fontSize: 17,
        marginBottom: 15,
    },
    wine_choice: {
        width: "100%",
        height: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 15,
    },
    wine_choice_text: {
        fontFamily: "MontserratMedium",
        fontSize: 25,
    },
    pax_slider: {
        width: "100%",
        color: "black",
    },
    cheese_toggle_container: {
        width: "100%",
        height: 100,
        display: "flex",
        flexDirection: "row",
    },
    cheese_choice: {
        width: "50%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 15,
    },
    cheese_choice_text: {
        fontFamily: "MontserratMedium",
        fontSize: 20,
    },
});
