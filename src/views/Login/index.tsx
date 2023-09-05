import { useEffect, useState, ChangeEvent } from 'react'
import styles from './login.module.scss'
import loginBg from './init'
import './login.scss'
import { Input, Space, Button } from 'antd'

export default function Login() {
  // 背景图加载
  useEffect(() => {
    loginBg()
    window.onresize = function () {
      loginBg()
    }
  }, [])
  // 登录表单信息
  const [loginInfo, setLoginInfo] = useState({ usename: '', password: '' })
  // 表单输入事件
  const save = (dataType: string) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      setLoginInfo({ ...loginInfo, [dataType]: e.target.value })
    }
  }
  // 登录
  const login = () => {}
  return (
    <div className={styles.loginPage}>
      <canvas id='canvas' style={{ display: 'block' }} />
      <div className={styles.loginBox}>
        <div className={styles.title}>
          <h1>后台管理系统</h1>
          <p>你好！！！</p>
        </div>
        <Space direction='vertical' size={'middle'} className={styles.width}>
          <Input placeholder='请输入用户名' onChange={save('usename')} />
          <Input.Password
            placeholder='请输入密码'
            onChange={save('password')}
          />
          <Button type='primary' block onClick={login}>
            登录
          </Button>
        </Space>
      </div>
    </div>
  )
}
