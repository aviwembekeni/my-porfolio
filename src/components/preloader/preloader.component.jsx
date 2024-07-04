import "./preloader.styles.scss";

const Preloader = (props) => (
  <div id={props.load ? "preloader" : "preloader-none"}></div>
);

export default Preloader;
