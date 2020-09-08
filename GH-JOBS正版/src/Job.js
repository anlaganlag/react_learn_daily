import React, { useState } from "react";
import { Card, Badge, Button, Collapse } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

function Job({ job,idx }) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title> {idx+1}.{job.title}</Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {job.company}  -
              {new Date(job.created_at).toLocaleDateString()} 發布
            </Card.Subtitle>
            <Badge variant="secondary" className="mr-2">
              類型:{job.type}
            </Badge>
            <Badge variant="secondary">地點:{job.location}</Badge>

            <div className="pack" style={{ wordBreak: "break-all" }}>
                {/* <strong className="add">申請方式:</strong> */}
              <ReactMarkdown className="apply" source={job.how_to_apply} />
            </div>
          </div>
          <img
            className="d-none d-md-block"
            height="70"
            alt={job.company}
            src={job.company_logo}
          />
        </div>
        <Card.Text >
          <Button
            onClick={() => setOpen((prevOpen) => !prevOpen)}
            variant="primary"
          >
            {open ? "隱藏" : "詳細"}
          </Button>

        </Card.Text>
        <Collapse in={open}>
          <div className="mt-4">
            <ReactMarkdown source={job.description} />
          </div>
        </Collapse>
        {
          open ? 
          <Button
            onClick={() => setOpen((prevOpen) => !prevOpen)}
            variant="primary"
          >
           隱藏
          </Button>:""
}

      </Card.Body>
    </Card>
  );
}

export default Job;
