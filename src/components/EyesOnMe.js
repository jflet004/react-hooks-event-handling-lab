// Code EyesOnMe Component Here

function EyesOnMe() {

  const handleFocus = (e) => console.log("Good!")
  const handleBlur = (e) => console.log("Hey! Eyes on me!")

  return <button
    onFocus={handleFocus}
    onBlur={handleBlur}
  >Eyes on me</button>

}

export default EyesOnMe