import React, { useState } from 'react'

const App = () => {

  const [formData, setFormData] = useState( {firstName: "", lastName: "", email: "", country: "", street: "", city: "", state: "", ZIP: "", comments: false, candidates: "", offers: ""} )

  function changeHandler(event){

    setFormData( prevData => {
      return{
        ...prevData,
        [event.target.name] : event.target.type === "checkbox" ? event.target.checked : event.target.value
      }
    }
    )
  }

  // console.log(formData)

  function submitHandler(event){
    event.preventDefault()
    console.log("printing........")
    console.log(formData);
  }

  return (
    <div>

      <div>
        <h1>Forms</h1>
      </div>

      {/* Entire form container */}
      <form onSubmit={submitHandler}>

        <label htmlFor='firstName'>First Name</label>
        <input 
          name='firstName'
          onChange={changeHandler}
          value={formData.firstName}
        ></input>

        <br></br>
        <br></br>

        <label htmlFor='lastName'>Last Name</label>
        <input 
          name='lastName'
          onChange={changeHandler}
          value={formData.lastName}
        ></input>

        <br></br>
        <br></br>

        <label htmlFor='email'>Email</label>
        <input 
          name='email'
          onChange={changeHandler}
          value={formData.email}
        ></input>

        <br></br>
        <br></br>

        <label htmlFor='country'> Country </label>
        <select
          value={formData.country}
          name='country'
          id='country'
          onChange={changeHandler}
        >

          <option value="NewZealand">NewZealand</option>
          <option value="Australia">Australia</option>
          <option value="Germany">Germany</option>
          <option value="Ireland">Ireland</option>

        </select>


        
        <br></br>
        <br></br>

        <label htmlFor='street'>Street</label>
        <input 
          name='street'
          onChange={changeHandler}
          value={formData.street}
        ></input>


        
        <br></br>
        <br></br>

        <label htmlFor='city'>City</label>
        <input 
          name='city'
          onChange={changeHandler}
          value={formData.city}
        ></input>

        
        <br></br>
        <br></br>

        <label htmlFor='state'>State</label>
        <input 
          name='state'
          onChange={changeHandler}
          value={formData.state}
        ></input>

        
        <br></br>
        <br></br>

        <label htmlFor='lastName'>Zip / Postal</label>
        <input 
          name='ZIP'
          onChange={changeHandler}
          value={formData.ZIP}
        ></input>

        <div>
          <h4>By Email</h4>
        </div>

        <br></br>

        <input
          type='checkbox'
          checked = {formData.comments}
          onChange={changeHandler}
          id='comments'
          name='comments'
        ></input>
        <label htmlFor='comments'>Comments</label>


        <br></br>
        <br></br>

        
        <input
          type='checkbox'
          checked = {formData.candidates}
          onChange={changeHandler}
          id='candidates'
          name='candidates'
        ></input>
        <label htmlFor='candidates'>Candidates</label>

        <br></br>
        <br></br>
        
        <input
          type='checkbox'
          checked = {formData.offers}
          onChange={changeHandler}
          id='offers'
          name='offers'
        ></input>
        <label htmlFor='offers'>Offers</label>

        <div>
          <h4>Push Notification</h4>
        </div>

        <button>Submit</button>

      </form>
    </div>
  )
}

export default App