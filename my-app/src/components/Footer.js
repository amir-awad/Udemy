import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="topFooterDiv">
        <div className="topFooterHeading">
          <span className="topHeading">
            Top companies choose{" "}
            <a
              className="footerUdemyBusiness"
              href="https://business.udemy.com/request-demo-mx/?locale=en_US&ref=footer-ad&user_type=visitor&utm_method=0&utm_type=mx"
            >
              Udemy Business
            </a>{" "}
            to build in-demand career skills.
          </span>
        </div>
        <div className="topFooterLogos">
          <img
            alt="Nasdaq"
            height="44"
            width="115"
            src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"
          />
          <img
            alt="Volkswagen"
            height="44"
            width="44"
            src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"
          />
          <img
            alt="Box"
            height="44"
            width="67"
            src="https://s.udemycdn.com/partner-logos/v4/box-light.svg"
          />

          <img
            alt="NetApp"
            height="44"
            width="115"
            src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg"
          />
          <img
            alt="Eventbrite"
            height="44"
            width="115"
            src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"
          />
        </div>
      </div>
      <div className="bottomFooterDiv">
        <div className="linksLanguageSelector">
          <div className="languageSelectorContainer">
            <button type="button" className="footerLanguageButton">
              <FontAwesomeIcon className="fontAwesome" icon={faGlobe} />
              <span>English</span>
            </button>
          </div>
          <ul className="unstyled-list link-column">
            <li>
              <a
                href="/udemy-business/?locale=en_US&amp;mx_pg=clp-pythonforbeginners&amp;path=%2F&amp;ref=footer"
                className="udlite-btn udlite-btn-large udlite-btn-link udlite-text-sm link white-link"
              >
                <span className="footerListItems">Udemy Business</span>
              </a>
            </li>
            <li>
              <a
                href="/teaching/?ref=teach_footer"
                className="udlite-btn udlite-btn-large udlite-btn-link udlite-text-sm link white-link"
              >
                <span className="footerListItems">Teach on Udemy</span>
              </a>
            </li>
            <li>
              <a
                href="/mobile/"
                target="_blank"
                rel="noopener noreferrer"
                className="udlite-btn udlite-btn-large udlite-btn-link udlite-text-sm link white-link"
              >
                <span className="footerListItems">Get the app</span>
              </a>
            </li>
            <li>
              <a
                href="https://about.udemy.com/?locale=en-us"
                className="udlite-btn udlite-btn-large udlite-btn-link udlite-text-sm link white-link"
              >
                <span className="footerListItems">About us</span>
              </a>
            </li>
            <li>
              <a
                href="https://about.udemy.com/company?locale=en-us#offices"
                className="udlite-btn udlite-btn-large udlite-btn-link udlite-text-sm link white-link"
              >
                <span className="footerListItems">Contact us</span>
              </a>
            </li>
          </ul>
          <ul className="unstyled-list link-column">
            <li>
              <a
                href="https://about.udemy.com/careers?locale=en-us"
                className="udlite-btn udlite-btn-large udlite-btn-link udlite-text-sm link white-link"
              >
                <span className="footerListItems">Careers</span>
              </a>
            </li>
            <li>
              <a
                href="https://blog.udemy.com/?ref=footer"
                className="udlite-btn udlite-btn-large udlite-btn-link udlite-text-sm link white-link"
              >
                <span className="footerListItems">Blog</span>
              </a>
            </li>
            <li>
              <a
                href="/support/"
                className="udlite-btn udlite-btn-large udlite-btn-link udlite-text-sm link white-link"
              >
                <span className="footerListItems">Help and Support</span>
              </a>
            </li>
            <li>
              <a
                href="/affiliate/"
                className="udlite-btn udlite-btn-large udlite-btn-link udlite-text-sm link white-link"
              >
                <span className="footerListItems">Affiliate</span>
              </a>
            </li>
            <li>
              <a
                href="https://investors.udemy.com"
                className="udlite-btn udlite-btn-large udlite-btn-link udlite-text-sm link white-link"
              >
                <span className="footerListItems">Investors</span>
              </a>
            </li>
          </ul>
          <ul className="unstyled-list link-column">
            <li>
              <a
                href="/terms/"
                className="udlite-btn udlite-btn-large udlite-btn-link udlite-text-sm link white-link"
              >
                <span className="footerListItems">Terms</span>
              </a>
            </li>
            <li>
              <a
                href="/terms/privacy/"
                className="udlite-btn udlite-btn-large udlite-btn-link udlite-text-sm link white-link"
              >
                <span className="footerListItems">Privacy policy</span>
              </a>
            </li>
            <li>
              <a
                href="/terms/privacy/"
                className="udlite-btn udlite-btn-large udlite-btn-link udlite-text-sm link white-link"
                data-purpose="footer.links.cookie_preferences"
              >
                <span className="footerListItems">Cookie settings</span>
              </a>
            </li>
            <li>
              <a
                href="/sitemap/"
                className="udlite-btn udlite-btn-large udlite-btn-link udlite-text-sm link white-link"
              >
                <span className="footerListItems">Sitemap</span>
              </a>
            </li>
            <li>
              <a
                href="https://about.udemy.com/accessibility-statement?locale=en-us"
                className="udlite-btn udlite-btn-large udlite-btn-link udlite-text-sm link white-link"
              >
                <span className="footerListItems">Accessibility statement</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footerLastSection">
          <div className="logo footerLogo" id="udemy-logo">
            <Link to="/">
              <img
                src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
                alt="Udemy Logo"
              />
            </Link>
          </div>
          <div className="copyrightContainer">© 2022 Udemy, Inc.</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
