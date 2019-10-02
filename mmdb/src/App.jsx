import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Componants/Nav/Navigation";
import Jumbo from "./Componants/Nav/Jumbo";
import Search from "./Componants/Search/Search.js";
import Results from "./Componants/Results/Results.jsx";
import Provider from "./Context";
import Details from "./Componants/Details.jsx";

const ThemeContext = React.createContext();
class App extends React.Component {
  constructor(props) {
    super(props);
    this.getQuery = this.getQuery.bind(this);
    this.state = {
      show: true
    };
  }
  getQuery(e) {
    console.log("click");
    this.setState({ show: !this.state.show });
  }

  //kda 3aya el query
  //momken a5ly el search t construct el query w tb3thale
  //b3d kda hna h3ml el fetch data
  //hb3t el data l el results as a prob
  //map gowa el results 34an a3rdha (generate cards)
  //e3ml componants bta el info w hyb2a conditionl
  render() {
    return (
      <Provider>
        <div className="App">
          <Navigation />
          <Jumbo />
          <Search handler={this.getQuery} />

          <Results />
          <Details />
        </div>
      </Provider>
    );
  }
}

export default App;
