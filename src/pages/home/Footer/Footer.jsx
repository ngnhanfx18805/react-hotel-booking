//6. Tạo Footer cho Homepage
import ContentFooter from "./ContentFooter";
const Footer = (props) => {
  // console.log(props);
  const contentFooter = props.valueFooter.map((item) => item);
  // console.log(a);
  return <ContentFooter contentFooter={contentFooter} />;
};

export default Footer;
