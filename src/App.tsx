import "./App.css";
// import styled from 'styled-components'
import MainContent from "./components/MainContent";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box backgroundColor="#f7f2df" h={["100%", "100%", "100vh"]}> 
      <MainContent />
    </Box>
  );
}

// ["#fe4365","#fc9d9a","#f9cdad","#c8c8a9","#83af9b"]
export default App;
