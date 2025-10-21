import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useReducer } from "react";
import AppReducer from "../data/AppReducer";

function chunkArray(arr, chunkSize) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
}
function MyContainer({ El, data }) {
  const [items, dispatch] = useReducer(AppReducer, data);
  const rows = chunkArray(items, 1);
  return (
    <div>
      {rows.map((pair, index) => (
        <Row key={index}>
          {pair.map((person) => (
            <Col key={person.id}>
              <El  {...person} dispatch={dispatch} />
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
}

export default MyContainer;
