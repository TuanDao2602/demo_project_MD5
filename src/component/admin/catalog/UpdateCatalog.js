import React from 'react'

export default function UpdateCatalog() {
    return (
        <div className='newUserPage'>
          <h1>Update Category</h1>
          <form>
          <div className="item">
              <label>CatagoryId</label>
              <input type="text" placeholder='catalogID'/>
            </div>
            <div className="item">
              <label>CatagoryName</label>
              <input type="text" placeholder='please enter catalogName'/>
            </div>
            <div className="item">
              <label>Dcriptions</label>
              <input type="text" placeholder='please enter Description'/>
            </div>
            <div className="item activeContainer">
              <label> Status </label>
              <select name='active' id='active'>
                <option value='yes'>Yes</option>
                <option value='no'>No</option>
              </select>
            </div>
            <button>Update</button>
          </form>
        </div>
      )
    }
   