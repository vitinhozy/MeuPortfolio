
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});


const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);


document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});


const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


function initVisitCounter() {
    let visits = localStorage.getItem('portfolio-visits');
    visits = visits ? parseInt(visits) + 1 : 1;
    localStorage.setItem('portfolio-visits', visits);
    console.log(`Número de visitas: ${visits}`);
}

initVisitCounter();

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.social-nav a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            alert('Email copiado para a área de transferência!');
        }).catch(err => {
            console.error('Erro ao copiar:', err);
            fallbackCopy(text);
        });
    } else {
        fallbackCopy(text);
    }
}

function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
        alert('Email copiado para a área de transferência!');
    } catch (err) {
        console.error('Erro ao copiar:', err);
    }
    document.body.removeChild(textArea);
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfólio carregado com sucesso!');
    updateActiveNavLink();
    
    // Adicionar listeners aos botões CTA
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.href.startsWith('mailto:')) {
                // Deixar o comportamento padrão do mailto
                return;
            }
        });
    });
});

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
}

// Verificar se o usuário prefere dark mode
if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
}

function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

console.log('Script principal carregado!');

function typeWriter() {
    const typingElement = document.getElementById('typing-text');
    const fullText = 'Victor Castro';
    const typingSpeed = 100; 
    const deletingSpeed = 50; 
    const pauseTime = 2000; 
    
    let index = 0;
    let isDeleting = false;
    
    function type() {
        if (!isDeleting) {
            // Digitando
            if (index < fullText.length) {
                typingElement.textContent = fullText.substring(0, index + 1);
                index++;
                setTimeout(type, typingSpeed);
            } else {
                // Pausa antes de apagar
                setTimeout(() => {
                    isDeleting = true;
                    type();
                }, pauseTime);
            }
        } else {
            // Apagando
            if (index > 0) {
                typingElement.textContent = fullText.substring(0, index - 1);
                index--;
                setTimeout(type, deletingSpeed);
            } else {
                // Volta a digitar
                isDeleting = false;
                setTimeout(type, 500);
            }
        }
    }
    
    // Iniciar a animacao
    type();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', typeWriter);
} else {
    typeWriter();
}
