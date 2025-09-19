import { Collapsible } from "@/components/Collapsible";
import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";


// This is the screen we're returning

export default function YourDate() {

  // constants we're using in the app
  const [valid, setValid] = useState(true); // validating input
  const [error, setError] = useState(""); // the error code


  // sets our input
  const [numString, setNumString] = useState(""); // our final string
  const [dayStr, setDayStr] = useState(""); // for the day
  const [monthStr, setMonthStr] = useState(""); // for the month
  const [yearStr, setYearStr] = useState(""); // for the year

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

  //Runs Our Code Submitted
  const isSubmitted = () => {
    // resetting our previous things
    setValid(isThisGood());

    if(valid) {
      setNumString(dayStr + monthStr + yearStr)
      setPrime(isPrime());
      setPali(isPalindrome());
      setArm(isArmstrong());
      setEqua(isEquation());
      setPyth(isPyth());
      setPerPow(isPerPower());
      runColor();
    }
  }

  // Valid Input --------------------------------------------------


  const isThisGood = () => {
    setDayStr(dayStr.trim());
    setMonthStr(monthStr.trim());
    setYearStr(yearStr.trim());

    if(parseInt(dayStr) < 32 && parseInt(dayStr) > 0 && Number.isInteger(parseInt(dayStr)) && dayStr !== ""){
      if(parseInt(dayStr) < 10 && dayStr[0] !== "0") {
        setDayStr("0" + dayStr);
      } else {
        setDayStr(dayStr);
      }
    } else {
      setError("your day is not valid")
      return false;
    }

    if(parseInt(monthStr) < 13 && parseInt(monthStr) > 0 && Number.isInteger(parseInt(monthStr)) && monthStr !== ""){
      if(parseInt(monthStr) < 10 && monthStr[0] !== "0") {
        setMonthStr("0" + monthStr);
      } else {
        setMonthStr(monthStr);
      }
    } else {
      setError("your month is not valid")
      return false;
    }

    if(parseInt(yearStr) < 2501 && parseInt(yearStr) > 0 && Number.isInteger(parseInt(yearStr)) && yearStr !== ""){
      if(parseInt(yearStr) < 10 && yearStr[0] !== "0") {
        
        setYearStr("0" + yearStr);
      } else {
        setYearStr(yearStr);
      }
    } else {
      setError("your year is not valid")
      return false;
    }

    return true;

  }

  // -------------- Here are the conditions for our date --------------------


  // Prime -----------------------------------------
  const isPrime = () => {
    let nume = parseInt(numString);
  
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
    const numClean = numString;
 
    // reversing the string
    const reverse = numClean.split('').reverse().join("");
    // returning a booleon
    return reverse === numString;
  }

  // Pythagorean day^2 + month^2 = year^2 ----------------------
  const isPyth = () => {
    //remove leading spaces
    const numClean = numString;

    // return empty
 
    let day = parseInt(numClean.slice(0, 2));
    let month = parseInt(numClean.slice(2, 4));
    let year = parseInt(numClean.slice(-2, ));
    
    
    let quared = (day * day) + (month * month);
    return quared === year * year;
  }

  // Perfect Power --------------------------------------
  const isPerPower = () => {
    //remove leading spaces
    const numClean = numString;
    // return empty

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
    let numClean = numString;
    if(numString[0] === "0") {
      numClean = numString.slice(1, );
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

   
    let day = parseInt(numClean.slice(0, 2));
    let month = parseInt(numClean.slice(2, 4));
    let year = parseInt(numClean.slice(-2, ));

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
    setColorH2("hsl(" + month + ","+ day + "%,"+ year + "%)")
  }

  // and here is our actual app ------------------------------------

  return (
    <ScrollView>
      {/* Header of Our App */}
      <View style={[styles.headerSpacer, {backgroundColor: colored}]}></View>
      <View style={[styles.header, {backgroundColor: colored}]}>
        <Text style={styles.appTitle}>Perfect Date</Text>
      </View> 
      {/* End Header */}
      {/* Start Inputs */}
      <View style={styles.inputSection}>
        <Text style={styles.comments}>Input Your Date Here</Text>
        <Text style={styles.error}>{error}</Text>
        <View style={styles.dateHolder}>
          {/* begin of month input */}
          <View style={styles.dated}>
            <Text>Month</Text>
            <TextInput style={styles.input}
            value={monthStr}
            onChangeText={setMonthStr}
            ></TextInput>
          </View>
          {/* end of month input */}
          <Text style={styles.giantSlash}>/</Text>
          {/* begin of day input */}
          <View style={styles.dated}>
            <Text>Day</Text>
            <TextInput style={styles.input}
            value={dayStr}
            onChangeText={setDayStr}
            ></TextInput>
          </View>
          {/* end of day input */}
          <Text style={styles.giantSlash}>/</Text>
          {/* begin of year input */}
          <View style={styles.dated}>
            <Text>Year</Text>
            <TextInput style={styles.input}
            value={yearStr}
            onChangeText={setYearStr}
            ></TextInput>
          </View>
          {/* end of year input */}
        </View> 
        {/* end of date-holder */}
        {/* Submit Button */}
        <Button title="Submit" onPress={isSubmitted}></Button>
      </View>
      {/* end of input-section */}
      {/* Start Conditional Dropdowns */}
      <View style={[styles.conditionalDropDowns, {backgroundColor: coloredH}]}>
        {valid && ( <Text style={styles.comments}>Here is what is special about your date!</Text>)}
        {/* Prime */}
        {primed && (
          <Collapsible title="Prime">
            <Text>This Number is only divisible by itself!</Text>
            <Text>Ex. 3, 13, 53</Text>
          </Collapsible>
        )}
        {/* Palindrome */}
        {pali && (
          <Collapsible title="Palindrome">
            <Text>This number is the same backwards and forwards!</Text>
            <Text>Ex. 022220 is the same!</Text>
          </Collapsible>
        )}
        {/* Pythagorean*/}
        {pyth && (
          <Collapsible title="Pythagorean">
            <Text>This number is the day squared times itself and the month times itself equals the year </Text>
            <Text>July 24th, 2025 \(7 24 25) is 7^2 + 24^2 = 25^2 (^2 is squared)</Text>
          </Collapsible>
        )}
        {/* Perfect Power */}
        {perPow && (
          <Collapsible title="Perfect Power">
            <Text>This date as a number is a perfect square or cube!</Text>
            <Text>Ex. 9/27/2025 is 9272025 = 3045^2</Text>
          </Collapsible>
        )}
        {/* Armstrong */}
        {arm && (
          <Collapsible title="Narcissistic / Armstrong ">
            <Text>a number that is equal to the sum of its own digits, each raised to the power of the number of digits</Text>
            <Text>Ex. 371 = 3^3 + 7^3 + 1^3 </Text>
          </Collapsible>
        )}
        {/* Equation */}
        {equa && (
          <Collapsible title="Equation of Day Month = Year">
            <Text>This day {sumStr} month equals the year! </Text>
            <Text>Ex. 7 + 7 = (20)14 (day plus month = year) </Text>
          </Collapsible>
        )}
        {/* end of conditionals */}
      </View>
      {/* End of Conditionals Section */}
      {/* Start of Colors Section */}
      <View style={styles.coloredSection}>
        <Text style={styles.comments}>Here are your colors for your perfect date!</Text>
        
        {/* input another view here if necessary */}

          {/* hex codes */}
          <Text style={styles.colorsTitle}>Hex Colors and Code</Text>
          <View style={styles.colorsGroup}>
            {/* first hex code */}
            <View style={styles.colorsPalette}>
              <Text>#DDMMYY</Text>
              <View style={{backgroundColor: colored, width: 50, height: 50}}></View>
              <Text>{colored}</Text>
            </View>
            {/* end of hex code 1 */}
            {/* second hex code */}
            <View style={styles.colorsPalette}>
              <Text>#MMDDYY</Text>
              <View style={{backgroundColor: colored2, width: 50, height: 50}}></View>
              <Text>{colored2}</Text>
            </View>
            {/* end of hex code 2 */}
          </View>
          {/* end of hex codes */}
          {/* hsl codes */}
          <Text style={styles.colorsTitle}>HSL Colors and Code</Text>
          <View style={styles.colorsGroup}>
            {/* first hsl code */}
            <View style={styles.colorsPalette}>
              <Text>hsl(DD, MM%, YY%)</Text>
              <View style={{backgroundColor: coloredH, width: 50, height: 50}}></View>
              <Text>{coloredH}</Text>
            </View>
            {/* end of hsl code 1 */}
            {/* second hsl code */}
            <View style={styles.colorsPalette}>
              <Text>hsl(MM, DD%, YY%)</Text>
              <View style={{backgroundColor: coloredH2, width: 50, height: 50}}></View>
              <Text>{coloredH2}</Text>
            </View>
            {/* end of hsl code 2 */}
          </View>
          {/* end of hsl codes */}

      </View>
      {/* end of color section */}
  </ScrollView>
  // end of holder of app
  );}

  // our stylesheet
  const styles = StyleSheet.create({
    headerSpacer: {
      width: "100%",
      height: 30,
    },
    header: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      paddingBottom: 20,
      paddingLeft: 20,
    },
    appTitle: {
      fontSize: 30,
      fontWeight: "bold",
      fontFamily: "New Times Romans, serif",
      backgroundColor: "white",
      padding: 5,
      borderRadius: 5,
    },
    inputSection: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: "#eae8e8ff",
    },
    comments: {
      fontSize: 21,
      fontFamily: "serif",
      fontWeight: "bold",
      backgroundColor: "white",
      padding: 5,
      borderRadius: 5,
      marginBottom: 5,
    },
    error: {
      color: "red",
    },
    dateHolder: {
      marginTop: 5,
      borderColor: "black",
      borderStyle: "solid",
      borderWidth: 2,
      borderRadius: 30,
      flex: 1,
      flexDirection: "row",
      paddingInline: 5,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 10,
    },
    dated: {
      width: "30%",
      padding: 5,
    },
    input: {
      borderColor: "gray",
      borderStyle: "solid",
      borderWidth: 1,
      paddingInline: 10,
    },
    giantSlash: {
      fontSize: 30,
    },
    conditionalDropDowns: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 10,
      paddingBottom: 10,
      height: 200,
    },
    coloredSection: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 10,
      paddingBottom: 10,
    },
    colorsGroup: {
      flex: 1,
      flexDirection: "row",
      justifyContent: 'space-evenly',
    },
    colorsTitle: {
      fontSize: 17,
      fontFamily: 'serif',
      marginBottom: 5,
      marginTop: 10,
    },
    colorsPalette: {
      flex: 1,
      alignItems: 'center',
    },
});
  

