import { Collapsible } from "@/components/Collapsible";
import { ThemedText } from "@/components/ThemedText";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";


export default function YourDate() {

  const [numString, setNumString] = useState("");
  const [date, setDate] = useState(new Date());

  // Palindrome
  const isPalindrome = () => {
    //remove leading spaces
    const numClean = numString.trim();
    // return empty
    if (numClean === "") {
      return false;
    }
    // reversing the string
    const reverse = numClean.split('').reverse().join("");
    // returning a booleon
    return reverse === numString;
  }

  // Pythagorean day^2 + month^2 = year^2

  const isPyth = () => {
    let numPal = parseFloat(numString)
    // return empty
    if (isNaN(numPal) === true) {
      return false;
    }
    // reversing the string
    
  

  }

  return (
    <View
    >
      <SafeAreaView>
        <View>
          <DateTimePicker
          display="default"
          value={date}
          ></DateTimePicker>
          <Text></Text>
          <TextInput
          value={numString}
          onChangeText={setNumString}
          
          ></TextInput>
        </View>
      </SafeAreaView>


      {/* Input the Date */}
      {/* Submit Button */}

      {/* Conditional */}
      {/* Prime */}
      <Collapsible title="Prime">
        <ThemedText>This Number is only divisible by itself!</ThemedText>
      </Collapsible>
      {/* Palindrome */}
      {isPalindrome() && (
        <Collapsible title="Palindrome">
          <ThemedText>This number is the same backwards and forwards!</ThemedText>
        </Collapsible>
      )}
      {/* Pythagorean*/}
      {isPyth() && (
        <Collapsible title="Pythagorean">
          <ThemedText>This number is the day squared times itself and the month times itself equals the year </ThemedText>
        </Collapsible>
      )}
      {/* Perfect Power */}
      {/* Armstrong */}
      {/* Equation */}

      {/* Hex code */}
      {/* HSL code */}




      <Text>Day Goes Here</Text>
      <TextInput></TextInput>

    </View>
  );
}

