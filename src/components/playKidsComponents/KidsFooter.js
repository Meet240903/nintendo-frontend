import React from 'react'
import footerLogo from '../../assets/images/nintendu-logo.svg';
import ratingLogo from '../../assets/images/kidsComponentsImgs/footerImgs/ratingLogo.png';
import ratingLogo2 from '../../assets/images/kidsComponentsImgs/footerImgs/ratingLogo2.png';
import '../../assets/css/kidsComponentscss/KidsFooter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookF, faFacebookSquare, faInstagram, faInstagramSquare, faTwitter, faTwitterSquare, faYoutube, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

const KidsFooter = () => {
  return (
    <>
      <div className='kids-footer-section-container'>
        <div className='kids-footer-section-title'>
            <h4>You can find friendly characters, fun activities, and fantastic video games on Play Nintendo!</h4>
        </div>
        <div className='kids-footer-links-section'>
            <div className='kids-footer-logo-img'>
                <img src={footerLogo} className='img-fluid' alt='footer-logo' />
            </div>
            <div className='kids-footer-links-content'>
                <li>For Parents</li>
                <li>Contact Us</li>
                <li>Website Feedback</li>
                <li>Privacy Notice</li>
                <li>Terms of Use</li>
            </div>
            <div className='kids-footer-rating-logo-img'>
                <img src={ratingLogo} className='img-fluid' alt='footer-rating-logo' />
            </div>
        </div>
        <div className='kids-footer-social-icon-section'>
            <p>Find us on:</p>
            <div className='kids-footer-social-icon-content'>
                <FontAwesomeIcon icon={faFacebookF} className='facebook-icon' />
                <FontAwesomeIcon icon={faTwitter} className='twitter-icon' />
                <FontAwesomeIcon icon={faYoutube} className='youtube-icon' />
                <FontAwesomeIcon icon={faInstagram} className='instagram-icon' />
            </div>
        </div>
        <div className='kids-footer-rating-section'>
            <img src={ratingLogo2} className='img-fluid' alt='rating-logo' />
            <p className='mt-4'>For Nintendo 3DS systems, use Parental Controls to restrict 3D mode for kids 6 and under.</p>
            <p>Broadband Internet access required for online features. For more info, check out support.nintendo.com.</p>
            <p>© 2022 Nintendo. Games are property of their respective owners. Nintendo of America Inc. Headquarters are in Redmond, Washington.</p>
        </div>
      </div>
    </>
  )
}

export default KidsFooter
