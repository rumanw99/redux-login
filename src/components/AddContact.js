import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    const contacts = useSelector((state) => state);
    const dispatch = useDispatch();
    const history = useHistory()

    const handleSubmit = (e) => {

        const checkEmail = contacts.find((contact) => contact.email === email && contact);
        const checkNumber = contacts.find((contact) => contact.number === parseInt(number));

        e.preventDefault();
        if (!name || !email || !number) {
            return toast.warning("Plase fill the filds!")
        }
        if (checkEmail) {
            return toast.error("this Email already Exists!")
        }
        if (checkNumber) {
            return toast.error("this number already Exists!")
        }

        const data = {
            id: contacts[contacts.length - 1].id + 1,
            name,
            email,
            number
        }
        dispatch({ type: "ADD_CONTACT", payload: data });
        toast.success("Student Access successfully");
        history.push("/")
    }
    return (
        <div className='container'>
            <h1 className="display-3 my-5 text-center">Add Student</h1>
            <div className="row">
                <div className="col-md-6 shadow mx-auto p-5">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" placeholder='Name' className='form-control'
                                value={name} onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder='Email' className='form-control'
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="number" placeholder='phone number' className='form-control'
                                value={number} onChange={(e) => setNumber(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="submit" value='Add Student' className='btn btn-block btn-dark' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default AddContact;