import { httpClient } from "../../infra/http/HttpClientInstance";
import { ITweet } from "./interfaces";

async function getTweets({ username }: { username: string }) {
    const response = await httpClient.get<Array<ITweet>>(`user/${username}/tweets`);
    return response as Array<ITweet>;
}
export const tweetRepository = {
    getTweets
}