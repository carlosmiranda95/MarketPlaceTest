import React, { useState, useEffect } from "react";
import { Layout } from "../../components/Layout";
import { Form } from "../../components/shared/form/Form";
import { TranslatorProvider } from "react-translate";
import { MdShoppingBasket } from "react-icons/md";
import { api } from "../../services/erp/order";
import MyOrdersGrid from "../../components/order/MyOrdersGrid";

const ListOrderByClient = async () => {
  try {
    var data = await api.orders.ListClient();
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
    ListOrderByClient().then(result => {
      console.log(result);
      setData(result);
    });
  }, []);

  return (
    <TranslatorProvider
      translations={require(`../../assets/language/${lang}.json`)}
    >
      <React.Fragment>
        <Layout>
          <Form title="myReservations" iconForm={<MdShoppingBasket />}>
            <MyOrdersGrid
              language={lang}
              dataSource={dataOrders}
            ></MyOrdersGrid>
          </Form>
        </Layout>
      </React.Fragment>
    </TranslatorProvider>
  );
}
