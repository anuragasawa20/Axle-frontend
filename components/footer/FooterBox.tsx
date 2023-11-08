import Image from 'next/image'
import LOGO from '../../app/assets/Logo.png'
import ContactUs from './ContactUs'
function FooterBox() {
    return (
        <div className='footer-box'>
            <Image src={LOGO} alt="logo" />
            <div>

                <div className='footer-tabs'>

                    <div>
                        <h5>NAV ITEMS</h5>
                        <p><a href='#home'>Home</a></p>
                        <p><a href='#about'>About</a></p>
                        <p><a href='#features'>Features</a></p>
                        <p><a href='#roadmap'>Road Map</a></p>
                    </div>

                    <div>
                        <h5>COMMUNITY</h5>
                        <p><a >Discord</a></p>
                        <p><a href="https://twitter.com/0xAxleGaming" target="_blank">Twitter</a></p>
                        <p><a href="https://linkedin.com/company/axle-gaming/about" target="_blank">Linked In</a></p>
                        <p><a >Instagram</a></p>
                    </div>

                    <div>
                        <h5>SUPPORT</h5>
                        <div><ContactUs/></div>
                        <p><a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=admin@axlegaming.xyz" target="_blank">Email</a></p>
                        <br />
                        <br />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default FooterBox