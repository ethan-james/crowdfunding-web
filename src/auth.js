const pretendRequest = (email, pass, cb) => {
  setTimeout(() => {
    if (email === 'joe@example.com' && pass === 'password1') {
      cb({
        authenticated: true,
        token: Math.random().toString(36).substring(7)
      })
    } else {
      cb({ authenticated: false })
    }
  }, 0)
};

export const login = (email, pass, cb) => {
  if (localStorage.token) {
    if (cb) cb(true);
    this.onChange(true);
    return;
  }
  pretendRequest(email, pass, (res) => {
    if (res.authenticated) {
      localStorage.token = res.token;
      if (cb) cb(true);
      this.onChange(true);
    } else {
      if (cb) cb(false);
      this.onChange(false);
    }
  })
};

export const getToken = () => {
  return localStorage.token;
};

export const logout = (cb) => {
  delete localStorage.token;
  if (cb) cb();
  this.onChange(false);
};

export const loggedIn = () => {
  return !!localStorage.token
};

export const onChange = () => {};