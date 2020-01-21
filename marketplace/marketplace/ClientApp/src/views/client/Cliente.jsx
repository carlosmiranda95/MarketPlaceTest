import React from "react";

import { Layout } from "../../components/Layout";
import ClienteFrm from "../../components/client/ClienteFrm";
import { api } from "../services/client";

class Cliente extends React.Component {
  state = {
    error: null,
    form: {
      name: "",
      last_name: "",
      ci: "",
      email: "",
      cell_phone: "",
      birth: "",
      rank: "",
      sex: ""
    }
  };
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    //console.log(this.state.form);
  };
  handleClickSave = async e => {
    //console.log(this.state.form.name,this.state.form.job,this.state.form.twitter,this.state.form.email);
    this.setState({ error: null });

    try {
      await api.clients.create(this.state.form);
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  render() {
    return (
      <React.Fragment>
        <Layout>
          <ClienteFrm
            onChange={this.handleChange}
            onClickSave={this.handleClickSave}
            formValues={this.state.form}
          />
        </Layout>
      </React.Fragment>
    );
  }
}
export default Cliente;
