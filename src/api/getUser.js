/**
 * @param {number} countPage - page number
 * @param {function} setLoading - SetState function to render loading component
 * @return {Promise} - json with users
 * @description async function with get request to https://randomuser.me/
 */
export const getUser = async (countPage, setLoading) => {
  setLoading(true);
  const response = await fetch(
      `https://randomuser.me/api/?page=${countPage}&results=15&seed=qwerty`,
  );
  const users = await response.json();
  return users;
};
