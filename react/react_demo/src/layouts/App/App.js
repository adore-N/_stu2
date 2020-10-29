import React from 'react';
import './App.css';
import { Button } from 'antd';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

// function App() {
//   return (
//     <div className="App">
//       {<Header />}
//       <Button type="primary">Button</Button>
//       {<Footer/>}
//     </div>
//   );
// }

class App extends React.Component{

  render() {
    return (
      <div className="App">
      {<Header {...this.props}/>}
      <Button type="primary">Button</Button>
      {<Footer/>}
    </div>
    )
  }
}

export default App;
