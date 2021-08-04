import './App.css';
import {useEffect, useState} from "react";

function App() {

  const [generatedString, setString] = useState('');

  const testString = ''; // set the string if u want to test functions: isPalindrome/isNumber/containsZero
  const interval = 3000;
  const len = 5;

  const generateString = () => {
    if (testString) return testString;

    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';

    for (let i = 0; i < len; i++) {
      result += characters[Math.round(Math.random() * (characters.length - 1))];
    }

    return result;
  }

  const isPalindrome = (str) => {
    return str === str.split("").reverse().join("");
  }

  const isNumber = (str) => {
    return !isNaN(str);
  }

  const containsZero = (str) => {
    return str.indexOf('0') !== -1
  }

  const generateStyles = () => {
    let styles = {}

    if (isPalindrome(generatedString)) styles.color = 'red';
    if (isNumber(generatedString)) styles.color = 'blue';
    if (containsZero(generatedString)) styles.display = 'none';

    return styles;
  }


  useEffect(() => {
      setString(generateString());
      setInterval(() => setString(generateString()), interval)
    }
    , [])

  return (
    <div className="App">
      <h1 style={generateStyles()}>{generatedString}</h1>
    </div>
  );
}

export default App;
