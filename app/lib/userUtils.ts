import { User } from "../../types/User";
import { backendServiceUrl, serverUrl } from "./configUtils";

export async function getAllUsers(): Promise<User[]> {
  try {
    const usersApiResponse = await fetch(`${serverUrl}/users`);
    if (!usersApiResponse.ok) {
      const errorMessage = await usersApiResponse.json();
      throw new Error(errorMessage.message);
    }
    const userList = (await usersApiResponse.json()) as User[];
    return userList;
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function createUser(userToCreate: Partial<User>): Promise<User> {
  const userApiResponse = await fetch(`${backendServiceUrl}/users`, {
    method: "POST",
    body: JSON.stringify(userToCreate),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!userApiResponse.ok) {
    const errorMessage = await userApiResponse.json();
    throw new Error(errorMessage.message);
  }

  const user = (await userApiResponse.json()) as User;
  return user;
}

export async function updateUser(userToUpdate: Partial<User>): Promise<User> {
  try {
    const userApiResponse = await fetch(
      `${backendServiceUrl}/users/${userToUpdate.userName}`,
      {
        method: "PUT",
        body: JSON.stringify(userToUpdate),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!userApiResponse.ok) {
      const errorMessage = await userApiResponse.json();
      throw new Error(errorMessage.message);
    }

    const user = (await userApiResponse.json()) as User;
    return user;
  } catch (e) {
    console.log(e);
    return null as unknown as User;
  }
}
export async function deleteUser(userName: string): Promise<User> {
  try {
    const userApiResponse = await fetch(
      `${backendServiceUrl}/users/${userName}`,
      {
        method: "DELETE",
      }
    );
    if (!userApiResponse.ok) {
      const errorMessage = await userApiResponse.json();
      throw new Error(errorMessage.message);
    }

    const user = (await userApiResponse.json()) as User;
    return user;
  } catch (e) {
    console.log(e);
    return null as unknown as User;
  }
}

export async function searchUsers(
  searchTerms: string[],
  searchValues: string[]
): Promise<User[]> {
  let apiUrl = backendServiceUrl + "/users/search";
  for (let i = 0; i < searchTerms.length; i++) {
    if (i == 0) {
      apiUrl = apiUrl.concat("?");
    }
    apiUrl = apiUrl.concat(searchTerms[i] + "=" + searchValues[i]);
    if (i !== searchTerms.length - 1) {
      apiUrl = apiUrl.concat("&");
    }
  }
  try {
    const userApiResponse = await fetch(apiUrl);
    if (!userApiResponse.ok) {
      const errorMessage = await userApiResponse.json();
      throw new Error(errorMessage.message);
    }
    const users = (await userApiResponse.json()) as User[];
    return users;
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function getUser(userName: string): Promise<User> {
  try {
    const userApiResponse = await fetch(
      `${serverUrl}/users/search?username=${userName}`
    );
    if (!userApiResponse.ok) {
      const errorMessage = await userApiResponse.json();
      throw new Error(errorMessage.message);
    }

    const user = (await userApiResponse.json()) as User;
    return user;
  } catch (e) {
    console.log(e);
    return null as unknown as User;
  }
}
