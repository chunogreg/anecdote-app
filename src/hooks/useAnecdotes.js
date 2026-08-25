import { useEffect, useState } from "react";
import anecdoteServices from "../services/anecdotes";

export const useAnecdotes = () => {
  const [anecdotes, setAnecdotes] = useState([]);

  useEffect(() => {
    anecdoteServices.getAll().then((data) => setAnecdotes(data));
  }, []);

  const addAnecdote = (anec) => {
    anecdoteServices.createNew(anec).then((data) => {
      const newAnecdotes = anecdotes.concat(data);
      setAnecdotes(newAnecdotes);
      // console.log("======ADDED ANECDOTES======", data);
    });
  };

  const deleteAnecdote = (id) => {
    anecdoteServices.remove(id).then(() => {
      const filteredAnecdotes = anecdotes.filter((anec) => anec.id !== id);
      setAnecdotes(filteredAnecdotes);
    });
  };

  return {
    anecdotes,
    addAnecdote,
    deleteAnecdote,
  };
};
