// arquivo Users.js
import React from 'react';

const Users = ({ match }) => ( console.log(match) ||
  <div>
    <h2> Users </h2>
    <p> The ID of user is: {match.params.id} , this is my awesome Users component </p>
  </div>
);

export default Users;