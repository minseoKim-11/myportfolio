import { useParams, useNavigate } from 'react-router-dom';
import projects from '../../data/projects';
import * as P from './styles';
const ProjectDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find((p) => p.id === Number(id));

    if (!project) return <P.PageWrapper><P.Content><p>존재하지 않는 프로젝트입니다.</p></P.Content></P.PageWrapper>;

    return (
        <P.PageWrapper>
            <P.Content>
                <P.ProjectImage src={project.image} alt="project" />
                <P.ProjectTitle>Project #{project.id}</P.ProjectTitle>
                <P.Description>{project.description || '이 프로젝트에 대한 설명이 여기에 들어갑니다.'}</P.Description>
                <P.BackButton onClick={() => navigate(-1)}>← Back to Portfolio</P.BackButton>
            </P.Content>
        </P.PageWrapper>
    );
};

export default ProjectDetailPage;
