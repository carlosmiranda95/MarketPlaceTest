import React from "react";

import Layaout from "../../components/Layout";
import ClienteList from "../../components/client/ClientesList";
import { product } from "../../services/erp/product";

class Cliente extends React.Component {
  state = {
    error: null,
    data: null
  };
  componentDidMount() {
    this.Listar();
  }
  Listar = async () => {
    this.setState({ error: null });
    try {
      const data = await product.products.list();
      console.log(data.json);
      return data.json;
    } catch (error) {
      this.setState({ error: error });
    }
  };
  render() {
    return (
      <React.Fragment>
        <Layaout>
          <ClienteList data={this.state.data} listar={this.Listar} />
        </Layaout>
      </React.Fragment>
    );
  }
}
export default Cliente;
