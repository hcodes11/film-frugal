import styled from 'styled-components';
import image from '../images/Logo.jpg';

export default function Background() {
  return styled.div`
    background-image: url(${image});
    display: flex;
    align-center: center;
    background-repeat: no-repeat;
  `;
}
