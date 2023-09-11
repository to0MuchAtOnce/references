const container = document.querySelector('#container');

const para1 = document.createElement('p');

para1.textContent = 'Hey I\'m red!';
para1.style.color = 'red';

container.appendChild(para1)

const heading3 = document.createElement('h3')

heading3.textContent = 'I\'m a blue h3!';
heading3.style.color = 'blue';

container.appendChild(heading3);

const divContainer = document.createElement('div');

const heading1 = document.createElement('h1');
const para2 = document.createElement('p');

divContainer.style.background = 'pink';
divContainer.style.border = '1px solid black';

heading1.textContent = 'I\'m in a div';
para2.textContent = 'ME TOO!';

divContainer.appendChild(heading1);
divContainer.appendChild(para2);

container.appendChild(divContainer);