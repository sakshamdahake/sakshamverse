import React, { useEffect } from "react";

const FloatingTechIcons = () => {
  const icons = [
    "fab fa-react",
    "fab fa-js-square",
    "fab fa-python",
    "fab fa-node-js",
    "fab fa-html5",
    "fab fa-css3-alt",
    "fab fa-sass",
    "fab fa-aws",
    "fab fa-docker",
    "fab fa-git-alt",
    "fas fa-database",
    "fas fa-brain", // For AI/ML
    "fas fa-chart-bar", // For data visualization
    "fas fa-code",
    "fas fa-cogs", // For engineering/systems
    "fas fa-laptop-code",
    "fas fa-server",
    "fas fa-terminal",
    "fas fa-robot", // For automation
    "fas fa-microchip", // For hardware/low-level programming
    "fab fa-java",
    "fab fa-angular",
    "fab fa-vuejs",
    "fab fa-npm",
    "fab fa-github",
    "fab fa-r-project",
    "fab fa-php",
    "fas fa-cloud"
  ];

  useEffect(() => {
    // Track icon positions to prevent overlap
    const iconPositions = [];
    const minDistance = 100; // Minimum distance between icons in pixels
    
    // Function to check if a position is too close to existing icons
    const isTooClose = (x, y) => {
      for (const pos of iconPositions) {
        const distance = Math.sqrt(Math.pow(x - pos.x, 2) + Math.pow(y - pos.y, 2));
        if (distance < minDistance) {
          return true;
        }
      }
      return false;
    };
    
    // Function to get valid position that doesn't overlap
    const getValidPosition = () => {
      // Keep main content area clear (center of screen)
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      const contentAreaX1 = windowWidth * 0.2;  // Left boundary of content area
      const contentAreaX2 = windowWidth * 0.8;  // Right boundary of content area
      const contentAreaY1 = windowHeight * 0.1; // Top boundary of content area
      const contentAreaY2 = windowHeight * 0.9; // Bottom boundary of content area
      
      // Try to find a position that doesn't overlap with existing icons
      let x, y;
      let attempts = 0;
      let isValid = false;
      
      while (!isValid && attempts < 50) {
        attempts++;
        
        // Generate a position in one of the corners/edges
        const area = Math.floor(Math.random() * 4); // 0-3 for different screen areas
        
        switch (area) {
          case 0: // Top area
            x = Math.random() * windowWidth;
            y = Math.random() * (contentAreaY1 - 20);
            break;
          case 1: // Bottom area
            x = Math.random() * windowWidth;
            y = contentAreaY2 + Math.random() * (windowHeight - contentAreaY2 - 20);
            break;
          case 2: // Left area
            x = Math.random() * (contentAreaX1 - 20);
            y = contentAreaY1 + Math.random() * (contentAreaY2 - contentAreaY1);
            break;
          case 3: // Right area
            x = contentAreaX2 + Math.random() * (windowWidth - contentAreaX2 - 20);
            y = contentAreaY1 + Math.random() * (contentAreaY2 - contentAreaY1);
            break;
          default:
            x = Math.random() * windowWidth;
            y = Math.random() * windowHeight;
        }
        
        isValid = !isTooClose(x, y);
      }
      
      // If we couldn't find a valid position after many attempts, just return any edge position
      if (!isValid) {
        if (Math.random() > 0.5) {
          x = Math.random() > 0.5 ? 20 : windowWidth - 50;
          y = Math.random() * windowHeight;
        } else {
          x = Math.random() * windowWidth;
          y = Math.random() > 0.5 ? 20 : windowHeight - 50;
        }
      }
      
      return { x, y };
    };
    
    // Function to create floating icons
    const createIcon = (index = 0) => {
      const iconContainer = document.querySelector(".floating-icons-container");
      if (!iconContainer) return;
      
      // Check if we've reached the maximum number of icons
      const currentIcons = document.querySelectorAll('.floating-icon');
      const maxIcons = window.innerWidth > 1200 ? 15 : 
                      window.innerWidth > 768 ? 12 : 10;
                      
      if (currentIcons.length >= maxIcons) {
        return; // Don't add more icons if we've reached the limit
      }
      
      const icon = document.createElement("i");
      const randomIcon = icons[Math.floor(Math.random() * icons.length)];
      icon.className = `floating-icon ${randomIcon}`;
      
      // Get a position that doesn't overlap
      const position = getValidPosition();
      iconPositions.push(position);
      
      // Adjust size based on screen size
      const windowWidth = window.innerWidth;
      let baseSizeMultiplier = 1;
      
      if (windowWidth > 1600) {
        baseSizeMultiplier = 2.5;
      } else if (windowWidth > 1200) {
        baseSizeMultiplier = 2;
      } else if (windowWidth > 992) {
        baseSizeMultiplier = 1.8;
      } else if (windowWidth > 768) {
        baseSizeMultiplier = 1.5;
      } else {
        baseSizeMultiplier = 1.2;
      }
      
      // Make icons larger
      const size = (Math.random() * 20 + 15) * baseSizeMultiplier;
      
      icon.style.left = `${position.x}px`;
      icon.style.top = `${position.y}px`;
      icon.style.fontSize = `${size}px`;
      
      // Create unique animation for each icon - use consistent pattern
      const animationName = `floatIcon${(index % 3) + 1}`;
      icon.style.animationName = animationName;
      
      // Set animation properties - stable, slow movement
      icon.style.animationDuration = "60s";
      
      // Stagger animations using index
      icon.style.animationDelay = `${index * 2}s`;
      
      // Always use alternating direction for more stability
      icon.style.animationDirection = "alternate";
      
      // Add a unique ID for tracking
      const iconId = `icon-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
      icon.id = iconId;
      
      // Add class for visibility checking
      icon.classList.add("tech-icon");
      
      // Remove all interactive handlers - make icons purely decorative
      
      iconContainer.appendChild(icon);
    };
    
    // Add multiple animation styles to the document for more variety
    const addAnimationStyles = () => {
      // Don't add if already exists
      if (document.getElementById('floating-icons-keyframes')) return;
      
      const style = document.createElement('style');
      style.id = 'floating-icons-keyframes';
      style.innerHTML = `
        @keyframes floatIcon1 {
          0% { transform: translate(0, 0) rotate(0deg) scale(1); }
          25% { transform: translate(15px, 20px) rotate(5deg) scale(1.05); }
          50% { transform: translate(0, 30px) rotate(0deg) scale(1); }
          75% { transform: translate(-15px, 10px) rotate(-5deg) scale(0.95); }
          100% { transform: translate(0, 0) rotate(0deg) scale(1); }
        }
        
        @keyframes floatIcon2 {
          0% { transform: translate(0, 0) rotate(0deg) scale(1); }
          33% { transform: translate(-20px, 15px) rotate(-4deg) scale(0.95); }
          66% { transform: translate(20px, 25px) rotate(4deg) scale(1.05); }
          100% { transform: translate(0, 0) rotate(0deg) scale(1); }
        }
        
        @keyframes floatIcon3 {
          0% { transform: translate(0, 0) rotate(0deg) scale(1); }
          20% { transform: translate(25px, -15px) rotate(6deg) scale(1.05); }
          40% { transform: translate(10px, 25px) rotate(0deg) scale(1); }
          60% { transform: translate(-25px, 15px) rotate(-6deg) scale(0.95); }
          80% { transform: translate(-10px, -25px) rotate(-4deg) scale(0.98); }
          100% { transform: translate(0, 0) rotate(0deg) scale(1); }
        }
        
        .floating-icon {
          animation-duration: 60s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-fill-mode: both;
          position: absolute;
          text-shadow: 0 0 10px rgba(0,0,0,0.1);
          z-index: 0;
          display: block;
          font-family: 'Font Awesome 5 Free', 'Font Awesome 5 Brands';
          pointer-events: none;
          will-change: transform, opacity;
          backface-visibility: hidden;
          transition: opacity 4s ease-in-out;
        }
        
        body .floating-icon {
          color: #F4D1AE;
          opacity: 0.3 !important;
        }
        
        body.dark .floating-icon {
          color: #FFFFFF;
          opacity: 0.2 !important;
        }
        
        body.light .floating-icon {
          color: #12263A;
          opacity: 0.15 !important;
        }
        
        @media (max-width: 767px) {
          .floating-icon {
            display: block !important;
          }
        }
      `;
      document.head.appendChild(style);
    };
    
    // Add the animation styles
    addAnimationStyles();
    
    // Create initial icons with staggered animations
    const iconCount = window.innerWidth > 1200 ? 15 : 
                      window.innerWidth > 768 ? 12 : 
                      window.innerWidth > 576 ? 10 : 7;
    
    // Create a set of icons that will fade in and out
    for (let i = 0; i < iconCount; i++) {
      setTimeout(() => createIcon(i), i * 300); // Pass index for staggered animation
    }
    
    // Set up cycle for gentle fade in/out of random icons
    const fadeIconCycle = () => {
      const icons = document.querySelectorAll('.floating-icon');
      if (icons.length > 0) {
        // Select a random icon to fade out
        const randomIndex = Math.floor(Math.random() * icons.length);
        const iconToFade = icons[randomIndex];
        
        // Apply slow fade out
        iconToFade.style.transition = 'opacity 4s ease-out';
        iconToFade.style.opacity = '0';
        
        // After fade out completes, create a new icon and remove the old one
        setTimeout(() => {
          if (iconToFade && iconToFade.parentNode) {
            // Get position of faded icon
            const oldX = parseFloat(iconToFade.style.left);
            const oldY = parseFloat(iconToFade.style.top);
            
            // Remove the old icon
            const index = iconPositions.findIndex(pos => 
              pos.x === oldX && pos.y === oldY
            );
            if (index > -1) {
              iconPositions.splice(index, 1);
            }
            
            iconToFade.parentNode.removeChild(iconToFade);
            
            // Create a replacement icon with fade in
            const newIcon = createNewFadingIcon();
            
            // Schedule the next fade
            setTimeout(fadeIconCycle, 5000 + Math.random() * 10000);
          }
        }, 4000);
      } else {
        // If no icons exist, try again soon
        setTimeout(fadeIconCycle, 2000);
      }
    };
    
    // Function to create a new icon with fade-in effect
    const createNewFadingIcon = () => {
      const iconContainer = document.querySelector(".floating-icons-container");
      if (!iconContainer) return null;
      
      const icon = document.createElement("i");
      const randomIcon = icons[Math.floor(Math.random() * icons.length)];
      icon.className = `floating-icon ${randomIcon}`;
      
      // Get a position that doesn't overlap
      const position = getValidPosition();
      iconPositions.push(position);
      
      // Adjust size based on screen size
      const windowWidth = window.innerWidth;
      let baseSizeMultiplier = 1;
      
      if (windowWidth > 1600) {
        baseSizeMultiplier = 2.5;
      } else if (windowWidth > 1200) {
        baseSizeMultiplier = 2;
      } else if (windowWidth > 992) {
        baseSizeMultiplier = 1.8;
      } else if (windowWidth > 768) {
        baseSizeMultiplier = 1.5;
      } else {
        baseSizeMultiplier = 1.2;
      }
      
      const size = (Math.random() * 20 + 15) * baseSizeMultiplier;
      
      icon.style.left = `${position.x}px`;
      icon.style.top = `${position.y}px`;
      icon.style.fontSize = `${size}px`;
      
      // Create unique animation
      const animationName = `floatIcon${Math.floor(Math.random() * 3) + 1}`;
      icon.style.animationName = animationName;
      icon.style.animationDuration = "60s";
      icon.style.animationDirection = "alternate";
      
      // Start with opacity 0 for fade in
      icon.style.opacity = '0';
      icon.style.transition = 'opacity 4s ease-in';
      
      // Add a unique ID
      const iconId = `icon-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
      icon.id = iconId;
      
      // Add class for visibility checking
      icon.classList.add("tech-icon");
      
      // Add to container
      iconContainer.appendChild(icon);
      
      // Start fade in (after a tiny delay to ensure transition works)
      setTimeout(() => {
        if (icon.classList.contains('floating-icon')) {
          const themeClass = document.body.classList.contains('dark') ? 'dark' : 
                           document.body.classList.contains('light') ? 'light' : '';
          
          const targetOpacity = themeClass === 'dark' ? '0.2' : 
                              themeClass === 'light' ? '0.15' : '0.3';
          
          icon.style.opacity = targetOpacity;
        }
      }, 50);
      
      return icon;
    };
    
    // Start the fade cycle after initial icons are created
    setTimeout(fadeIconCycle, 15000);
    
    // Check if icons are visible after a delay
    setTimeout(() => {
      const icons = document.querySelectorAll('.tech-icon');
      if (icons.length === 0 || getComputedStyle(icons[0]).fontFamily === 'serif') {
        console.log('Font Awesome not loaded properly, attempting to reload icons');
        // Attempt to reload Font Awesome
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
        document.head.appendChild(link);
      }
    }, 3000);
    
    // Handle window resize - remake all icons with new positions
    const handleResize = () => {
      // Clear all tracked positions
      iconPositions.length = 0;
      
      // Clear all icons
      const iconContainer = document.querySelector(".floating-icons-container");
      if (iconContainer) {
        iconContainer.innerHTML = '';
        
        // Create new icons
        const newIconCount = window.innerWidth > 1200 ? 15 : 
                            window.innerWidth > 768 ? 12 : 
                            window.innerWidth > 576 ? 10 : 7;
        
        for (let i = 0; i < newIconCount; i++) {
          setTimeout(() => createIcon(i), i * 200); // Pass index for staggered animation
        }
      }
    };
    
    const debouncedResize = debounce(handleResize, 250);
    window.addEventListener('resize', debouncedResize);
    
    return () => {
      // clearInterval(interval); // No longer needed
      window.removeEventListener('resize', debouncedResize);
      
      // Clean up animation styles
      const styleElement = document.getElementById('floating-icons-keyframes');
      if (styleElement) {
        styleElement.remove();
      }
    };
  }, []);
  
  // Simple debounce function to prevent excessive resize handling
  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  return (
    <div className="floating-icons-container"></div>
  );
};

export default FloatingTechIcons; 