import * as A from "./styles.js";
import {useNavigate} from "react-router-dom";

const AboutPage = () => {
    const navigate = useNavigate();

    return (
        <A.Container>
            <A.ScrollCont>
                <A.Section bgColor="#cfbe84">
                    <h2>한줄 자기소개</h2>
                    <p>끊임없이 배우고 도전하는 프론트엔드 개발자입니다.</p>
                </A.Section>

                <A.Section bgColor="#bda66f">
                    <h2>기술 스택</h2>
                    <ul>
                        <li>JavaScript (ES6+), TypeScript</li>
                        <li>React, Redux, styled-components</li>
                        <li>Node.js, Express</li>
                        <li>Firebase, MongoDB</li>
                    </ul>
                </A.Section>

                <A.Section bgColor="#cfbe84">
                    <h2>퍼스널 밸류</h2>
                    <p>협업, 성실함, 책임감을 바탕으로 지속 가능한 성장에 집중합니다.</p>
                </A.Section>

                <A.Section bgColor="#bda66f">
                    <h2>Let's Contact!</h2>
                    <A.ButtonContainer>
                        <A.ActionButton>📮 Contact</A.ActionButton>
                        <A.ActionButton onClick={() => navigate("/")}>← Back to Main</A.ActionButton>
                    </A.ButtonContainer>
                </A.Section>
            </A.ScrollCont>
        </A.Container>
    );
};


export default AboutPage;