<script>
 	import { Router, Link, Route } from "svelte-navigator";
  import Login from "./pages/login/Login.svelte";
  import Signup from "./pages/signup/Signup.svelte";
</script>

<Router>

  <Route path="/login">
    <Login />
  </Route>

  <Route path="/signup">
    <Signup />
  </Route>
</Router>