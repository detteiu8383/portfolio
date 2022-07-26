// @refresh reload
import { Routes } from "solid-start/root";
import { ErrorBoundary } from "solid-start/error-boundary";

import "./index.css";
import { Suspense } from "solid-js";
import Header from "./components/Header";
import Footer from "./components/Footter";
export default function Root() {
  return (
    <>
      <Header />
      <main>
        <ErrorBoundary>
          <Suspense>
            <Routes />
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </>
  );
}
