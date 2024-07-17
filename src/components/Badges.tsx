import {BeakerIcon, FingerPrintIcon} from "@heroicons/react/24/solid";
import {CheckBadgeIcon} from "@heroicons/react/20/solid";
import clsx from "clsx";

export function FounderBadge({ className }: { className?: string }) {
  return (
    <svg className={clsx("text-amber-500", className)} viewBox="0 0 24 24" width="20" height="20" fill="none" aria-label="Founder" aria-hidden="false" role="img" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M5 18a1 1 0 0 0-1 1 3 3 0 0 0 3 3h10a3 3 0 0 0 3-3 1 1 0 0 0-1-1H5ZM3.04 7.76a1 1 0 0 0-1.52 1.15l2.25 6.42a1 1 0 0 0 .94.67h14.55a1 1 0 0 0 .95-.71l1.94-6.45a1 1 0 0 0-1.55-1.1l-4.11 3-3.55-5.33.82-.82a.83.83 0 0 0 0-1.18l-1.17-1.17a.83.83 0 0 0-1.18 0l-1.17 1.17a.83.83 0 0 0 0 1.18l.82.82-3.61 5.42-4.41-3.07Z"/>
    </svg>
  )
}

export function OfficialBadge({ className }: { className?: string }) {
  return (
    <CheckBadgeIcon className={clsx("text-sky-500", className)}/>
  )
}

export function VerifiedBadge({ className }: { className?: string }) {
  return (
    <FingerPrintIcon className={clsx("text-neutral-700 dark:text-neutral-300", className)}/>
  )
}

export function ExperimentalBadge({ className }: { className?: string }) {
  return (
    <BeakerIcon className={clsx("text-lime-600 dark:text-lime-500", className)}/>
  )
}