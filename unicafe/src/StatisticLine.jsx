const StatisticLine = ({ text, result }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{result}</td>
    </tr>
  );
};
export default StatisticLine;
