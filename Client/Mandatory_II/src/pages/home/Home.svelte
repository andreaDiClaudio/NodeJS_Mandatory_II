<script>
function handleSubmit() {
      fetch('http://localhost:8080/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.status === 200){
                window.location.href = "/";
            } else if (response.status === 400){
            }
      });
    }
</script>
<nav>
    <form on:submit|preventDefault={handleSubmit}>
        <button type="submit">logout</button>
    </form>
</nav>
<h1>Welcome!</h1>