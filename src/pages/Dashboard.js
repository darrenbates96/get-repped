import React, { useState, Fragment } from "react";
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    TouchableOpacity,
} from "react-native";
import { useSpring, animated, config } from "react-spring/native";
import WeightGraph from "../components/WeightGraph";
import { EvilIcons } from "@expo/vector-icons";

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
                    <View style={styles.dietMaintenanceContainer}>
                        <Text style={styles.dietHeader}>Maintenance</Text>
                        <Text style={styles.dietMaintenance}>2300</Text>
                        <Text style={styles.dietMaintenancePost}>kcals</Text>
                    </View>
                    <View style={styles.cardsContainer}>
                        <View style={styles.calorieGoal}>
                            <Text style={styles.calorieText}>2000</Text>
                            <Text style={styles.calorieSubText}>your goal</Text>
                        </View>
                        <View style={styles.calorieCurrent}>
                            <Text style={styles.calorieText}>835</Text>
                            <Text style={styles.calorieSubText}>
                                you've consumed
                            </Text>
                        </View>
                    </View>
                    <View style={styles.contentRestContainer}>
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
                        <WeightGraph />
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

    return <View style={styles.dashContainer}>{renderContent()}</View>;
};

export default Dashboard;

const styles = StyleSheet.create({
    dashContainer: {
        width: "100%",
        flex: 1,
        display: "flex",
        flexDirection: "column",
    },
    dietMaintenanceContainer: {
        width: "100%",
        marginTop: 20,
        paddingLeft: "10%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    dietHeader: {
        fontSize: 10,
        fontFamily: "Montserrat",
        color: "black",
        alignSelf: "flex-start",
        paddingTop: 20,
        paddingRight: 10,
    },
    dietMaintenancePost: {
        fontSize: 10,
        fontFamily: "Montserrat",
        color: "black",
        alignSelf: "flex-end",
        paddingBottom: 20,
    },
    dietMaintenance: {
        fontSize: 80,
        fontFamily: "Montserrat",
        color: "black",
    },
    cardsContainer: {
        width: "90%",
        height: 160,
        marginLeft: "10%",
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
    },
    calorieGoal: {
        width: "55%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
        backgroundColor: "#eb5a00",
    },
    calorieCurrent: {
        width: "45%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eb5a00",
    },
    calorieText: {
        fontSize: 55,
        fontFamily: "Montserrat",
        textAlign: "center",
        color: "white",
    },
    calorieSubText: {
        fontSize: 10,
        fontFamily: "Montserrat",
        color: "white",
    },
    contentRestContainer: {
        width: "100%",
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
