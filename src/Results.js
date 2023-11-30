
function Results() {
  const users = ['janez', 'micka', 'franc'];

  return (
    <div className='container'>
      {users.map((user, i) => (<div>
          <h2>{user}</h2>
        <table>
          <th>
            <td>Dan</td>
            <td>Prihod</td>
            <td>Odhod</td>
          </th>
          <tr>

          </tr>
        </table>
      </div>
      ))}
    </div>
  );
}

export default Results;
