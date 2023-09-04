import { useEffect } from 'react'
import styles from './login.module.scss'
import loginBg from './init'

export default function Login() {
  useEffect(() => {
    loginBg()
    window.onresize = function () {
      loginBg()
    }
  }, [])

  return (
    <div className={styles.loginPage}>
      <canvas id='canvas' style={{ display: 'block' }} />
      <div className={styles.loginBox}>
        <div className={styles.title}>
          <h1>后台管理系统</h1>
          <p>你好！！！</p>
        </div>
      </div>
    </div>
  )
}
