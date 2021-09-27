import './App.css';
import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';
import { PostCreate, PostEdit, PostList } from './posts';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')
const App = () => (
  <Admin dataProvider={dataProvider}>
    {/* <Resource name="users" list={ListGuesser}/> */}
    {/* <Resource name="posts" list={ListGuesser} /> */}
    {/* <Resource name="posts" list={PostList} /> */}
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate}/>
    <Resource name="users" list={UserList} />
  </Admin>
)

export default App;

//http://52.78.22.201/tutorials/react-admin/setup/
//https://marmelab.com/react-admin/Tutorial.html#using-an-api-as-data-source


// selecting column부터 튜토리얼 이어서 하기.