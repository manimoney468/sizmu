import { createApp } from 'vue'
import './style.css'
import Footer from './components/Footer.vue'
import Content from './components/Content.vue'
import Navbar from './components/Navbar.vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import ContentWrap from './components/ContentWrap.vue';
import songo from './components/songo.vue';
import router from './routers/router'; // Import the router

const app = createApp(App);
 // 

app.component('Footer', Footer);
app.component("Content",Content);
app.component("Navbar",Navbar);
app.component("ContentWrap",ContentWrap);
app.component("songo",songo);

app.use(router);


app.mount('#app');


