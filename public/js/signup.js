const form = document.getElementById('signupForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
        const res = await fetch('http://localhost:5000/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        });

        const data = await res.json();

        if (res.ok) {
            localStorage.setItem('token', data.token);
            alert('Signup successful!');
            window.location.href = 'dashboard.html';
        } else {
            alert(data.message);
        }
    } catch (err) {
        console.error(err);
        alert('Something went wrong!');
    }
});






// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('.overlay');

    // Fade in the overlay smoothly
    overlay.style.opacity = 0;
    overlay.style.transition = 'opacity 1.5s ease-in-out';
    setTimeout(() => {
        overlay.style.opacity = 1;
    }, 100);

    // Optional: Add hover sound or glow effect on buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.boxShadow = '0 0 20px rgba(255,255,255,0.6)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.boxShadow = 'none';
        });
    });
});
