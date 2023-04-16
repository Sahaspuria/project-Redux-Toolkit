import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../Store/slices";
const UserList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.users;
  });

  const removeUser = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <>
      {data.map((item, id) => {
        return (
          <li key={id}>
            {item} <button onClick={() => removeUser(id)}>delete</button>
          </li>
        );
      })}
    </>
  );
};
export default UserList;
