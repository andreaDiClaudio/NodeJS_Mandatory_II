<script>
  import { useNavigate, useLocation } from "svelte-navigator";
  import { user } from "../../stores/users.js";

  const navigate = useNavigate();
  const location = useLocation();

  let email = '';
  let username = '';
  let password = '';
  let message = '';

  function handleSubmit() {
    fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'username': username,
        'password': password,
        'email': email
      })
    })
    .then(response => {
      if (response.status === 200) {
        const currentUser = { username, password };
        user.set(currentUser);
        localStorage.setItem('user', JSON.stringify(currentUser));
        const from = ($location.state && $location.state.from) || "/home";
        navigate(from, { replace: true });
      } else if (response.status === 400) {
        message = "User already exists";
      }
    });
  }
</script>

<div id="page">
    <div id="form-card-wrapper">
      <div id="login-window">
        <div id="title-wrapper">
          <h1 id="title">Welcome</h1>
          <div id="paragraph-wrapper">
            <p>Please log in</p>
            <a href="/signup">
              <button id="signup-button">Don't you have an account?</button>
            </a>
          </div>
        </div>
        <form id="login-form" on:submit|preventDefault={handleSubmit}>
          <div id="email-wrapper">
            <input id="email-input" class="input" type="email" name="email" placeholder="email@example.com" required bind:value={email}>
          </div>
          <div id="username-wrapper" data-name="username">
            <input id="username-input" class="input" type="text" name="username" placeholder="username" required bind:value={username}>
          </div>
          <div id="password-wrapper">
            <input id="password-input" class="input" type="password" name="password" placeholder="password" required bind:value={password}>
          </div>
          <div id="button-wrapper">
            <button id="submit-form-button" type="submit">Log in</button>
          </div>
        </form>
      </div>
    </div>
  </div>
