export default function GoldDivider() {
  return (
    <div
      aria-hidden="true"
      className="h-1 w-full"
      style={{
        background:
          'linear-gradient(90deg, transparent, hsl(var(--accent)), hsl(var(--accent)/0.6), hsl(var(--accent)), transparent)',
      }}
    />
  );
}
