import React from 'react'
import { Link } from 'react-router-dom'

export default function Topping() {
  return (
    <tr>
    <td>
      1
    </td>
    <td>
     Mai
    </td>
    <td>
      <img
        style={{ width: 100, height: 100 }}
        src="https://noithatbinhminh.com.vn/wp-content/uploads/2022/08/anh-dep-40.jpg"
      />
    </td>
    <td>
      Đây là mèo anh lông Ngắn
    </td>
    <td>
      5
    </td>
    <td>
     1500$
    </td>
    <td>
     True
    </td>
    <td>
      1
    </td>
    <td>
      <a >
        Detail
      </a>
    </td>
    <td>
      <Link to ="/UpdateTopping">
      <button type="button" className="btn btn-warning">
        Edit
      </button>
      </Link>
    </td>
    <td>
      <button type="button" className="btn btn-danger">
        Delete
      </button>
    </td>
   
  </tr>
  )
}