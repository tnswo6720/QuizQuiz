import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import LayoutBanner from "../src/components/commons/layout/banner/LayoutBanner.container";

const styles = {
  container: {
    backgroundColor: "#ffeb3ba1",
    fontFamily: "Arial, sans-serif",
    color: "#424242",
    textAlign: "center",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#FBC02D",
    fontSize: "3em",
    padding: "20px",
  },
  button: {
    backgroundColor: "#F9A825",
    border: "none",
    color: "#FFFFFF",
    padding: "15px 32px",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "10px",
    cursor: "pointer",
    transition: "background .3s",
  },
  logo: {
    width: "200px",
    height: "200px",
    borderRadius: "30px",
  },
};

const MainPage = () => {
  return (
    <div style={styles.container}>
      <img style={styles.logo} src="/logo.jpg" alt="logo" />
      <h1 style={styles.title}>퀴즈퀴즈</h1>
      <button
        style={styles.button}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#FBC02D")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#F9A825")}
      >
        퀴즈 시작하기
      </button>
    </div>
  );
};

export default MainPage;
