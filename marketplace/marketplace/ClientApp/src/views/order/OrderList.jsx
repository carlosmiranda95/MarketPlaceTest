import React, { useState, useEffect } from "react";
import { Layout } from "../../components/Layout";
import { Form } from "../../components/shared/form/Form";
import { TranslatorProvider } from "react-translate";
import { MdShoppingBasket } from "react-icons/md";
import { api } from "../../services/erp/order";
import OrdersGrid from "../../components/order/OrdersGrid";

const ListOrderBySeller = async () => {
  try {
    var data = await api.orders.listSeller();
    return data.json;
  } catch (error) {
    return error;
  }
};

export default function Orders() {
  let lang = window.localStorage.getItem("language");
  if (lang == "" || lang == undefined) lang = "es";

  const [dataOrders, setData] = useState([]);
  useEffect(function() {
    ListOrderBySeller().then(result => {
      setData(result);
    });
  }, []);
  return (
    <TranslatorProvider
      translations={require(`../../assets/language/${lang}.json`)}
    >
      <React.Fragment>
        <Layout>
          <Form title="reservations" iconForm={<MdShoppingBasket />}>
            <OrdersGrid language={lang} dataSource={dataOrders}></OrdersGrid>
          </Form>
        </Layout>
      </React.Fragment>
    </TranslatorProvider>
  );
}
