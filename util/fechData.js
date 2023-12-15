
export const getUserData = (user) => {
    const data = fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then((data) => data);
    return data;
  };