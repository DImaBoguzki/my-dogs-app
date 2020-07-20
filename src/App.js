import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './Components/navbar/navbar';
import GridDog from './Components/gridDogs/gridDogs';
import DogDetail from './Components/dogsDetail/dogsDetails';
function App() {
  return (
    <div className="App">
        <NavBar/>
        <div>
          <Switch>
              <Route exact path='/' render={()=><GridDog/>} />
              <Route exact path='/dog/:name' render={(routeData)=><DogDetail route={routeData}/>} />
              <Route render={()=><ErrorPage/>} />
          </Switch>
        </div>
    </div>
  );
}

export default App;

function ErrorPage() {
  return (
    <h1>404</h1>
  )
}