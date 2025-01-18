import { httpClient } from "../../infra/http/HttpClientInstance";
import { IUser } from "./interfaces";

async function getProfile({username}: {username: string}) {
    const response = await httpClient.get<IUser>(`user/${username}`);
    return response as IUser;
}

export const userRepository = {
    getProfile
}