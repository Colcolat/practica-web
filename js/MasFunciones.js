console.log("Sitio cargado correctamente 🚀");

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    if (form) {
        const inputs = form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
        });

        form.addEventListener("submit", function(event) {
            event.preventDefault();
            
            if (validateForm()) {
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = "Enviando...";
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    showNotification('✅ Mensaje enviado correctamente');
                    form.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 1500);
            }
        });
    }

    let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount = parseInt(visitCount) + 1;
    localStorage.setItem('visitCount', visitCount);
    
    const visitElement = document.getElementById('visit-counter');
    if (visitElement) {
        visitElement.textContent = `Visitas: ${visitCount}`;
    }

    const themeToggle = document.createElement('button');
    themeToggle.textContent = '🌙';
    themeToggle.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px;
        border: none;
        border-radius: 50%;
        background: #333;
        color: white;
        cursor: pointer;
        font-size: 20px;
        z-index: 1000;
    `;

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        themeToggle.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
    });

    document.body.appendChild(themeToggle);

    function validateField(field) {
        const value = field.value.trim();
        let isValid = true;

        if (field.type === 'email') {
            isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        } else if (field.type === 'text' || field.name === 'mensaje') {
            isValid = value.length >= 2;
        }

        field.style.borderColor = isValid ? '#4CAF50' : '#ff4444';
        return isValid;
    }

    function validateForm() {
        const inputs = form.querySelectorAll('input, textarea');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });
        
        return isValid;
    }

    function showNotification(message) {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 10px;
            background: #4CAF50;
            color: white;
            font-weight: 600;
            z-index: 1000;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 3000);
    }
});

const style = document.createElement('style');
style.textContent = `
    .dark-theme {
        background: #1a1a1a !important;
        color: #ffffff;
    }
    .dark-theme main, .dark-theme header, .dark-theme nav {
        background: #2d2d2d !important;
        color: #ffffff;
    }
`;
document.head.appendChild(style);
