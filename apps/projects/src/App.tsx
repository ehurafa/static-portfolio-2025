import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoApp from './projects/todo-app/App';
// @ts-ignore - Weather app uses .jsx which TypeScript doesn't recognize by default
import WeatherApp from './projects/weather/src/App';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/todo-app" element={<TodoApp />} />
        <Route path="/weather-app" element={<WeatherApp />} />
        <Route path="/" element={<TodoApp />} />
      </Routes>
    </Router>
  );
}
