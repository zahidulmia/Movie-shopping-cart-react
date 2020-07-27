import React,{Component} from 'react';
import {getMovies} from "../services/fakeMovieService";
class Movies extends Component {
    state = { 
movie: getMovies()

     }

handleDelete=(movie)=>{
const movies= this.state.movie.filter(m=> m._id!==movie._id);
this.setState({movie: movies});


}



    render() { 
        const {length} = this.state.movie;
        if(length ===0)
        return <p>There are no movies in the list</p>
        return ( 
<div>
    <p> showing {length} movies in the database </p>
<table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Genra</th>
      <th scope="col">Stock</th>
      <th scope="col">Rate</th>
      <th scope="col"> </th>
    </tr>
  </thead>
  <tbody>
      {this.state.movie.map(movie=> (

<tr key={movie._id}>
<td>{movie.title}</td>
<td>{movie.genre.name}</td>
<td>{movie.numberInStock}</td>
<td>{movie.dailyRentalRate}</td>
<td> <button onClick={()=>this.handleDelete(movie)} className="btn btn-danger btn-sm" >Delete </button>
</td>
</tr>

      ))}
   
   
   
  </tbody>            
  
</table>
</div>

         );
    }
}
 
export default Movies;