const menuButton=document.querySelector(".menu-btn");
const menu=document.querySelector(".menu");
if(menuButton&&menu){
  menuButton.addEventListener("click",()=>{
    const open=menu.classList.toggle("open");
    menuButton.textContent=open?"✕":"☰";
    menuButton.setAttribute("aria-expanded",open);
  });
  menu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
    menu.classList.remove("open");
    menuButton.textContent="☰";
    menuButton.setAttribute("aria-expanded","false");
  }));
}

const themeButton=document.querySelector(".theme-btn");
const root=document.documentElement;
const savedTheme=localStorage.getItem("theme");
const preferredDark=window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialTheme=savedTheme || (preferredDark ? "dark" : "light");

function setTheme(theme){
  root.dataset.theme=theme;
  localStorage.setItem("theme",theme);
  if(themeButton){
    themeButton.innerHTML=theme==="dark"
      ? '☀️ <span class="theme-label">Світла тема</span>'
      : '🌙 <span class="theme-label">Темна тема</span>';
    themeButton.setAttribute("aria-label",theme==="dark"?"Увімкнути світлу тему":"Увімкнути темну тему");
  }
}
setTheme(initialTheme);

if(themeButton){
  themeButton.addEventListener("click",()=>{
    setTheme(root.dataset.theme==="dark"?"light":"dark");
  });
}