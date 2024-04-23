import React from "react";
import { snsLink } from "../../data/header";
import { Link } from "react-router-dom";

function Sns() {
  return (
    <div className="header__sns">
      <ul>
        {snsLink.map((sns, key) => (
          <li key={key}>
            <Link
              to={sns.url}
              target="_blank"
              aria-label={sns.title}
              rel="noopener noreferrer"
            >
              <span>{sns.icon}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sns;
