
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




const App = () => {

  const [data, setData] = useState([]);
  const [parameter, setParameter] = useState('')
  
  const fetchData = async () => {
    await axios.get(`https://quiet-falls-70006.herokuapp.com/pokemon/${parameter}`)
    .then((res) => setData(res.data))
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <>
    <div className="App">
      <Router>
      <NavigationBar />

      <Link to='/'>Home</Link>
      <Route path="/:id?">
        <Pokemon data={data}/>
      </Route>
      <div>
      <p> Poki Fight Project is working ...</p>
      <Route path='/'>
      <ul>
        {data && data.map(e => {
          return(
            <li><Link exact to={`${e.id}`}>{e.name.english}</Link></li>
          )
        })}
      </ul>
      </Route>

      </div>
      </Router>
    </div>



    <FooterBar />
    </>

  );
}

export default App;
