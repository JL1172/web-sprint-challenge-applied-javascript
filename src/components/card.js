import axios from "axios"
const Card = (article,selector) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
console.log(article)

 
  
  article.forEach(art=> {
    const card = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const headline1 = document.createElement('div');
    const authorPhoto1 = document.createElement('img');
    const byAuthorName = document.createElement('span');

    card.appendChild(headline1);
    imgContainer.appendChild(authorPhoto1);
    author.appendChild(byAuthorName); 
    card.appendChild(author);
    author.appendChild(imgContainer);
    const select = document.querySelector(selector)
    select.appendChild(card);

    card.classList.add('card');
    author.classList.add('author');
    imgContainer.classList.add('img-container');
    headline1.classList.add('headline');

    authorPhoto1.src = art.authorPhoto
    headline1.textContent = art.headline
    byAuthorName.textContent = `By ${art.authorName}`

    return select;
  }) 

}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios.get('http://localhost:5001/api/articles')
  .then(res=> {
     Card(res.data.articles.bootstrap,selector)
     Card(res.data.articles.javascript,selector)
     Card(res.data.articles.technology,selector);
     Card(res.data.articles.jquery,selector);
     Card(res.data.articles.node,selector)
      }
  )
  .catch(err=> {
    console.error(err)
  })
}

export { Card, cardAppender }
