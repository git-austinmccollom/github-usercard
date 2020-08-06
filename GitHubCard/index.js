import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const followersArray = ['git-austinmccollom', 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach( user => {

  axios.get(`https://api.github.com/users/${user}`)
    // the response body is put by Axios into a 'data' property of the resolved thing
    .then(function successHandler(response) {
      // the data we want is available HERE, not outside of this callback
      // DOM SURGERY THAT USES THE RESOLVED DATA NEEDS TO GO HERE
      // console.log(response);

      const card = cardMaker(response.data);

      const cards = document.querySelector('.cards');
      cards.appendChild(card);
    })
    .catch(error => {
      debugger
    })

})
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker({ avatar_url, name, login, location, html_url, followers, following, bio}) {

  // instatiate elements
  const card = document.createElement('div');
  const image = document.createElement('img');
  const cardInfo = document.createElement('div');
  const nameElement = document.createElement('h3');
  const usernameElement = document.createElement('p');
  const locationElement = document.createElement('p');
  const profile = document.createElement('p');
  const profileLink = document.createElement('a');
  const followersElement = document.createElement('p');
  const followingElement = document.createElement('p');
  const bioElement = document.createElement('p');

  // dynamically add content

  image.setAttribute('src', avatar_url);
  nameElement.textContent = name;
  usernameElement.textContent = login;
  locationElement.textContent = location;
  profileLink.setAttribute('href', html_url);
  followersElement.textContent = `followers: ${followers}`;
  followingElement.textContent = `following: ${following}`;
  bioElement.textContent = bio;

  // append and organize

  card.appendChild(image);
  card.appendChild(cardInfo);
  cardInfo.appendChild(nameElement);
  cardInfo.appendChild(usernameElement);
  cardInfo.appendChild(locationElement);
  cardInfo.appendChild(profile);
  profile.appendChild(profileLink);
  cardInfo.appendChild(followersElement);
  cardInfo.appendChild(followingElement);
  cardInfo.appendChild(bioElement);

  // style

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  nameElement.classList.add('name');
  usernameElement.classList.add('username');

  return card;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
