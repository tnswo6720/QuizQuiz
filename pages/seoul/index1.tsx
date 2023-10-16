import React, { useEffect, useState } from "react";
import CardComponent from ".";
import firebase from "../firebase"; // 경로 확인

// Define the types for the data
interface DataType {
  writer: string;
  id: string;
  src: string;
  content: string;
  title: string;
}

export default function App(): JSX.Element {
  const [data, setData] = useState<DataType[]>([]); // Specify the type for state

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const db = firebase.firestore();
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
    }); // Error handling for promise
  }, []);

  return (
    <>
      {data.map((item) => (
        <CardComponent
          key={item.id}
          src={item.writer}
          name={item.title}
          price={item.content}
        />
      ))}
    </>
  );
}
