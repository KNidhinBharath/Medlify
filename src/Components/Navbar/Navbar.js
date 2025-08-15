
import logo from '../../Assets/logo.png'
import '../../Styles/Navbar.css'

export default function Navbar() {
      return (
        <div className="Navbar">
            <div className="logo">
                <img src={logo} alt='logo'/>
            </div>
            <div className='menu'>
                <ul className='menu-list'>
                    <li>Find Doctors</li>
                    <li>Hospitals</li>
                    <li>Medicines</li>
                    <li>Surgeries</li>
                    <li>Software for Providers</li>
                    <li>Facilities</li>
                    <li className='btn'>My Bookings</li>
                </ul>
            </div>
        </div>
    )
}