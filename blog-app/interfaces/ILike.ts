interface ILike {
    _id: string,
    userId: string | IUser,
    blogId: string | IBlog
}