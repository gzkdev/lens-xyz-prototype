import { Navbar } from "./navbar";

export function PageLayoutBuilder({ left, right }: { left: React.ReactNode; right: React.ReactNode }) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="h-full sticky top-0 flex flex-col justify-between border border-r-[rgba(55,55,55,.1)]">
        <Navbar />
        {left}
        <div className="text-[rgba(55,55,55,.4)] text-sm flex items-center gap-4 flex-wrap p-6">
          <a href="#">Lens 2024</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#" className="ml-auto">
            Developers
          </a>
          <a href="#">X (Twitter)</a>
        </div>
      </div>
      <div className="fixed w-1/2 h-full top-0 right-0 bg-[#fafafa]">{right}</div>
    </div>
  );
}
