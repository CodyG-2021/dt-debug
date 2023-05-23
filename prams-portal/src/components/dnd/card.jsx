import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import CardLookup from './cardLookup';


const Container = styled.div`
  border: 2px solid;
  border-radius: 25px;
  box-shadow: 2px 2px 1px black;
  min-height: 400px;
  //padding: 5px;
  margin-bottom: 15px;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')}
`;

export default class Card extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.card.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            {...provided.draggableProps}
            // ? There was a lesson that allows for custom 
            // ? drag handles if need be, #8 
            {...provided.dragHandleProps}
          >
            {/* {this.props.card.content}
            {this.props.card.cardType} */}
            <CardLookup 
              cardType={this.props.card.cardType} 
              cardContent={this.props.card.content}>
            </CardLookup>            
          </Container>
        )}
      </Draggable>
    );
  }
}