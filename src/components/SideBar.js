import React from 'react';
import ProfilePicture from '../images/me.png';

const SideBar = () => {
    return (  
        <aside className="text-center">
        <div className="profile-picture">
            <img src={ProfilePicture} alt="Dilip Agheda" />
        </div>
        <section>
            <h1 className="segment-header text-center">
                CONTACT
            </h1>
            <div className="segment-details">
                <address className="segment-details-item address">
                    <div className="segment-details-item-label">Address</div>
                    <div className="segment-details-item-value">Sydney, Australia</div>
                </address>
                <div className="segment-details-item phone">
                    <div className="segment-details-item-label">Mobile</div>
                    <div className="segment-details-item-value">
                        <a href="tel:+61 0401291718">+61 0401291718</a>
                    </div>
                </div>
                <div className="segment-details-item email">
                    <div className="section-details-item-label">Email</div>
                    <div className="section-details-item-value">
                        <a href="mailto:dilip_agheda@yahoo.com">dilip_agheda@yahoo.com</a>
                    </div>
                </div>
                <div className="segment-details-item website">
                    <div className="segment-details-item-label">Website</div>
                    <div className="segment-details-item-value">
                        <a href="https://www.dilipagheda.com" target="_blank">www.dilipagheda.com</a>
                    </div>
                </div>
                <div className="segment-details-item linkedin">
                    <div className="segment-details-item-label">Linkedin</div>
                    <div className="segment-details-item-value">
                        <a href="https://www.linkedin.com/in/dilipagheda/" target="_blank">www.linkedin.com/in/dilipagheda</a>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <h1 className="segment-header text-center">
                ABOUT ME
            </h1>
            <div className="segment-details">
                <div className="segment-details-item">
                    <p>I am a Full Stack Web Developer who is passionate about using digital technology to build quality software that deliver great value to customers. I enjoy translating design requirements into a working software while using behaviour-driven development that automates the critical use cases to ensure production quality from day one.</p>
                </div>
            </div>
        </section>
    </aside>
    );
}
 
export default SideBar;
