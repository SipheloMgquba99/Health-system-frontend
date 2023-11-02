import { BsHeartHalf, BsGrid1X2Fill, BsFileMedical, BsPersonFill, BsCalendar, BsFileEarmarkText, BsGraphUp, BsGear } from 'react-icons/bs'

function Sidebar() {
    return (
        <aside id='sidebar'>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <BsHeartHalf className='icon_header' />
                    Health Center
                </div>
                <span className='icon close_icon'>X</span>
            </div>
            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsGrid1X2Fill className='icon' />
                        Dashboard
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFileMedical className='icon' />
                        Medical Records
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsPersonFill className='icon' />
                        Patients
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsCalendar className='icon' />
                        Appointments
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFileEarmarkText className='icon' />
                        Prescriptions
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsGraphUp className='icon' />
                        Reports
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsGear className='icon' />
                        Settings
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar