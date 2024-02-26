import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layout/Layout';
import './NotFound404.css'

export default function NotFound404() {
  return (
       <Layout>
       <div className="notFound-body">
          <p className="notFound-title">404</p>
          <p className="notFound-text">Page not found</p>
          <p className="notFound-text">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="">
            <Link to="/">
              <p id='notFound-link'>
                Go back home
              </p>
            </Link>
          </div>
        </div>
       </Layout>
  )
}
