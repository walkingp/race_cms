import { Row, Col, Space, Avatar } from "antd";
import React from "react";
import { IoEarth } from "react-icons/io5";

interface Props {}

export const Header = (props: Props) => {
  return (
    <Row align="middle" justify="space-between" className="header">
      <Col>
        <Space>
          <IoEarth />
          实景地图
        </Space>
      </Col>
      <Col>
        <Avatar>U</Avatar>
      </Col>
    </Row>
  );
};
