import './index.css'

function Header() {
  return (
    <div className="container-md-fluid header-container p-4 pt-2 pb-2">
        <div className="sub-header-container">
            <div className="header-logo display-6 col-1">Dinesh</div>
            <div className="d-flex header-menu d-none d-md-block">
                <a href="#choose" className=' header-item'>Choose Us</a>
                <a href="#eligibility" className=' header-item'>Eligibility</a>
                <a href="#placement" className=' header-item'>Placement</a>
                <a href="#journey" className=' header-item'>Journey</a>
            </div>
            <div className="text-end col-1">
                <button type="button" className="btn btn-secondary">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Header