import React, { Component } from 'react';
import './App.css';
import reducer from './reducer'

class App extends Component {

  data = {
    "Ivel Z3": {
      manufacturer: "Ivasim",
      year: 1969,
      origin: "Croatia"
    },
    "Bally Astrocade": {
      manufacturer: "Bally Consumer Products",
      year: 1977,
      origin: "USA"
    },
    "Sord M200 Smart Home Computer": {
      manufacturer: "Sord Computer Corporation",
      year: 1971,
      origin: "Japan"
    },
    "Commodore 64": {
      manufacturer: "Commodore",
      year: 1982,
      origin: "USA"
    }
  }

//i dont even know anymore at this point my brain is fried

addSystem (manufacturer,year,origin){
  return {
  type: "ADD_MODEL",
  payload : {
    manufacturer,
    year,
    origin
  }
}
}


  



  render() {
    return (
      <div className="App">
        <select>
          <option value="">--pick a model --</option>
          {
            Object.keys(this.data).map(system => {
              return <option key={system} value={system}>{system}</option>
            })
          }
        </select>
        <button onClick={reducer("test", 2, "something")}>Add</button>
      </div>
    );
  
  }
}


// class SelectComponent extends Component {

//   render() {
//     return(
//       // i tried pasting the options and select code here but didnt work cannot convert undefinded or null to object
//       //i started at 11.00 was done with step 1 arround 13.00 now its 17.00 
//       // no ..just no
//       // i wanted to paste code here and use <selectComponent /> at app which didnt work
//       // i dont want to hear no why did you stop it works fine 
//       // no it doesnt 
            //   <select>
            //   <option value="">--pick a model --</option>
            //   {
            //     Object.keys(this.data).map(system => {
            //       return <option key={system} value={system}>{system}</option>
            //     })
            //   }
            // </select>
            // now looking back i realise i spent 4 hours on one step.
            //  4 hours of my life gone chasing ghosts like my first game
            //look i know the problem is that i do this.data and somehow it cant find the date because its at app
            // but still how did it work before like i looked back cant find anything
            // why. not why doesnt it work like why step 2 in general
//     )
//   }
// }

export default App;
