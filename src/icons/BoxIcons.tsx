const defaultSize = 24;
const defaultColor = "#9C9C9C";

export type Ticon = { className?: string };

export function LoaderCircleIcon({ className }: Ticon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={defaultSize}
      height={defaultSize}
      fill={defaultColor}
      className={`transition ${className}`}
    >
      <path d="M2 11h5v2H2zm15 0h5v2h-5zm-6 6h2v5h-2zm0-15h2v5h-2zM4.222 5.636l1.414-1.414 3.536 3.536-1.414 1.414zm15.556 12.728-1.414 1.414-3.536-3.536 1.414-1.414zm-12.02-3.536 1.414 1.414-3.536 3.536-1.414-1.414zm7.07-7.071 3.536-3.535 1.414 1.415-3.536 3.535z"></path>
    </svg>
  );
}

export function HomeIcon({ className }: Ticon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={defaultSize}
      height={defaultSize}
      fill={defaultColor}
      className={`transition ${className}`}
    >
      <path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"></path>
    </svg>
  );
}

export function SearchIcon({ className }: Ticon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={defaultSize}
      height={defaultSize}
      fill={defaultColor}
      className={`transition ${className}`}
    >
      <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
    </svg>
  );
}

export function PlayIcon({ className }: Ticon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={defaultSize}
      height={defaultSize}
      fill={defaultColor}
      className={`transition ${className}`}
    >
      <path d="M7 6v12l10-6z"></path>
    </svg>
  );
}

export function PlaylistIcon({ className }: Ticon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={defaultSize}
      height={defaultSize}
      fill={defaultColor}
      className={`transition ${className}`}
    >
      <path d="M13 16.493C13 18.427 14.573 20 16.507 20s3.507-1.573 3.507-3.507c0-.177-.027-.347-.053-.517H20V6h2V4h-3a1 1 0 0 0-1 1v8.333a3.465 3.465 0 0 0-1.493-.346A3.51 3.51 0 0 0 13 16.493zM2 5h14v2H2z"></path>
      <path d="M2 9h14v2H2zm0 4h9v2H2zm0 4h9v2H2z"></path>
    </svg>
  );
}

export function PlusIcon({ className }: Ticon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={defaultSize}
      height={defaultSize}
      fill={defaultColor}
      className={`transition ${className}`}
    >
      <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
    </svg>
  );
}

export function ArrowRightIcon({ className }: Ticon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={defaultSize}
      height={defaultSize}
      fill={defaultColor}
      className={`transition ${className}`}
    >
      <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
    </svg>
  );
}

export function ArrowLeftIcon({ className }: Ticon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={defaultSize}
      height={defaultSize}
      fill={defaultColor}
      className={`transition ${className}`}
    >
      <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
    </svg>
  );
}

export function HeartFilledIcon({ className }: Ticon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={defaultSize}
      height={defaultSize}
      fill={defaultColor}
      className={`transition ${className}`}
    >
      <path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path>
    </svg>
  );
}

export function HeartOutlinedIcon({ className }: Ticon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={defaultSize}
      height={defaultSize}
      fill={defaultColor}
      className={`transition ${className}`}
    >
      <path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path>
    </svg>
  );
}

export function PauseIcon({ className }: Ticon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={defaultSize}
      height={defaultSize}
      fill={defaultColor}
      className={`transition ${className}`}
    >
      <path d="M8 7h3v10H8zm5 0h3v10h-3z"></path>
    </svg>
  );
}

export function BackwardIcon({ className }: Ticon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={defaultSize}
      height={defaultSize}
      fill={defaultColor}
      className={`transition hover:fill-pureWhite ${className}`}
    >
      <path d="m16 7-7 5 7 5zm-7 5V7H7v10h2z"></path>
    </svg>
  );
}

export function ForwardIcon({ className }: Ticon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={defaultSize}
      height={defaultSize}
      fill={defaultColor}
      className={`transition hover:fill-pureWhite ${className}`}
    >
      <path d="M7 7v10l7-5zm9 10V7h-2v10z"></path>
    </svg>
  );
}

export function UserIcon({ className }: Ticon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={defaultSize}
      height={defaultSize}
      fill={defaultColor}
      className={`transition ${className}`}
    >
      <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path>
    </svg>
  );
}

export function CloseIcon({ className }: Ticon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={defaultSize}
      height={defaultSize}
      fill={defaultColor}
      className={`transition hover:fill-pureWhite ${className}`}
    >
      <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
    </svg>
  );
}

