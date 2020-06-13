// arquivo App.js, criado pelo create-react-app, modificado
import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './Users';

class App extends Component {
  render() {
    return (

      /* Agora, para fixar uso de URL com parâmetros, altere a rota, definindo o parâmetro chamado id.
      Depois, altere o componente Users, de modo que mostre no parágrafo o valor recebido para o parâmetro id.
      Teste se está funcionando invocando as urls localhost:3000/users/10,
       localhost:3000/users/11 e localhost:3000/users/100, por exemplo.
 */
      <main>
      <BrowserRouter>
      
      <header>
        <ul>
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/users/100">User 100</Link></li>
        <li><Link to="/users/11">User 11</Link></li>
        <li><Link to="/users/10">User 10</Link></li>
        </ul>
      </header>

      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/users/:id" component={Users} />
      </Switch>
      
      </BrowserRouter>
      
      </main>
    );
  }
}

export default App;

