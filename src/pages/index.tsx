import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import "../styles/main.scss";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <Layout>
        <p> SOME TEXT </p>
      </Layout>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <body className="background" />
    <title>Ben Sehic</title>
  </>
);