export function CheckIcon({ className }: Ticon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={defaultSize}
      height={defaultSize}
      fill={defaultColor}
      className={`transition hover:fill-pureWhite ${className}`}
    >
      <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
    </svg>
  );
}

export function TrashcanIcon({ className }: Ticon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={defaultSize}
      height={defaultSize}
      fill={defaultColor}
      className={`transition hover:fill-pureWhite ${className}`}
    >
      <path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path>
    </svg>
  );
}

export function FullScreenIcon({ className }: Ticon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={defaultSize}
      height={defaultSize}
      fill={defaultColor}
      className={`transition hover:fill-pureWhite ${className}`}
    >
      <path d="M5 5h5V3H3v7h2zm5 14H5v-5H3v7h7zm11-5h-2v5h-5v2h7zm-2-4h2V3h-7v2h5z"></path>
    </svg>
  );
}

export function ExitFullScreenIcon({ className }: Ticon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={defaultSize}
      height={defaultSize}
      fill={defaultColor}
      className={`transition hover:fill-pureWhite ${className}`}
    >
      <path d="M10 4H8v4H4v2h6zM8 20h2v-6H4v2h4zm12-6h-6v6h2v-4h4zm0-6h-4V4h-2v6h6z"></path>
    </svg>
  );
}

export function VolumeOffIcon({ className }: Ticon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={defaultSize}
      height={defaultSize}
      fill={defaultColor}
      className={`transition hover:fill-pureWhite ${className}`}
    >
      <path d="m21.707 20.293-2.023-2.023A9.566 9.566 0 0 0 21.999 12c0-4.091-2.472-7.453-5.999-9v2c2.387 1.386 3.999 4.047 3.999 7a8.113 8.113 0 0 1-1.672 4.913l-1.285-1.285C17.644 14.536 18 13.19 18 12c0-1.771-.775-3.9-2-5v7.586l-2-2V4a1 1 0 0 0-1.554-.832L7.727 6.313l-4.02-4.02-1.414 1.414 18 18 1.414-1.414zM12 5.868v4.718L9.169 7.755 12 5.868zM4 17h2.697l5.748 3.832a1.004 1.004 0 0 0 1.027.05A1 1 0 0 0 14 20v-1.879l-2-2v2.011l-4.445-2.964c-.025-.017-.056-.02-.082-.033a.986.986 0 0 0-.382-.116C7.059 15.016 7.032 15 7 15H4V9h.879L3.102 7.223A1.995 1.995 0 0 0 2 9v6c0 1.103.897 2 2 2z"></path>
    </svg>
  );
}

export function VolumeLowIcon({ className }: Ticon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={defaultSize}
      height={defaultSize}
      fill={defaultColor}
      className={`transition hover:fill-pureWhite ${className}`}
    >
      <path d="M4 17h2.697l5.748 3.832a1.004 1.004 0 0 0 1.027.05A1 1 0 0 0 14 20V4a1 1 0 0 0-1.554-.832L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2zm0-8h3c.033 0 .061-.016.093-.019a1.027 1.027 0 0 0 .379-.116c.026-.014.057-.017.082-.033L12 5.868v12.264l-4.445-2.964c-.025-.018-.056-.02-.082-.033a.977.977 0 0 0-.382-.116C7.059 15.016 7.032 15 7 15H4V9zm12-2v10c1.225-1.1 2-3.229 2-5s-.775-3.9-2-5z"></path>
    </svg>
  );
}

export function VolumeFullIcon({ className }: Ticon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={defaultSize}
      height={defaultSize}
      fill={defaultColor}
      className={`transition hover:fill-pureWhite ${className}`}
    >
      <path d="M16 21c3.527-1.547 5.999-4.909 5.999-9S19.527 4.547 16 3v2c2.387 1.386 3.999 4.047 3.999 7S18.387 17.614 16 19v2z"></path>
      <path d="M16 7v10c1.225-1.1 2-3.229 2-5s-.775-3.9-2-5zM4 17h2.697l5.748 3.832a1.004 1.004 0 0 0 1.027.05A1 1 0 0 0 14 20V4a1 1 0 0 0-1.554-.832L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2zm0-8h3c.033 0 .061-.016.093-.019a1.027 1.027 0 0 0 .38-.116c.026-.015.057-.017.082-.033L12 5.868v12.264l-4.445-2.964c-.025-.017-.056-.02-.082-.033a.986.986 0 0 0-.382-.116C7.059 15.016 7.032 15 7 15H4V9z"></path>
    </svg>
  );
}

