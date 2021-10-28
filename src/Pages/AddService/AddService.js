import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully Inserted')
                    reset();
                }
        })
    }

    return (
        <div className="add-service">
            <h2>Please add a service</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Enter Name" {...register("name", { required: true, maxLength:   20 })} />
                <textarea placeholder="Description" {...register("description")} />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="Image Url" />
                <input type="submit" />
            </form>

        </div>
    );
};

export default AddService;