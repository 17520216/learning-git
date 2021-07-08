import { Menu, Dropdown, Button } from "antd";
import React from "react";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import Container from "./Container";

const data = {
  menu: [
    {
      children: [
        {
          children: [
            {
              classActive: "services",
              link: "/",
              name: "Digital services",
              slug: "services",
            },
            {
              classActive: "services",
              link: "/",
              name: "Event services",
              slug: "services",
            },
          ],
          classActive: "services",
          link: "/",
          name: "Digital services",
          slug: "services",
        },
        {
          classActive: "services",
          link: "/",
          name: "Event services",
          slug: "services",
        },
        {
          children: [
            {
              classActive: "services",
              link: "/",
              name: "Digital services",
              slug: "services",
            },
            {
              classActive: "services",
              link: "/",
              name: "Event services",
              slug: "services",
            },
          ],
          classActive: "services",
          link: "/",
          name: "Other services",
          slug: "services",
        },
      ],
      classActive: "services",
      link: "/services",
      name: "Services",
      slug: "services",
    },
    {
      classActive: "case-studies",
      link: "/case-studies",
      name: "Case studies",
      slug: "case-studies",
    },
    {
      classActive: "our-lab",
      link: "/our-lab",
      name: "Our Lab",
      slug: "our-lab",
    },
    {
      classActive: "career",
      link: "/career",
      name: "Career",
      slug: "career",
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

  return (
    <Container>
      <header>
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
      </header>
    </Container>
  );
}
