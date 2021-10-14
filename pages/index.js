import React, { useState } from 'react';
import Head from 'next/head'

import Login from '../components/Login'
import UserUpdate from '../components/UserUpdate';
import Admin from '../components/Admin';

export default function Home() {

  const [isUser, setIsUser] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="container">
      <Head>
        <title>Location Calculator App</title>
        <link rel="icon" href="/logo.ico" />
      </Head>

      <main>
        <h1 className="title">
          Location Calculator App
        </h1>

        <div className="description">
          {!isUser && !isAdmin && <Login setIsUser={setIsUser} setIsAdmin={setIsAdmin} />}
          {isUser && <UserUpdate />}
          {isAdmin && <Admin/>}
          {(isUser || isAdmin) &&
            <button onClick={() => { setIsAdmin(false); setIsUser(false) }}> Logout</button>}
        </div>
      </main>

    </div>
  )
}
