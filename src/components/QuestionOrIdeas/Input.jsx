const Input = ({type, placeholder}) => {
  return (
    <input 
      type={`${type}`} 
      placeholder={`${placeholder}`} 
      className="bg-white bg-opacity-50 border-white border-2 outline-none focus:outline-white focus:border-white text-white placeholder:text-white rounded p-4 w-full appearance-none"
      required
    />
  )
}
export default Input;