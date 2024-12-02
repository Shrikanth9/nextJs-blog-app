interface IComment {
    _id: string;
    blogId: string | IBlog;
    userId: string | IUser;
    comment: string;
    createdAt: Date;
    updatedAt: Date;
}