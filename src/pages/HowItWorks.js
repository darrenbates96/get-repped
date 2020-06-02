import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    SafeAreaView,
    TouchableOpacity,
    View,
    Platform,
    StatusBar,
} from "react-native";
import { useSpring, animated, config } from "react-spring/native";
import { EvilIcons } from "@expo/vector-icons";

// Create animated component on which
// to apply spring
const AnimatedView = animated(View);

const HowItWorks = ({ navigation }) => {
    // State to help react-spring
    const [springToggle, setSpringToggle] = useState(true);

    // Spring props
    const s_from = springToggle
        ? { height: "20%", opacity: 0 }
        : { height: "40%", opacity: 1 };
    const s_to = springToggle
        ? { height: "40%", opacity: 1 }
        : { height: "20%", opacity: 0 };
    const springTextContainer = useSpring({
        config: config.default,
        from: s_from,
        to: s_to,
    });

    return (
        <SafeAreaView forceInset={true} style={styles.container}>
            <View style={styles.animation_container}>
                <Text>ANIMATION HERE</Text>
            </View>
            <AnimatedView
                style={{
                    ...springTextContainer,
                    ...styles.text_container,
                }}
            >
                <Text style={styles.header_text}>How it Works</Text>
                <View style={styles.header_underline} />
                <View style={styles.description_container}>
                    <Text style={styles.description_text}>
                        Pick a tasting, tell us how many of you there are, and
                        we'll be on our way to yuo soonest!{"\n"}PS: How about
                        some cheese?
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        setSpringToggle(false);
                        setTimeout(() => {
                            navigation.navigate("getstarted");
                        }, 300);
                    }}
                    style={styles.icon}
                >
                    <EvilIcons name='arrow-right' size={70} color='#ff9776' />
                </TouchableOpacity>
            </AnimatedView>
        </SafeAreaView>
    );
};

export default HowItWorks;

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ffd5be",
    },
    animation_container: {
        width: "100%",
        height: "60%",
        backgroundColor: "transparent",
    },
    text_container: {
        width: "80%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
    },
    header_text: {
        alignSelf: "flex-start",
        fontFamily: "MontserratMedium",
        fontSize: 35,
        color: "#ff9776",
    },
    header_underline: {
        width: "25%",
        borderBottomWidth: 4,
        borderBottomColor: "#ffedff",
        alignSelf: "flex-start",
        marginBottom: 10,
    },
    description_container: {
        width: "100%",
        padding: 20,
        borderRadius: 15,
        backgroundColor: "#ff9776",
        shadowColor: "#ffedff",
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
        elevation: Platform.OS === "android" ? 3 : 0,
    },
    description_text: {
        fontFamily: "MontserratMedium",
        fontSize: 17,
        color: "white",
    },
    icon: {
        alignSelf: "flex-end",
    },
});
