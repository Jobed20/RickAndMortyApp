import "react-widgets/styles.css";

const InputSearch = ({setlocationSearch}) => {


  const SearchLocation = event =>{
    event.preventDefault()
    setlocationSearch(event.target.children[0].value)

  }

  return (
    <form className='search' onSubmit={SearchLocation}>
      
      <input className='input'  type="text"  placeholder='type a location (1-126) ' />
      <button className='BTN' >Search</button>
    </form>
  )
}

export default InputSearch