import React from 'react'
import Svg1 from '../assets/Icons/Twitter-Icon.svg'
import Svg2 from '../assets/Icons/GitHub-Icon.svg'
import Svg3 from '../assets/Icons/Linkedin-Icon.svg'

export default function Footer() {
    return (
        <div className='footer-container'>
            <a href='https://twitter.com/Urahara_Bankaii' target={"_blank"}>
                <img src={Svg1} alt="" />
            </a>
            <a href='https://github.com/Coul-J/Kelvin-s-tudio' target={"_blank"}>
                <img src={Svg2} alt="" />
            </a>
            <a href='https://www.linkedin.com/in/kelvin-studio?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B90YAmt87QFyzy9R6G27AdQ%3D%3D' target={"_blank"}>
                <img src={Svg3} alt="" />
            </a>
        </div>
    )
}