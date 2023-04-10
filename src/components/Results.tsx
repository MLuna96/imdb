import { MovieInterface } from "@/interfaces/tmdb";
import React from "react";

interface ResultsProps {
  results: MovieInterface[];
}

const Results = ({ results }: ResultsProps) => {
  return (
    <div>
      {results.map((result) => {
        return <div key={result.id}>{result.original_title}</div>;
      })}
    </div>
  );
};

export default Results;
