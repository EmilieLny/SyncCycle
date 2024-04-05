import { ReactNode } from "react";

export const Day = ({ children, isSameMonth }: { children: ReactNode; isSameMonth: boolean }) => {
  return (
    <div className="text-center data-[same-month=false]:font-thin" data-same-month={isSameMonth}>
      {children}
    </div>
  );
};
