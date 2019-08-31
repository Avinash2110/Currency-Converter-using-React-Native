import React from "React";
import {Text, View, SafeAreaView, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, TextInput, Alert, Keyboard} from "react-native";

const currencyPerRupee = {
  DOLLAR: 0.014,
  CANDOLLAR: 0.019,
  YUAN: 0.100,
  YEN: 1.48,
  PESO: 0.73,
  DINAR: 0.0053,
  TAKA: 1.18,
  BITCOIN: 0.0000015,
  EURO: 0.013

};

export default  class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      inputValue: "",
      resultValue: "0.0",
    }
  }

  buttonPressed = currency => {
    if(this.state.inputValue === "")
      Alert.alert("Enter some value");
    
    let result= parseFloat(this.state.inputValue) * currencyPerRupee[currency];
    this.setState({resultValue: result.toFixed(7)});
  }

  render(){
    return(
      <TouchableWithoutFeedback onPress ={Keyboard.dismiss}>
      <SafeAreaView style= {styles.container}>
        <View style= {styles.screenViewer}>
          <View style= {styles.resultContainer}>
            <Text style= {styles.resultText}>
               {this.state.resultValue}
            </Text>
          </View>
          <View style= {styles.inputContainer}> 
            <TextInput
              style= {styles.inputText}
              selectionColor= "#fff"
              placeholder= "Enter Value"
              keyboardType= "numeric"
              value= {this.state.inputValue}
              onChangeText= {inputValue => this.setState({inputValue})}
            />
          </View>
          <View style= {styles.gridContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress= {() => this.buttonPressed("DOLLAR")}
            >
              <Text style= {styles.buttonText}>
                DOLLAR
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress= {() => this.buttonPressed("CANDOLLAR")}
            >
              <Text style= {styles.buttonText}>
                CANDOLLAR
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress= {() => this.buttonPressed("YUAN")}
            >
              <Text style= {styles.buttonText}>
                YUAN
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress= {() => this.buttonPressed("YEN")}
            >
              <Text style= {styles.buttonText}>
                YEN
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress= {() => this.buttonPressed("PESO")}
            >
              <Text style= {styles.buttonText}>
                PESO
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress= {() => this.buttonPressed("DINAR")}
            >
              <Text style= {styles.buttonText}>
                DINAR
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress= {() => this.buttonPressed("TAKA")}
            >
              <Text style= {styles.buttonText}>
                TAKA
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress= {() => this.buttonPressed("BITCOIN")}
            >
              <Text style= {styles.buttonText}>
                BITCOIN
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress= {() => this.buttonPressed("EURO")}
            >
              <Text style= {styles.buttonText}>
                EURO
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2ecc72",
    

  },

  screenViewer: {
    flex: 1,
    marginTop: 10,
  },

  resultContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 80,
    marginTop: 50,
    borderWidth: 2,
    backgroundColor: "#fff",

  },

  resultText: {
    fontWeight: "bold",
    fontSize: 25,
  },

  inputContainer: {
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 80,
    borderWidth: 2,
    backgroundColor: "#fff",
  },

  inputText: {
    fontWeight: "bold",
    fontSize: 20,

  },

  gridContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 40,
    
  },

  button: {
    width: "33.3%",
    height: 80,
    alignItems: "center",
    justifyContent: 'center',
    borderWidth: 2,
    backgroundColor: "#74B9FF",

  },

  buttonText: {
    fontWeight: "bold",
    fontSize: 15,
  }
})
