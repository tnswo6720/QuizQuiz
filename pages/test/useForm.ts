import { useState, useEffect } from "react";
import type { ChangeEvent, FormEvent } from "react";

interface FormState {
  language: string;
  code: string;
}

type CommentRules = Record<string, string>;

interface SubSubjectData {
  [key: string]: string[];
}

export const useForm = (
  initialFormState: FormState,
  commentRules: CommentRules,
  subjectData: string[],
  subSubjectData: SubSubjectData
) => {
  const [formState, setFormState] = useState(initialFormState);
  const [customSubject, setCustomSubject] = useState("");
  const [customSubSubject, setCustomSubSubject] = useState("");
  const [subject, setSubject] = useState("");
  const [subSubject, setSubSubject] = useState("");

  useEffect(() => {
    setSubSubject("");
  }, [subject]);

  const handleCustomSubjectChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    setCustomSubject(e.target.value);
  };

  const handleAddSubject = (): void => {
    if (customSubject && !subjectData.includes(customSubject)) {
      setSubjectData((prevSubjectData) => [...prevSubjectData, customSubject]);
      setSubject(customSubject);
      setCustomSubject("");
    }
  };

  const handleCustomSubSubjectChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    setCustomSubSubject(e.target.value);
  };

  const handleAddSubSubject = (): void => {
    if (
      customSubSubject &&
      subject &&
      !subSubjectData[subject]?.includes(customSubSubject)
    ) {
      setSubSubjectData((prevSubSubjectData) => ({
        ...prevSubSubjectData,
        [subject]: prevSubSubjectData[subject]
          ? [...prevSubSubjectData[subject], customSubSubject]
          : [customSubSubject],
      }));
      setSubSubject(customSubSubject);
      setCustomSubSubject("");
    }
  };

  const handleSubjectChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setSubject(e.target.value);
  };

  const handleSubSubjectChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setSubSubject(e.target.value);
  };

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    const commentPrefix =
      formState?.language !== "" ? commentRules[formState.language] : "// ";
    const newCode = formState?.code
      ? formState.code
          .split("\n")
          .map((line) => commentPrefix + line)
          .join("\n")
          .replace(/`/g, "\\`")
      : "";

    setFormState({
      ...formState,
      code: newCode,
    });

    console.log(formState);
  };

  return {
    formState,
    customSubject,
    customSubSubject,
    subject,
    subSubject,
    handleCustomSubjectChange,
    handleAddSubject,
    handleCustomSubSubjectChange,
    handleAddSubSubject,
    handleSubjectChange,
    handleSubSubjectChange,
    handleChange,
    handleSubmit,
  };
};
