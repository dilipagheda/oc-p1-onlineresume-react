import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCertificate} from '@fortawesome/free-solid-svg-icons';
import CertificateItem from './CertificateItem';
import {CERTIFICATES} from '../../data/education/certificates';
import usePagination from '../../hooks/PaginationHooks';

const Certificates = () => {
    const [getCurrentPageData, showButtons] = usePagination(CERTIFICATES.items);

    return ( 
        <section class="resume-cert-section">
            <h2 class="resume-cert-section-title"><FontAwesomeIcon icon={faCertificate} className="cert-icon" /> Certifications</h2>
            {getCurrentPageData().map(item => <CertificateItem {...item}/>)}
            {showButtons()} 
        </section>
     );
}
 
export default Certificates;