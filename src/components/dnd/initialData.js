const initialData = {
  cards: {
    'card-0': { id: 'card-0', cardType: 2,},
    'card-1': { id: 'card-1', cardType: 3,},
    'card-2': { id: 'card-2', cardType: 4,},
    //! Did this to get the 3 columns to display
    // 'card-3': { id: 'card-3', cardType: 1,},
    // 2341
  },
  columns: {
    'column-1': {
      id: 'column-1',
      cardIds: ['card-0',],
    },
    'column-2': {
      id: 'column-2',
      cardIds: ['card-1',],
    },
    'column-3': {
      id: 'column-3',
      cardIds: ['card-2',],
    },
    //! Took this out to just get the three columns to display. 
    // 'column-4': {
    //   id: 'column-4',
    //   cardIds: ['card-3',],
    // },
  },
  columnOrder: ['column-1', 'column-2', 'column-3',]
};

export default initialData;

//This shows the content section of the cards, cant remember if used or not:
// 'card-3': { id: 'card-3', content: 'Cook Dinner', cardType: 1,},