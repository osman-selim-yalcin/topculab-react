type Props = {
  size?: number;
  className?: string;
};

export default function ResearchGateIcon({ size = 18, className }: Props) {
  return (
    <span
      className={`inline-flex items-start font-bold leading-none tracking-tight ${
        className ?? ""
      }`}
      style={{ fontSize: size }}
      aria-label="ResearchGate"
    >
      R
      <span
        aria-hidden="true"
        style={{
          fontSize: "0.6em",
          marginLeft: "0.04em",
          lineHeight: 1,
        }}
      >
        G
      </span>
    </span>
  );
}
