export const getUser = async (setUsers) => {
  const response = await fetch('https://randomuser.me/api/?results=25');
  const users = await response.json();
  setUsers(users);
};
