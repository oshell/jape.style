import styled from 'styled-components';

export const Area = styled.div`
  position: absolute;
  width: ${props => props.width}px;
  height: ${props => props.width / (16/9)}px;
  border: 3px dashed ${props => props.active ? 'blue' : '#ccc'};
  transform:
    translate(-50%, -50%)
    translate3d(
      ${props => props.position.x}px,
      ${props => props.position.y}px,
      ${props => props.position.z}px
    )
    rotateX(${props => props.rotation.x}deg)
    rotateY(${props => props.rotation.y}deg)
    rotateZ(${props => props.rotation.z}deg)
    scale(${props => props.scale});
`;
