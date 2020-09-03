import React from 'react'

import { Form, Col } from 'react-bootstrap'

  export default function SearchForm({ params, onParamChange }) {
  return (
<Form className="mb-4">
  <Form.Row className="align-items-end">
    <Form.Group as={Col}>
      <Form.Label>職位描述</Form.Label>
      <Form.Control onChange={onParamChange} value={params.description} name="description" type="text" />
    </Form.Group>
    <Form.Group as={Col}>
      <Form.Label>工作地點</Form.Label>
      <Form.Control onChange={onParamChange} value={params.location} name="location" type="text" />
    </Form.Group>
    <Form.Group as={Col} xs="auto" className="ml-2">
      <Form.Check onChange={onParamChange} value={params.full_time} name="full_time" id="full-time" label="只看全職工作" type="checkbox" className="mb-2" />
    </Form.Group>
  </Form.Row>
</Form>
  )
}
