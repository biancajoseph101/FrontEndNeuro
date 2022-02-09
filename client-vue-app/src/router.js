import VueRouter from 'vue-router';
import Home from './pages/Home';
import Login from './components/Login';
import Post from './components/Post';
import News from './components/News';
import ResourceType from './pages/ResourceType';
import ResourceForm from './pages/ResourceForm';

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/login', component: Login, name: 'Login' },
  { path: '/createpost', component: Post, name: 'Post' },
  { path: '/createresource', component: ResourceForm, name: 'ResourceForm' },
  { path: '/news', component: News, name: 'News' },
  {
    path: '/resources/:resource_id',
    component: ResourceType,
    name: 'ResourceType'
  }
];

export default new VueRouter({ routes, mode: 'history' });
