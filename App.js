import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, StyleSheet, TextInput } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
    state = {
        bal: 1.00,
        newBal:0,
        inputValue: 'Input Text!'
    }
    usdToEuro = () => {
        this.setState({
            newBal: this.state.inputValue * 0.85,
        })
    }
    usdToPound = () => {
        this.setState({
            newBal: this.state.inputValue * 0.75,
        })
    }
    usdToRupee = () => {
        this.setState({
            newBal: this.state.inputValue * 67.60,
        })
    }
    usdToAussie = () => {
        this.setState({
            newBal: this.state.inputValue * 1.32,
        })
    }
    usdToCan = () => {
        this.setState({
            newBal: this.state.inputValue * 1.30,
        })
    }
    usdToFranc = () => {
        this.setState({
            newBal: this.state.inputValue * 0.99,
        })
    }
    usdToYuan = () => {
        this.setState({
            newBal: this.state.inputValue * 6.40,
        })
    }
    usdToYen = () => {
        this.setState({
            newBal: this.state.inputValue * 110.67,
        })
    }

    _handleTextChange = inputValue => {
        this.setState({ inputValue });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                    Currency Converter App
                </Text>
                
                <TextInput
                    value={this.state.inputValue}
                    onChangeText={this._handleTextChange}
                    style={{ width: 200, height: 44, padding: 8, borderColor: 'darkblue', borderWidth: 1, marginTop: 10, color: 'dodgerblue'}}
                />
                <View style={styles.row}>
                
                
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.usdToEuro}
                >
                    <Text style={styles.buttonText}>
                        USD to Euro
                    </Text>
                </TouchableHighlight>
                
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.usdToPound}
                >
                    <Text style={styles.buttonText}>
                        USD to Pound
                    </Text>
                </TouchableHighlight>
                </View>
                <View style={styles.row}>
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.usdToRupee}
                >
                    <Text style={styles.buttonText}>
                        USD to Rupee
                    </Text>
                </TouchableHighlight>
                
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.usdToAussie}
                >
                    <Text style={styles.buttonText}>
                        USD to Aussie
                    </Text>
                </TouchableHighlight>
                </View>
                <View style={styles.row}>
                <TouchableHighlight
                style={styles.button}
                onPress = {this.usdToCan}
                >
                    <Text style={styles.buttonText}>
                        USD to Can
                
                    </Text>
                </TouchableHighlight>
                
                <TouchableHighlight
                style={styles.button}
                onPress = {this.usdToFranc}
                >
                    <Text style={styles.buttonText}>
                        USD to Franc
                
                    </Text>
                </TouchableHighlight>
                </View>
                <View style={styles.row}>
                <TouchableHighlight
                style={styles.button}
                onPress = {this.usdToYuan}
                >
                    <Text style={styles.buttonText}>
                        USD to Yuan
                
                    </Text>
                </TouchableHighlight>
                
                <TouchableHighlight
                style={styles.button}
                onPress = {this.usdToYen}
                >
                    <Text style={styles.buttonText}>
                        USD to Yen
                
                    </Text>
                </TouchableHighlight>
                </View>
                
                <Text style={styles.paragraph}>
                    Initial Dollar Amount: {this.state.bal.toFixed(2)}
                </Text>
                
                <Text style={styles.paragraph}>
                    Converted Value: {this.state.newBal.toFixed(2)}
                </Text>
                
            </View>
      );
   }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    button: {
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 100,
        borderColor: 'black',
        borderWidth: 1,
        marginHorizontal: 5,
        backgroundColor: 'darkblue',
        color: 'dodgerblue',
    },
    row: {
        flexDirection: 'row',
        marginTop: 15,
        
    },
    paragraph: {
        fontSize: 16,
        color: 'red', 
    },
});