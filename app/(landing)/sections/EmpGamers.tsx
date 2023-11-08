import "../styles/empgamers.scss"
import Image from 'next/image'
import EmpGamersImg from '../../assets/landing/Emp.png'

function EmpGamers() {
    return (
        <div className='emp-gamers'>
            <h2 className='emp-heading'>Empowering Gamers</h2>
            <Image src={EmpGamersImg} alt="gamer" />
            <h2 className='emp-heading'>Revolutionizing Gaming</h2>
        </div>
    )
}

export default EmpGamers