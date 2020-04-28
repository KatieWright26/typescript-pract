interface User {
    userId: string;
    userName: string;
    userHandle: string;
}

export interface TweetType extends User {
    id: string;
    text: string;
}
