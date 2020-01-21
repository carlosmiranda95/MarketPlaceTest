import React from "react";
import { Layout } from "../../components/Layout";
import { Form } from "../../components/shared/form/Form";
import { TranslatorProvider } from "react-translate";
import { IoMdClipboard } from "react-icons/io";
import PreImpression from "../../components/contract/ViewContract";

export default function ViewContract() {
  return (
    <TranslatorProvider
      translations={require("../../assets/language/" + "es" + ".json")}
    >
      <Layout>
        <Form title="ListContractPreImpression" iconForm={<IoMdClipboard />}>
          <PreImpression />
        </Form>
      </Layout>
    </TranslatorProvider>
  );
}
