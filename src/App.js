import React,{Component} from 'react';
import Movies from "./components/Movies";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Counters from "./components/Counters";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
class App extends Component {
  state = {  }
  render() { 
    return (  
<React.Fragment>
<Navbar/>
<body>
<main role="main" class="container">

<Counters/>
</main>
</body>



</React.Fragment>

    );
  }
}
 
export default App;

