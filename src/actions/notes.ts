"use server";

import { getUser } from "@/auth/server";
import { prisma } from "@/db/prisma";
import { handleError } from "@/lib/utils";
import { cohere } from "@/cohere";

export const createNoteAction = async (noteId: string) => {
  try {
    const user = await getUser();
    if (!user) throw new Error("You must be logged in to create a note");

    await prisma.note.create({
      data: {
        id: noteId,
        authorId: user.id,
        text: "",
      },
    });
    return { errorMessage: null };
  } catch (error) {
    return handleError(error);
  }
};

export const updateNoteAction = async (noteId: string, text: string) => {
  try {
    const user = await getUser();
    if (!user) throw new Error("You must be logged in to update a note");

    await prisma.note.update({
      where: {
        id: noteId,
      },
      data: { text },
    });
    return { errorMessage: null };
  } catch (error) {
    return handleError(error);
  }
};

export const deleteNoteAction = async (noteId: string) => {
  try {
    const user = await getUser();
    if (!user) throw new Error("You must be logged in to delete a note");

    await prisma.note.delete({
      where: {
        id: noteId,
        authorId: user.id,
      },
    });
    return { errorMessage: null };
  } catch (error) {
    return handleError(error);
  }
};

export const askAIAboutNotesAction = async (
  newQuestions: string[],
  responses: string[],
) => {
  const user = await getUser();
  if (!user) throw new Error("You must be logged in to ask AI questions");

  const notes = await prisma.note.findMany({
    where: {
      authorId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
    select: {
      text: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (notes.length === 0) {
    return "You don't have any notes yet";
  }

  const formattedNotes = notes
    .map(
      (note) =>
        `Text: ${note.text}\nCreated at: ${note.createdAt}\nLast updated: ${note.updatedAt}`,
    )
    .join("\n");

  const prompt = `
      You are an AI assistant that answers questions based on the user's notes. 
      Assume all questions are related to the user's notes.
      Keep your answers short and concise.
      Format your responses in valid HTML using appropriate tags like <p>, <strong>, <ul>, <li>, etc.
      
      Here are the user's notes:
      ${formattedNotes}
      
      User's question:
      ${newQuestions[newQuestions.length - 1]}
    `;

  const response = await cohere.generate({
    model: "command-r-plus",
    prompt,
    maxTokens: 300,
    temperature: 0.7,
  });

  return (
    response.generations[0]?.text ||
    "An error occurred while generating a response."
  );
};
