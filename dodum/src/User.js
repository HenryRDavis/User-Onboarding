import React from 'react'

export default function User({ user }) {
    if (!user) {
      return <h3>Waiting...</h3>
    }
  
    return (
      <div className='user container'>
        <h2>{user.name ? user.name : 'gimme your name'}</h2>
        <p>Email: {user.email ? user.email : 'nah, fam, your email'}</p>
        <p>Password: {user.password ? user.password : 'I need your password too man'}</p>
        <p>Accepted Terms? {user.termsOfService ? 'Yes' : "Bro, just accept it, you aint finna read it anyways."}</p>
      </div>
    )
  }