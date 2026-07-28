import { type IHistoryItem } from "@/types/historyItem.type";

export default function HistoryItem({
  period,
  title,
  role,
  description,
}: IHistoryItem) {
  return (
    <div className="grid w-full min-w-0 grid-cols-1 items-start gap-3 text-background sm:gap-4 md:grid-cols-[1.5fr_1fr_2fr] md:gap-10">
      <div className="min-w-0">
        <p className="text-sm sm:text-base">{period}</p>
        <h3 className="break-words text-xl sm:text-2xl">{title}</h3>
      </div>
      <h3 className="min-w-0 break-words text-xl sm:text-2xl">{role}</h3>
      <p className="min-w-0 break-words text-sm sm:text-base">{description}</p>
    </div>
  );
}
