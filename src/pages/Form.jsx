import React from "react";
import {Link} from "react-router-dom";
import "./Form.css";

export const Form = ({data = [], onSubmit}) => {

    return (
        <form className="row g-3 align-items-center" onSubmit={(e) => onSubmit(e)}>
            {data.avatar && <div><img className="rounded mx-auto d-block" src={data.avatar} alt="photo"/></div>}
            <label for="avatar" className="form-label">
                Photo
            </label>
            <input name='avatar' className="form-control" id="avatar" type="text" defaultValue={data.avatar}/>
            <label for="name" className="form-label">
                Name
            </label>
            <input  name='first_name' className="form-control" id="name" type='text' defaultValue={data.first_name}/>
            <label for="surname" className="form-label">
                Surname
            </label>
            <input name='last_name' className="form-control" id="surname" type='text' defaultValue={data.last_name}/>
            <label for="email" className="form-label">
                E-mail
            </label>
            <input name='email' className="form-control" id="email" type='text' defaultValue={data.email}/>
            <div className="add-btn-wrap">
                <button className="btn btn-primary">
                    Отправить
                </button>
                <button className="btn btn-primary" >
                    <Link to="/users">Back to users list</Link>
                </button>
            </div>
        </form>
    )
}