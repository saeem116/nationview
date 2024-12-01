import footerContact from "../../../api/footerContact.json";

import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import { RiFacebookCircleLine } from "react-icons/ri";
import { MdOutlineWebAsset } from "react-icons/md";
import { RiContactsBookFill } from "react-icons/ri";

import { NavLink } from "react-router-dom";

export const Footers = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };

  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
        {footerContact.map((curData, index) => {
          const { icon, title, details } = curData;
          return (
            <>
              <div className="footer-contact" key={index}>
                <div className="icon">{footerIcon[icon]}</div>
                <div className="footer-contact-text">
                  <p>{title}</p>
                  <p>{details}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2024, All Right Reserved
                <NavLink
                  to="https://www.linkedin.com/in/saeem-zaman/"
                  target="_blank"
                >
                  SaeemZaman
                </NavLink>
              </p>
            </div>

            <div className="footer-menu">
              <ul>
                <li>
                  <NavLink to="/">
                    <IoHomeOutline />
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="https://www.facebook.com/saeem.zaman"
                    target="_blank"
                  >
                    <RiFacebookCircleLine />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="https://reactfullstackaxios-hs.netlify.app/"
                    target="_blank"
                  >
                    <MdOutlineWebAsset />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">
                    <RiContactsBookFill />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
