import { Heading, Page } from "@shopify/polaris";
import React, { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    console.log("HI");
  }, []);
  return (
    <Page>
      <Heading>Shopify app with Node and React 🎉</Heading>
    </Page>
  );
};

export default Index;
