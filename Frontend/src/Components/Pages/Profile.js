import React,{ useState }  from 'react';

const Profile = () => {
  



  const [data, setData] = useState([
    ['Name', 'PNR', 'subject1','Subject2','Subject3','Subject4','Branch',''],
    ['', '', '','','','','',''],
    ['', '', '','','','','',''],
    ['', '', '','','','','',''],
    ['', '', '','','','','',''],
    ['', '', '','','','','',''],
    ['', '', '','','','','',''],
    ['', '', '','','','','',''],
    ['', '', '','','','','',''],
    ['', '', '','','','','',''],
    ['', '', '','','','','',''],
    ['', '', '','','','','',''],
    ['', '', '','','','','',''],
    ['', '', '','','','','',''],
    ['', '', '','','','','',''],
    ['', '', '','','','','',''],
    ['', '', '','','','','',''],
    ['', '', '','','','','',''],
    ['', '', '','','','','',''],
    ['', '', '','','','','',''],
    ['', '', '','','','','',''],
    ['', '', '','','','','',''],
    ['', '', '','','','','',''],
    ['', '', '','','','','',''],
    ['', '', '','','','','',''],
    ['', '', '','','','','',''],
    ['', '', '','','','','',''],
    ['', '', '','','','','',''],
    ['', '', '','','','','',''],
    ['', '', '','','','','',''],
  ]);

  const handleChange = (rowIndex, colIndex, event) => {
    const newData = data.map((row, rIndex) =>
      row.map((cell, cIndex) =>
        rowIndex === rIndex && colIndex === cIndex ? event.target.value : cell
      )
    );
    setData(newData);
  };

  return (
    <div className="App">
      <table>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>
                  <input
                    type="text"
                    value={cell}
                    onChange={(event) => handleChange(rowIndex, colIndex, event)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    
  );
};

export default Profile;
