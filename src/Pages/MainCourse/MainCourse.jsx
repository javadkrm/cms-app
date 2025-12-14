import React from 'react'
import { useParams } from 'react-router-dom'
import { userRows } from '../../Datas'
import './MainCourse.css'

export default function MainUSer() {

    let params = useParams()

    let mainUserData = userRows.find(user => user.id == params.id)
    
  return (
    <div className="mainCourse">
      <div className="mainCourseContainer">
        <div className="mainCourseHeader">
          <h2>User Details</h2>
        </div>
        <div className="mainCourseInfo">
          <div className="mainCourseLeft">
            <img src={mainUserData.avatar} alt={mainUserData.userName} className="mainCourseImg" />
          </div>
          <div className="mainCourseRight">
            <div className="mainCourseInfoItem">
              <span className="mainCourseInfoKey">Username:</span>
              <span className="mainCourseInfoValue">{mainUserData.userName}</span>
            </div>
            <div className="mainCourseInfoItem">
              <span className="mainCourseInfoKey">Email:</span>
              <span className="mainCourseInfoValue">{mainUserData.email}</span>
            </div>
            <div className="mainCourseInfoItem">
              <span className="mainCourseInfoKey">Status:</span>
              <span className="mainCourseInfoValue">{mainUserData.status}</span>
            </div>
            <div className="mainCourseInfoItem">
              <span className="mainCourseInfoKey">Transaction:</span>
              <span className="mainCourseInfoValue">${mainUserData.transaction}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
