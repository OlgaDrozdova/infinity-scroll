export const getUser = async (countPage, setLoading) => {
  setLoading(true);
  const response = await fetch(
    `https://randomuser.me/api/?page=${countPage}&results=15&seed=qwerty`
  );
  const users = await response.json();
  return users;
};
