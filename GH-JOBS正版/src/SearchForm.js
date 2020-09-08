import React from "react";
import { Form, Col } from "react-bootstrap";

function SearchForm({ params, onParamChange }) {
  return (
    <Form className="mb-4">
      <Form.Row className="align-items-end">
        <Form.Group as={Col}>
          <Form.Label>工作地點</Form.Label>
          <Form.Control
            onChange={onParamChange}
            value={params.location}
            name="location"
            type="text"
          />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>職位描述</Form.Label>
          <Form.Control
            onChange={onParamChange}
            value={params.description}
            name="description"
            type="text"
          />
        </Form.Group>


        <Form.Group as={Col} xs="auto" className="ml-2">
          <Form.Check
            onChange={onParamChange}
            value="on"
            name="full_time"
            label="全職"
            type="checkbox"
            className="mb-2"
          />

        </Form.Group>
      </Form.Row>
    </Form>
  );
}

//job的json數據
// [{
// 	"id": "15a4d84d-d856-4bab-a079-f2fe407ae494",
// 	"type": "Full Time",
// 	"url": "https://jobs.github.com/positions/15a4d84d-d856-4bab-a079-f2fe407ae494",
// 	"created_at": "Thu Sep 03 20:04:04 UTC 2020",
// 	"company": "CitizenLab",
// 	"company_url": "http://www.citizenlab.co",
// 	"location": "Brussels",
// 	"title": "Senior Full-Stack Engineer",
// 	"description": "....",
// 	"how_to_apply": "....",
// 	"company_logo": "...."
// },
export default SearchForm;
