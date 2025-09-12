import React from "react";
import PageTransition from "./src/components/PageTransition";
import "@fontsource-variable/inter";

export const wrapPageElement = ({ element }) => {
  return <PageTransition>{element}</PageTransition>;
};
export const onInitialClientRender = () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};
