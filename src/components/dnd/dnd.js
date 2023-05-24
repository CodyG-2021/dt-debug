import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import dataPuller from './dataPuller.js';
import Column from './column.jsx';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default class DnD extends React.Component {

  state = dataPuller();
  
  onDragStart = () => {
    // * Dont have to use these just something to think about
    //When it starts to move the text will change,
    // see onDragEnd end for it to change back to orig color
    // document.body.style.color = 'orange';
    // document.body.style.transition = 'background-color 0.2s ease';
  };

  onDragUpdate = update => {
    // * Dont have to use these just something to think about
    //As its moving change the background color 
    //Then when its done see onDragEnd for it to change back to orig color
    // const { destination } = update;
    // const opacity = destination
    // (?)<- Take off () destination.index / Object.keys(this.state.cards).length
    //  : 0;
    // document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
  };
  
  onDragEnd = result => {
    // * Dont have to use the next 4 lines just something to think about
    //Change it back to the orig color
    // document.body.style.color = 'inherit';
    //Change body back to the orig color
    // document.body.style.backgroundColor = 'inherit';

    const { destination, source, draggableId } = result;

    //No destination = nothing to do
    if (!destination) {
      return;
    }

    //See if the destination changed at all, 
    //then user dropped back where it started, nothing to do
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if ( start === finish) {
      const newCardIds = Array.from(start.cardIds);
      //Modify array newCardIds, remove one item 
      newCardIds.splice(source.index, 1);
      //Remove nothing insert the draggableId = cardId
      newCardIds.splice(destination.index, 0, draggableId);
  
      const newColumn = {
        ...start,
        cardIds: newCardIds,
      };
  
      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };
  
      this.setState(newState);
      return;
    };

    //Moving from one column to another
    const startCardIds = Array.from(start.cardIds);
    startCardIds.splice(source.index, 1);

    const newStart = {
      ...start,
      cardIds: startCardIds,
    };

    const finishCardIds = Array.from(finish.cardIds);
    finishCardIds.splice(destination.index, 0, draggableId);

    const newFinish = {
      ...finish,
      cardIds: finishCardIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    console.log(this.state);
    console.log(newState);
    this.setState(newState);
    localStorage.setItem('UserList', JSON.stringify(newState));

    //TODO: Most likely here will need to be the server update with the new order.
  };

  render() {
    return (
      <DragDropContext 
        onDragStart={this.onDragStart}
        onDragUpdate={this.onDragUpdate}
        onDragEnd={this.onDragEnd}
      >
        <Container>
          {this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId];
            const cards = column.cardIds.map(cardId => this.state.cards[cardId]);

            return <Column key={column.id} column={column} cards={cards} />;
          })}
        </Container>
      </DragDropContext>
    );
  }
};

// * Notes
// learned how to do this here:
//https://egghead.io/lessons/react-course-introduction-beautiful-and-accessible-drag-and-drop-with-react-beautiful-dnd