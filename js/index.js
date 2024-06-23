const header = document.getElementById('main-header');
header.style.textAlign = 'center'
header.style.margin = '15px'
header.style.border = '2px solid aquamarine'
header.style.borderRadius = '8px'
header.style.padding = '20px'
header.classList.add('font-size')


const sections = document.querySelectorAll('section');
for(const section of sections){
  section.style.border = '2px solid aqua'
  section.style.borderRadius = '16px'
  section.style.margin = '10px'
  section.style.padding = '20px'
  section.style.backgroundColor = 'lightgray'
}