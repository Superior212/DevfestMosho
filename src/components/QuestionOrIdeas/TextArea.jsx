const TextArea = () => {
  return (
    <textarea
      className="resize-none bg-white bg-opacity-50 border-white border-2 outline-none focus:outline-white focus:border-white text-white placeholder:text-white rounded p-4 w-full h-full appearance-none"
      placeholder="Message"
      required
    ></textarea>
  )
}
export default TextArea;