import React, { useState, Fragment } from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ActivityIndicator,
    TouchableOpacity,
} from "react-native";
import { useSpring, animated, config } from "react-spring/native";
import DashCard from "../components/DashCard";
import WeightGraph from "../components/WeightGraph";
import { EvilIcons } from "@expo/vector-icons";
import BottomNavigation from "../components/BottomNavigation";

const AnimatedView = animated(View);

const Dashboard = () => {
    // This will be set to false until data from firebase
    // has been retrieved
    const [dataLoaded, setDataLoaded] = useState(true);

    // Spring props
    const springSplit = useSpring({
        config: config.slow,
        from: { opacity: 0 },
        to: { opacity: 1, flex: 1 },
    });

    // Content rendering helper. To decide whether or
    // not to show the activity indicator based on the
    // value of dataLoaded state
    const renderContent = () => {
        if (dataLoaded) {
            return (
                <Fragment>
                    <View style={styles.topPanelContainer}>
                        <Text style={styles.panelHeader}>Your Dash,</Text>
                    </View>
                    <View style={styles.cardsContainer}>
                        <DashCard
                            size='small'
                            title='Daily Calorie Goal:'
                            info={2000}
                            negativeMargin={true}
                        />
                        <DashCard
                            size='small'
                            title="You've Consumed:"
                            info={570}
                            negativeMargin={true}
                        />
                    </View>
                    <View style={styles.contentRestContainer}>
                        <WeightGraph />
                        <AnimatedView
                            style={{
                                ...springSplit,
                                ...styles.splitContainer,
                            }}
                        >
                            <Text style={styles.splitHeader}>
                                Training Preview:
                            </Text>
                            <View style={styles.underline} />
                            <TouchableOpacity
                                style={styles.splitsContentContainer}
                            >
                                <View style={styles.splitBlock}>
                                    <Text style={styles.todaySplit}>
                                        Chest{"\n"}+{"\n"}Legs
                                    </Text>
                                </View>
                                <View style={styles.splitBlock}>
                                    <Text style={styles.tomorrowSplit}>
                                        Back{"\n"}+{"\n"}Biceps
                                    </Text>
                                </View>
                                <View style={styles.splitBlock}>
                                    <EvilIcons
                                        name='arrow-right'
                                        size={40}
                                        color='grey'
                                    />
                                </View>
                            </TouchableOpacity>
                        </AnimatedView>
                    </View>
                </Fragment>
            );
        } else {
            return (
                <View
                    style={{
                        width: "100%",
                        display: "flex",
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <ActivityIndicator color='white' size='large' />
                </View>
            );
        }
    };

    return (
        <SafeAreaView forceInset={true} style={styles.dashContainer}>
            {renderContent()}
            <BottomNavigation />
        </SafeAreaView>
    );
};

export default Dashboard;

const styles = StyleSheet.create({
    dashContainer: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "black",
    },
    topPanelContainer: {
        width: "100%",
        height: 200,
        paddingHorizontal: 30,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
    },
    panelHeader: {
        fontSize: 30,
        fontFamily: "MontserratMedium",
        letterSpacing: 2,
        color: "white",
        marginTop: 40,
    },
    cardsContainer: {
        width: "100%",
        paddingHorizontal: "5%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        zIndex: 2,
    },
    contentRestContainer: {
        width: "100%",
        paddingHorizontal: "5%",
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "white",
        zIndex: 1,
    },
    splitContainer: {
        width: "100%",
        marginVertical: 20,
        padding: 20,
        display: "flex",
        flexDirection: "column",
        borderRadius: 20,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    splitHeader: {
        fontSize: 14,
        fontFamily: "Montserrat",
        color: "#4a4a4a",
        marginBottom: 5,
    },
    underline: {
        width: 65,
        height: 1,
        backgroundColor: "#eb5a00",
        marginBottom: 10,
    },
    splitsContentContainer: {
        width: "100%",
        display: "flex",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    splitBlock: {
        width: "30%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    todaySplit: {
        fontSize: 24,
        fontFamily: "MontserratMedium",
        color: "#4a4a4a",
        textAlign: "center",
    },
    tomorrowSplit: {
        fontSize: 14,
        fontFamily: "MontserratMedium",
        color: "#4a4a4a",
        textAlign: "center",
    },
});
