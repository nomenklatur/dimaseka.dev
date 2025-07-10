import axios from "axios";

export const articleCaller = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_AUTHOR_BASE_URL}/api`,
    timeout: 100000,
})