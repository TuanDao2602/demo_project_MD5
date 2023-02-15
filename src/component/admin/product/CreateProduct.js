import React from 'react'

export default function CreateProduct() {
 
  return (
    <div className='newUserPage'>
      <h1>New Admin</h1>
      <form>
        <div className="item">
          <label>Product Name</label>
          <input type="text" placeholder='Enter ProductName'/>
        </div>
        <div className="item">
          <label>Image</label>
          <input type="file" placeholder='Enter Image'/>
        </div>
        <div className="item">
          <label>Title</label>
          <input type="email" placeholder='Enter Title'/>
        </div>
        <div className="item">
          <label>Quantity</label>
          <input type="password" placeholder='Enter Quantity'/>
        </div>
        <div className="item">
          <label>Price</label>
          <input type="text" placeholder='Enter Price'/>
        </div>
        <div className="item activeContainer">
          <label> Status </label>
          <select name='active' id='active'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>
        <div className="item">
          <label>Category</label>
          <input type="text" placeholder='Enter Category'/>
        </div> 

        <button>Create</button>
      </form>
    </div>
  )
}


