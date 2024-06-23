const maincontainer = document.getElementById('main-container');

const section = document.createElement('section')
const h2 = document.createElement('h2')
h2.innerText = `My Food List`
section.appendChild(h2)

const ul = document.createElement('ul')
const li1 = document.createElement('li')
li1.innerText = `Biriyani`
ul.appendChild(li1)
const li2 = document.createElement('li')
li2.innerText = `Borhani`
ul.appendChild(li2)
const li3 = document.createElement('li')
li3.innerText = `Chicken fry`
ul.appendChild(li3)
const li4 = document.createElement('li')
li4.innerText = `Polao`
ul.appendChild(li4)

section.appendChild(ul)

maincontainer.appendChild(section)


maincontainer.style.display = 'flex'
maincontainer.style.justifyContent = 'center'
maincontainer.style.textAlign = 'center'
