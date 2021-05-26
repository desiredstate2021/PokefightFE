import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import NavigationBar from './components/NavBar';
import FooterBar from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Pokemon from './components/Pokemon'
import PokemonInfo from './components/PokemonInfo'




const App = () => {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState('')
  
  const fetchData = async () => {
    await axios.get(`https://quiet-falls-70006.herokuapp.com/pokemon/`)
    .then((res) => setData(res.data))
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchData()
    setSearch('')
  }, [])


  return (
    <>
    <div className="App">
      <Router>
      <NavigationBar />
      <Switch>
      <Route exact path="/pokemon/:id">
        <Pokemon />
      </Route>
      <Route exact path="/pokemon/:id/:info">
        <PokemonInfo />
      </Route>
    
      <Route exact path='/'>
      <div>
      <div><h3>List of pokemon</h3></div>
        <input
        type="text"
        placeholder="Search.."
        onChange = {(event) => setSearch(event.target.value)}
          />
        {data && data.filter((e) => {
          if(search === "") {
            return e;
          }
          else if(e.name.english.toLowerCase().includes(search.toLowerCase())) {
            return search; 
          }
        })
        .map((e, index) => {
          return(
            <p key={index}><Link exact to={`/pokemon/${e.id}`} >    {e.name.english}   </Link></p>
          )
        })}
      </div>
      </Route>
      </Switch>

      
      </Router>
    </div>



    <FooterBar />
    </>

  );
}

export default App;
