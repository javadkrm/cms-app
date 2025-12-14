import React, { useState } from 'react'
import { userRows } from '../../Datas'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

import './Users.css'

export default function DataGridDemo() {

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 150,
      editable: true,
      renderCell: (params) => {
        return (
          <Link to={`/users/${params.row.id}`} style={{ textDecoration: 'none' }}>
            <div className="userListUser">
              <img className="userListImg" src={`${params.row.avatar}`} alt="" />
              <span className='userListName'>
                {params.row.userName}
              </span>
            </div>
          </Link>
        )
      }
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 150,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 110,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email Address',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/users/${params.row.id}`}>
              <button className="userListEdit">Edit</button>
            </Link>
            <button className="userListDelete" onClick={() => userDelete(params.id)}>Delete</button>
          </>
        )
      }
    }
  ];

  const [userRowsData, setRows] = useState(userRows)

  const userDelete = (id) => {
    setRows(userRowsData.filter(item => item.id !== id))
  }

  return (
    <div className="userList">
      <Box sx={{ height: '100%', width: '100%' }}>
        <DataGrid
          rows={userRowsData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
}
