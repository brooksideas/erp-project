import React, { useContext, useState, useEffect } from 'react';
import { ScrollView, SafeAreaView, StyleSheet, Text, AsyncStorage, RefreshControl } from 'react-native';
import Cards from '../Components/Cards';
import { cardContext } from '../Context/cardContext';
const Dashboard = () => {
    const STORAGE_KEY = '@save_cards'
    const dashboardGlobal = useContext(cardContext);
    const { state, dispatch } = dashboardGlobal;
    const [refreshing, setRefreshing] = useState(false);
    const [init, setInit] = useState(0);

    useEffect(() => {
      
            retrieveData();
        onStoreLocally();

    });

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => { setRefreshing(false) }, 2000)
    };

    const retrieveData = async () => {
        try {
            const savedCards = await AsyncStorage.getItem(STORAGE_KEY)

            if (savedCards !== null && init < 1) {
                setInit(2); // set it higher to avoid infinite re-render runs only 1 time
                const storedCards = JSON.parse(savedCards);
                dispatch({ type: 'INIT_CARD', storedCards });

            }
        } catch (e) {
            alert('Failed to load Cards.')
        }
    }

    const onStoreLocally = async () => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state))

            alert('Data successfully saved!')
        } catch (e) {
            alert('Failed to Store Cards.')
        }
    }


    return (
        <SafeAreaView>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>
                <Text style={styles.title}>OCD Dashboard</Text>
                {state && state.length > 0 ?
                    state.map(element => {
                        return (
                            <Cards problem={element.problem}
                                category={element.category}
                                count={element.count}
                                index={element.index}
                                key={Math.random()} />
                        )
                    }) : <Text>Nothing To show!</Text>
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
});


export default Dashboard;
