import React from 'react'
import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <tr>
                  <td>
                    3
                  </td>
                  <td>
                   Hơn Thuổng
                  </td>
                  <td>
                    <img
                      style={{ width: 100, height: 100 }}
                      src="https://img.meta.com.vn/Data/image/2021/09/22/anh-meo-cute-de-thuong-dang-yeu-44.jpg"
                    />
                  </td>
                  <td>
                    Đây là mèo anh lông  Ngắn
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
                    <Link to ="/DetailProduct" >
                    <button type="button" className="btn btn-warning">
                      Detail
                    </button>
                    </Link>
                  </td>
                  <td>
                    <Link to ="/UpdateProduct">
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