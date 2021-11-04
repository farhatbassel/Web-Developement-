import './userList.scss'
import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../data';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function UserList() {

    const [data, setData] = useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
            field: 'user', headerName: 'User', width: 270, renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img src={params.row.avatar} alt="" className='userListImg' />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 270 },
        { field: 'status', headerName: 'Status', width: 270, },
        { field: 'transaction', headerName: 'Transaction Volume', width: 260, },
        {
            field: 'action', headerName: 'Action', width: 270, renderCell: (params) => {
                return (
                    <>
                        <Link to={'/user/ ' + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className='userListDelete' onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        },
    ];


    return (
        <div className='userList'>
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={15} checkboxSelection />
        </div>
    )
}
