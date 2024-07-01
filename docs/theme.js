function dark_theme() {
    document.body.classList.add('dark');
    localStorage.theme = 'dark';
    
}

function light_theme() {
    document.body.classList.remove('dark');
    localStorage.theme = 'light';
    
}
