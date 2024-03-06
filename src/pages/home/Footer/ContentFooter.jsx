import "./ContentFooter.css";
const ContentFooter = (props) => {
  console.log(props.contentFooter);
  return (
    <div className="container-footer">
      <ul className="content-footer">
        {props.contentFooter[0].map((item) => (
          <li>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
      <ul className="content-footer">
        {props.contentFooter[1].map((item) => (
          <li>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
      <ul className="content-footer">
        {props.contentFooter[2].map((item) => (
          <li>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
      <ul className="content-footer">
        {props.contentFooter[3].map((item) => (
          <li>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
      <ul className="content-footer">
        {props.contentFooter[4].map((item) => (
          <li>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentFooter;
