import styled from 'styled-components';
import image from '../images/im.jpg';

export default function Theme() {
  return styled.div`
    background-image: url(${image});
    background-position: center;
    object-fit: fill;
    margin: 10px;
  `;
}
