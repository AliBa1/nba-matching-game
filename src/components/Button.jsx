function Button({onClick, text}) {
  return (
    <button onClick={onClick} className="hover:underline text-2xl">{text}</button>
  )
}

export default Button