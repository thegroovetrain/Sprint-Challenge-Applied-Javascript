// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const container = document.createElement('div');
    container.classList.add('header');

    const date = document.createElement('span');
    date.classList.add('date');
    date.textContent = 'SMARCH 28, 2019'
    container.append(date);

    const h1 = document.createElement('h1');
    h1.textContent = "Lambda Times";
    container.append(h1);

    const temp = document.createElement('span');
    temp.classList.add('temp');
    temp.textContent = '98°';
    container.append(temp);

    return container;
}

window.addEventListener('load', event => {
    const headerContainer = document.querySelector('.header-container');
    headerContainer.append(Header());
});