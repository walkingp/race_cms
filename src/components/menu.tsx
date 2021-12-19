import React from "react";
import { TeamOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
interface Props {}

export const MenuPage = (props: Props) => {
  const { SubMenu } = Menu;
  return (
    <Menu
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["1", "2", "3"]}
      mode="inline"
    >
      <SubMenu key="1" icon={<UserOutlined />} title="基本信息">
        <div>asdfasdfasdfasd</div>
      </SubMenu>
      <SubMenu key="2" icon={<TeamOutlined />} title="官方信息"></SubMenu>
      <SubMenu key="3" icon={<TeamOutlined />} title="赛事新闻"></SubMenu>
    </Menu>
  );
};
