//import logo from './logo.svg';
//import './App.css';
import React, { useState } from "react";
function App() {
  
  const [birthDate, setBirthDate] = useState("");
  const [result, setResult] = useState("");

  const calculateAge = () => {
    if (!birthDate) {
      setResult("Please select your birth date.");
      return;
    }

    let birthdate = new Date(birthDate);
    let d1 = birthdate.getDate();
    let m1 = birthdate.getMonth() + 1;
    let y1 = birthdate.getFullYear();

    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;
    y3 = y2 - y1;

    if (m2 >= m1) {
      m3 = m2 - m1;
    } else {
      y3--;
      m3 = m2 + 12 - m1;
    }

    if (d2 >= d1) {
      d3 = d2 - d1;
    } else {
      m3--;
      d3 = getDaysInMonth(y2, m2 - 1) + d2 - d1;
    }

    if (m3 < 0) {
      m3 = 11;
      y3--;
    }

    setResult(`Your age is ${y3} years, ${m3} months and ${d3} days.`);
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  return (
    <div style={styles.container}>
      <div style={styles.calculator}>
        <h1 style={styles.title}>Age Calculator</h1>
        <div style={styles.inputBox}>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            max={new Date().toISOString().split("T")[0]}
            style={styles.input}
          />
          <button onClick={calculateAge} style={styles.button}>
            Calculate
          </button>
        </div>
        <div style={styles.result}>{result}</div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    minHeight: "100vh",
    padding: "10px",
    backgroundColor: "rgb(138, 89, 183)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "rgb(21, 178, 178)",
    flexDirection: "column",
  },
  calculator: {
    width: "90%",
    maxWidth: "600px",
    marginTop: "10vh",
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: "clamp(32px, 6vw, 60px)",
  },
  inputBox: {
    margin: "40px 0",
    padding: "25px",
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    backgroundColor: "rgb(60, 112, 186)",
    borderRadius: "15px",
    justifyContent: "center",
  },
  input: {
    minWidth: "200px",
    padding: "14px 20px",
    fontSize: "18px",
    borderRadius: "155px",
    border: "none",
    backgroundColor: "wheat",
    flex: "1 1 250px",
  },
  button: {
    minWidth: "200px",
    padding: "14px 20px",
    fontSize: "18px",
    borderRadius: "155px",
    border: "none",
    backgroundColor: "yellowgreen",
    cursor: "pointer",
    flex: "1 1 250px",
  },
  result: {
    fontSize: "18px",
    color: "aliceblue",
    textAlign: "center",
  },
};
  


export default App;
