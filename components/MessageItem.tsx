import { h } from "preact";
import { tw } from "twind";
import { colors } from "../styles.js";
const React = { createElement: h };

const MessageItem: h.FunctionComponent<{ value: Message }> = ({ value }) => (
  <div className={tw`mb-4`}>
    <div className={tw`rounded p-3 shadow bg-lightGray`}>
      <div className={tw`font-bold`} style={{ color: colors.primaryBlue }}>
        {value.user}
      </div>
      <div>{value.message}</div>
      <div className={tw`text-xs text-gray-500 text-right`}>
        {new Date(value.timestamp).toLocaleString()}
      </div>
    </div>
  </div>
);

export default MessageItem;