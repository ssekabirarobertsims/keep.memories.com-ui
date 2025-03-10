type LogoutDuration = number;

async function LogoutAdmin() {
  const logoutDuration: Readonly<Partial<LogoutDuration>> = 172800000 as number;

  window.setInterval(() => {
    window.localStorage.removeItem("admin");
  }, logoutDuration as number);
}

export default LogoutAdmin;
