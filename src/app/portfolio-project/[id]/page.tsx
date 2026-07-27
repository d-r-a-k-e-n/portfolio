"use client";

import { useParams } from "next/navigation";

export default function PostfolioProgectPage() {
  const { id } = useParams();
  return (
    <div>
      <h1>Postfolio Progect ID: {id as string}</h1>
    </div>
  );
}
