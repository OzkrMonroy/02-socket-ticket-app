export const getUserInfo = () => {
  return {
    agent: localStorage.getItem("agent"),
    desk: localStorage.getItem("desk"),
  };
};
