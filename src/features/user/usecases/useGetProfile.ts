import { useState } from "react";
import { IUser } from "../interfaces";
import { userRepository } from "../repository";

export function useGetProfile() {
    const [user, setUser] = useState<IUser>();
    async function getProfile(p0: { username: string; }) {
        try {
            const response = await userRepository.getProfile({
                username: 'jsmith'
            });
            setUser(response);
        } catch (error) {

        }
    }

    return {
        getProfile,
        user
    }
}