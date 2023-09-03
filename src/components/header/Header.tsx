import classes from './header.module.css';

export function Header() {
  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.content}>
          <img className={classes.logo} src="/logo.svg" alt="logo" />

          <h2 className={classes.text}>
            <span>STUDENTS</span>
            <span className={classes.hiddenInMobile}>by</span>
            <a
              className={classes.hiddenInMobile}
              href="https://github.com/AlexeyMachehin"
              target="blank">
              AlexeyMachehin
            </a>
          </h2>
        </div>
      </div>
    </header>
  );
}
