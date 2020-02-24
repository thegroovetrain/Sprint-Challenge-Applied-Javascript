// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let filteredTopic = '';

const tabFactory = (topic) => {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = topic;

    tab.addEventListener('click', event => {
        const cards = document.querySelectorAll('.card');
        const cleanTopic = topic.replace('.js', '');

        if (filteredTopic != cleanTopic) {
            filteredTopic = cleanTopic;
            cards.forEach(card => {
                if (card.getAttribute('data-topic') == filteredTopic) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        } else {
            filteredTopic = '';
            cards.forEach(card => {
                card.style.display = 'flex';
            });
        }
    });

    return tab;
}

const topicsContainer = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then( response => {
        response.data.topics.forEach(topic => {
            topicsContainer.append(tabFactory(topic));
        });
    })
    .catch( error => console.log(error));