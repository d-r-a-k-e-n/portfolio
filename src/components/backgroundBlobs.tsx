export default function BackgroundBlobs() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="bg-blob absolute -top-24 left-[-10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(66,105,246,0.45)_0%,rgba(66,105,246,0.12)_45%,transparent_70%)] blur-3xl" />
      <div className="bg-blob absolute top-[18%] right-[-8%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(66,105,246,0.38)_0%,rgba(66,105,246,0.1)_50%,transparent_72%)] blur-3xl" />
      <div className="bg-blob absolute top-[48%] left-[5%] h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(66,105,246,0.32)_0%,rgba(66,105,246,0.08)_48%,transparent_70%)] blur-3xl" />
      <div className="bg-blob absolute top-[62%] right-[12%] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(66,105,246,0.4)_0%,rgba(66,105,246,0.1)_42%,transparent_68%)] blur-3xl" />
      <div className="bg-blob absolute bottom-[-10%] left-[35%] h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(66,105,246,0.35)_0%,rgba(66,105,246,0.09)_50%,transparent_72%)] blur-3xl" />
      <div className="bg-blob absolute top-[78%] left-[-5%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(66,105,246,0.28)_0%,transparent_65%)] blur-2xl" />
    </div>
  );
}
