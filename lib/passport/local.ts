import Local from "passport-local";

export type LoginInfo = {
  id: string;
  email: string;
  authorization: string;
};

export const localStrategy = new Local.Strategy(
  { usernameField: "id", passwordField: "password" },
  function (id, password, done) {
    const loginInfo: LoginInfo = {
      id: `${Date.now()}`,
      email: "test@test.com",
      authorization: "asdfasdfasdf",
    };
    done(null, loginInfo);
  }
);
