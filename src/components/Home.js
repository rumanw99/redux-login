import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

const Home = () => {
    const contacts = useSelector((state) => state);

    const dispatch = useDispatch();

    const deleteContact = (id) => {
        dispatch({ type: "DELETE_CONTACT", payload: id });
        toast.success("Contact Delete successfully!");
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12 my-5 text-right">
                    <Link to='/add' className='btn btn-outline-primary'>
                        Add Contact
                    </Link>
                </div>
                <div className="col-md-12 mx-auto rad">
                    <table className='table table-hover bac'>
                        <thead className='text-white bg-dark'>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Name</th>
                                <th scope='col'>Email</th>
                                <th scope='col'>Number</th>
                                <th scope='col'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contacts.map((contact, id) => (
                                    <tr key={id}>
                                        <td>{id + 1}</td>
                                        <td>{contact.name}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.number}</td>
                                        <td>
                                            <Link to={`/edit/${contact.id}`} className='btn btn-small btn-primary mr-2'>
                                                Edit
                                            </Link>
                                            <button type='button'
                                                onClick={() => deleteContact(contact.id)}
                                                className='btn btn-small btn-danger mr-2'>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home