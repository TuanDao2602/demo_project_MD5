import React from 'react'
import { Link } from 'react-router-dom'

export default function Category() {
  return (
    <tr>
                      <td>1</td>
                      <td>Category 1</td>
                      <td>
                      1 bản tình ca đẹp dành cho mùa xuân   1 bản tình ca đẹp dành cho mùa xuân   1 bản tình ca đẹp dành cho mùa xuân 
                      </td>
                      <td>28/10/2022</td>
                      <td>
                        <Link to ="/updateCatalog">
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
