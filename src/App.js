import './App.css';
import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';
import { PostCreate, PostEdit, PostList } from './posts';
import authProvider from './authProvider';

// Customizing Menu Icons & Homepage
import PostIcon from '@material-ui/icons/Book'
import UserIcon from '@material-ui/icons/Group'
import Dashboard from './Dashboard';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')
const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    {/* <Resource name="users" list={ListGuesser}/> */}
    {/* <Resource name="posts" list={ListGuesser} /> */}
    {/* <Resource name="posts" list={PostList} /> */}
    <Resource name="posts" 
      list={PostList} 
      edit={PostEdit} 
      create={PostCreate}
      icon={PostIcon}
      />
    <Resource name="users" 
    list={UserList} 
    icon={UserIcon}
    />
  </Admin>
)

export default App;

//http://52.78.22.201/tutorials/react-admin/setup/
//https://marmelab.com/react-admin/Tutorial.html#using-an-api-as-data-source