import clsx from "clsx";

const IconButton = ({children, label, state, onClick}) => {
  return (
    <button
      type="button"
      className={clsx("h-12 w-12 rounded-full grid-center hover:bg-light-gray text-xl font-medium",
        state && "bg-light-gray"
      )}
      aria-label={label}
      aria-pressed={state}
      onClick={onClick}
    >{children}</button>
  )
}

export default IconButton;