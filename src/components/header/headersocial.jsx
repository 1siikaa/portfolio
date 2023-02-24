import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'
import {SiCodewars} from 'react-icons/si'

const HeaderSocials= () => {
    return (
        <div className='header__socials'>
            <a href='www.linkedin.com/mwlite/in/vanshika-dubey-479693227'  target='_blank' rel="noreferrer"  ><BsLinkedin/></a>
            <a href='https://github.com/1siikaa'  target='_blank' rel="noreferrer"  ><FaGithub/></a>
            <a href='https://leetcode.com/Vanshika_Dubey/'  target='_blank' rel="noreferrer"  ><SiLeetcode/></a>
            <a href='https://www.codewars.com/users/1siikaa'  target='_blank' rel="noreferrer"  ><SiCodewars/></a>


        </div>
    )
}

export default HeaderSocials






