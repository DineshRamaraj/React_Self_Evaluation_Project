import './index.css'

function Header() {
  return (
    <div className="container-md-fluid header-container p-4 pt-2 pb-2">
        <div className="row sub-header-container">
            <div className="header-logo display-6 col">Dinesh</div>
            <div className="col header-menu">
                <a href="#choose" className='col header-item'>Choose Us</a>
                <a href="#eligibility" className='col header-item'>Eligibility</a>
                <a href="#placement" className='col header-item'>Placement</a>
                <a href="#journey" className='col  header-item'>Journey</a>
            </div>
            <div className="col text-end">
                <button type="button" className="btn btn-secondary">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Header