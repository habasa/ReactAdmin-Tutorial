import './App.css';
import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={ListGuesser}/>
  </Admin>
)


export default App;

//http://52.78.22.201/tutorials/react-admin/setup/
//https://marmelab.com/react-admin/Tutorial.html#using-an-api-as-data-source


// selecting column부터 튜토리얼 이어서 하기.