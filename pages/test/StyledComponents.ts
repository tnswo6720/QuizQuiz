import styled from "@emotion/styled";

const commonSectionStyle = `
  max-width: 50%;
  padding: 0;
  margin: 0;
  background-color: #e0f7fa;
  color: #00838f;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(100px, auto);
  justify-items: stretch;
  align-items: start;
  background-color: #ffffff;
  padding: 0 20px;
  gap: 20px;
`;

export const QuizCreationSection = styled.div`
  ${commonSectionStyle}
  margin-bottom: 20px;
`;

export const QuizPreviewSection = styled.div`
  ${commonSectionStyle}
  padding: 15px;
`;

export const Button = styled.button`
  background-color: #ffffff;
  color: #00838f;
  border-radius: 5px;
  padding: 10px 10px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #b2dfdb;
  }
`;

export const DropdownButton = styled(Button)`
  padding: 10px 20px;
`;

export const Section = styled.section`
  background-color: #ffffff;
  color: #00838f;
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 20px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #ffff00;
  }
`;

export const SectionTitle = styled.h5`
  margin-bottom: 10px;
`;

export const SectionContent = styled.p`
  font-size: 0.8125rem;
`;
