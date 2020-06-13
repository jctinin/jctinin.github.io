// arquivo App.js, criado pelo create-react-app, modificado
import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './Users';

class App extends Component {
  render() {
    return (

      <main>
      <BrowserRouter>
      
      <header>
        <Link to="/" >Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>

      </header>

      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/users"  render={(props) => <Users {...props} greetingMessage="Good Morning" />}  />
      </Switch>
      
      </BrowserRouter>
      
      </main>
    );
  }
}

export default App;

//Adicione uma rota que mapeie o caminho de URL “/about” para o componente About. Acesse http://localhost:3000/about para ver se o componente About foi renderizado!