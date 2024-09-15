
import './App.css';
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Study", 3],
  ["Eat", 2],
  ["Commute", 4],
  ["Social Network", 3],
  ["Sleep", 8],
];

export const options = {
  title: "Моя повседневная активность",
  is3D: true,
};

function App() {
  return (
    <div className="App">
      <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
    </div>
  );
}

export default App;
