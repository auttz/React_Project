import { useState } from "react";
function InputMirror() {
  const [text, setText] = useState("");
  const handleChange = (e: any) => {
    setText(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="กรุณาพิมพ์..."
        className="form-control w-50"
        onChange={handleChange}
      />
      <p className="mt-3">You Type: {text}</p>
    </div>
  );
}

export default InputMirror;
