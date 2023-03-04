export const getUser = async (setUsers, setLoading) => {
  setLoading(true);
  const response = await fetch('https://randomuser.me/api/?results=15');
  const users = await response.json();
  setUsers(users);
  setLoading(false);
};
