<script>
  import { user } from "../../stores/users.js";
  import toastr from "toastr";
  import 'toastr/build/toastr.min.css';

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
  toastr["success"]("You have been successfully logged in!");
    toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "500",
    "timeOut": "3000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
    }
</script>

<div id="page">
  <h1>Welcome, {$user.username}!</h1>
  <br>
  <a href="/contact"><button id="submit-form-button">Contact us</button></a>
  <br>
  <form on:submit|preventDefault={handleSubmit}>
    <button type="submit" id="submit-form-button">logout</button>
  </form>
</div>