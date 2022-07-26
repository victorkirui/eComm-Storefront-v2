import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Logo.png";
import NavLinks from "./NavLinks";
import Currencies from "./Currencies";
import { connect } from "react-redux";
import { fetchCurrentCategoryName } from "../../redux/shopping/shopping-actions";
import { Container } from "./NavStyles";

class index extends PureComponent {
  render() {
    return (
      <Container>
        <NavLinks />

        <Link to="/category/all" onClick={() => this.props.fetchCurrentCategoryName("All")}>
          <img src={Logo} alt="logo" />
        </Link>

        <Currencies />
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCurrentCategoryName: (name) =>
      dispatch(fetchCurrentCategoryName(name)),
  };
};

export default connect(null, mapDispatchToProps)(index);
