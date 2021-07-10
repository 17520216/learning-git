import { Menu, Dropdown, Switch } from "antd";
import React, { useContext } from "react";
import { Context } from "../context/useContextHome";
import logo from "../images/logo.svg";
import logo1 from "../images/logo2.png";

import { useState } from "react";
import Container from "./Container";

const data = {
  menu: [
    {
      children: [
        {
          children: [
            {
              classActive: "Course",
              link: "/",
              name: "Web Responsive",
              slug: "Course",
            },
            {
              classActive: "Course",
              link: "/",
              name: "ReactJs",
              slug: "Course",
            },
          ],
          classActive: "Course",
          link: "/",
          name: "Web Responsive",
          slug: "Course",
        },
        {
          classActive: "Course",
          link: "/",
          name: "ReactJs",
          slug: "Course",
        },
        {
          children: [
            {
              classActive: "Course",
              link: "/",
              name: "Web Responsive",
              slug: "Course",
            },
            {
              classActive: "Course",
              link: "/",
              name: "ReactJs",
              slug: "Course",
            },
          ],
          classActive: "Course",
          link: "/",
          name: "Other Course",
          slug: "Course",
        },
      ],
      classActive: "Course",
      link: "/Course",
      name: "Course",
      slug: "Course",
    },
    {
      classActive: "Home",
      link: "/Home",
      name: "Home",
      slug: "Home",
    },
    {
      classActive: "About",
      link: "/About",
      name: "About",
      slug: "About",
    },
    {
      classActive: "cfd-team",
      link: "/cfd-team",
      name: "CFD Team",
      slug: "cfd-team",
    },
    {
      classActive: "contact",
      link: "/contact",
      name: "Contact",
      slug: "contact",
    },
  ],
};

const { SubMenu } = Menu;

export default function Header() {
  let { darkMode, dark, lang, setLang } = useContext(Context);

  const childrenMenu = (val, ind = 0) => {
    if (val.children && val.children.length > 0) {
      return (
        <SubMenu title={val.name} className="sub">
          {val?.children.map((val, ind) => {
            return childrenMenu(val, ind);
          })}
        </SubMenu>
      );
    } else {
      return (
        <React.Fragment key={ind}>
          <Menu.Item>{val?.name}</Menu.Item>
        </React.Fragment>
      );
    }
  };

  const renderMultiMenu = (list) => {
    if (list && list.length > 0) {
      return (
        <Menu className="dropDownMenu">
          {list.map((val, ind) => childrenMenu(val, ind))}
        </Menu>
      );
    }
  };

  function onChange() {
    darkMode();
  }

  return (
    <div className={`${dark ? "dark" : ""}`}>
      <header className="head">
        <div className="topHeader">
          <Container width={"1366px"}>
            <div className="contentTopH">
              <h5>The Outstanding Production Group</h5>
              <h3>
                <span
                  style={{ color: `${lang === "en" ? "white" : "#7d7d7d"} ` }}
                  onClick={() => setLang("en")}
                >
                  EN
                </span>
                <span>|</span>
                <span
                  onClick={() => setLang("vi")}
                  style={{ color: `${lang === "vi" ? "white" : "#7d7d7d"} ` }}
                >
                  VN
                </span>
              </h3>
            </div>
          </Container>
        </div>
      </header>
      <Container>
        <header>
          <div className="logo">
            {dark ? <img src={logo1} alt="" /> : <img src={logo} alt="" />}
          </div>

          {data
            ? data.menu.map((value, index) => {
                if (value.children) {
                  return (
                    <Dropdown overlay={renderMultiMenu(value.children)}>
                      <a key={index} href={value.link}>
                        {value.name}
                      </a>
                    </Dropdown>
                  );
                } else {
                  return (
                    <a key={index} href={value.link}>
                      {value.name}
                    </a>
                  );
                }
              })
            : ""}

          <div className="dark-mode">
            {/* <span>Dark | Mode</span> */}
            <Switch onChange={onChange} />
          </div>
        </header>
      </Container>
    </div>
  );
}
