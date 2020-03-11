import React from "react";
import { connect } from "react-redux";
import { edituser } from "../../redux";


export default connect(
    state => ({
      result: state.users.edituser.result,
      loading: state.auth.logout.loading,
      error: state.auth.logout.error
    }),
    { edituser }
  )(EditUser);