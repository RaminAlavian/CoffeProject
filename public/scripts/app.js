// On page load or when changing themes, best to add inline in `head` to avoid FOUC
document.documentElement.classList.toggle('dark',
   localStorage.theme === 'dark' || (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches))


let themeSwitcher = document.getElementById('theme-switch-btn');
themeSwitcher.addEventListener('click',function(){
   if(localStorage.theme === 'dark'){
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme' , 'light')
   }
   else {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme' , 'dark')
   }
})