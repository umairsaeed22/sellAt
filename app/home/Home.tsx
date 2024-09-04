'use client'
import React, { useState } from 'react'
import styles from './_styles/home.module.scss'

function Home() {
    const [count, setCount] = useState('')
  return (
    <div>
        <div className={styles.container}>
            <h1 className={styles.header}>Head</h1>
        </div>
        <h1 className={styles.header}>Head</h1>
    </div>
  )
}

export default Home