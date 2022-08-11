import React from "react";

import './ButtonEmail.css'

  function ButtonEmail({children}) {
  return (
      <button className="btn-email">{children}</button>
  );
  }

export default ButtonEmail;