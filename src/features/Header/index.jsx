import './style.css'
export const Header = ({handleClick,handleChange}) => {

    return(
        <header className="header">
        <button className='header__button' id='reset' onClick={handleClick}>Click to reset</button>
        <div className="header__toggle" onChange={handleChange}>
			<input
				type="radio"
				id="tree"
				name="toggle"
				value="tree"
                defaultChecked
			/>
			<label htmlFor="tree">Tree</label>
			<input type="radio" id="cards" name="toggle" value="cards" />
			<label htmlFor="cards">Cards</label>
		</div>
        </header>
    )
}