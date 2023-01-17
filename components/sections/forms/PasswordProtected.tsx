import {ReactNode, useEffect, useState} from "react";
import SectionWrapper from "../common/SectionWrapper";

export default function PasswordProtected({children}: {children: ReactNode}) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    (async () => {
      console.log(password);
      if(typeof window !== 'undefined') {
        const result = await fetch('/api/validate-password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            password: localStorage.getItem('form-password') || password
          })
        }).then(res => res.json());
        if(!result.error && result.password === password) {
          setIsVisible(true);
          localStorage.setItem('form-password', password);
        }
      }
    })()
  }, [password])

  if(isVisible) return <>{children}</>

  return (
    <div className={`text-center`}>
      <SectionWrapper>
        <h2>Protected Page</h2>
        <p>please enter the password to pass.</p>
        <div className={`my-5`}>
          <label htmlFor={'password'} >Password: </label>
          <input id='password' type={'password'} onChange={(e) => setPassword(e?.target?.value)}/>
        </div>
      </SectionWrapper>
    </div>
  )
}