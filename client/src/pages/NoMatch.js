import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => {
  setTimeout(() => {
    window.location.assign("/");
  }, 5000);
  return (
    <>
      <div className="">
        <Link className="back" to="/">
          ← Back
        </Link>
        <div id="root">
          <div class="">
            <div className="">
              <h4>uh oh ...</h4>
              <p>
                Looks like the the page you are looking for is unavailable !
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoMatch;
