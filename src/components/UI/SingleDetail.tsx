import classNames from "classnames";

type SingleDetailProps = {
  title: string;
  content: string | number;
  state: boolean;
};

export const SingleDetail = ({ title, content, state }: SingleDetailProps) => {
  return (
    <div
      className={classNames("flex justify-between w-5/6", {
        "text-white": state,
      })}
    >
      <p>{title}</p>
      <p>{content}</p>
    </div>
  );
};
