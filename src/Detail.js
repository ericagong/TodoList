import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteBucket } from "./redux/modules/bucket";

const Detail = (props) => {
  const params = useParams();
  const history = useHistory();
  const bucket_list = useSelector((state) => state.bucket.list);
  const dispatch = useDispatch();
  const content = bucket_list[params.index];
  const removeTodo = () => {
    console.log("removeTodo");
    dispatch(deleteBucket(params.index));
    history.goBack();
  };
  return (
    <div>
      <h1>상세페이지</h1>
      <div>{content}</div>
      <button onClick={removeTodo}>삭제하기</button>
    </div>
  );
};

export default Detail;
