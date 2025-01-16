// Show the login form and hide the signup form
document.getElementById('show-login').addEventListener('click', () => {
    document.getElementById('signup').classList.add('hidden');
    document.getElementById('login').classList.remove('hidden');
});

// Show the signup form and hide the login form
document.getElementById('show-signup').addEventListener('click', () => {
    document.getElementById('login').classList.add('hidden');
    document.getElementById('signup').classList.remove('hidden');
});

// Signup functionality with navigation to another HTML file
document.getElementById('signup-btn').addEventListener('click', () => {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (name && email && password) {
        
        localStorage.setItem('user', JSON.stringify({ name, email, password }));
        alert('Sign Up Successful! Redirecting to home page...');
        window.location.href = 'index.html'; // Redirect to another HTML file
    } else {
        alert('Please fill in all fields.');
    }
});

// Login functionality with navigation to another HTML file
document.getElementById('login-btn').addEventListener('click', () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.password === password) {
        alert('Welcome back, ${user.name}! Redirecting to home page...');
        window.location.href = 'index.html'; // Redirect to another HTML file
    } else {
        alert('Invalid email or password. Please try again.');
    }
});