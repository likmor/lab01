import { Table, Dropdown, DropdownButton, Accordion } from "react-bootstrap";
import useFetch from "../components/useFetch";
import { useReducer, useEffect } from "react";
import Lab05Reducer from "../data/Lab05Reducer";

function PostAccordion({ name, body }) {
  console.log(name, body);
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header style={{ fontSize: "0.9rem", padding: "0.4rem 0.6rem" }}>{name}</Accordion.Header>
        <Accordion.Body>{body}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
function TableDropdown({ name, action, dispatch }) {
  return (
    <DropdownButton title={name} id={name}>
      <Dropdown.Item onClick={() => dispatch({ type: action, sort: "asc" })}>
        Ascending order
      </Dropdown.Item>
      <Dropdown.Item onClick={() => dispatch({ type: action, sort: "desc" })}>
        Descending order
      </Dropdown.Item>
      <Dropdown.Item onClick={() => dispatch({ type: action, sort: "nat" })}>
        Natural order
      </Dropdown.Item>
    </DropdownButton>
  );
}
function Lab05() {
  const [posts] = useFetch("https://jsonplaceholder.typicode.com/posts");
  const [users] = useFetch("https://jsonplaceholder.typicode.com/users");
  const [comments] = useFetch("https://jsonplaceholder.typicode.com/comments");
  const tableData = posts.map((p) => {
    return {
      user: users.find((u) => u.id === p.userId),
      post: p,
      comments: comments.filter((c) => c.postId === p.id),
    };
  });
  const [state, tableDispatch] = useReducer(Lab05Reducer, tableData);

  useEffect(() => {
    if (posts.length && users.length && comments.length) {
      tableDispatch({ type: "init", payload: tableData });
    }
  }, [posts, users, comments]);
  return (
    <Table striped bordered hover style={{width: "900px"}}>
      <thead>
        <tr>
          <th>
            <TableDropdown
              name="User"
              action="user"
              dispatch={tableDispatch}
            ></TableDropdown>
          </th>
          <th style={{width: "900px"}}>
            <TableDropdown
              name="Post title"
              action="title"
              dispatch={tableDispatch}
            ></TableDropdown>
          </th>
          <th>
            <TableDropdown
              name="Comment count"
              action="commentCount"
              dispatch={tableDispatch}
            ></TableDropdown>
          </th>
        </tr>
      </thead>
      <tbody>
        {state.map((el) => (
          <tr key={el.post?.id}>
            <td>{el.user?.name}</td>
            <td>
              {el.post ? (
                <PostAccordion
                  name={el.post?.title}
                  body={el.post?.body}
                ></PostAccordion>
              ) : null}
            </td>
            <td>{el.comments?.length}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Lab05;
