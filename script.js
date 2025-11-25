// Menú hamburguesa responsive
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');

hamburger.addEventListener('click', () => {
  mainNav.classList.toggle('open');
  if (mainNav.classList.contains('open')) {
    mainNav.style.display = 'block';
  } else {
    mainNav.style.display = '';
  }
});

// Smooth scroll para anclas internas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    window.scrollTo({
      top: target.offsetTop - 72,
      behavior: 'smooth'
    });
    // cerrar nav en móvil
    if (mainNav.classList.contains('open')) {
      mainNav.classList.remove('open');
      mainNav.style.display = '';
    }
  });
});

// Manejo del formulario (simulación)
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  if (!email) {
    alert('Por favor escribe un correo válido.');
    return;
  }
  // Simulación de envío — en implementación real habría fetch a un endpoint
  alert('Gracias — tu solicitud fue recibida. Nos contactamos pronto.');
  form.reset();
});
