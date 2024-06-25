import { ReactNode } from "react";
import { toast, ToasterProps } from "sonner";

export type CNotification = {
  title?: string;
  text: ReactNode;
};

export const NotificationContent = ({
  title,
  text,
}: Pick<CNotification, "title" | "text">) => {
  return (
    <div className="msg-container">
      {title && <div className="text-md mb-1 font-medium">{title}</div>}
      <div className={title ? "text-sm" : "text-md"}>{text}</div>
    </div>
  );
};
export const createNotification = (myProps: CNotification & ToasterProps) =>
  toast(<NotificationContent {...myProps} />, {
    theme: "dark",
    position: "bottom-right",
    ...myProps,
  });
