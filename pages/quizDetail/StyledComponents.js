import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  height: 100vh;
  background-color: #e0f7fa;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 2rem;
  border-radius: 15px;
  width: 80%;
  max-width: 800px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #87ceeb;
  margin-bottom: 1rem;
  // text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const SearchInput = styled.input`
  width: 25%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const TopicContainer = styled.div`
  display: grid;
  width: 300px;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
  justify-content: center;
  align-items: center;
`;

export const TopicButton = styled.button`
  position: relative;
  width: 250px;
  height: 250px;
  padding: 1rem;
  margin: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #b2ebf2;
  color: white;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  }

  div {
    position: relative;
    width: 100%;
    height: 100%;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1.7rem;
  color: #87ceeb;
  margin-bottom: 1rem;
  // text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
`;

export const TopicList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 2rem;
`;

export const TopicListItem = styled.li`
  font-size: 1.4rem;
  color: #87ceeb;
  // text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
  margin: 0.5rem 0;
`;
