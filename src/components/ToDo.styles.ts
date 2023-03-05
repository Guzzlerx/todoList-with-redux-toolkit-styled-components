import styled from 'styled-components';

export const WrapperToDo = styled.div`
  height: 30px;
  width: 200px;
  border: 0.5px solid black;
  border-radius: 5px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledTitle = styled.div`
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-decoration: ${(props) => props.defaultChecked && 'line-through'};
`;
