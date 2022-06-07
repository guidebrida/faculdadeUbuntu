import { Avatar, Button, Col, List, Row } from 'antd';
import React from 'react';
import { DataType } from '../types/DataType';

type Properties = {
  propsHerois: DataType[];
  onDelete: (id: string) => void;
  onUpdate: (item: DataType) => void;
};

export const ListaHerois: React.FC<Properties> = (properties: Properties) => {
  const deleteHero = (id: string) => {
    properties.onDelete(id);
  };

  const updateHero = (item: DataType) => {
    properties.onUpdate(item);
  };

  return (
    <Row justify="center">
      <Col span={15}>
        <List
          className="lista-herois"
          itemLayout="horizontal"
          dataSource={properties.propsHerois}
          bordered={true}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Button type="link" onClick={() => updateHero(item)}>
                  Editar
                </Button>,
                <Button type="link" onClick={() => deleteHero(item._id)}>
                  Excluir
                </Button>
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.url} />}
                title={
                  <a href={`https://www.google.com.br/search?q=${item.nome}`}>
                    {item.nome}
                  </a>
                }
                description={item._id}
              />
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
};
