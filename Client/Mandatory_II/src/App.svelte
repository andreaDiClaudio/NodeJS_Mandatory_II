<script>
 	import { Router, Link, Route } from "svelte-navigator";
  import Login from "./pages/login/Login.svelte";
  import Signup from "./pages/signup/Signup.svelte";
  import Fallback from "./pages/fallBack/Fallback.svelte";


  import "./css/login&signup.css";
</script>

<Router>

  <Route path="/">
    <Login />
  </Route>

  <Route path="/signup">
    <Signup />
  </Route>
  
  <Route path="*">
    <Fallback />
  </Route>
</Router>
