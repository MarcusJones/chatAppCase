import { h } from "preact";
import { colors } from "../styles.ts";

const MessageItem: h.FunctionComponent<{ value: Message }> = ({ value }) => (
  <div className="mb-4">
    <div className="rounded p-3 shadow bg-lightGray">
      <div className="font-bold" style={{ color: colors.primaryBlue }}>
        {value.user}
      </div>
      <div>{value.message}</div>
      <div className="text-xs text-gray-500 text-right">
        {new Date(value.timestamp).toLocaleString()}
      </div>
    </div>
  </div>
);

export default MessageItem;
