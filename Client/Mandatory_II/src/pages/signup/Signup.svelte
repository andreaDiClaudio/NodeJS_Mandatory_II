<script>
    let email = '';
    let username = '';
    let password = '';
    let message = '';
  
    async function handleSubmit() {
      const data = { email, username, password };
  
      fetch('http://localhost:8080/users', {
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
        if (response.status === 201){
                window.location.href = "/";
            } else if (response.status === 400){
                message = "User already exists";
            }
      });
    }
  </script>
  
  <div id="page">
    <div id="form-card-wrapper">
      <div id="login-window">
        <div id="title-wrapper">
          <h1 id="title">Sign up!</h1>
          <div id="paragraph-wrapper">
            <p>Please create an account to read the documentation.</p>
            <a href="/">
              <button id="signup-button">Already have an account?</button>
            </a>
          </div>
        </div>
        <form on:submit|preventDefault={handleSubmit}>
          <div id="email-wrapper">
            <input id="email-input" class="input" type="email" bind:value={email} placeholder="email@example.com" required>
          </div>
          <div id="username-wrapper">
            <input id="username-input" class="input" type="text" bind:value={username} placeholder="username" required>
          </div>
          <div id="password-wrapper">
            <input id="password-input" class="input" type="password" bind:value={password} placeholder="password" required>
          </div>
          <div id="button-wrapper">
            <button id="submit-form-button" type="submit">Create Account</button>
          </div>
        </form>
      </div>
    </div>
  </div>
