import Link from "next/link";
import { FC } from "react";

const Footer: FC = ({}) => {
  return (
    <div className="footer">
      <p>&copy; 2024 EDROH. All Rights Reserved.</p>
      <div className="footer__links">
        {["About", "Privacy Policy", "Licensing", "Contact"].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase().replace(" ", "_")}`}
            className="footer__link"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
