'use client'

import subnityLogo from '/subnity.png';
import googleLogo from '/google.png';
import style from './style/Login.module.css';
import { loginCardContentData, dataPrivacyData } from '../../common/data';
import { Shield, Zap, BarChart3 } from "lucide-react";
import useOAuth2Message from '../../hooks/useOAuth2Message'

export default function Login() {
  useOAuth2Message(); // postMessage hook

  return (
    <div className={style.container}>
      <div>
        <Header />
        <LoginCard />
        <DataPrivacy />
        <Footer />
      </div>
    </div>
  );
}

export const Header = () => {
  return (
    <div className={style.header}>
      <img src={subnityLogo} alt="SubnityLogo" className={style.subnityLogo} />
      <h1 className={style.headerTitle}>Subnity</h1>
      <p className={style.headerContent}>구독 관리의 새로운 기준</p>
    </div>
  );
}

export const LoginCard = () => {
  return (
    <div className={style.cardContainer}>
      <LoginCardHeader />
      <LoginCardContent />
    </div>
  );
}

export const LoginCardHeader = () => {
  return (
    <>
      <p className={style.cardHeaderTitle}>시작하기</p>
      <p className={style.cardHeaderContent}>Gmail 계정으로 로그인하여 구독을 자동으로 관리하세요</p>
      <button className={style.loginButton} onClick={() => {
        window.open(`https://api.subnity.site/oauth2/authorization/google`, "popup", "width=500,height=600");
      }}>
        <div>
          <img src={googleLogo} alt="GoogleLogo" /><p>Google로 계속하기</p>
        </div>
      </button>
      <hr />
    </>
  );
}

export const LoginCardContent = () => {
  return (
    <div className={style.cardContentContainer}>
      <p className={style.cardContentTitle}>Subnity로 할 수 있는 것들</p>
      <div className={style.cardContentBox}>
        {loginCardContentData.map((
          value: { title: string, desc: string}, key: number
        ) => 
          <div key={key} className={style.cardContentSubBox}>
            {key == 1
            ? <BarChart3 className={style.barChart} />
            : <Zap className={style.zap}/>}
            <div>
              <p className={style.title}>{value.title}</p>
              <p className={style.desc}>{value.desc}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export const DataPrivacy = () => {
  return (
    <div className={style.dataPrivacyContainer}>
      <div className={style.dataPrivacy}>
        <Shield className={style.dataPrivacyShield} />
        <p>개인정보 보호</p>
      </div>

      {dataPrivacyData.map((value: { title: string }, key: number) => 
        <p key={key} className={style.dataPrivacyDataTitle}>{value.title}</p>
      )}
    </div>
  );
}

export const Footer = () => {
  return (
    <p className={style.footer}>
      로그인하면{" "}
      <a href="#" className="text-blue-600 hover:underline">이용약관</a>{" "}
      및{" "}
      <a href="#" className="text-blue-600 hover:underline">개인정보처리방침</a>
      에 동의하는 것으로 간주됩니다.
    </p>
  )
}
