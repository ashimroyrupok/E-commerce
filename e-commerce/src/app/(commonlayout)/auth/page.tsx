/* eslint-disable react/no-unescaped-entities */
import Login from "./Login";
import Register from "./Register";
import frontImg from "@/assests/frontImg.jpg"
import Image from "next/image";


const LoginPage = () => {
    return (
      <div className="login-form  ">
        <div className="login-container">
          <input type="checkbox" id="flip" />
          <div className="cover">
            <div className="front">
              <Image
                src={frontImg}
                height={400}
                width={500}
                className=" object-cover "
                alt=""
              />
              <div className="text">
                <span className="text-1">
                  Every new friend is a <br /> new adventure
                </span>
                <span className="text-2">Let's get connected</span>
              </div>
            </div>
            <div className="back">
              <Image
                src={frontImg}
                height={400}
                width={500}
                className=" object-cover "
                alt=""
              />
              <div className="text">
                <span className="text-1">
                  Complete miles of journey <br /> with one step
                </span>
                <span className="text-2">Let's get started</span>
              </div>
            </div>
          </div>
          <div className="forms">
            <div className="form-content">
              <Login />
              <Register />
            </div>
          </div>
        </div>
      </div>
    );
};

export default LoginPage;