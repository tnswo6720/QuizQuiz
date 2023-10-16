import "firebase/firestore";
import React, { useEffect, useState } from "react";
import { firebaseapp } from "../../src/commons/libraries/firebase"; // Check this import path
import DisplayComponent from "./DisplayComponet"; // Corrected the typo

// Define the types for the data
interface DataType {
  id: string;
  img: string;
  title: string;
  content: string;
  star: number;
}

export default function DataFetcher(): JSX.Element {
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const db = firebaseapp.firestore(); // Changed this line
      const data = await db.collection("board").get();
      setData(
        data.docs.map((doc: any) => ({
          ...(doc.data() as DataType),
          id: doc.id,
        }))
      );
    };
    fetchData().catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <>
      {data.map((item) => (
        <DisplayComponent
          key={item.id}
          img={item.img}
          title={item.title}
          content={item.content}
          star={item.star}
        />
      ))}
    </>
  );
}
