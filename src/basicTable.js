import "./basicTable.css";

const BasicTable = ({ coins }) => {
  return (
    <div className="table-container">
      <table>
        <tr>
          <th>Coin</th>
          <th>Price</th>
          <th>24h high</th>
          <th>24h</th>
          <th>Mkt Cap</th>
        </tr>
        {coins.map((val, key) => {
          return (
            <tr key={key}>
              <td>
                <img className="coinImage" src={val.image} />
                {val.name}
              </td>
              <td>{val.current_price}</td>
              <td>{val.high_24h}</td>
              <td>{val.price_change_percentage_24h}%</td>
              <td>{val.market_cap}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default BasicTable;
