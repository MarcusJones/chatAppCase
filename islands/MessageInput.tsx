import { h } from "preact";
import { useEffect, useState, useRef } from "preact/hooks";

interface MessageInputProps {
  username: string;
  onSubmit: (e: React.FormEvent) => void;
}

const MessageInput: h.FunctionComponent<MessageInputProps> = ({
  username: initialUsername,
  onSubmit,
}) => {

  const [localUsername, setLocalUsername] = useState<string>(initialUsername);
  const [message, setMessage] = useState<string>("");

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      const storedUsername = localStorage.getItem("username");
      if (storedUsername) {
        setLocalUsername(storedUsername);
      }
      firstRender.current = false;
    } else {
      console.log("Setting username in localStorage:", localUsername);
      localStorage.setItem("username", localUsername);
    }
  }, [localUsername]);

  const internalHandleFormSubmit = (e: Event) => {
    e.preventDefault();
    console.log("Internal form submission");
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 m-8 lg:w-2/4">
      <h2 className="text-2xl font-semibold mb-4">Post your message</h2>
      <form
        method="POST"
        // onSubmit={internalHandleFormSubmit}
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
            value={localUsername}
            onChange={(e) => setLocalUsername(e.target.value)}
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
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            id="message"
            type="text"
            name="message"
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