import { Button, Form, Input } from 'antd';
import React from 'react';
import './style.less';

type Properties = {
  onSearch: (heroi: Object) => void;
};

export const Formulario: React.FC<Properties> = ({ onSearch }: Properties) => {
  const [form] = Form.useForm();

  const onFinish = (heroi: Object) => {
    form.resetFields();
    onSearch(heroi);
  };

  return (
    <Form
      form={form}
      wrapperCol={{ span: 6 }}
      labelCol={{ span: 5, offset: 4 }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Nome"
        name="nome"
        rules={[{ required: true, message: 'Nome do herói obrigatório!' }]}
        hasFeedback
      >
        <Input placeholder="Batman" />
      </Form.Item>
      <Form.Item
        label="URL"
        name="url"
        rules={[
          {
            required: true,
            message: 'URL com a imagem do herói obrigatório!'
          },
          { type: 'url', warningOnly: true, message: 'URL inválida!' },
          {
            type: 'string',
            min: 6,
            message: 'URL deve conter no mínimo 6 caracteres!'
          }
        ]}
        hasFeedback
      >
        <Input placeholder="https://www.example.com.br/imagem" />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 11 }}>
        <Button type="primary" htmlType="submit">
          Adicionar
        </Button>
      </Form.Item>
    </Form>
  );
};
