import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    ActivityIndicator,
    Text,
    SafeAreaView,
    TouchableOpacity,
    View,
    Platform,
    StatusBar,
} from "react-native";
import { useSpring, animated, config } from "react-spring/native";
import * as Font from "expo-font";
import { EvilIcons } from "@expo/vector-icons";

// Create animated component on which
// to apply spring
const AnimatedView = animated(View);

const Welcome = ({ navigation }) => {
    // State to load in font
    const [fontLoading, setFontLoading] = useState(true);
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

    // ComponentDidMount
    useEffect(() => {
        // Function to load the custom Font
        const loadFont = async () => {
            await Font.loadAsync({
                Montserrat: require("../../assets/fonts/Montserrat-Regular.ttf"),
                MontserratMedium: require("../../assets/fonts/Montserrat-Medium.ttf"),
            });
            setFontLoading(false);
        };
        loadFont();
    }, []);

    if (fontLoading) {
        // Probably will get rid of this, a bit ugly
        // I'll most likely ust show an empty view coloured
        // similarly to what the first splash will be
        return <ActivityIndicator size='large' />;
    } else {
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
                    <Text style={styles.header_text}>Welcome</Text>
                    <View style={styles.header_underline} />
                    <View style={styles.description_container}>
                        <Text style={styles.description_text}>
                            With Taste, you can bask in the joys of wine tasting
                            in your very own home.
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            setSpringToggle(false);
                            setTimeout(() => {
                                navigation.navigate("howitworks");
                            }, 300);
                        }}
                        style={styles.icon}
                    >
                        <EvilIcons
                            name='arrow-right'
                            size={70}
                            color='#eb89b5'
                        />
                    </TouchableOpacity>
                </AnimatedView>
            </SafeAreaView>
        );
    }
};

export default Welcome;

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        paddingBottom: Platform.OS === "android" ? 25 : 0,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ffd7e9",
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
        color: "#eb89b5",
    },
    header_underline: {
        width: "25%",
        borderBottomWidth: 4,
        borderBottomColor: "#fff8d2",
        alignSelf: "flex-start",
        marginBottom: 10,
    },
    description_container: {
        width: "100%",
        padding: 20,
        borderRadius: 15,
        backgroundColor: "#eb89b5",
        shadowColor: "#fff8d2",
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
        elevation: Platform.OS === "android" ? 3 : 0,
    },
    description_text: {
        fontFamily: "MontserratMedium",
        fontSize: 17,
        color: "#fffbf3",
    },
    icon: {
        alignSelf: "flex-end",
    },
});
