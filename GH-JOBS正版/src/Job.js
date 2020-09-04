import React, { useState } from "react";
import { Card, Badge, Button, Collapse } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

function Job({ job }) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title> {job.title}</Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {job.company} {new Date(job.created_at).toLocaleDateString()}
              發布
            </Card.Subtitle>
            <Badge variant="secondary" className="mr-2">
              類型:{job.type}
            </Badge>
            <Badge variant="secondary">地點:{job.location}</Badge>

            <div  style={{wordBreak:"break-all"}}> 
              <div style={{textAlign:"center"}}><em>申請面試:</em></div>
              <ReactMarkdown source={job.how_to_apply}  className="apply"
              style={{textIndent: "5em"}}
              />
            </div>
          </div>
          <img
            className="d-none d-md-block"
            height="50"
            alt={job.company}
            src={job.company_logo}
          />
        </div>
        <Card.Text 
            style={{textAlign:"center"}}
        
        >
          <Button
            onClick={() => setOpen((prevOpen) => !prevOpen)}
            variant="primary" 
          >
            {open ? "隱藏介紹" : "職位介紹"}
          </Button>
        </Card.Text>
        <Collapse in={open}>
          <div className="mt-4">
            <ReactMarkdown source={job.description} />
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
}

export default Job;
