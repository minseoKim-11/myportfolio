import styled from 'styled-components';

export const PageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #fffaf3;
    padding-top: 100px; /* ✅ NavBar 높이 고려해서 내림 */
`;

export const Content = styled.div`
    width: 100%;
    max-width: 720px;
    padding: 20px;
    text-align: center;
`;

export const ProjectImage = styled.img`
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
`;

export const ProjectTitle = styled.h1`
    margin-top: 30px;
    color: #333;
`;

export const Description = styled.p`
    margin-top: 20px;
    color: #555;
`;

export const BackButton = styled.button`
  margin-top: 40px;
  padding: 10px 20px;
  background-color: #cfbe84;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #bda66f;
  }
`;
