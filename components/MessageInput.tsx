import { h } from "preact";
import { tw } from "twind";
import { useRef, useEffect } from "preact/hooks";
const React = { createElement: h };
// import { colors } from "../styles.ts";

interface MessageInputProps {
  username: string;
  setUsername: (value: string) => void;
  message: string;
  setMessage: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const MessageInput: h.FunctionComponent<MessageInputProps> = ({
  username,
  setUsername,
  message,
  setMessage,
  onSubmit,
}) => {
  const messageInputRef = useRef(null);

  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };

  useEffect(() => {
    messageInputRef.current.focus();
  }, []);
  // const isFormValid = username.trim() !== "" && message.trim() !== "";

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 m-8 lg:w-2/4">
      <h2 className="text-2xl font-semibold mb-4">Post your message</h2>

      <form
        method="POST"
        onSubmit={onSubmit}
        className="flex flex-wrap items-center space-x-4"
      >
        <div className="w-1/4 flex flex-col">
          <label
            className="text-gray-700 text-sm font-bold mb-2"
            htmlFor="user"
          >
            User
          </label>
          <input
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            id="user"
            type="text"
            name="user"
            value={username}
            // onChange={(e) => setUsername(e.target.value)}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="w-1/2 flex flex-col">
          <label
            className="text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <input
            ref={messageInputRef}
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            id="message"
            type="text"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          className="bg-[#007BFF] hover:bg-[#5A98D2] text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline text-sm align-middle"
          type="submit"
        >
          Post
        </button>
      </form>
    </div>
  );
};
export default MessageInput;
