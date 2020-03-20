import React, { useEffect, useState } from 'react';
import AdminSideLeft from '../../components/adminsideleft';
import NotFound from '../support/notfound'
import Axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { apiurl } from '../../support/apiurl'
import Swal from 'sweetalert2'

const AdminManageUsers = () => {

    // //============================== FUNCTION READ USERS ===================================================// //

    const redux = useSelector((state) => {
        return {
            roles: state.Auth.roles,
            username: state.Auth.username,
        }
    })
    const dispatch = useDispatch()
    const [dataUsers, setDataUsers] = useState([])

    useEffect(() => {
        Axios.get(`${apiurl}/auth/getusers`)
            .then((res) => {
                setDataUsers(res.data.result)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const renderUsers = () => {
        return dataUsers.map((val, index) => {
            return (
                <tr key={index}>
                    <td>{val.username}</td>
                    <td>{val.email}</td>
                    <td>{val.verification}</td>
                    <td>
                        <button className='btn btn-danger mr-1 ml-1' onClick={() => onDeleteUser(index)}>DELETE</button>
                    </td>
                </tr>
            )
        })
    }

    // //============================== FUNCTION DELETE =======================================================// //

    const onDeleteUser = (index) => {
        var id = dataUsers[index].idusers
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            background: '#21272C',
            color: '#ddd'
        }).then((res1) => {
            if (res1.value) {
                Swal.fire({
                    title: 'Deleted!',
                    text: 'The user has been deleted.',
                    icon: 'success',
                    background: '#21272C',
                    color: '#ddd'
                })
                    .then(() => {
                        Axios.delete(`${apiurl}/auth/deleteuser/${id}`)
                            .then(() => {
                                Axios.get(`${apiurl}/auth/getusers`)
                                    .then((res) => {
                                        setDataUsers(res.data.result)
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    })
                            })
                            .catch((error) => {
                                console.log(error);
                            })
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        })
    }

    // //============================== RENDER AKHIR ==========================================================// //

    if (redux.roles === 1) { // //proteksi admin (hanya admin yang bisa akses)
        return <NotFound />;
    }
    console.log();
    return (
        <div>

            <AdminSideLeft />

            <div className="main-content">

                <div className="header row">
                    <div className="col-md-12">
                        <p className="header-title">
                            DroneME Users
                            </p>
                    </div>
                </div>

                <div className="row report-group">
                    <div className="col-md-12">

                        <div className="item-big-report col-md-12">
                            <table className="table-wisata table-tiketsaya table table-borderless">

                                <thead>
                                    <tr>
                                        <th scope="col">Username</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Verification</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderUsers()}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default AdminManageUsers;