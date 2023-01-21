import './App.css';
import Chart from './components/Chart';
import Form from './components/Form';

function App() {
  return (
    <div className="App lg:max-w-screen-lg mx-auto drop-shadow-lg">
      <h1 className="text-center text-white py-8 bg-slate-800 text-4xl xl:rounded">Expense Tracker</h1>
      <div className="grid md:grid-cols-2 py-8">
        <Chart />
        <Form />
      </div>
    </div>
  );
}

export default App;
