//alert(document.cookie);
window.location.href = "http://www.w3schools.com";

const nextURL = 'http://164.92.155.120/team';
const nextTitle = 'Team';
const nextState = { additionalInformation: 'Updated the URL with JS' };

// This will create a new entry in the browser's history, without reloading
window.history.pushState(nextState, nextTitle, nextURL);
