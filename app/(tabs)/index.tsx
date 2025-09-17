import { Collapsible } from "@/components/Collapsible";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";


// This is the function we're returning

export default function YourDate() {

  // constants we're using in the app
  const [numString, setNumString] = useState("");
  const [submitted, setSubmit] = useState(false);
  const [sumStr, setSumStr] = useState("");
  const [colored, setColor] = useState("");
  const [colored2, setColor2] = useState("");
  const [coloredH, setColorH] = useState("");
  const [coloredH2, setColorH2] = useState("");

  //Submitted
  const isSubmitted = () => {
    setSubmit(true)
    isPrime();
    isPalindrome();
    isArmstrong();
    isEquation();
    isPyth();
    isPerPower();
  }

  // Checking the numbers function

  // Prime
  const isPrime = () => {
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

    //remove leading spaces
    const numClean = numString.trim();
    // return empty
    if (numClean === "") {
      return false;
    }
    // return empty
    let day = parseInt(numClean.slice(0, 2));
    let month = parseInt(numClean.slice(2, 4));
    let year = parseInt(numClean.slice(4, 6));
    
    let quared = (day * day) + (month * month);
    return quared === year * year;
  }

  // Perfect Power
  const isPerPower = () => {
    //remove leading spaces
    const numClean = numString.trim();
    // return empty
    if (numClean === "") {
      return false;
    }

    let num = parseInt(numClean);
    
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
    const numClean = numString.trim();
    if (numClean === "") {
      return false;
    }
    // Squaring it
    let lastNum = 0;
    for(let i = 0; i < numClean.length; i++) {
      lastNum += parseInt(numClean[i]) ** numClean.length;
    }
    return lastNum === parseInt(numClean);
  }

  const isEquation = () => {
    const numClean = numString.trim();
    // return empty
    if (numClean === "") {
      return false;
    }
    let day = parseInt(numClean.slice(0, 2));
    let month = parseInt(numClean.slice(2, 4));
    let year = parseInt(numClean.slice(4, ));

    if(day + month === year) {
      setSumStr("plus");
      return true;
    }
    else if (day - month === year ) {
      setSumStr("minus");
      return true;
    }
    else if (day * month === year) {
      setSumStr("multiplied by")
      return true;
    }
    else if (day / month === year) {
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

  // Getting the colors!

  const runColor = () => {
    const numClean = numString.trim();
    // return empty
    if (numClean === "") {
      return false;
    }

    let day = numClean.slice(0, 2);
    let month = numClean.slice(2, 4);
    let year = numClean.slice(-2, );

    setColor("#" + day + month + year)
    setColor2("#" + month + day + year)
    setColorH("hsl(" + day + ","+ month + "%,"+ year + "%)")
    setColorH2("hsl(" + day + ","+ month + "%,"+ year + "%)")
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
      {isPrime() && (
        <Collapsible title="Prime">
          <ThemedText>This Number is only divisible by itself!</ThemedText>
          <ThemedText>Ex. 3, 13, 53</ThemedText>
        </Collapsible>
      )}
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


      {/* Hex code */}
      <ThemedView>
        <ThemedText>Here are your colors for the date!</ThemedText>
        <View>
          <ThemedText>Hex Colors!</ThemedText>
          <View>
            <ThemedText>Day, Month, Year Hex Code</ThemedText>
            <View style={{backgroundColor: colored, width: 50, height: 50}}></View>
          </View>
          <View>
            <ThemedText>Month, Day, Year Hex Code</ThemedText>
            <View style={{backgroundColor: colored2, width: 50, height: 50}}></View>
          </View>
        </View>

        <View>
          <ThemedText>HSL Colors!</ThemedText>
          <View>
            <ThemedText>Day, Month, Year HSL Code</ThemedText>
            <View style={{backgroundColor: coloredH, width: 50, height: 50}}></View>
          </View>
          <View>
            <ThemedText>Month, Day, Year HSL Code</ThemedText>
            <View style={{backgroundColor: coloredH2, width: 50, height: 50}}></View>
          </View>
        </View>
        

      </ThemedView>
      
      {/* HSL code */}



    </View>
  );
}

