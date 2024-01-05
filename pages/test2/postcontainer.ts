// styles/PostDetailStyles.tsx
import styled from "@emotion/styled";

export const PostContainer = styled.article`
  max-width: 800px;
  margin: 50px auto;
  padding: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h1 {
    margin-bottom: 20px;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin-bottom: 20px;
  }

  .post-content {
    line-height: 1.6;
  }
`;
