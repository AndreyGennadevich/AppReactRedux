import React, {useState} from "react";
import { userAPI } from "../services/AllUsersService";
import {Link} from "react-router-dom";
import {Pagination, Button, List, Skeleton} from 'antd';
import { MehOutlined, PlusOutlined } from '@ant-design/icons';
import Avatar from "antd/es/avatar/avatar";
import {StyledBtnWrap} from "./StyledUsersList";


export const UsersList = () => {

    const [page, setPage] = useState(1)

    const {data, error, isLoading} = userAPI.useFetchAllUsersQuery(page);

    const onChange = pageAnt => {
        setPage(pageAnt)
    };



    return (
        <>
            {/*<ul className="list-group container-sm">*/}
            {/*    { isLoading && <h2>Loading...</h2>}*/}
            {/*    { error && <h2>Произошла ошибка</h2> }*/}
            {/*    { data?.data.map((user) => {*/}
            {/*        return (*/}
            {/*            <li className="list-group-item list-group-item-action d-flex justify-content-between" key={user.id}>*/}
            {/*                /!*<img src={user.avatar} alt="asd"/>*!/*/}
            {/*                <div className="list-item-name">*/}
            {/*                    <Link to={`/users/${user.id}`}>*/}
            {/*                        <span>{user.first_name}</span>*/}
            {/*                        <span>{user.last_name}</span>*/}
            {/*                    </Link>*/}
            {/*                </div>*/}
            {/*                <button className="btn btn-primary">*/}
            {/*                    <Link to={`/users/change/${user.id}`}>Change user</Link>*/}
            {/*                </button>*/}

            {/*            </li>*/}
            {/*        )*/}
            {/*    })*/}
            {/*    }*/}
            {/*</ul>*/}
                        <List
                className="demo-loadmore-list"
                loading={isLoading}
                itemLayout="horizontal"
                dataSource={data?.data}
                renderItem={item => (
                    <List.Item
                        actions={[<Button href={`/users/change/${item.id}`} icon={<MehOutlined />} type="primary">
                            Change user
                        </Button>]}
                    >
                        <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta
                                avatar={<Avatar src={item.avatar} />}
                                title={<Link to={`/users/${item.id}`}>{item.first_name} {item.last_name}</Link>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                        </Skeleton>
                    </List.Item>
                )}
            />
            <StyledBtnWrap>
                <Button href={"/users/add"} type="primary" icon={<PlusOutlined />}>
                    Add user
                </Button>
                <Pagination onChange={onChange} total={12} />
            </StyledBtnWrap>

        </>

    )
}