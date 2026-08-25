import { useNavigate } from "react-router-dom";
import { useField } from "../hooks";
import { useAnecdotes } from "../hooks/useAnecdotes";

const CreateNew = () => {
  const navigate = useNavigate();
  const { addAnecdote } = useAnecdotes();

  const contentField = useField("text");
  const authorField = useField("text");
  const infoField = useField("text");

  const handleSubmit = (e) => {
    e.preventDefault();
    addAnecdote({
      content: contentField.vals.value,
      author: authorField.vals.value,
      info: infoField.vals.value,
      votes: 0,
    });
    navigate("/");
  };

  const handleReset = () => {
    contentField.reset();
    authorField.reset();
    infoField.reset();
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...contentField.vals} />
        </div>
        <div>
          author
          <input {...authorField.vals} />
        </div>
        <div>
          url for more info
          <input {...infoField.vals} />
        </div>
        <button>create</button>{" "}
        <button type="button" onClick={handleReset}>
          reset
        </button>
      </form>
    </div>
  );
};

export default CreateNew;
