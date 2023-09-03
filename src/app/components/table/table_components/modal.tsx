import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
interface IProps {
    showModal: boolean;
    setshowModal: (v: boolean) => void
}

export default function Popup(props: IProps) {
    const { showModal, setshowModal } = props

    const [title, setTitle] = useState<string>("")
    const [author, setAuthor] = useState<string>("")
    const [content, setContent] = useState<string>("")


    const handleSubmit = () => {
        console.log("check data :", title, author, content)
    }

    const handleCloseSubmit = () => {
        setTitle(" ")
        setAuthor(" ")
        setContent(" ")
        setshowModal(false)
    }
    return (
        <div>


            <Modal
                show={showModal}
                onHide={() => handleCloseSubmit()}
                backdrop="static"
                keyboard={false}
            >   size ="lg"

                <Modal.Header closeButton>
                    <Modal.Title>Add a new blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>



                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="tmail"
                                placeholder="Title..."
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Author</Form.Label>
                            <Form.Control
                                type="tmail"
                                placeholder="Author..."
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                            <Form.Label>Content</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </Form.Group>
                    </Form>



                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleCloseSubmit()}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmit()}>Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}





