import React, { useState } from 'react'
import { Tab, Nav, Button, Modal } from 'react-bootstrap'
import Conversations from './Conversations'
import Contacts from './Contacts'
import NewContactModal from './NewContactModal'
import NewConversationModal from './NewConversationModal'



export default function Sidebar({ id }) {
  const [activeKey, setActiveKey] = useState('conversations')
  const [modalOpen, setModalOpen] = useState(false)
  const conversationsOpen = activeKey === 'conversations'
  
  function closeModal() {
    setModalOpen(false)
  }

  return (
    <div style={{ width: '25%' }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={'conversations'}>聊天记录</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={'contacts'}>联系人</Nav.Link>
          </Nav.Item>
        </Nav> 
        <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={'conversations'}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={'contacts'}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border-top border-right small">
          你的微信号ID: <span className="text-muted">{id}</span>
        </div>
        <Button onClick={() => setModalOpen(true)} className="rounded-0">
          新建 {conversationsOpen ? '聊天记录' : '联系人'}
        </Button>
      </Tab.Container>

      <Modal show={modalOpen} onHide={closeModal}>
        {conversationsOpen ?
          <NewConversationModal closeModal={closeModal} /> :
          <NewContactModal closeModal={closeModal} />
        }
      </Modal>
    </div>
  )
}
