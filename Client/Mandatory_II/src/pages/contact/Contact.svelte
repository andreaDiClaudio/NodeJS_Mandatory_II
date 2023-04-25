<script>
      import toastr from "toastr";
  import 'toastr/build/toastr.min.css';
    let name;
    let email;
    let subject;
    let text;
    let message = "";
    function handleContact(){
        fetch("http://localhost:8080/contact", {
            method: "POST",
            credentials: "include",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                subject: subject,
                text: text
            })
        })
        .then(response => {
            if (response.status === 200){
                message = "Email sent successfully";  
                response.json().then(data => {
                
                    toastr["success"](data.mess);
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
                })
            } else if (response.status === 500){
                message = "Error sending Email";
                toastr["error"](message);
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
            }
        })
        .then(data => {
          
        });
        
    }
</script>

<div id="page">
    <div id="form-card-wrapper">
      <div id="login-window">
        <div id="title-wrapper">
          <h1 id="title">Contact us</h1>
        <form id="login-form" on:submit|preventDefault={handleContact}>
          <div id="email-wrapper">
            <input id="email-input" class="input" type="email" name="email" placeholder="email@example.com" required bind:value={email}>
          </div>
          <div id="username-wrapper" data-name="username">
            <input id="username-input" class="input" type="text" name="name" placeholder="name" required bind:value={name}>
          </div>
          <div id="subject-wrapper">
            <input id="password-input" class="input" type="text" name="subject" placeholder="subject" required bind:value={subject}>
          </div>
          <div id="text-wrapper">
            <input id="password-input" class="input" type="text" name="text" placeholder="text" required bind:value={text}>
          </div>
          <div id="button-wrapper">
            <button id="submit-form-button" type="submit">Send email</button>
          </div>
        </form>

        <div id="button-wrapper">
            <a href="/home">Home Page</a>
          </div>
      </div>
    </div>
  </div>
</div>