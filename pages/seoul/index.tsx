/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore"; // Add these imports
import { firebaseapp } from "../../src/commons/libraries/firebase"; // Assume you have firebaseApp which is initialized app

const ItemWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 7px;
`;

const Item = styled.div`
  aspect-ratio: 6 / 5;
  position: relative;
  overflow: hidden;
  border-radius: 10px;

  &:after {
    content: "";
    display: block;
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    opacity: 0;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const ImgBox = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.4s ease-in-out;
  }
`;
const TextBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: -5px;
  left: -5px;
  display: flex;
  flex-direction: column; // corrected from 'colum'
  justify-content: flex-end;
  align-items: flex-start;

  // Removed negative padding-left
  // Changed z-index to a positive value

  padding-left: 20px;
  z-index: 3;

  p {
    color: black;
    margin-top: -5px;
  }

  .textBox__name {
    font-size: 22px; // corrected from '-22px'
    font-weight: 500; // corrected from '-500'
    opacity: 0.5; // corrected from '-50%'

    // Corrected transform syntax

    transform: translateY(-50%);
  }

  .textBox__price {
    font-size: 16px; // corrected from '-16px'
    font-weight: 400; // corrected from '-400'
    opacity: 0.5; // corrected from '-50%'

    // Corrected transform syntax

    transform: translateY(-50%);
  }
`;

// interface CardComponentProps {
//   src: string;
//   name: string;
//   price: string;
// }
export default function CardComponent(): JSX.Element {
  interface DocumentData {
    id?: string;
    src?: string;
    writer: string;
    price?: string;
  }

  const [dataBoards, setDataBoards] = useState<DocumentData[]>([]);

  useEffect(() => {
    const fetchBoards = async (): Promise<void> => {
      const board = collection(getFirestore(firebaseapp), "board");
      const result = await getDocs(board);
      const boards = result.docs.map((el) => el.data() as DocumentData); // Cast to DocumentData
      setDataBoards(boards);
    };
    void fetchBoards();
  }, []);

  return (
    <ItemWrap>
      {dataBoards.map((board: any) => (
        <Item key={board.id}>
          <ImgBox>
            <img src={board.src} alt={board.writer} />
          </ImgBox>
          <TextBox>
            <p className="textBox__name">{board.writer}</p>
            <p className="textBox__price">{board.writer}</p>
          </TextBox>
        </Item>
      ))}
    </ItemWrap>
  );
}
