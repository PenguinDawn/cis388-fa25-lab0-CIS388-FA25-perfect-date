import { Collapsible } from "@/components/Collapsible";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import { Button, SafeAreaView, Text, TextInput, View } from "react-native";


// This is the function we're returning

export default function YourDate() {

  // constants we're using in the app
  const [valid, setValid] = useState(true);
  const [next, setNext] = useState("");


  // sets our input
  const [numString, setNumString] = useState("");
  const [dayStr, setDayStr] = useState("");
  const [monthStr, setMonthStr] = useState("");
  const [yearStr, setYearStr] = useState("");

  // sets our colors (DDMMYY)
  const [colored, setColor] = useState("#ffffff");
  const [colored2, setColor2] = useState("#ffffff");
  const [coloredH, setColorH] = useState("");
  const [coloredH2, setColorH2] = useState("");

  // for the conditional renderings
  const [primed, setPrime] = useState(false);
  const [pali, setPali] = useState(false);
  const [arm, setArm] = useState(false);
  const [equa, setEqua] = useState(false);
  const [sumStr, setSumStr] = useState("");
  const [pyth, setPyth] = useState(false);
  const [perPow, setPerPow] = useState(false);
  

  //Submitted
  const isSubmitted = () => {
    setDayStr(dayStr.trim());
    setMonthStr(monthStr.trim());
    setYearStr(yearStr.trim());


    if(parseInt(dayStr) < 32 && parseInt(dayStr) > 0 && Number.isInteger(parseInt(dayStr))){
      if(parseInt(dayStr) < 10) {
        setDayStr("0" + dayStr);
      }
      else {
        setDayStr(dayStr);
      }
    }
    else {
      setValid(false);
    }

    if(parseInt(monthStr) < 13 && parseInt(monthStr) > 0 && Number.isInteger(parseInt(monthStr))){
      if(parseInt(monthStr) < 10) {
        setMonthStr("0" + monthStr);
      }
      else {
        setMonthStr(monthStr);
      }
    }
    else {
      setValid(false);
    }

    if(parseInt(yearStr) < 2501 && parseInt(yearStr) > 0 && Number.isInteger(parseInt(yearStr))){
      if(parseInt(yearStr) < 10) {
        setYearStr("0" + yearStr);
      }
      else {
        setYearStr(yearStr);
      }
    }
    else {
      setValid(false);
    }

    if(valid) {
      setPrime(isPrime());
      setPali(isPalindrome());
      setArm(isArmstrong());
      setEqua(isEquation());
      setPyth(isPyth());
      setPerPow(isPerPower());
      runColor();
      setNext("This date is special because it is...");
    }
    else {
      setNext("Your input is not valid!")
    }
  }

  // -------------- Here are the conditions for our date --------------------


  // Prime -----------------------------------------
  const isPrime = () => {
    //remove leading spaces
    const numClean = numString.trim();
    // return empty
    if (numClean === "") {
      return false;
    }

    let nume = parseInt(numClean)
  
    for (let i = 2; i <= Math.sqrt(nume); i++) {
      if (nume % i === 0) {
        return false; // Found a divisor, not prime
      }
    }
    return true; // No divisors found, it's prime
  };

  // Palindrome -------------------------
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

  // Pythagorean day^2 + month^2 = year^2 ----------------------
  const isPyth = () => {

    //remove leading spaces
    const numClean = numString.trim();
    // return empty
    if (numClean === "") {
      return false;
    }
    // return empty
    let day;
    let month;
    let year;
    if(numClean.length === 5) {
       day = parseInt(numClean.slice(0, 1));
       month = parseInt(numClean.slice(1, 3));
       year = parseInt(numClean.slice(-2, ));
    }
    else {
       day = parseInt(numClean.slice(0, 2));
       month = parseInt(numClean.slice(2, 4));
       year = parseInt(numClean.slice(-2, ));
    }
    
    
    let quared = (day * day) + (month * month);
    return quared === year * year;
  }

  // Perfect Power --------------------------------------
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

  // Armstrong -----------------------------------------------------

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

  // equation ---------------------------------------------------

  const isEquation = () => {
    const numClean = numString.trim();
    // return empty
    if (numClean === "") {
      return false;
    }
    let day;
    let month;
    let year;
    if(numClean.length === 5) {
       day = parseInt(numClean.slice(0, 1));
       month = parseInt(numClean.slice(1, 3));
       year = parseInt(numClean.slice(-2, ));
    }
    else {
       day = parseInt(numClean.slice(0, 2));
       month = parseInt(numClean.slice(2, 4));
       year = parseInt(numClean.slice(-2, ));
    }

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

  // Getting the colors! -------------------------------------------------

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

  // and here is our actual app ------------------------------------

  return (
    <View>
      <SafeAreaView> 
        <View>
          <Text>Day</Text>
            <TextInput
            style={{borderColor: "black", borderStyle: "solid", borderWidth: 2}}
            value={dayStr}
            onChangeText={setDayStr}
            ></TextInput>
        </View>
        <View>
          <Text>Month</Text>
            <TextInput
            style={{borderColor: "black", borderStyle: "solid", borderWidth: 2}}
            value={monthStr}
            onChangeText={setMonthStr}
            ></TextInput>
        </View>
        <View>
          <Text>Year</Text>
            <TextInput
            style={{borderColor: "black", borderStyle: "solid", borderWidth: 2}}
            value={yearStr}
            onChangeText={setYearStr}
            ></TextInput>
        </View>

      </SafeAreaView>

      {/* Submit Button */}
      <Button title="Submit" onPress={isSubmitted}></Button>

      {/* Conditionals */}

      <Text>{next}</Text>
      {/* Prime */}
      {primed && (
        <Collapsible title="Prime">
          <ThemedText>This Number is only divisible by itself!</ThemedText>
          <ThemedText>Ex. 3, 13, 53</ThemedText>
        </Collapsible>
      )}
      {/* Palindrome */}
      {pali && (
        <Collapsible title="Palindrome">
          <ThemedText>This number is the same backwards and forwards!</ThemedText>
          <ThemedText>Ex. 022220 is the same!</ThemedText>
        </Collapsible>
      )}
      {/* Pythagorean*/}
      {pyth && (
        <Collapsible title="Pythagorean">
          <ThemedText>This number is the day squared times itself and the month times itself equals the year </ThemedText>
          <ThemedText>July 24th, 2025 \(7 24 25) is 7^2 + 24^2 = 25^2 (^2 is squared)</ThemedText>
        </Collapsible>
      )}
      {/* Perfect Power */}
      {perPow && (
        <Collapsible title="Perfect Power">
          <ThemedText>This date as a number is a perfect square or cube!</ThemedText>
          <ThemedText>Ex. 9/27/2025 is 9272025 = 3045^2</ThemedText>
        </Collapsible>
      )}
      {/* Armstrong */}
      {arm && (
        <Collapsible title="Narcissistic / Armstrong ">
          <ThemedText>a number that is equal to the sum of its own digits, each raised to the power of the number of digits</ThemedText>
          <ThemedText>Ex. 371 = 3^3 + 7^3 + 1^3 </ThemedText>
        </Collapsible>
      )}
      {/* Equation */}
      {equa && (
        <Collapsible title="Equation of Day Month = Year">
          <ThemedText>This day {sumStr} month equals the year! </ThemedText>
          <ThemedText>Ex. 7 + 7 = (20)14 (day plus month = year) </ThemedText>
        </Collapsible>
      )}

      <View style={{ width: 50, height: 50}}></View>


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
      
      </View>
  );
}

