import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState(["例）Reactの勉強をする"]);
  const [inputText, setInputText] = useState("");

  // 【useEffect】todos（タスクのリスト）が変更されるたびに実行される
  useEffect(() => {
    document.title = `タスク件数: ${todos.length}件`;
    console.log("タスクが更新されました:", todos);
  }, [todos]); // [todos] を指定することで、todosが変わったときだけに反応する

  const addTodo = (e) => {
    e.preventDefault();
    if (inputText.trim() === "") return;
    setTodos([...todos, inputText]);
    setInputText("");
  };

  const deleteTodo = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif", color: "#fff", maxWidth: "500px", margin: "0 auto" }}>
      <h1>📝 進化したTODOリスト</h1>
      <p style={{ color: "#aaa" }}>現在のタスク数: {todos.length}件</p>

      <form onSubmit={addTodo} style={{ marginBottom: "20px" }}>
        <input 
          type="text" 
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="新しいタスクを入力..."
          style={{ padding: "10px", fontSize: "16px", width: "70%", marginRight: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        <button 
          type="submit"
          style={{ padding: "10px 15px", fontSize: "16px", cursor: "pointer", backgroundColor: "#61dafb", border: "none", borderRadius: "4px", fontWeight: "bold" }}
        >
          追加
        </button>
      </form>

      {/* 【条件分岐】タスクが0件のときと、あるときで表示を切り替える */}
      {todos.length === 0 ? (
        <p style={{ textAlign: "center", color: "#888", padding: "20px" }}>
          現在、タスクはありません。素晴らしい！✨
        </p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {todos.map((todo, index) => (
            <li 
              key={index} 
              style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center", 
                background: "#222", 
                padding: "10px 15px", 
                marginBottom: "10px", 
                borderRadius: "6px",
                border: "1px solid #444"
              }}
            >
              <span>{todo}</span>
              <button 
                onClick={() => deleteTodo(index)}
                style={{ backgroundColor: "#ff4d4d", color: "#fff", border: "none", padding: "5px 10px", borderRadius: "4px", cursor: "pointer" }}
              >
                削除
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;