import { useEffect, useState, ChangeEvent } from 'react'
import styles from './login.module.scss'
import loginBg from './init'
import './login.scss'
import { code } from '@/api/login'
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
  const [loginInfo, setLoginInfo] = useState({
    usename: '',
    password: '',
    captch: '',
  })
  // 表单输入事件
  const save = (dataType: string) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      setLoginInfo({ ...loginInfo, [dataType]: e.target.value })
    }
  }
  // 登录
  const login = () => {}
  // 验证码
  const getCaptch = async () => {
    const res = await code()
    console.log(res)
  }
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
          <div className={styles.captchBox}>
            <Input
              placeholder='请输入验证码'
              onChange={save('captch')}
              style={{ marginRight: '10px', width: '320px' }}
            />
            <img
              src=''
              alt=''
              style={{ width: '120px', height: '38px' }}
              onClick={getCaptch}
            />
          </div>
          <Button type='primary' block onClick={login}>
            登录
          </Button>
        </Space>
      </div>
    </div>
  )
}
