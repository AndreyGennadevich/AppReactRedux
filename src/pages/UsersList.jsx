import React, {useState} from "react";
import { userAPI } from "../services/AllUsersService";
import {Link} from "react-router-dom";
import './UsersList.css';

export const UsersList = () => {

    const [page, setPage] = useState(1)

    const {data, error, isLoading} = userAPI.useFetchAllUsersQuery(page)

    return (
        <ul className="list-group container-sm">
            { isLoading && <h2>Loading...</h2>}
            { error && <h2>Произошла ошибка</h2> }
            { data?.data.map((user) => {
                    return (
                        <li className="list-group-item list-group-item-action d-flex justify-content-between" key={user.id}>
                            {/*<img src={user.avatar} alt="asd"/>*/}
                            <div className="list-item-name">
                                <Link to={`/users/${user.id}`}>
                                    <span>{user.first_name}</span>
                                    <span>{user.last_name}</span>
                                </Link>
                            </div>
                            <button className="btn btn-primary">
                                <Link to={`/users/change/${user.id}`}>Change user</Link>
                            </button>

                        </li>
                    )
                })
            }
            <div className='d-flex justify-content-between btn-wrap'>
                <Link className="btn btn-primary" to="/users/add">+Add user</Link>
                <div className="pagination">
                    <button className="page-link" onClick={() => setPage(1)}>1</button>
                    <button className="page-link" onClick={() => setPage(2)}>2</button>
                </div>
            </div>

        </ul>
    )
}