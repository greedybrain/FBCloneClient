simport React from 'react'

const Services = () => {
    const services = ['Sign Up', 'Log In', 'Messenger', 'Facebook Lite', 'Watch', 'People', 'Pages', 'Page Categories', 'Places', 'Games', 'Locations', 'Marketplace', 'Facebook Pay', 'Groups', 'Oculus', 'Portal', 'Instagram', 'Local', 'Fundraisers', 'Services', 'About', 'Create Ad', 'Create Page', 'Developers', 'Careers', 'Privacy', 'Cookies', 'Ad Choices', 'Terms', 'Help']
    const renderServices = services.map((service, index) => {
        if (service === 'Ad Choices') {
            return <li key={index}>{service} <i class="fas fa-ad"></i></li>
        } else {
            return <li key={index}>{service}</li>
        }
    })
    return (
        <ul className="services">
            {renderServices}
        </ul>
    )
}

export default Services
