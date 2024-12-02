interface IBlog {
    _id: string;
    owner: string | IUser;
    title: string;
    content: string;
    image: string;
    createdAt: Date;
    updatedAt: Date;
    totalLikes: number;
    totalComments: number;
}