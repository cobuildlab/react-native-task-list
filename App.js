import React from 'react';
import {
    createSwitchNavigator,
} from 'react-navigation';
import {
    createAppContainer
} from 'react-navigation';
import {FlatList, StyleSheet, Text, View, TextInput, Button} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});


class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            tasks: []
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.tasks.map(item => {
                        return {key: item}
                    })}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
                <TextInput
                    style={{height: 40}}
                    placeholder="Add a new Task"
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <Button
                    onPress={() => {
                        const newTasks = this.state.tasks;
                        newTasks.push(this.state.text);
                        this.setState({tasks: newTasks, text: ''})
                    }}
                    title="Add Task"
                    color="#841584"
                />
            </View>
        );
    }
}

const SwitchNavigator = createSwitchNavigator(
    {
        'TaskList': TaskList,
    },
    {
        initialRouteName: 'TaskList',
    },
);

const App = createAppContainer(SwitchNavigator);

export default App;