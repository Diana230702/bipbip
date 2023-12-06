const getTokenFromSessionStorage = () => {
  if (typeof window !== "undefined") {
    return sessionStorage.getItem("token");
  } else {
    // Возвращаем значение по умолчанию или обрабатываем сценарий, когда sessionStorage недоступен
    return null;
  }
};

export { getTokenFromSessionStorage };

const setTokenToSessionStorage = (token: string) => {
  if (typeof window !== "undefined") {
    return sessionStorage.setItem("token", token);
  }

  return null;
};

export { setTokenToSessionStorage };

const setPhoneToSessionStorage = (phoneNumber: string) => {
  if (typeof window !== "undefined") {
    return sessionStorage.setItem("login", phoneNumber);
  }

  return null;
};

export { setPhoneToSessionStorage };

const getPhoneFromSessionStorage = () => {
  if (typeof window !== "undefined") {
    return sessionStorage.getItem("login");
  } else {
    // Возвращаем значение по умолчанию или обрабатываем сценарий, когда sessionStorage недоступен
    return null;
  }
};

export { getPhoneFromSessionStorage };
