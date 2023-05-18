import React, { useState, useMemo, useEffect, useCallback } from "react";
import moment from "moment";
import axios from "axios";
import { config } from "../assets/config/config";
import ThemedSuspense from "../components/ThemedSuspense";

const apiUrl = config.api.url;

// create context
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [isLoaded, setLoaded] = useState(false);
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  const refreshTokens = useCallback(() => {
    // return axios.post(`/v1/users/refresh-tokens`, {})
    // .then(response => {
    //   setAccessToken(response.data.token)
    //   setUser(response.data.user)
    //   return response
    // })
    // .catch(error => {
    //   setUser(null)
    //   setAccessToken(null)
    //   return error
    // })
    return {};
  }, []);

  const startSilentRefresh = useCallback(() => {
    // if(accessToken) {
    //   const tokenExpires = moment(accessToken.expires)
    //   const tokenMaxAge = tokenExpires.diff(moment().add(1, 'minutes'))
    //   setTimeout(() => {
    //     refreshTokens()
    //   }, tokenMaxAge)
    // }
  }, [accessToken, refreshTokens]);

  const syncLogout = (event) => {
    if (event.key === "logout") {
      setAccessToken(null);
      setUser(null);
    }
  };

  useEffect(() => {
    const interceptorId = axios.interceptors.request.use(
      (config) => {
        config.withCredentials = true;
        config.credentials = "include";
        if (accessToken) {
          // config.headers.Authorization = `Bearer ${accessToken.token}`
          config.headers["x-access-token"] = accessToken.token;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.request.eject(interceptorId);
    };
  }, [accessToken]);

  // useEffect(() => {
  //   refreshTokens().then((response) => {
  //     setLoaded(true);
  //   });
  // }, [refreshTokens]);

  useEffect(() => {
    startSilentRefresh();
  }, [accessToken, startSilentRefresh]);

  useEffect(() => {
    window.addEventListener("storage", syncLogout);
    return function cleanup() {
      window.removeEventListener("storage", syncLogout);
    };
  }, []);

  const value = useMemo(() => {
    const register = (obj) => {
      console.log("api post data", obj);
      return axios.post(`${apiUrl}/v1/users/register`, obj);
    };

    const login = (obj) => {
      console.log("api login screen", obj);
      return axios.post(`${apiUrl}/v1/users/login`, obj);
    };

    const otp = (obj) => {
      console.log("api otp field", obj);
      return axios
        .post(`${apiUrl}/v1/users/register/verifyotp`, obj)
        .then((res) => {
          setAccessToken(res.data.token);
          return res;
        });
    };
    const loginotp = (obj) => {
      console.log("api loginotp field", obj);
      return axios
        .post(`${apiUrl}/v1/users/login/verifyotp`, obj)
        .then((res) => {
          setAccessToken(res.data.token);
          return res;
        });
    };

    const resendotp = (obj) => {
      console.log("api resend field", obj);
      return axios.post(`${apiUrl}/v1/users/register/resendOTP`, obj);
    };
    const loginresend = (obj) => {
      console.log("api resend field", obj);
      return axios.post(`${apiUrl}/v1/users/login/resendOTP`, obj);
    };

    const logout = () => {
      setAccessToken(null);
      setUser(null);
      return axios
        .post(`${apiUrl}/v1/auth/logout`, {})
        .then((response) => {
          window.localStorage.setItem("logout", moment());
        })
        .catch((err) => {});
    };

    const forgotPassword = (email) => {
      return axios.post(`${apiUrl}/v1/auth/forgot-password`, {
        email: email,
      });
    };

    const resetPassword = (password, resetToken) => {
      return axios.post(
        `${apiUrl}/v1/auth/reset-password?token=${resetToken}`,
        {
          password: password,
        }
      );
    };

    const verifyEmail = (emailVerificationToken) => {
      return axios.post(
        `${apiUrl}/v1/auth/verify-email?token=${emailVerificationToken}`,
        {}
      );
    };

    return {
      user,
      setUser,
      register,
      otp,
      loginotp,
      resendotp,
      loginresend,
      login,
      logout,
      forgotPassword,
      resetPassword,
      verifyEmail,
    };
  }, [user, startSilentRefresh]);

  // if (!isLoaded) {
  //   return <ThemedSuspense />;
  // }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
