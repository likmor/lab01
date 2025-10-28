import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext } from "react";
import AppContext from "../data/AppContext";

function chunkArray(arr, chunkSize) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
}
function MyContainer({ El }) {
  const context = useContext(AppContext);
  const items = context.items;
  const dispatch = context.dispatch;
  const rows = chunkArray(items, 1);
  return (
    <div>
      {rows.map((pair, index) => (
        <Row key={index}>
          {pair.map((person) => (
            <Col key={person.id}>
              <El {...person} dispatch={dispatch} />
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
}

export default MyContainer;
