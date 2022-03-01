import React from 'react'

export default function Login() {
  return (
    <div>
        <h1>Welcome young padawan, identify yourself</h1>
        <form>
            <label for="userName">User Name</label>
            <input type="text" id="userName" name="userName" value="userName"/>

            <label for="email">Email</label>
            <input type="email" id="email" name="email" value="email"/>

            <label for="password">Password</label>
            <input type="password" id="password" name="password" value="password"/>
            <button>Login</button>
        </form>
    </div>
  )
}
