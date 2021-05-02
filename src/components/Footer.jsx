const Footer = () => {
  return (
    <footer
      style={{
        position: "fixed",
        left: "0px",
        bottom: "25px",
        width: "100%",
        fontSize: "1.2em",
        color: "grey",
        textAlign: "center",
      }}
    >
      <div className="container">
        By{" "}
        <a href="https://yashshah1.github.io" target="_blank" rel="noreferrer">
          Yash Shah
        </a>
      </div>
    </footer>
  );
};

export default Footer;
