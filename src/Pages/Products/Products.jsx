import React, { useState } from 'react'
import { productsRows } from '../../Datas'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

import './Products.css'

export default function ProductGridDemo() {

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Product Name',
      width: 150,
      editable: true,
      renderCell: (params) => {
        return (
          <Link to={`/products/${params.row.id}`} style={{ textDecoration: 'none' }}>
            <div className="userListUser">
              <img className="userListImg" src={params.row.avatar} alt="" />
              <span className='userListName'>
                {params.row.name}
              </span>
            </div>
          </Link>
        )
      }
    },
    {
      field: 'price',
      headerName: 'Price',
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
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/products/${params.row.id}`}>
              <button className="userListEdit">Buy</button>
            </Link>
            <button className="userListDelete" onClick={() => userDelete(params.id)}>Delete</button>
          </>
        )
      }
    }
  ];

  const [productRowsData, setRows] = useState(productsRows)

  const userDelete = (id) => {
    setRows(productRowsData.filter(item => item.id !== id))
  }

  return (
    <div className="userList">
      <Box sx={{ height: '100%', width: '100%' }}>
        <DataGrid
          rows={productRowsData}
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