interface User {
    userId: number;
    userName: string;
    userHandle: string;
}

export interface TweetType extends User {
    id: number;
    text: string;
}
