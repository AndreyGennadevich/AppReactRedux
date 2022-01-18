import React from "react";
import {Link, useParams} from "react-router-dom";
import {userProfileAPI} from "../services/UserProfileService";
import { Button } from 'antd';
import {StyledImg, StyledUserPageWrap, StyledTextWrap, StyledUserBtnWrap} from "./StyledUserPage";




export const UserPage = () => {

    let params = useParams();

    const {data, error, isLoading} = userProfileAPI.useFetchUserQuery(params.id)

    let user

    if (data) {
        user = data.data;
    }

    return (
        <div className="container-sm">
            <h2>User id: {params.id}</h2>

                { isLoading && <h2>Loading...</h2>}
                { error && <h2>Произошла ошибка</h2> }
                {data && (
                    <div>
                        <StyledUserPageWrap className="d-flex justify-content-between">
                            <StyledImg src={user.avatar} alt="photo"/>
                            <StyledTextWrap>
                                <span className="user-page-name">Name: {user.first_name}</span>
                                <span className="user-page-surname">Surname: {user.last_name}</span>
                                <span className="user-page-email">Email: {user.email}</span>
                            </StyledTextWrap>
                        </StyledUserPageWrap>
                        <StyledUserBtnWrap>
                            <div>
                                <Button type="primary">
                                    <Link to={`/users/change/${params.id}`}>Change user</Link>
                                </Button>
                            </div>
                            <div>
                                <Button type="primary">
                                    <Link to='/users'>Back to users list</Link>
                                </Button>
                            </div>
                        </StyledUserBtnWrap>
                    </div>
                )}
        </div>
    )
}