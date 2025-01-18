import { useState } from "react";
import { tweetRepository } from "../repository";
import { ITweet } from "../interfaces";

export function useGetTweets() {
    const [tweets, setTweets] = useState<Array<ITweet>>([]);
    async function getTweets() {
        try {
            const response = await tweetRepository.getTweets({
                username: 'jsmith'
            });
            setTweets(response);
        } catch (error) {

        }
    }

    return {
        tweets,
        getTweets
    }

}