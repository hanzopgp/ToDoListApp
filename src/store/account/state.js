export default function () {
  return {
    token: localStorage.getItem('access_token') || null,
  };
}