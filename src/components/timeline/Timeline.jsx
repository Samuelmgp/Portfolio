import TimelineItem from "./TimelineItem";

export default function Timeline({ items, renderItem }) {
  return (
    <div className="relative flex flex-col gap-8">
      {items.map((item, index) => (
        <TimelineItem key={item.id || index} index={index} last={index === items.length - 1}>
          {renderItem(item, index)}
        </TimelineItem>
      ))}
    </div>
  );
}
