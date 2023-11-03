function loadUserLanguage() {
    const userLanguage = navigator.language || navigator.userLanguage || 'en'; // Default to English
    fetch(`translations/${userLanguage}.json`)
      .then(response => response.json())
      .then(data => {
        setLanguage(data);
      })
      .catch(error => {
        console.error(`Failed to load translation for ${userLanguage}: ${error}`);
      });
  }
  
  // Function to set the content based on the selected language
  function setLanguage(translation) {
    document.getElementById('greeting').textContent = translation.greeting;
    document.getElementById('description').textContent = translation.description;
  }