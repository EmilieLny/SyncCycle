import { ReactNode } from "react";

export const Day = ({ children, isSamePeriod }: { children: ReactNode; isSamePeriod: boolean }) => {
  return (
    <div
      className="p-1 text-center text-xs outline  outline-1 outline-slate-200 data-[same-month=false]:font-thin"
      data-same-month={isSamePeriod}
    >
      {children}
    </div>
  );
};
