interface IComment {
    _id: string;
    blogId: string;
    userId: string;
    comment: string;
    createdAt: Date;
    updatedAt: Date;
}