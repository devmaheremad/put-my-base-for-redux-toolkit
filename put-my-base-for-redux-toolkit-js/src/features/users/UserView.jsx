import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./usersSlice";

const UserView = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <>
      <h2 className="mb-10px">Our users are:</h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.users.length > 0
        ? user.users.map((user) => {
            return <p key={user.id}>{user.name}</p>;
          })
        : null}
      {!user.loading && user.users.length === 0 ? (
        <div>There something wrong: {user.error}</div>
      ) : null}
    </>
  );
};

export default UserView;
