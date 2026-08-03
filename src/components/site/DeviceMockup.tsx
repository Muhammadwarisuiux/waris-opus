import type { ReactNode } from "react";

type Props = {
  device: "desktop" | "mobile" | "tablet";
  children: ReactNode;
  className?: string;
};

export function DeviceMockup({ device, children, className = "" }: Props) {
  const inner = (
    <div className="h-full w-full pointer-events-none select-none">{children}</div>
  );
  if (device === "mobile") {
    return (
      <div className={`relative mx-auto ${className}`} style={{ width: 280 }}>
        <div
          className="rounded-[42px] p-[10px] shadow-[0_40px_100px_-30px_rgba(79,124,255,0.4),0_20px_60px_-20px_rgba(0,0,0,0.8)]"
          style={{ background: "linear-gradient(180deg, #2a2c33, #0e0f12)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="relative rounded-[32px] overflow-hidden bg-black" style={{ aspectRatio: "9 / 19.5" }}>
            <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 h-5 w-24 rounded-full bg-black" />
            {inner}
          </div>
        </div>
      </div>
    );
  }

  if (device === "tablet") {
    return (
      <div className={`relative mx-auto ${className}`} style={{ maxWidth: 620 }}>
        <div
          className="rounded-[28px] p-[12px] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7)]"
          style={{ background: "linear-gradient(180deg, #2a2c33, #0e0f12)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="relative rounded-[18px] overflow-hidden bg-black" style={{ aspectRatio: "4 / 3" }}>
            {inner}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative mx-auto w-full ${className}`}>
      <div
        className="rounded-2xl overflow-hidden shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7)]"
        style={{ background: "linear-gradient(180deg, #1a1c22, #0b0c10)", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-white/5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <div className="ml-4 flex-1 max-w-md">
            <div className="rounded-md bg-white/5 px-2 py-1 text-[10px] text-white/50">https://app.example.com</div>
          </div>
        </div>
        <div className="relative bg-black" style={{ aspectRatio: "16 / 10" }}>
          {inner}
        </div>
      </div>
    </div>
  );
}