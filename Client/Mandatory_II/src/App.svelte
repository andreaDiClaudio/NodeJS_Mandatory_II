<script>
 	import { Router, Link, Route } from "svelte-navigator";
  import PrivateRoute from "./components/PrivateRoute.svelte";
  import { user } from "./stores/users.js";
  import Login from "./pages/login/Login.svelte";
  import Signup from "./pages/signup/Signup.svelte";
  import Fallback from "./pages/fallBack/Fallback.svelte";
  import Home from "./pages/home/Home.svelte";
  import Contact from "./pages/contact/Contact.svelte";


  import "./css/login&signup.css";
</script>

<Router>

  <Route path="/">
    <Login />
  </Route>

  <Route path="/signup">
    <Signup />
  </Route>

  <PrivateRoute path="/home" let:location>
    <Home />
  </PrivateRoute>

  <PrivateRoute path="/contact" let:location>
    <Contact />
  </PrivateRoute>
  
  <Route path="*">
    <Fallback />
  </Route>
</Router>
