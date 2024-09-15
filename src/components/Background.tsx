import clsx from "clsx"

export default function Background() {
  return (
    <div className="fixed inset-0 w-full h-full flex -z-50">
      <div className="relative w-full h-full">
        <ColoredBlob className={clsx(
          "top-[5rem] sm:top-[13rem] right-1/3 lg:right-1/2 lg:mr-20 2xl:mr-60 h-40 w-[35rem]",
          "from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] rotate-[-10deg]",
          "dark:from-[#f9c823] dark:via-[#fa8d47] dark:to-[#fc506e]",
        )}/>
        <ColoredBlob className={clsx(
          "top-[40rem] sm:top-[25rem] left-2/3 lg:left-1/2 lg:ml-48 2xl:ml-72 h-72 w-[25rem]",
          "from-[#ee87cb] from-[28%] via-[#6f7bf7] via-[70%] to-[#85baf5] rotate-[20deg]",
          "dark:from-[#83489e] dark:via-[#a03e6d] dark:to-[#c5302e]",
        )}/>
        <ColoredBlob className={clsx(
          "hidden top-[60rem] md:top-[55rem] lg:right-1/2  lg:-mr-40 2xl:mr-0 h-40 w-[40rem] tall:block",
          "from-[#ff930f] from-[28%] via-[#ffc534] via-[70%] to-[#fff95b] rotate-[-14deg]",
          "dark:from-[#42047e] dark:via-[#25788d] dark:to-[#07f49e]",
        )}/>
      </div>
    </div>
  )
}

function ColoredBlob({ className }: { className: string }) {
  return (
    <div className={clsx(
      "absolute transform-gpu bg-[linear-gradient(115deg,var(--tw-gradient-stops))] rounded-full blur-3xl",
      className
    )}/>
  )
}