import { useState } from 'react';

function App() {
  const [task, setTask] = useState(['Dance', 'Read']);
  const [newTask, setNewTask] = useState('');

  const inputChange = (e) => setNewTask(e.target.value);

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTask(t => [...t, newTask.trim()]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    setTask(prev => prev.filter((_, i) => i !== index));
  };

  const moveUp = (index) => {
    if (index > 0) {
      const updated = [...task];
      [updated[index], updated[index - 1]] = [updated[index - 1], updated[index]];
      setTask(updated);
    }
  };

  const moveDown = (index) => {
    if (index < task.length - 1) {
      const updated = [...task];
      [updated[index], updated[index + 1]] = [updated[index + 1], updated[index]];
      setTask(updated);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-6">
        TO-DO LIST
      </h1>
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Add your task here..."
          value={newTask}
          onChange={inputChange}
          className="border border-gray-400 rounded rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          ADD
        </button>
      </div>
      <ol className="w-full max-w-md space-y-3">
        {task.map((t, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white shadow-md rounded-lg px-4 py-2"
          >
            <span className="text-lg">{t}</span>
            <div className="flex gap-2">
              <button
                onClick={() => deleteTask(index)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
              <button
                onClick={() => moveUp(index)}
                className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
              >
                👆
              </button>
              <button
                onClick={() => moveDown(index)}
                className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
              >
                👇
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
