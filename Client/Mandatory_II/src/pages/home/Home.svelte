<script>
  import { user } from "../../stores/users.js";

  function handleSubmit() {
    fetch('http://localhost:8080/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.status === 200) {
        user.set(null);
        localStorage.removeItem('user');
        window.location.href = "/";
      }
    });
  }
</script>

<div id="page">
<nav>
    <form on:submit|preventDefault={handleSubmit}>
        <button type="submit">logout</button>
    </form>
</nav>

<h1>Welcome, {$user.username}!</h1>
</div>