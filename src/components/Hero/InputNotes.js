import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";

export default function InputNotes({ addNotes }) {
  const [judul, setJudul] = useState("");
  const [catatan, setCatatan] = useState("");
  const [count, setCount] = useState(50);

  const onHandlerNote = e => {
    e.preventDefault();
    addNotes(judul, catatan);
  };

  return (
    <>
      <Container>
        <Card>
          <Card.Header as="h5">Ayoo Tulis Catatan !!!</Card.Header>
          <Card.Body>
            <Form onSubmit={onHandlerNote} className="col-12">
              <p className="text-end">Sisa Huruf :{count - judul.length}</p>
              <h3 className="mb-4 text-center"></h3>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  value={judul}
                  onChange={e => setJudul(e.target.value.slice(0, count))}
                  placeholder="Ini adalah judul ...."
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  value={catatan}
                  onChange={e => setCatatan(e.target.value)}
                  rows={9}
                  placeholder="Tuliskan Catatan Disini...."
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
