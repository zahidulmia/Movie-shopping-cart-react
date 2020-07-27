import React,{Component} from 'react';
import Movies from "./components/Movies";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Counters from "./components/Counters";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 3 }
    ]
  };

  constructor(props){
    super(props);
    console.log("app-constructor",this.props)



  }


  handleIncreamet = (jiji) => {
    const counters = [...this.state.counters];
    const index= counters.indexOf(jiji);
    counters[index]={...jiji};
    counters[index].value+=1;
    this.setState({counters});
   
     };
     handleDecrement = (jiji) => {
      const counters = [...this.state.counters];
      const index= counters.indexOf(jiji);
      counters[index]={...jiji};
      counters[index].value-=1;
      this.setState({counters});
     
       };
     HandleDelete = (id) => {
       const counter = this.state.counters.filter((c) => c.id !== id);
       this.setState({ counters: counter });
     };
     HandleReset = () => {
       const counter = this.state.counters.map((c) => {
         c.value = 0;
       });
       this.setState({ counter: counter });
     };









  render() 
  {
    
    
    return (  
<React.Fragment>
{/* < Navbar totalcounters={this.state.counters.filter(c=> c.value > 0 ).length} /> */}
<body>
<main role="main" class="container">

{/* <Counters
counters={this.state.counters}
onReset={this.HandleReset}
onIncreament={this.handleIncreamet}
onDelete={this.HandleDelete}
onDecrement={this.handleDecrement}

/> */}
<Movies/>
</main>
</body>



</React.Fragment>

    );
  }
}
 
export default App;

