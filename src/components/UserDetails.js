import DeleteAllUser from "./DeleteAllUser";
import { fakeName } from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "../Store/slices";
import UserList from "./userList";
const UserDetails = () => {
  const dispatch = useDispatch();
  const addNewUser = (name) => {
    dispatch(addUser(name));
  };
  return (
    <>
      <div className="Content">
        <div className="admin-table">
          <div className="admin-subtitle">List of Admin Users</div>
          <button onClick={() => addNewUser(fakeName())}>Add User</button>
        </div>
        <ul>
          <UserList />
        </ul>
        <DeleteAllUser />
      </div>
    </>
  );
};
export default UserDetails;
