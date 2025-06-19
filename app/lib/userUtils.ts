import { User } from "@/types/User";
import { backendServiceUrl } from "./configUtils";

export async function getAllUsers(): Promise<User[]> {
  try {
    const usersApiResponse = await fetch(`${backendServiceUrl}/users`);
    if (!usersApiResponse.ok) {
      throw new Error(usersApiResponse.statusText);
    }
    const userList = (await usersApiResponse.json()) as User[];
    return userList;
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function createUser(userToCreate: Partial<User>): Promise<User> {
  try {
    const userApiResponse = await fetch(`${backendServiceUrl}/users`, {
      method: "POST",
      body: JSON.stringify(userToCreate),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!userApiResponse.ok) {
      throw new Error(userApiResponse.statusText);
    }

    const user = (await userApiResponse.json()) as User;
    return user;
  } catch (e) {
    console.log(e);
    return null as unknown as User;
  }
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
      throw new Error(userApiResponse.statusText);
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
      throw new Error(userApiResponse.statusText);
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
      throw new Error(userApiResponse.statusText);
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
      `${backendServiceUrl}/users/${userName}`
    );
    if (!userApiResponse.ok) {
      throw new Error(userApiResponse.statusText);
    }

    const user = (await userApiResponse.json()) as User;
    return user;
  } catch (e) {
    console.log(e);
    return null as unknown as User;
  }
}
