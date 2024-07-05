import React from "react";

const InboxPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Inbox</h1>
      <input
        type="text"
        placeholder="Add a task"
        className="w-full p-2 mb-4 border rounded"
      />
      <ul>
        <li className="flex items-center justify-between p-2 border-b">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Sample Task 1</span>
          </div>
          <div>
            <button className="mr-2">Edit</button>
            <button>Delete</button>
          </div>
        </li>
        <li className="flex items-center justify-between p-2 border-b">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Sample Task 2</span>
          </div>
          <div>
            <button className="mr-2">Edit</button>
            <button>Delete</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default InboxPage;