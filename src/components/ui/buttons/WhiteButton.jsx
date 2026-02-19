const WhiteButton = ({ children }) => {
  return (
    <button
      type="button"
      className="bg-white font-medium leading-5 rounded-full py-3.5 px-6 hover:bg-light-gray transition-300"
    >{children}</button>
  )
}

export default WhiteButton