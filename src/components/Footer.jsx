const Footer = () => {
    return (
      <footer>
        Copyright &copy; {new Date().getFullYear()} Kyle Keene-Welch
        <a target="_blank" href="https://github.com/KyleKeeneWelch" rel="noreferrer">
          <img
            src="/github-mark.svg"
            alt="Github logo"
            width="25px"
            height="25px"
            draggable="false"
          />
        </a>
      </footer>
    );
  };
  
  export default Footer;