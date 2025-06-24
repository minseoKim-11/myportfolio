import { Button } from '@mui/material';
import * as C from './styles'
const CardItem = ({ image, onAboutClick, isActive, direction }) => {

    //카드의 등장, 퇴장 위치를 설정
    const enterFromRight = {
        initial: { x: 500, y: 200, opacity: 0.4}, // 3시 방향 (오른쪽 아래)에서 시작
        animate: { x: 0, y: 0, opacity: 1 },     // 중심으로 도달
        exit: { x: -500, y: 200, opacity: 0.4 },  // 9시 방향 (왼쪽 옆)로 사라짐
    };

    const variants = direction === 'in' ? enterFromRight : enterFromRight;

    return (
        <C.CardWrapper
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
            <C.CardBackground style={{ backgroundImage: `url(${image})` }} />

            <C.Overlay>
                {isActive && (
                    <C.AboutButtonContainer
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.1 }}
                    >
                        <C.MyButton variant="contained" onClick={onAboutClick}>
                            + Details
                        </C.MyButton>
                    </C.AboutButtonContainer>
                )}
            </C.Overlay>
        </C.CardWrapper>

    );
};

export default CardItem;