const AuthGuard = (to, from, next) => {
  const isAdmin = to.meta.permission;

  const isLoggedIn = Boolean(localStorage.getItem("authenticated"));

  if (isAdmin && isLoggedIn) {
    next(); // Proceed to the route
  } else {
    next({ name: "login" }); // Redirect to the login route
  }
};

export default AuthGuard;
