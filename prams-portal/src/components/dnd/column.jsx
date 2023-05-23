import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Card from './card.jsx';

const Container = styled.div`
  // border: 1px solid lightgrey;
  border-radius: 2px;
  width: 450px;
  @media (max-width: 425px) {
    width: 325px
  }
  min-width: 325px
  display: flex;
  flex-direction: column;
  `;
// const Title = styled.h3`
//   padding: 8px;
// `;
const CardList = styled.div`
  padding: 8px;
  flex-grow: 1;
  min-height: 100px;
  background-color: ${props => (props.isDraggingOver ? 'lightblue' : '#E9E9E9')}
`;

export default class Column extends React.Component {
  render() {
    return (
      <Container>
        {/* <Title>{this.props.column.title}</Title> */}
        <Droppable droppableId={this.props.column.id}>
          {(provided, snapshot) => (
            <CardList 
              ref={provided.innerRef} 
              isDraggingOver={snapshot.isDraggingOver}
              {...provided.droppableProps}
            >
              {this.props.cards.map((card, index) => (
                <Card key={card.id} card={card} index={index} />
              ))}
              {provided.placeholder}
            </CardList>
          )}
        </Droppable>
      </Container>
    );
  }
}