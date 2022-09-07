import React, { Fragment, useEffect, useContext } from "react";
import { UserContext } from "../../context";

const Standard = ({ history, match }) => {
  const [state, setState] = useContext(UserContext);

  useEffect(() => {
    let result = [];
    const check = () =>
      state &&
      state.user &&
      state.user.subscriptions &&
      state.user.subscriptions.map((sub) => {
        result.push(sub.plan.nickname);
      });
    check();

    // console.log("MATCH", match);
    const plan = match.path.split("/")[1].toUpperCase(); // Standard
    if (!result.includes(plan)) {
      history.push("/");
    }
  }, [state && state.user]);

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row py-5 bg-light text-center">
          <h1 className="display-4 fw-bold">Standard</h1>
          <p className="lead px-20" style={{color:'blue',marginLeft:'20px',fontWeight:'bold'}}>** Here are your 10 exclusive courses of this month</p>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-md-8 p-5 rounded bg-dark text-light">
            <ul className="lead">
              <li>Nodejs</li>
              <li>Mongodb</li>
              <li>React</li>
              <li>ReactNative</li>
              <li>Vue.js</li>
               <li>Javascript</li>
              <li>Typescript</li>
              <li>AngularJS</li>
              <li>Angular</li>
              <li>Koa.js</li>
            </ul>
          </div>

          <div className="col-md-4">
            <h4>Course analysis</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium ratione pariatur ab unde voluptatem ea, quae veniam
              aperiam sint porro aliquid animi eveniet, culpa id reiciendis vel
              nihil veritatis qui.
            </p>
            <h4>Email support</h4>
            <p>subscriptions@domain.com</p>
            <h4>Help center</h4>
            1300 123 456
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Standard;
