import styled   from "styled-components";
import { motion } from 'framer-motion';

export const CardWrapper = styled(motion.div)`
  width: 400px;
  height: 500px;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`;

export const CardBackground = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transition: filter 0.3s ease;

    ${CardWrapper}:hover & {
        filter: blur(4px);
    }
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AboutButtonContainer = styled(motion.div)`
    z-index: 10;
`;

export const MyButton = styled(motion.button)`
    height: 70px;
    width: 150px;
    border-radius: 20px;
    font-size: 20px;
    background-color: #cfbe84;
    color: white;
    border: none;
    font-weight: bold;
    cursor: pointer;
  
`