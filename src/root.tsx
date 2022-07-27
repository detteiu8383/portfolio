// @refresh reload
import { Routes } from "solid-start/root";
import { ErrorBoundary } from "solid-start/error-boundary";

import "./index.css";
import { Suspense } from "solid-js";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { css } from "solid-styled-components";

const MainClass = css({
  padding: "1rem 16px",
  margin: "auto",
  flex: "1 0 auto",
  width: "1400px",
  // large desktops, less than 1400px
  "@media (max-width: 1399.98px)": {
    width: "1200px",
  },
  // desktops, less than 1200px
  "@media (max-width: 1199.98px)": {
    width: "992px",
  },
  // tablets, less than 992px
  "@media (max-width: 991.98px)": {
    width: "768px",
  },
  // landscape phones, less than 768px
  "@media (max-width: 767.98px)": {
    width: "576px",
  },
  // portrait phones, less than 576px
  "@media (max-width: 575.98px)": {
    width: "100%",
  },
});

export default function Root() {
  return (
    <>
      <Header />
      <main class={MainClass}>
        <div>
          <ErrorBoundary>
            <Suspense>
              <Routes />
            </Suspense>
          </ErrorBoundary>
        </div>
      </main>
      <Footer />
    </>
  );
}
