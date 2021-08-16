import { connect } from "react-redux";
function CheckQuestion(props) {
  console.log(props);
  return <div>CheckQuestion</div>;
}

function mapStateToProps(state) {
  return {};
}
export default connect(mapStateToProps)(CheckQuestion);
