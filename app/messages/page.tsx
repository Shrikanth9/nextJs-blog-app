import MessageCard from "@/components/MessageCard";
import connectDB from "@/config/database";
import Message from "@/models/Message";
import { getSessionUser } from "@/utils/getSessionUser";
import { convertToPlainObj } from "@/utils/Utils";

const MessagesPage = async() => {
    await connectDB();
    const sessionUser = await getSessionUser();

    if(!sessionUser || !sessionUser.id) {
        throw new Error('You must be logged in to view messages');
    }
    
    const unreadMessages = await Message.find({ recipient: sessionUser.id, read: false })
    .sort({ createdAt: -1 })
    .populate('sender', 'username')
    .populate('property', 'name')
    .lean();


    const readMessages = await Message.find({ recipient: sessionUser.id, read: true })
    .sort({ createdAt: -1 })
    .populate('sender', 'username')
    .populate('property', 'name')
    .lean();

    const messages = [...unreadMessages, ...readMessages].map((messageDoc: any) => {
        const message = convertToPlainObj(messageDoc);
        return message;
    });

    return ( 
        <section className="bg-blue-50">
            <div className="container m-auto py-24 max-w-2xl">
                <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4">
                    <h1 className="text-3xl font-bold mb-4"> Your messages </h1>
                    <div className="space-y-4">
                        {messages.length === 0 ? (<p> You have no messages </p>) : (
                            messages.map((message: any) => (
                                <MessageCard key={message._id} message={message}/>
                            )
                        ))}
                    </div>
                </div>
            </div>

        </section>
     );
}
 
export default MessagesPage;