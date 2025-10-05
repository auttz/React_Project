type HobbylistProps = {
  hobbies: string[];
};

function Hobbylist({hobbies}: HobbylistProps) {
  return (
    <div>
      <ul className="list-group">
        {hobbies.map((hobby) => (
          <li key={hobby} className="list-group-item">{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
export default Hobbylist;
