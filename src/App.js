import { useState } from "react";

function App() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState("");

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("image", image);

    const res = await fetch("http://localhost:5000/caption", {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    setResult(data.caption);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>AI Image Caption Generator</h1>

      <input 
        type="file" 
        onChange={(e) => setImage(e.target.files[0])}
      />

      <button onClick={uploadImage}>Generate Caption</button>

      <p>{result}</p>
    </div>
  );
}

export default App;
