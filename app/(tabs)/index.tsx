import { Collapsible } from "@/components/Collapsible";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";


export default function YourDate() {

  const [numString, setNumString] = useState("");
  const [sumStr, setSumStr] = useState("");

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
    let day = parseInt(numString.slice(0, 2));
    let month = parseInt(numString.slice(2, 4));
    let year = parseInt(numString.slice(4, 6));

    // return empty
    if (numString === "") {
      return false;
    }
    
    let quared = (day * day) + (month * month);
    return quared === year * year;
  }

  // Perfect Power
  const isPerPower = () => {
    let num = parseInt(numString);

    // return empty
    if (numString === "") {
      return false;
    }
    
    let squared = Math.sqrt(num);
    let cubed = Math.cbrt(num);
    if(Number.isInteger(squared)) {
      return true;
    }
    else if(Number.isInteger(cubed)) {
      return true;
    }
    else {
      return false;
    }
  }

  const isArmstrong = () => {
    let lastNum = 0;
    for(let i = 0; i < numString.length; i++) {
      lastNum += parseInt(numString[i]) ** numString.length;
    }

    // return empty
    if (numString === "") {
      return false;
    }

    return lastNum === parseInt(numString);
  }

  const isEquation = () => {
    let day = parseInt(numString.slice(0, 2));
    let month = parseInt(numString.slice(2, 4));
    let year = parseInt(numString.slice(4, 6));

    // return empty
    if (numString === "") {
      return false;
    }

    if(day + month === year) {
      setSumStr("plus");
      return true;
    }
    else if (day - month === year ) {
      setSumStr("minus");
      return true;
    }
    else if (day * month == year) {
      setSumStr("multiplied by")
      return true;
    }
    else if (day / month == year) {
      setSumStr("divided by")
      return true;
    }
    else if (day ** month === year) {
      setSumStr("to the power of");
      return true
    }
    else {
      return false;
    }
  }

  return (
    <View>
      <SafeAreaView>
        <View>

        <Text>This is the day/month/year</Text>
          <TextInput
          value={numString}
          onChangeText={setNumString}
          ></TextInput>
        </View>
      </SafeAreaView>


      {/* Input the Date */}
      {/* Submit Button */}

      {/* Conditional */}

      <ThemedText>This date is special because it is...</ThemedText>
      {/* Prime */}
      <Collapsible title="Prime">
        <ThemedText>This Number is only divisible by itself!</ThemedText>
      </Collapsible>
      {/* Palindrome */}
      {isPalindrome() && (
        <Collapsible title="Palindrome">
          <ThemedText>This number is the same backwards and forwards!</ThemedText>
          <ThemedText>Ex. 022220 is the same!</ThemedText>
        </Collapsible>
      )}
      {/* Pythagorean*/}
      {isPyth() && (
        <Collapsible title="Pythagorean">
          <ThemedText>This number is the day squared times itself and the month times itself equals the year </ThemedText>
          <ThemedText>July 24th, 2025 \(7 24 25) is 7^2 + 24^2 = 25^2 (^2 is squared)</ThemedText>
        </Collapsible>
      )}
      {/* Perfect Power */}
      {isPerPower() && (
        <Collapsible title="Perfect Power">
          <ThemedText>This date as a number is a perfect square or cube!</ThemedText>
          <ThemedText>Ex. 9/27/2025 is 9272025 = 3045^2</ThemedText>
        </Collapsible>
      )}
      {/* Armstrong */}
      {isArmstrong() && (
        <Collapsible title="Narcissistic / Armstrong ">
          <ThemedText>a number that is equal to the sum of its own digits, each raised to the power of the number of digits</ThemedText>
          <ThemedText>Ex. 371 = 3^3 + 7^3 + 1^3 </ThemedText>
        </Collapsible>
      )}
      {/* Equation */}
      {isEquation() && (
        <Collapsible title="Equation of Day Month = Year">
          <ThemedText>This day {sumStr} month equals the year! </ThemedText>
          <ThemedText>Ex. 7 + 7 = (20)14 (day plus month = year) </ThemedText>
        </Collapsible>
      )}

      <ThemedView>
        <ThemedText></ThemedText>

      </ThemedView>
      {/* Hex code */}
      {/* HSL code */}



    </View>
  );
}

