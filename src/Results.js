/*
let generated_data = [
  {
    employe_name: 'janez',
    ateendence: [
      {day: '2023-11-01', arrived: '09:00', departed: '17:23'},
      {day: '2023-11-02', arrived: '09:00', departed: '17:23'},
      {day: '2023-11-03', arrived: '09:00', departed: '17:23'},
      {day: '2023-11-04', arrived: '09:00', departed: '17:23'},
    ]
  },
  {
    name: 'micka',
    atendence: [
      {day: '2023-11-01', arrived: '09:00', departed: '17:23'},
      {day: '2023-11-02', arrived: '09:00', departed: '17:23'},
      {day: '2023-11-03', arrived: '09:00', departed: '17:23'},
      {day: '2023-11-04', arrived: '09:00', departed: '17:23'},
    ]
  },
]
*/

function Results({generated_data}) {
  
  return (
    <div className='container'>
      {generated_data.map((user_data, i) => (<div>
          <h2>{user_data.name}</h2>
        <table border={1}>
          <tr>
            <th>Dan</th>
            <th>Prihod</th>
            <th>Odhod</th>
          </tr>
          {user_data.atendence.map((daily_row) => (
          <tr>
            <td>{daily_row.day}</td>
            <td>{daily_row.arrived}</td>
            <td>{daily_row.departed}</td>
          </tr>
          ))}
        </table>
      </div>
      ))}
    </div>
  );
}

export default Results;
