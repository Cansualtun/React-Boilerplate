import React from "react";
import { Flex, Layout } from "antd";
import styles from "./styles.module.css";

const { Header, Footer, Content } = Layout;

const GeneralLayout = () => (
  <Flex gap="middle" wrap>
    <Layout className={styles.container}>
      <Header>Header</Header>
      <Content className={styles.content}>Your Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  </Flex>
);

export default GeneralLayout;
