<div id="page">
    <div id="form-card-wrapper">
        <div id="login-window">
            <div id="title-wrapper">
                <h1 id="title">Welcome</h1>
                <div id="paragraph-wrapper">
                    <p>Please log in to read the documentation</p>
                    <a href="/signup">
                        <button id="signup-button">Don't you have an account?</button>
                    </a>
                </div>
            </div>
            <form id="login-form" action="/" method="post"> <!-- TODO change endpoint -->
                <div id="email-wrapper">
                    <input id="email-input" class="input" type="email" name="email" placeholder="email@example.com" required>
                </div>
                <div id="username-wrapper" data-name="username">
                    <input id="username-input" class="input" type="text" name="username" placeholder="username" required>
                </div>
                <div id="password-wrapper">
                    <input id="password-input" class="input" type="password" name="password" placeholder="password" required>
                </div>
                <div id="button-wrapper">
                    <button id="submit-form-button" type="submit">Log in</button>
                </div>
            </form>
        </div>
    </div>
</div>