import React from 'react'

export const Login = () => {
  return (
    <div className='log_cont'>
        <div className='log_form'>
        <form>
  <div class="form-group" >
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
    </div>
  )
}
