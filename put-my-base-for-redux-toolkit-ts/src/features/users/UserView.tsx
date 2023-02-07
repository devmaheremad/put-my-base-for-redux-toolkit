import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchUsers } from "./usersSlice";

const UserView = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
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
