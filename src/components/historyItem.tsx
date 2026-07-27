import { type IHistoryItem } from "@/types/historyItem.type";

export default function HistoryItem({
  period,
  title,
  role,
  description,
}: IHistoryItem) {
  return (
    <div className="grid grid-cols-[1.5fr_1fr_2fr] gap-10 w-full items-start">
      <div>
        <p>{period}</p>
        <h3 className="text-2xl">{title}</h3>
      </div>
      <h3 className="text-2xl">{role}</h3>
      <p>{description}</p>
    </div>
  );
}
