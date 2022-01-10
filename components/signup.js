let signup = ()=>{
    return `
 
    <div id="wrapForm">
    <h1>Register</h1>
  <form action="" id="form">
    <input type="text" name="" id="name" placeholder="Name" />
    <input type="email" name="" id="email" placeholder="email" />
    <input type="password" name="" id="password" placeholder="password" />
    <input type="text" name="" id="username" placeholder="username" />
    <input type="number" name="" id="mobile" placeholder="mobile" />
    <input type="text" name="" id="description" placeholder="description" />
  </form>
  <button onclick="register()">SignUp</button>
  <a id="showLogin"> Already a member?</a>
</div>
    `
}

export default signup;