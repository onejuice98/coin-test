
import React, {useState} from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color : ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color : ${(props) => props.theme.textColor};
`;
function App() {

  return (
  
    <div>
      <H1> 123123</H1>
    </div>
  );
}

export default App;