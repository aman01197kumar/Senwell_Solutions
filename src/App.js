import React from "react";
import data from "./data.json";


export default function App() {
  const [tableData, setTableData] = React.useState({});

  const getRowColor = (count) => {
    if (count <= 2) {
      return "#f8d7da";
    } else if (count >= 3 && count <= 9) {
      return "#fff3cd";
    } else {
      return "#d4edda";
    }
  };

  function countOccurrences(names) {
    const nameCounts = {};
    names.forEach((name) => {
      if (name in nameCounts) {
        nameCounts[name]++;
      } else {
        nameCounts[name] = 1;
      }
    });
    return nameCounts;
  }

  React.useEffect(() => {
    const nameCounts = countOccurrences(data?.name);
    setTableData(nameCounts);
  }, []);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(tableData).map(([name, count]) => (
            <tr key={name} style={{ background: getRowColor(count) }}>
              <td>{name}</td>
              <td>{count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
