type LogoutDuration = number;

async function LogoutLoggedInUserAccount() {
  const logoutDuration: Readonly<Partial<LogoutDuration>> = 172800000 as number;

  window.setInterval(() => {
    window.localStorage.removeItem("user");
  }, logoutDuration as number);
}

export default LogoutLoggedInUserAccount;
