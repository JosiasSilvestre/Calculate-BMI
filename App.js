import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {height:0, mass:0, result:0, resultText:''}
    this.calculate = this.calculate.bind(this)
  }

  // Creating bmi calculation function
  calculate(){
    let bmi = this.state.mass/ (this.state.height * this.state.height)
    this.state.result = bmi

    // Defining the text according to the result of the calculation
    if(this.state.result < 18.5) {
      this.state.resultText = 'Underweight'

    } else if(this.state.result < 24.9) {
      this.state.resultText = 'Normal weight'

    } else if(this.state.result < 29.9) {
      this.state.resultText = 'Overweight'

    } else {
      this.state.resultText = 'Obese'
    }

    this.setState(this.state)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputs}> 
          <TextInput placeholder='Mass' keyboardType='numeric' style={styles.input} onChangeText={(mass)=>{this.setState({mass})}} />
          <TextInput placeholder='Height' keyboardType='numeric' style={styles.input} onChangeText={(height)=>{this.setState({height})}} />
        </View>
        <TouchableOpacity style={styles.button} onPress={this.calculate}><Text style={styles.buttonText}>Calculate</Text></TouchableOpacity>
        <Text style={styles.result}>{this.state.result.toFixed(2)}</Text>
        <Text style={[styles.result, {fontSize: 35}]}>{this.state.resultText}</Text>
      </View>
    );
  }
}

// Stylization
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  inputs: {
    flexDirection: 'row',
  },
  input: {
    height: 80,
    textAlign: 'center',
    width: '50%',
    fontSize: 50,
    marginTop: 24,
    color: 'gray'
  },
  button: {
    backgroundColor: '#89ffa5'
  },
  buttonText: {
    alignSelf: 'center',
    padding: 30,
    fontSize: 25,
    color: '#6dc4a4',
    fontWeight: 'bold'
  },
  result: {
    alignSelf: 'center',
    color: 'lightgray',
    fontSize: 65,
    padding: 15
  }
});
