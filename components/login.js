let login = () =>{
    return  `

    <div id="wrapForm">
    <h1>Login</h1>
  <form action="" id="form">
 
      <input type="text" name="" id="username" placeholder="username" />
    <input type="password" name="" id="password" placeholder="password" />

  </form>
  <button onclick="login()">Login</button>
  <a id="showSignup"> New Member?</a>
</div>
    `;
}

export default login;