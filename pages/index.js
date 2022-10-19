import React from 'react'
import Head from 'next/head'

import Card from '../components/card'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Up Start Finance</title>
          <meta property="og:title" content="Up Start Finance" />
        </Head>
        <div className="navbar-container">
          <div className="max-width">
            <div className="home-logo">
              <img
                alt="image"
                src="/playground_assets/group%202.svg"
                className="home-image"
              />
              <span className="brand-Name">
                <span className="home-text001">UP -</span>
                <span> START</span>
              </span>
            </div>
            <div className="home-links">
              <span className="home-text003 navbar-Link">How it works</span>
              <span className="home-text004 navbar-Link">Features</span>
              <span className="home-text005 navbar-Link">Blog</span>
              <span className="home-text006 navbar-Link">Pricing</span>
              <button className="button-secondary button">Log in</button>
              <button className="button button-primary">Get started</button>
            </div>
            <div className="home-burger-menu navbar-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="hero-container section-container">
          <div className="home-max-width1 max-width">
            <div className="home-content">
              <span className="home-subtitle before-Heading">
                up-start finance system
              </span>
              <h1 className="home-title">
                <span className="home-text007">
                  Unlock the next generation banking
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text008">experience</span>
              </h1>
              <span className="home-description">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </span>
              <div className="home-container01">
                <button className="button button-gradient">Get started</button>
                <button className="button button-transparent">Log in</button>
              </div>
            </div>
            <div className="home-image1">
              <ul className="list">
                <li className="list-item">
                  <span>Text</span>
                </li>
                <li className="list-item">
                  <span>Text</span>
                </li>
                <li className="list-item">
                  <span>Text</span>
                </li>
              </ul>
              <img
                alt="image"
                src="/playground_assets/hero-600w.png"
                className="home-hero-image"
              />
              <img
                alt="image"
                src="/playground_assets/union-400w.png"
                className="home-graphic-top"
              />
              <img
                alt="image"
                src="/playground_assets/group%2018-1200w.png"
                className="home-image2"
              />
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width2 max-width">
            <div className="home-image3">
              <img
                alt="image"
                src="/playground_assets/group%2020-1200w.png"
                className="home-hero-image1"
              />
            </div>
            <div className="home-content1">
              <span className="home-text012 before-Heading">how it works</span>
              <h1 className="home-text013">
                <span className="home-text014">
                  Pay and get paid
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text015">
                  faster
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text016">than ever.</span>
                <span className="home-text017"></span>
              </h1>
              <span className="home-text018">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </span>
              <div className="home-container02">
                <button className="button-secondary button bg-transparent">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section1 section-container">
          <div className="home-max-width3 max-width">
            <div className="home-content2">
              <span className="home-text019 before-Heading">save money</span>
              <h1 className="home-text020">
                <span className="home-text021">Earn cashback</span>
                <br></br>
                <span className="home-text023">from your favorite brands</span>
              </h1>
              <span className="home-text024">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </span>
              <div className="home-container03">
                <button className="button-secondary button bg-transparent">
                  See how
                </button>
              </div>
            </div>
            <div className="home-image4">
              <img
                alt="image"
                src="/playground_assets/group%2021-1200w.png"
                className="home-hero-image2"
              />
            </div>
          </div>
        </div>
        <div className="home-section2 section-container">
          <div className="home-max-width4 max-width">
            <div className="home-image5">
              <img
                alt="image"
                src="/playground_assets/jc-gellidon-fnc3yctccoi-unsplash%2014%20%5B1%5D-1200w.png"
                className="home-hero-image3"
              />
            </div>
            <div className="home-content3">
              <span className="home-text025 before-Heading">get started</span>
              <h1 className="home-text026">Open your account today</h1>
              <div className="home-step">
                <div className="home-number">
                  <span className="home-text027">1</span>
                </div>
                <div className="home-container04">
                  <span className="home-title1">Download UpStart App</span>
                  <span className="home-text028">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div className="home-step1">
                <div className="home-number1">
                  <span className="home-text029">2</span>
                </div>
                <div className="home-container05">
                  <span className="home-title2">Create your free account</span>
                  <span className="home-text030">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div className="home-step2">
                <div className="home-number2">
                  <span className="home-text031">3</span>
                </div>
                <div className="home-container06">
                  <span className="home-title3">
                    Link your existing credit cards
                  </span>
                  <span className="home-text032">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width5 max-width">
            <span className="home-text033 before-Heading">get started</span>
            <h1 className="home-text034">
              <span>No matter what you do,</span>
              <br></br>
              <span>UpStart will save you money</span>
            </h1>
            <div className="home-cards-container">
              <Card rootClassName="card-root-class-name2"></Card>
              <Card text="Personal" rootClassName="card-root-class-name"></Card>
              <Card text="Family" rootClassName="card-root-class-name1"></Card>
            </div>
          </div>
        </div>
        <div className="home-section4 section-container">
          <div className="home-max-width6 max-width">
            <div className="home-f-a-q">
              <div className="home-questions">
                <span className="home-text037 before-Heading">faq</span>
                <h1 className="home-text038">
                  <span className="home-text039">
                    Frequently Asked
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span className="home-text041">Questions</span>
                </h1>
                <div data-role="Accordion" className="question">
                  <div data-type="accordion-header" className="home-trigger">
                    <span className="home-text042">
                      Is this a Free or Paid service?
                    </span>
                    <svg viewBox="0 0 1024 1024" className="home-icon02">
                      <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                    </svg>
                  </div>
                  <div
                    data-type="accordion-content"
                    className="question-content"
                  >
                    <span className="home-text043">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit.
                    </span>
                  </div>
                </div>
                <div data-role="Accordion" className="question">
                  <div data-type="accordion-header" className="home-trigger1">
                    <span className="home-text044">
                      Do you operate in United Stated?
                    </span>
                    <svg viewBox="0 0 1024 1024" className="home-icon04">
                      <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                    </svg>
                  </div>
                  <div
                    data-type="accordion-content"
                    className="question-content"
                  >
                    <span className="home-text045">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit.
                    </span>
                  </div>
                </div>
                <div data-role="Accordion" className="question">
                  <div data-type="accordion-header" className="home-trigger2">
                    <span className="home-text046">
                      Is this a globally available bank?
                    </span>
                    <svg viewBox="0 0 1024 1024" className="home-icon06">
                      <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                    </svg>
                  </div>
                  <div
                    data-type="accordion-content"
                    className="question-content"
                  >
                    <span className="home-text047">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit.
                    </span>
                  </div>
                </div>
                <div data-role="Accordion" className="question">
                  <div data-type="accordion-header" className="home-trigger3">
                    <span className="home-text048">
                      Do you have an iOS or Android app?
                    </span>
                    <svg viewBox="0 0 1024 1024" className="home-icon08">
                      <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                    </svg>
                  </div>
                  <div
                    data-type="accordion-content"
                    className="question-content"
                  >
                    <span className="home-text049">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit.
                    </span>
                  </div>
                </div>
              </div>
              <img
                alt="image"
                src="/playground_assets/group%202-1200w.png"
                className="home-image6"
              />
            </div>
            <div className="home-banner">
              <span className="home-text050 before-Heading">get started</span>
              <h1 className="home-text051">
                <span>Push your finances to</span>
                <br></br>
                <span></span>
                <span></span>
                <span> the next level.</span>
              </h1>
              <span className="home-text057">
                <span>
                  Amet minim mollit non deserunt ullamco est sit
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  aliqua dolor do amet sint.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <div className="home-btns">
                <button className="home-button6 button button-transparent">
                  See all plans
                </button>
                <button className="home-button7 button button-gradient">
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
        <footer className="home-footer">
          <div className="home-links-container">
            <div className="home-container07">
              <div className="footer-column">
                <span className="home-text061">Product</span>
                <span className="home-text062">How it works</span>
                <span className="home-text063">Features</span>
                <span className="home-text064">Pricing</span>
                <span className="home-text065">Blog</span>
                <span>FAQ</span>
              </div>
              <div className="footer-column">
                <span className="home-text067">App</span>
                <span className="home-text068">Download iOS app</span>
                <span className="home-text069">Download Android app</span>
                <span className="home-text070">Log in to Portal</span>
                <span className="home-text071">Administrative</span>
                <span>Legal</span>
              </div>
              <div className="footer-column">
                <span className="home-text073">Company</span>
                <span className="home-text074">About us</span>
                <span className="home-text075">Culture</span>
                <span className="home-text076">Code of conduct</span>
                <span className="home-text077">Careers</span>
                <span className="home-text078">News</span>
                <span>Contact</span>
              </div>
              <div className="footer-column">
                <span className="home-text080">Invest</span>
                <span className="home-text081">Commodity</span>
                <span className="home-text082">Savings</span>
                <span className="home-text083">
                  <span>Taxes and fees</span>
                  <br></br>
                  <span></span>
                </span>
                <span className="home-text086">
                  <span>Currency exchange</span>
                </span>
                <span>Community</span>
              </div>
              <div className="footer-column">
                <span className="home-text089">Security</span>
                <span className="home-text090">Security status</span>
                <span className="home-text091">ISO</span>
                <span className="home-text092">System status</span>
                <span>Customer Help</span>
              </div>
              <div className="footer-column">
                <span className="home-text094">Follow</span>
                <span className="home-text095">Instagram</span>
                <span className="home-text096">Twitter</span>
                <span className="home-text097">Facebook</span>
                <span className="home-text098">Tik Tok</span>
                <span className="home-text099">Linkedln</span>
                <span>Youtube</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-logo {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image {
            width: 22px;
            object-fit: cover;
            margin-right: 14px;
          }
          .home-text001 {
            color: var(--dl-color-scheme-orange100);
          }
          .home-links {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-text003 {
            color: var(--dl-color-scheme-green80);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-text004 {
            color: var(--dl-color-scheme-green80);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-text005 {
            color: var(--dl-color-scheme-green80);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-text006 {
            color: var(--dl-color-scheme-green80);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-burger-menu {
            fill: #105749;
            width: 24px;
            height: 24px;
          }
          .home-icon {
            transition: 0.3s;
          }

          .home-max-width1 {
            align-items: center;
          }
          .home-content {
            flex: 0 0 auto;
            width: 45%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-subtitle {
            color: var(--dl-color-scheme-orange100);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-title {
            color: var(--dl-color-scheme-white);
            font-size: 52px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 900;
            line-height: 1.2;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text007 {
            font-family: Urbanist;
          }
          .home-text008 {
            color: var(--dl-color-scheme-lightgreen);
            font-family: Urbanist;
          }
          .home-description {
            color: var(--dl-color-scheme-white);
            font-size: 18px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-container01 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          .home-image1 {
            position: relative;
            padding-bottom: var(--dl-space-space-eightunits);
          }
          .home-hero-image {
            flex: 1;
            max-width: 550px;
            object-fit: cover;
            border-radius: 48px;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
          }
          .home-graphic-top {
            top: 2px;
            right: -150px;
            width: 100%;
            height: 100%;
            position: absolute;
            max-width: 359px;
            max-height: 359px;
            object-fit: contain;
            object-position: center;
          }
          .home-image2 {
            right: -170px;
            bottom: 0px;
            position: absolute;
            object-fit: contain;
          }
          .home-max-width2 {
            align-items: stretch;
          }
          .home-hero-image1 {
            object-fit: contain;
            margin-left: -250px;
            border-radius: 48px;
          }
          .home-content1 {
            width: 50%;
            display: flex;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .home-text012 {
            color: var(--dl-color-scheme-green80);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text013 {
            font-size: 42px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.25;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text014 {
            font-family: Urbanist;
          }
          .home-text015 {
            color: var(--dl-color-scheme-orange100);
            font-family: Urbanist;
          }
          .home-text016 {
            font-family: Urbanist;
          }
          .home-text017 {
            font-family: Urbanist;
          }
          .home-text018 {
            font-size: 16px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-container02 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          .home-section1 {
            background-color: rgba(255, 199, 139, 0.14);
          }
          .home-max-width3 {
            align-items: stretch;
          }
          .home-content2 {
            width: 50%;
            display: flex;
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .home-text019 {
            color: var(--dl-color-scheme-green80);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text020 {
            font-size: 42px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.25;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text021 {
            color: var(--dl-color-scheme-orange100);
            font-family: Urbanist;
          }
          .home-text023 {
            font-family: Urbanist;
          }
          .home-text024 {
            font-size: 16px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-container03 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          .home-hero-image2 {
            object-fit: contain;
            margin-right: -250px;
            border-radius: 48px;
          }
          .home-section2 {
            background-color: var(--dl-color-scheme-green100);
          }
          .home-max-width4 {
            align-items: stretch;
          }
          .home-image5 {
            width: 50%;
          }
          .home-hero-image3 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 48px;
          }
          .home-content3 {
            width: 40%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .home-text025 {
            color: var(--dl-color-scheme-white);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text026 {
            color: var(--dl-color-scheme-white);
            font-size: 42px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.35;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-step {
            display: flex;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-number {
            flex: 0 0 auto;
            width: 64px;
            height: 64px;
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius16);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-scheme-orange100);
          }
          .home-text027 {
            font-size: 28px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
          }
          .home-container04 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title1 {
            color: var(--dl-color-scheme-white);
            font-size: 24px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text028 {
            color: var(--dl-color-scheme-white);
            line-height: 1.5;
          }
          .home-step1 {
            display: flex;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-number1 {
            flex: 0 0 auto;
            width: 64px;
            height: 64px;
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius16);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-scheme-orange100);
          }
          .home-text029 {
            font-size: 28px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
          }
          .home-container05 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title2 {
            color: var(--dl-color-scheme-white);
            font-size: 24px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text030 {
            color: var(--dl-color-scheme-white);
            line-height: 1.5;
          }
          .home-step2 {
            display: flex;
            flex-direction: row;
          }
          .home-number2 {
            flex: 0 0 auto;
            width: 64px;
            height: 64px;
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius16);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-scheme-orange100);
          }
          .home-text031 {
            font-size: 28px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
          }
          .home-container06 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title3 {
            color: var(--dl-color-scheme-white);
            font-size: 24px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text032 {
            color: var(--dl-color-scheme-white);
            line-height: 1.5;
          }
          .home-max-width5 {
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text033 {
            color: var(--dl-color-scheme-green80);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text034 {
            font-size: 42px;
            font-style: normal;
            text-align: center;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.25;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-cards-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-section4 {
            padding-top: 0px;
          }
          .home-max-width6 {
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-f-a-q {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-eightunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-questions {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text037 {
            color: var(--dl-color-scheme-green80);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text038 {
            font-size: 42px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.25;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text039 {
            font-family: Urbanist;
          }
          .home-text041 {
            color: var(--dl-color-scheme-orange100);
            font-family: Urbanist;
          }
          .home-trigger {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home-text042 {
            font-size: 20px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 600;
            line-height: 1.5;
          }
          .home-icon02 {
            width: 12px;
            height: 12px;
          }
          .home-text043 {
            margin-top: 8px;
          }
          .home-trigger1 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home-text044 {
            font-size: 20px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 600;
            line-height: 1.5;
          }
          .home-icon04 {
            width: 12px;
            height: 12px;
          }
          .home-text045 {
            margin-top: 8px;
          }
          .home-trigger2 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home-text046 {
            font-size: 20px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 600;
            line-height: 1.5;
          }
          .home-icon06 {
            width: 12px;
            height: 12px;
          }
          .home-text047 {
            margin-top: 8px;
          }
          .home-trigger3 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home-text048 {
            font-size: 20px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 600;
            line-height: 1.5;
          }
          .home-icon08 {
            width: 12px;
            height: 12px;
          }
          .home-text049 {
            margin-top: 8px;
          }
          .home-image6 {
            width: 50%;
            object-fit: cover;
            margin-right: -200px;
          }
          .home-banner {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            border-radius: 48px;
            flex-direction: column;
            background-size: cover;
            background-image: url('/playground_assets/group%2011-1200w.png');
          }
          .home-text050 {
            color: var(--dl-color-scheme-lightgreen);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text051 {
            color: var(--dl-color-scheme-white);
            font-size: 42px;
            font-style: normal;
            text-align: center;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.25;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text057 {
            color: rgba(255, 255, 255, 0.6);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-btns {
            flex: 0 0 auto;
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          .home-button6 {
            font-size: 16px;
            padding-top: 12px;
            margin-right: var(--dl-space-space-unit);
            padding-left: 24px;
            padding-right: 24px;
            padding-bottom: 12px;
          }
          .home-button7 {
            padding-top: 12px;
            margin-right: 0px;
            padding-left: 24px;
            padding-right: 24px;
            padding-bottom: 12px;
          }
          .home-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-links-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container07 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text061 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text062 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text063 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text064 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text065 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text067 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text068 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text069 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text070 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text071 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text073 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text074 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text075 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text076 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text077 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text078 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text080 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text081 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text082 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text083 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text086 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text089 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text090 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text091 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text092 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text094 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text095 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text096 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text097 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text098 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text099 {
            margin-bottom: var(--dl-space-space-unit);
          }
          @media (max-width: 991px) {
            .home-content {
              width: 50%;
              margin-right: var(--dl-space-space-unit);
            }
            .home-image1 {
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-hero-image {
              margin-bottom: 0px;
            }
            .home-max-width2 {
              flex-direction: column;
            }
            .home-image3 {
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-hero-image1 {
              width: 100%;
              margin-left: 0px;
              margin-bottom: 0px;
            }
            .home-content1 {
              width: 100%;
              margin-left: 0px;
              margin-right: 0px;
            }
            .home-max-width3 {
              flex-direction: column;
            }
            .home-content2 {
              width: 100%;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-image4 {
              padding-bottom: 0px;
            }
            .home-hero-image2 {
              width: 100%;
              margin-left: 0px;
              margin-bottom: 0px;
            }
            .home-max-width4 {
              flex-direction: column;
            }
            .home-image5 {
              width: 100%;
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-hero-image3 {
              width: 100%;
              margin-left: 0px;
              margin-bottom: 0px;
            }
            .home-content3 {
              width: 100%;
              margin-left: 0px;
              margin-right: 0px;
            }
            .home-max-width5 {
              flex-direction: column;
            }
            .home-max-width6 {
              flex-direction: column;
            }
            .home-questions {
              width: 60%;
            }
            .home-image6 {
              margin-right: -100px;
            }
            .home-footer {
              flex-direction: column;
            }
            .home-links-container {
              width: auto;
              margin-top: var(--dl-space-space-twounits);
              flex-direction: row;
            }
            .home-container07 {
              flex-wrap: wrap;
              margin-right: 0px;
            }
          }
          @media (max-width: 767px) {
            .home-links {
              display: none;
            }
            .home-icon {
              fill: var(--dl-color-scheme-green100);
            }
            .home-max-width1 {
              flex-direction: column-reverse;
            }
            .home-content {
              width: 100%;
              margin-right: 0px;
            }
            .home-hero-image {
              margin-right: 0px;
            }
            .home-content1 {
              width: 100%;
              margin-right: 0px;
            }
            .home-content2 {
              width: 100%;
              margin-right: 0px;
            }
            .home-content3 {
              width: 100%;
              margin-right: 0px;
            }
            .home-cards-container {
              flex-wrap: wrap;
              justify-content: center;
            }
            .home-f-a-q {
              margin-bottom: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-questions {
              width: 100%;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-image6 {
              width: 100%;
              margin-right: 0px;
            }
            .home-banner {
              padding: var(--dl-space-space-twounits);
            }
            .home-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-links-container {
              width: auto;
              margin-top: var(--dl-space-space-twounits);
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-container07 {
              width: 100%;
              justify-content: space-between;
            }
          }
          @media (max-width: 479px) {
            .home-banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-footer {
              padding: var(--dl-space-space-unit);
            }
            .home-links-container {
              align-items: flex-start;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-container07 {
              align-items: center;
              margin-right: 0px;
              justify-content: space-between;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
