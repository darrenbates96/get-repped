import React, { useState, Fragment } from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ActivityIndicator,
} from "react-native";
import DashCard from "../components/DashCard";
import WeightGraph from "../components/WeightGraph";
import BottomNavigation from "../components/BottomNavigation";

const Dashboard = () => {
    // This will be set to false until data from firebase
    // has been retrieved
    const [dataLoaded, setDataLoaded] = useState(true);

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
                    <View style={styles.graphContainer}>
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
        backgroundColor: "#f8a978",
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
    graphContainer: {
        width: "100%",
        padding: "5%",
        paddingHorizontal: "5%",
        display: "flex",
        flex: 1,
        flexDirection: "column",
        backgroundColor: "white",
        zIndex: 1,
    },
});
