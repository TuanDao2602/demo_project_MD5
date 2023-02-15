import React from 'react'
import { Link } from 'react-router-dom'


export default function User() {

  return (
    <tr>
    <td>1</td>
    <td>user1</td>
    <td>
      <img width="40%" src="admin/img/avatars/avatar-3.jpg" alt="avt" />
    </td>
    <td>Chris Hung</td>
    <td>22/02/2022</td>
    <td>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna
      aliqua.
    </td>
    <td>Online</td>
    <td>28/10/2022</td>
    <td>
      <button type="button" className="btn btn-success">
        Unlock
      </button>
    </td>
    <td>
      <button type="button" className="btn btn-danger">
        Lock
      </button>
    </td>
  </tr>
  )
}
