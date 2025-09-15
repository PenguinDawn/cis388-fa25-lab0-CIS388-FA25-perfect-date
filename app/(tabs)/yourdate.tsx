import { Collapsible } from "@/components/Collapsible";
import { ThemedText } from "@/components/ThemedText";
import { useState } from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";


export default function YourDate() {

  const [numString, setNumString] = useState("");

  const isPalindrome = () => {

    //remove leading spaces
    const numClean = numString.trim();

    // return empty
    if (numClean === "") {
      return false;
    }

    const reverse = numClean.split('').reverse().join("");
    
    return reverse === numString;
  }

  return (
    <ScrollView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SafeAreaView>
        <View>
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
        <ThemedText></ThemedText>
      </Collapsible>
      {/* Palindrome */}

      {isPalindrome() && (
        <Collapsible title="Palindrome">
          <ThemedText></ThemedText>
        </Collapsible>
      )}
      
      {/* Patagorium */}
      {/* Perfect Power */}
      {/* Armstrong */}
      {/* Equation */}

      {/* Hex code */}
      {/* HSL code */}




      <Text>Day Goes Here</Text>
      <TextInput></TextInput>

    </ScrollView>
  );
}

