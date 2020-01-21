import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Layout } from "../../components/Layout";
import MembershipsForm from "../../components/memberships/MembershipsForm";
import MembershipsList from "../../components/memberships/MembershipsList";
import { TitleMembership } from "../../components/shared/Tittle/Title";
import { product } from "../../services/erp/product";
import Loader from "../../components/shared/customLoader/Loader";
var data = [];
function Memberships(props) {
  const [valueLoader, setValueLoader] = useState(false);
  const [valueData, setValueData] = useState(null);

  const projectID = props.location.state.projectId;
  const routerProject = {
    company: props.location.state.company,
    country: props.location.state.country
  };
  let idMembership = 1;
  async function Listar(id, router) {
    try {
      setValueLoader(true);
      var data = await product.products.listDiscount(id, router);
      setValueLoader(false);
      return data.json;
    } catch (error) {
      return error;
    }
  }
  useEffect(() => {
    data = Listar(projectID, routerProject);
    setValueData(data);
  }, []);

  return (
    <Fragment>
      {valueLoader ? <Loader /> : null}
      <Layout>
        <TitleMembership
          titleName="Membresía"
          description="Membresías para kalomay"
          color="white"
        />
        <MembershipsList dataSource={valueData} />
      </Layout>
    </Fragment>
  );
}
export default withRouter(Memberships);
