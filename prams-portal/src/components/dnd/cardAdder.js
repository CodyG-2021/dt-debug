// import React from 'react'
import initialData from './initialData';

function cardAdd (data) {
  //grab the existing length of the cards method and use it for a new card
  const newCard = `card-${Object.keys(data.cards).length}`
  data.cards[newCard] = {id: newCard, content: 'Am I Alive?', cardType: 1};
  // ! Need to add in more here like have it go to a modal form or something
  // console.log(newCard)
  // console.log(data.cards['card-4'])
  
  data.columns['column-1'].cardIds.push(newCard);
  
  // console.log(data.columns)
  // console.log(data)

  localStorage.setItem('UserList', JSON.stringify(data))

  window.location.reload(false);
};

function handleClick () {
  let data = '';

  if (localStorage.getItem('UserList')) {
    console.log('Set to user data card list');
    data = JSON.parse(localStorage.getItem('UserList'));
  } else {
    console.log('Set to user data init');
    data = initialData;
    // console.log(`data init ${data}`)
  }
  // console.log(Object.keys(data.cards))
  // console.log(`card-${(Object.keys(data.cards).length)}`)
  cardAdd(data);
};

export default handleClick;