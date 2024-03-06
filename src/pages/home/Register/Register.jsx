//5. Tạo phần form đăng ký
import "./Register.css";

const Register = (props) => {
  return (
    <div className="register">
      <h1>Save time, save money!</h1>
      <p>Sign up and we'll send the best deals to you</p>
      <form>
        <input type="text" placeholder="Your Email  "></input>
        <button type="submit">Subcribe</button>
      </form>
    </div>
  );
};

export default Register;
