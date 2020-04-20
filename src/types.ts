interface User {
    userId: number;
    userName: string;
    userHandle: string;
}

export interface TweetType extends User {
    id: number | null;
    text: string;
}
