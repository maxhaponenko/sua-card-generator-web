import { AppState } from "@/store";
import { connect } from "react-redux";
import Card, { StateProps, DispatchProps } from "./card";
import { onNameChange, onTextChange, uploadImage } from './create-pdf-card-flow.slice'

const mapStateToProps = (state: AppState): StateProps => ({
  card: state.card.card
});

const mapDispatchToProps: DispatchProps = {
  onNameChange,
  onTextChange,
  uploadImage
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
