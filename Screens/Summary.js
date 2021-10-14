import React, { useContext, useState, useEffect } from 'react';
import { ScrollView, SafeAreaView, StyleSheet, Text, View, RefreshControl } from 'react-native';
import { cardContext } from '../Context/cardContext';

const Summary = () => {

    const dashboardGlobal = useContext(cardContext);
    const { state } = dashboardGlobal;
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => { setRefreshing(false) }, 2000)
    };


    return (
        <SafeAreaView>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>
                <Text style={styles.title}>OCD Summary</Text>

                {state && state.length > 0 ?
                    state.map(element => {
                        return (
                            <View style={{ flexDirection: "row" }}>
                                <ScrollView>
                                    <View style={styles.summaryView} key={element.index}>
                                        <Text selectable key={element.index} >
                                            *****************************************{"\n"}
                                OCD#: {element.index + 1} {"\n"}
                                Problem: {element.problem} {"\n"}
                                Category: {element.category} {"\n"}
                                #ofTimes: {element.count} {"\n"}
                                *****************************************{"\n"}
                                        </Text>
                                    </View>
                                </ScrollView>
                            </View>
                        )
                    }) : <Text>Nothing To Summarize!</Text>
                }


            </ScrollView>

        </SafeAreaView>
    );
}

var styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        fontSize: 30,
        paddingLeft: 90
    },
    scrollView: {
        backgroundColor: "#f2f2f2",
    },
    summaryView: {
        height: 200,
        width: 300,
        margin: 20,
        borderColor: 'black',
        borderWidth: 1
    }
});


export default Summary;
