import './Header.css'
function Header() {
    return (
        <div className="container">
            <div className="options">
                <img className='avatar' src="./Bitmap.png" />
                <div className="navigator">
                    <div className="helper-text">Report for</div>
                    <div className="title">Best Seller</div>
                </div>
            </div>
            <ul className="choices">
                <li>Daily</li>
                <li>Weekly</li>
                <li>Monthly</li>
            </ul>
        </div>
    )
}

export default Header