export function SpotifyIcon({ size = 200 }) {
  return (
    <svg width={size} viewBox="0 0 201 60" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="white"
        d="M0 29.9104C0 46.3881 13.6637 60 30.2039 60C46.7442 60 60.4079 46.3881 60.4079 29.9104C60.4079 13.4328 46.7442 0 30.2039 0C13.6637 0 0 13.4328 0 29.9104ZM41.3506 43.8806C34.339 39.5821 25.3497 38.5075 14.9222 40.8358C12.4052 41.194 12.0456 37.6119 14.203 37.2537C25.7093 34.5672 35.4177 35.8209 43.3283 40.6567C45.3059 41.9104 43.3283 44.9552 41.3506 43.8806ZM44.407 35.8209C36.3166 30.806 23.9114 29.3731 14.3828 32.2388C11.3265 33.1343 10.2478 28.4776 13.1243 27.7612C24.0912 24.5373 37.5751 26.1493 46.924 31.8806C49.441 33.4925 46.924 37.4328 44.407 35.8209ZM12.9445 23.1045C9.88819 24.1791 7.91055 18.9851 11.3265 17.7313C21.9338 14.5075 39.9123 15.0448 51.059 21.6716C54.1154 23.2836 51.2388 28.2985 48.0027 26.5075C38.2943 20.7761 22.1136 20.2388 12.9445 23.1045ZM81.0832 39.403C78.0268 39.403 75.1503 38.3284 72.6333 35.8209C72.4535 35.8209 72.4535 36 72.4535 36L69.5769 39.403C69.3971 39.5821 69.3971 39.7612 69.5769 39.9403C72.8131 42.806 76.7683 44.2388 81.0832 44.2388C87.1959 44.2388 90.9714 40.8358 90.9714 35.8209C90.9714 31.5224 88.2746 29.194 81.9821 27.5821C76.7683 26.3284 75.8694 25.4328 75.8694 23.6418C75.8694 21.8507 77.6673 20.7761 80.0045 20.7761C82.3417 20.7761 84.4991 21.6716 87.0161 23.4627C87.0161 23.4627 87.1959 23.6418 87.3757 23.6418C87.5555 23.6418 87.5555 23.4627 87.5555 23.4627L90.0724 19.8806C90.2522 19.7015 90.2522 19.7015 90.0724 19.5224C87.1959 17.194 83.78 15.9403 80.0045 15.9403C74.4311 15.9403 70.4758 19.3433 70.4758 24.1791C70.4758 29.3731 74.0716 30.9851 79.8247 32.4179C84.8587 33.4925 85.5778 34.5672 85.5778 36.3582C85.5778 38.3284 83.78 39.403 81.0832 39.403ZM98.1628 25.6119V23.2836C98.1628 23.1045 97.983 22.9254 97.8032 22.9254H93.1288C92.949 22.9254 92.7692 23.1045 92.7692 23.2836V49.6119C92.7692 49.791 92.949 49.9701 93.1288 49.9701H97.8032C97.983 49.9701 98.1628 49.791 98.1628 49.6119V41.3731C99.9606 43.3433 101.938 44.2388 104.635 44.2388C109.489 44.2388 114.343 40.4776 114.343 33.3134C114.343 26.1493 109.489 22.5672 104.635 22.5672C101.938 22.5672 99.9606 23.4627 98.1628 25.6119ZM103.556 39.5821C100.32 39.5821 97.983 36.8955 97.983 33.3134C97.983 29.7313 100.32 27.2239 103.556 27.2239C106.792 27.2239 108.95 29.7313 108.95 33.3134C108.95 36.8955 106.792 39.5821 103.556 39.5821ZM115.782 33.4925C115.782 39.5821 120.636 44.2388 126.928 44.2388C133.221 44.2388 138.075 39.403 138.075 33.3134C138.075 27.2239 133.401 22.5672 127.108 22.5672C120.816 22.5672 115.782 27.403 115.782 33.4925ZM121.175 33.3134C121.175 29.7313 123.513 27.2239 126.928 27.2239C130.344 27.2239 132.861 29.9104 132.861 33.4925C132.861 37.0746 130.524 39.5821 127.108 39.5821C123.692 39.5821 121.175 36.8955 121.175 33.3134ZM146.345 22.9254V17.7313C146.345 17.5522 146.345 17.3731 146.165 17.3731H141.491C141.311 17.3731 141.131 17.5522 141.131 17.7313V22.9254H138.794C138.614 22.9254 138.435 23.1045 138.435 23.2836V27.2239C138.435 27.403 138.614 27.5821 138.794 27.5821H141.131V37.9701C141.131 42.0896 143.109 44.2388 147.244 44.2388C148.862 44.2388 150.48 43.8806 151.739 43.1642C151.919 43.1642 151.919 42.9851 151.919 42.806V39.0448C151.919 38.8657 151.919 38.6866 151.739 38.6866H151.379C150.48 39.2239 149.402 39.403 148.503 39.403C147.064 39.403 146.345 38.6866 146.345 37.2537V27.5821H151.739C151.919 27.5821 152.098 27.403 152.098 27.2239V23.2836C152.098 23.1045 151.919 22.9254 151.739 22.9254H146.345ZM169.538 22.3881C169.538 20.4179 170.257 19.7015 171.875 19.7015C172.774 19.7015 173.673 19.7015 174.572 20.0597H174.751C174.751 20.0597 174.931 19.8806 174.931 19.7015V15.9403C174.931 15.7612 174.931 15.5821 174.751 15.5821C173.852 15.2239 172.594 15.0448 170.796 15.0448C166.481 15.0448 164.324 17.5522 164.324 22.0299V22.9254H161.987C161.807 22.9254 161.627 23.1045 161.627 23.2836V27.2239C161.627 27.403 161.807 27.5821 161.987 27.5821H164.324V43.5224C164.324 43.7015 164.504 43.8806 164.683 43.8806H169.358C169.538 43.8806 169.538 43.7015 169.538 43.5224V27.5821H174.032L180.684 43.5224C179.965 45.1343 179.246 45.4925 178.167 45.4925C177.268 45.4925 176.369 45.3134 175.47 44.7761H175.291L175.111 44.9552L173.493 48.3582C173.493 48.5373 173.493 48.8955 173.673 48.8955C175.291 49.791 176.729 50.1493 178.527 50.1493C181.943 50.1493 183.92 48.5373 185.538 44.2388L193.629 23.4627V23.1045C193.629 22.9254 193.449 22.9254 193.269 22.9254H188.415C188.235 22.9254 188.235 23.1045 188.235 23.2836L183.201 37.2537L177.808 23.2836C177.808 23.1045 177.628 22.9254 177.448 22.9254H169.538V22.3881ZM154.615 22.9254C154.436 22.9254 154.256 23.1045 154.256 23.2836V43.5224C154.256 43.7015 154.436 43.8806 154.615 43.8806H159.29C159.47 43.8806 159.47 43.7015 159.47 43.5224V23.2836C159.47 23.1045 159.47 22.9254 159.29 22.9254H154.615ZM153.537 17.0149C153.537 18.806 155.155 20.4179 156.953 20.4179C158.75 20.4179 160.189 18.806 160.189 17.0149C160.189 15.2239 158.75 13.791 156.953 13.791C155.155 13.791 153.537 15.2239 153.537 17.0149ZM197.584 29.3731C199.382 29.3731 201 27.9403 201 26.1493C201 24.3582 199.382 22.9254 197.584 22.9254C195.786 22.9254 194.348 24.3582 194.348 26.1493C194.348 27.9403 195.786 29.3731 197.584 29.3731ZM197.584 23.2836C199.202 23.2836 200.64 24.5373 200.64 26.1493C200.64 27.7612 199.202 29.0149 197.584 29.0149C195.966 29.0149 194.708 27.7612 194.708 26.1493C194.708 24.5373 195.966 23.2836 197.584 23.2836ZM198.303 26.5075C198.843 26.3284 199.202 25.9702 199.202 25.4328C199.202 24.7164 198.483 24.3582 197.764 24.3582H196.326V27.7612H197.045V26.6866H197.764L198.483 27.7612H199.382L198.303 26.5075ZM197.764 24.8955C198.123 24.8955 198.483 25.0746 198.483 25.4328C198.483 25.791 198.123 25.9701 197.764 25.9701H197.045V24.8955H197.764Z"
      />
    </svg>
  );
}
