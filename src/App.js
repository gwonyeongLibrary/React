import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function Header(props) {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        {props.title} <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

function Content(props) {
  return (
    <div>
      <button
        onClick={function (event) {
          props.onChangeMode();
        }}
      >
        이걸 눌러보자
      </button>
    </div>
  );
}

function App() {
  const [mode, setMode] = useState("WELCOME");
  // useState의 인자는 스테이트의 첫번째 값.
  // 배열을 반환받게 되는데 0번은 원본 값, 1번은 원본을 바꾸기 위한 함수
  // 1번 함수를 실행하면 App을 다시 실행한다.

  let content = null;
  if (mode === "WELCOME") {
    content = (
      <Content
        onChangeMode={() => {
          alert("웰컴!");
          setMode("READ");
        }}
      ></Content>
    );
  } else {
    content = (
      <Content
        onChangeMode={() => {
          alert("낫 웰컴!");
          setMode("WELCOME");
        }}
      ></Content>
    );
  }
  return (
    <div className="App">
      <Header title="REACT"></Header>
      {content}
    </div>
  );
}

export default App;
