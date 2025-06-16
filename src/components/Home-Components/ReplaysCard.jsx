import React from "react";
import { FaRegThumbsUp, FaReply } from "react-icons/fa";

const feedbackData = [
  {
    id: 1,
    name: "Eman Nasser",
    time: "14 min",
    message:
      '"The app drains the battery quickly. Can you optimize it for longer use"',
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: 2,
    name: "Nada Ahmed",
    time: "24 min",
    message:
      '"This app is a lifesaver! It helps me recognize money and objects independently. Thank you"',
    avatar: "https://i.pravatar.cc/40?img=2",
  },
];

function ReplaysCard() {
  return (
    <div className=" mx-auto bg-white border rounded-lg shadow-sm p-4 space-y-4">
      {feedbackData.map((item) => (
        <div key={item.id} className="border-b pb-4">
          <div className="flex items-start space-x-3">
            <img
              src={item.avatar}
              alt={item.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <div className="flex items-center gap-2">
                <p className="font-semibold">{item.name}</p>
                <span className="text-gray-500 text-sm">{item.time}</span>
              </div>
              <p className="mt-1 text-gray-700">{item.message}</p>
              <div className="mt-2 flex items-center space-x-4 text-blue-500 text-sm cursor-pointer">
                <div className="flex items-center gap-1 hover:underline">
                  <FaReply /> Reply
                </div>
                <FaRegThumbsUp className="hover:text-blue-700" />
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="pt-2">
        <p className="font-medium mb-1 text-gray-700">Reply Feedback</p>
        <textarea
          rows="2"
          placeholder="Type your comment here...."
          className="w-full border rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button className="mt-2 bg-main text-white px-4 py-2 rounded-md hover:bg-blue-800">
          Post Comment
        </button>
      </div>
    </div>
  );
}

export default ReplaysCard;
