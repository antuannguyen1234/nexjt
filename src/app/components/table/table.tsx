
import { Button } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import table_style from "@/app/styles/components.module.css"
import Popup from './table_components/modal';
import { useState } from 'react';

interface IProps {
    blogs: IBlog[]
}

export default function Apptable(props: IProps) {
    const { blogs } = props
    const [showModal, setshowModal] = useState<boolean>(false)

    return (
        <div className="navigator">
            <div className={table_style['navigator_headers']}>
                <h1>Table Blog</h1>

                <Button onClick={() => setshowModal(true)} > Add New</Button>
            </div>

            <Table bordered hover striped="column">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map(blog => {
                        return (
                            <tr key={blog.id}>

                                <td>{blog.id}  </td>
                                <td>{blog.title}</td>
                                <td>{blog.author}</td>
                                <td >
                                    <Button variant="outline-primary" className="mx-2" size="sm"> View</Button>
                                    <Button variant="outline-warning" className="mx-2" size="sm"> Edit</Button>
                                    <Button variant="outline-danger" className="mx-2" size="sm"> Delete</Button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </Table>

            <Popup
                showModal={showModal}
                setshowModal={setshowModal} />
        </div>
    )
}