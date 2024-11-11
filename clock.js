function setClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
  
    const secondDegrees = (seconds / 60) * 360;
    const minuteDegrees = (minutes / 60) * 360;
    const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30;
  
    document.querySelector('.second').style.transform = `rotate(${secondDegrees}deg)`;
    document.querySelector('.minute').style.transform = `rotate(${minuteDegrees}deg)`;
    document.querySelector('.hour').style.transform = `rotate(${hourDegrees}deg)`;
  
    // Update digital time and date
    document.querySelector('.time').textContent = now.toLocaleTimeString();
    document.querySelector('.date').textContent = now.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
    });
  }
  
  //  dark mode and Normal
  const toggleButton = document.querySelector('.dark-mode-toggle');
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // edit text based on mode
    if (document.body.classList.contains('dark-mode')) {
      toggleButton.textContent = 'Normal mode';
    } else {
      toggleButton.textContent = ' Dark mode';
    }
  });
  
  setInterval(setClock, 1000);
  
  
  setClock();
  