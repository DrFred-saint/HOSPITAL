window.addEventListener('load', function() {
    var loader = document.getElementById('loader');
    var loginContainer = document.getElementById('login-container');
    if (loader) {
        loader.style.display = 'none';
    }
    if (loginContainer) {
        loginContainer.style.display = 'block';
    }
});
document.getElementById('loginForm').addEventListener('submit', function(e) {
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();
    if (username === '' || password === '') {
        alert('Please fill in both username and password.');
        e.preventDefault();
    }
});
