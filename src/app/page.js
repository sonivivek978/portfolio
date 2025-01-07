import React from "react";
// import styles from "./Nav.module.scss";
import { HeaderComponent } from "./component/headerComponent";
import HomeComponent from "./component/HomeComponent";
export default function Home() {
  return (
    <div>
      <header>
        <HeaderComponent />
      </header>
      <main>
        <HomeComponent/>
      </main>
      {/* <footer></footer> */}
    </div>
  );
}
