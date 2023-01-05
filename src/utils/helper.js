export const generateRandomId = () => {
  const currentdate = new Date();
  const id = currentdate.getMonth() + ""
    + currentdate.getFullYear() + ""
    + currentdate.getHours() + ""
    + currentdate.getMinutes() + ""
    + currentdate.getSeconds();
  return id;
}