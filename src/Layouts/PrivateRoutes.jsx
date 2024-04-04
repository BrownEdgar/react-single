import React, { useState } from 'react'
import { Navigate, Outlet, useOutletContext } from 'react-router-dom'

export default function PrivateRoutes() {
  const { isLogin } = useOutletContext();

  return (
    <>
      {
        isLogin ? <Outlet /> : <Navigate to='/' />
      }
    </>
  )
}
