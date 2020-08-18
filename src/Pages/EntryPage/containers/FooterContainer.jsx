import React from 'react'
import Languages from '../components/Languages'
import '../../../css/entryFooter.css'
import Services from '../components/Services'

const FooterContainer = () => {
    return (
        <footer className="entry-footer">
            <>
                <Languages />
            </>
            <>
                <Services />
            </>
            <div className="copyright">
                Fakebook © 2020
            </div>
        </footer >
    )
}

export default FooterContainer
