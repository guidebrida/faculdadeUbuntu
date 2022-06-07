import { Button, Col, Drawer, Form, Input, message, Row, Space } from 'antd';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { DataType } from '../types/DataType';
import { Formulario } from './Formulario';
import { ListaHerois } from './ListaHerois';

export const Heroi: React.FC = () => {
  const [dataList, setDataList] = useState<DataType[]>([]);
  const [visible, setVisible] = useState<boolean>(false);
  const [data, setData] = useState<DataType>();

  const sucesso = (acao: string) => {
    message.success(`Herói ${acao} com sucesso!`);
  };

  const erro = (acao: string) => {
    message.error(`Não foi possível ${acao} o herói!`);
  };

  const setInfos = (item: DataType) => {
    setVisible(true);
    setData(item);
  };

  const getIndex = (id: string, dataListCopy: DataType[]) => {
    const index = dataListCopy
      .map((item) => {
        return item._id;
      })
      .indexOf(id);
    return index;
  };

  const updateHero = useCallback(
    async (heroi: DataType) => {
      const dataListCopy = Array.from(dataList);
      const index = getIndex(heroi._id, dataListCopy);

      const { data, status } = await axios.put(
        `http://localhost:3500/herois/${heroi._id}`,
        heroi
      );

      if (status === 200) {
        dataListCopy[index] = data;
        setDataList(dataListCopy);
        sucesso('alterado');
        setVisible(false);
      } else {
        erro('alterar');
      }
    },
    [dataList]
  );

  const deleteHero = useCallback(
    async (id: string) => {
      const dataListCopy = Array.from(dataList);
      const index = getIndex(id, dataListCopy);

      const { status } = await axios.delete(
        `http://localhost:3500/herois/${id}`
      );

      if (status === 200) {
        dataListCopy.splice(index, 1);
        setDataList(dataListCopy);
        sucesso('excluído');
      } else {
        erro('excluir');
      }
    },
    [dataList]
  );

  const postHero = useCallback(
    async (heroi: DataType | any) => {
      const { data, status } = await axios.post(
        'http://localhost:3500/herois',
        heroi
      );
      if (status === 201) {
        setDataList([...dataList, data]);
        sucesso('adicionado');
      } else {
        erro('adicionar');
      }
    },
    [dataList]
  );

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('http://localhost:3500/herois');
      setDataList(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Row justify="center" style={{ paddingTop: 30 }}>
        <Col span={12} style={{ paddingBottom: 30 }}>
          <Formulario onSearch={postHero} />
          <ListaHerois
            propsHerois={dataList}
            onDelete={deleteHero}
            onUpdate={setInfos}
          />
          <Drawer
            title="Atualizar herói"
            width={500}
            visible={visible}
            onClose={() => setVisible(false)}
            bodyStyle={{ paddingBottom: 100 }}
            extra={
              <Space>
                <Button onClick={() => setVisible(false)}>Cancelar</Button>
              </Space>
            }
          >
            <Form
              labelCol={{ span: 4 }}
              onFinish={updateHero}
              initialValues={data}
            >
              <Form.Item name="_id" label="Id">
                <Input disabled={true} />
              </Form.Item>
              <Form.Item name="nome" label="Nome">
                <Input />
              </Form.Item>
              <Form.Item name="url" label="Url">
                <Input />
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit">Alterar</Button>
              </Form.Item>
            </Form>
          </Drawer>
        </Col>
      </Row>
    </>
  );
};
