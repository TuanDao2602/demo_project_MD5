import React from 'react'

export default function NewCatalog() {

    return (
        <div className='newUserPage'>
          <h1>New Category</h1>
          <form>
            <div className="item">
              <label>CatagoryName</label>
              <input type="text" placeholder='please enter catalogName'/>
            </div>
            <div className="item">
              <label>CatalogImage</label>
              <input type="file" placeholder='please enter Description'/>
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
            <button>Create</button>
          </form>
        </div>
      )
    }
 