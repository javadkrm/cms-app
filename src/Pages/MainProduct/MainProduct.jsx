import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Chart from '../../Components/lineChart/LineChart';

import { productsRows } from '../../Datas'
import './MainProduct.css'

export default function MainCourse() {

    let params = useParams()
    let mainProData = productsRows.find(pro => pro.id == params.id)

    return (
        <>
            <div className="mainCourse">
                <div className="mainCourseContainer">
                    <div className="mainCourseHeader">
                        <h2>Product Details</h2>
                    </div>
                    <div className="mainCourseInfo">
                        <div className="mainCourseLeft">
                            <img src={process.env.PUBLIC_URL + '/' + mainProData.avatar} alt={mainProData.name} className="mainCourseImg" />
                        </div>
                        <div className="mainCourseRight">
                            <div className="mainCourseInfoItem">
                                <span className="mainCourseInfoKey">Product Name:</span>
                                <span className="mainCourseInfoValue">{mainProData.name}</span>
                            </div>
                            <div className="mainCourseInfoItem">
                                <span className="mainCourseInfoKey">Price:</span>
                                <span className="mainCourseInfoValue">{mainProData.price}</span>
                            </div>
                            <div className="mainCourseInfoItem">
                                <span className="mainCourseInfoKey">Status:</span>
                                <span className="mainCourseInfoValue">{mainProData.status}</span>
                            </div>
                            <div className='buyButtonWrapper'>
                                <button className='buyButton'>Buy</button>
                            </div>
                        </div>
                    </div>
                    <div className='mainCourseChart'>
                        <Chart title="Product Sales Performance" data={mainProData.salesData} dataKey="sales" grid/>
                    </div>
                </div>
            </div>
            {/* <Modal
                show={show}
                onHide={handleClose}
                centered
                dialogClassName="modal-90w"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Purchase</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-product-details">
                        <h4>{mainProData.name}</h4>
                        <p>Price: {mainProData.price}</p>
                        <p>Status: {mainProData.status}</p>
                        <div className="modal-product-image">
                            <img
                                src={process.env.PUBLIC_URL + '/' + mainProData.avatar}
                                alt={mainProData.name}
                                style={{ maxWidth: '200px', height: 'auto' }}
                            />
                        </div>
                        <p>Are you sure you want to purchase this product?</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button
                        variant="success"
                        onClick={() => {
                            // Here you would typically handle the purchase logic
                            alert('Purchase successful!');
                            handleClose();
                        }}
                    >
                        Confirm Purchase
                    </Button>
                </Modal.Footer>
            </Modal> */}
        </>
    )
}