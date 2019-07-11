/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
//axios.get(`https://api.github.com/users/HannahMarieWieser`);

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/




/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
const addcard = document.querySelector('.cards')

axios.get(`https://api.github.com/users/HannahMarieWieser`)
  
.then(data => {
    console.log('sucess', data)

    
    const imageUrl = data.avatar_url;
    const realname = data.login;
    const githubname = data.login;
    const reallocation = data.location;
    const githubaddress = data.html_url;
    const followercount = data.followers;
    const followingcount = data.following;
    const userbio = data.bio;

    const element = createCard(userurl)

  })

  .catch(error => {
    console.log('not loading user', error)
  })


/*
  userimg.src = imageUrl;
nametitle.textContent = realname;
usernamep.textContent = githubname;
locationp.textContent = reallocation;
addressp.src = githubaddress;
follower.textContent = followercount;
following.textContent = followingcount;
biop.textContent = userbio;
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];






/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

//create elements
function createCard(inputObj){
  const carddiv = document.createElement('div');
  const userimg = document.createElement('img');
  const cardinfo = document.createElement('div');
  const nametitle = document.createElement('h3');
  const usernamep = document.createElement('p');
  const locationp = document.createElement('p');
  const profilep = document.createElement('p');
  const addressp = document.createElement('a');
  const follower = document.createElement('p');
  const following = document.createElement('p') 
  const biop = document.createElement('p')


  //place elements
  carddiv.appendChild(userimg);
  carddiv.appendChild(cardinfo);
  cardinfo.appendChild(nametitle);
  cardinfo.appendChild(usernamep);
  cardinfo.appendChild(locationp);
  cardinfo.appendChild(profilep);
  profilep.appendChild(addressp);
  cardinfo.appendChild(follower);
  cardinfo.appendChild(following);
  cardinfo.appendChild(biop);

  //set style classes
  carddiv.classList.add('card');
  cardinfo.classList.add('card-info');
  nametitle.classList.add('name');
  usernamep.classList.add('username');

  //add content
  userimg.src = imageUrl;
  nametitle.textContent = realname;
  usernamep.textContent = githubname;
  locationp.textContent = reallocation;
  addressp.src = githubaddress;
  follower.textContent = followercount;
  following.textContent = followingcount;
  biop.textContent = userbio;

  return carddiv
}



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
