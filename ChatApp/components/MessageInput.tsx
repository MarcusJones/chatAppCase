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
}

const MessageInput: h.FunctionComponent<MessageInputProps> = ({
  username,
  setUsername,
  message,
  setMessage,
}) => {
  const messageInputRef = useRef(null); // Reference to the message input field

  const handleUsernameChange = (e: any) => {
    // Update the username in the component's state
    setUsername(e.target.value);
  };
  const handleFormSubmit = (e: Event) => {
    e.preventDefault();
    // Check if either the username or message field is empty before submitting
    if (username.trim() === "" || message.trim() === "") {
      return;
    }

    // Clear the message field and set focus on it
    setMessage("");
    messageInputRef.current.focus();
  };

  // Optionally, to set the initial focus on the message input field
  useEffect(() => {
    messageInputRef.current.focus();
  }, []);
  // const isFormValid = username.trim() !== "" && message.trim() !== "";

  return (
    <div className={tw`bg-white rounded-lg shadow-lg p-6 m-8 lg:w-2/4`}>
      <h2 className={tw`text-2xl font-semibold mb-4`}>Post your message</h2>

      <form
        method="POST"
        onSubmit={handleFormSubmit}
        className={tw`flex flex-wrap items-center space-x-4`}
      >
        <div className={tw`w-1/4 flex flex-col`}>
          <label
            className={tw`text-gray-700 text-sm font-bold mb-2`}
            htmlFor="user"
          >
            User
          </label>
          <input
            className={tw`shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4`}
            id="user"
            type="text"
            name="user"
            value={username}
            // onChange={(e) => setUsername(e.target.value)}
            onChange={handleUsernameChange}
          />
        </div>
        <div className={tw`w-1/2 flex flex-col`}>
          <label
            className={tw`text-gray-700 text-sm font-bold mb-2`}
            htmlFor="message"
          >
            Message
          </label>
          <input
            ref={messageInputRef}
            className={tw`shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4`}
            id="message"
            type="text"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          className={tw`
          bg-[#007BFF]
          hover:bg-[#5A98D2]
          text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline text-sm align-middle`}
          // className={tw`bg-${colors.primaryBlue} hover:bg-${colors.secondaryBlue} text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline text-sm align-middle`}
          // disabled={!isFormValid} // Disable the button if the form is not valid
          type="submit"
        >
          Post
        </button>
      </form>
    </div>
  );
};
export default MessageInput;
