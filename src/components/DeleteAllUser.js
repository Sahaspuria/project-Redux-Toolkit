import { useDispatch } from "react-redux";
import { deleteAllUser } from "../Store/slices";

const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const deleteAll = () => {
    dispatch(deleteAllUser());
  };
  return <button onClick={deleteAll}>Delete All User</button>;
};
export default DeleteAllUser;
