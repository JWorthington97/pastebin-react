import './App.css';
// import styled from 'styled-components'
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App">
      {/* Chakra Stack is useful */}
      < MainContent />
     </div>
  ); 
}

// ["#fe4365","#fc9d9a","#f9cdad","#c8c8a9","#83af9b"]
export default App;

// // Style
// const H1 = styled.h1`
//   color: red
// `

// const HomepageTitle = styled(Text)`
//   color: red;
//   font-size: 16px
// `
// const OtherTitle = styled(HomepageTitle)`
//   color: blue
// `