import { Note } from "@prisma/client";
import React from "react";

type Props = {
  notes: Note[];
};

function SidebarGroupContent({ notes }: Props) {
  console.log(notes);
  return <div>SidebarGroupContent</div>;
}

export default SidebarGroupContent;
