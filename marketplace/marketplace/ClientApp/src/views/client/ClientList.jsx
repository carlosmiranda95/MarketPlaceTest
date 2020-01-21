import React from "react";
import { Layout } from "../../components/Layout";
import { Form } from "../../components/shared/form/Form";
import DataGrid from "../../components/shared/customDataGrid/dataGrid";
import { TranslatorProvider } from "react-translate";
import { IoIosPeople } from "react-icons/io";
import { employees } from "./data.js";

export default function ClientList() {
  return (
    <TranslatorProvider
      translations={require("../../assets/language/" + "es" + ".json")}
    >
      <Layout>
        <Form title="clientList" iconForm={<IoIosPeople />}>
          <DataGrid data={employees} editing={true}></DataGrid>
        </Form>
      </Layout>
    </TranslatorProvider>
  );
}
