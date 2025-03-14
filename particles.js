document.addEventListener('DOMContentLoaded', function() {
    // Initialize Feather icons
    feather.replace();

    // Mouse move effect
    const mouseEffect = document.getElementById('mouse-move-effect');
    
    document.addEventListener('mousemove', function(e) {
      mouseEffect.style.background = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
    });

    // Create particles
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      createParticle();
    }
    
    function createParticle() {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random size between 2px and 6px
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      
      // Random opacity
      particle.style.opacity = Math.random() * 0.5 + 0.1;
      
      // Animation
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 5;
      
      particle.style.animation = `float ${duration}s ${delay}s ease-in-out infinite alternate`;
      
      particlesContainer.appendChild(particle);
    }

    // Video Modal Functionality
    const trailerBtn = document.getElementById('trailer-btn');
    const videoModal = document.getElementById('video-modal');
    const playButton = document.getElementById('play-button');
    const video = document.getElementById('trailer-video');

    // Open modal when trailer button is clicked
    trailerBtn.addEventListener('click', function() {
      videoModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    // Play/pause video when play button is clicked
    playButton.addEventListener('click', function() {
      if (video.paused) {
        video.play();
        playButton.classList.add('hidden');
      } else {
        video.pause();
        playButton.classList.remove('hidden');
      }
    });

    // Show play button when video is paused
    video.addEventListener('pause', function() {
      playButton.classList.remove('hidden');
    });

    // Hide play button when video is playing
    video.addEventListener('play', function() {
      playButton.classList.add('hidden');
    });

    // Close modal when clicking outside the video
    videoModal.addEventListener('click', function(e) {
      if (e.target === videoModal) {
        videoModal.classList.remove('active');
        video.pause();
        playButton.classList.remove('hidden');
        document.body.style.overflow = '';
      }
    });

    // Reset video when modal is closed
    videoModal.addEventListener('transitionend', function() {
      if (!videoModal.classList.contains('active')) {
        video.currentTime = 0;
      }
    });
  });