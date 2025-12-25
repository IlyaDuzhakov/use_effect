const List = ({ users, select, selectId }) => {
  return (
    <div className="users">
      {users.map((user) => {
        const isSelected = user.id === selectId;
        return (
          <div
            className={`user-name ${isSelected ? "selected" : ""}`}
            key={user.id}
            onClick={() => {
              select(user.id);
            }}
          >
            {user.name}
          </div>
        );
      })}
    </div>
  );
};

export default List;
