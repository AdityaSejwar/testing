window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading');
    const content = document.getElementById('content');
    
    
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        content.style.display = 'block';
    }, 4000); 
});

