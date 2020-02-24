// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardFactory = (article) => {
    const card = document.createElement('div');
    card.setAttribute('data-topic', article.category)
    card.classList.add('card');

    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = article.headline;
    card.append(headline);

    const author = document.createElement('div');
    author.classList.add('author');
    card.append(author);

    const imgContainer = document.createElement('img');
    imgContainer.classList.add('img-container');
    imgContainer.setAttribute('src', article.authorPhoto);
    author.append(imgContainer);

    const authorName = document.createElement('span');
    authorName.textContent = `By ${article.authorName}`;
    author.append(authorName);

    return card;
}

const cardsContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then( response => {
        const articles = response.data.articles;
        for (const category in articles) {
            articles[category].forEach( article => {
                article.category = category;
                cardsContainer.append(cardFactory(article, category));
            });
        }
    })
    .catch( error => console.log(error) );