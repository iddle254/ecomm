import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Protected(props) {
  const history = useHistory();
  const Component = props.cmp;

  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      history.push("/login");
    }
  });

  return (
    <div>
      <Component />
    </div>
  );
}

export default Protected;
