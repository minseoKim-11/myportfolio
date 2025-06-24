import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Index from '../CardItem';
import * as P from "./styles"
import projects from "../../data/projects"
import useCardController from '../../hooks/useCardController';

const PortfolioControll = () => {
    const { activeIndex, visibleIndex, isAnimating, nextCard } = useCardController(projects);
    const navigate = useNavigate();

    const handleAboutClick = () => {
        navigate(`/project/${projects[activeIndex].id}`);
    };

    return (
        <P.ScrollContainer
            onScroll={(e) => {
                const bottom =
                    e.currentTarget.scrollTop + e.currentTarget.clientHeight >=
                    e.currentTarget.scrollHeight;
                if (bottom) nextCard();
            }}
        >
            <P.CenteredView>
                <AnimatePresence mode="wait">
                    <Index
                        key={projects[visibleIndex].id}
                        image={projects[visibleIndex].image}
                        onAboutClick={handleAboutClick}
                        isActive={true}
                        direction="in"
                    />
                </AnimatePresence>
            </P.CenteredView>
        </P.ScrollContainer>
    );
};

export default PortfolioControll;