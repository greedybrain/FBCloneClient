import React from 'react'

const Languages = () => {
    const languages = ['English (US)', 'Español', 'Français (France)', '中文(简体)', 'العربية', 'Português', '(Brasil)', '한국어', 'Italiano', 'Deutsch', 'हिन्दी', '日本語']
    const renderLangs = languages.map((lang, index) => {
        return <li key={index}>{lang}</li>
    })
    return (
        <ul className="languages">
            {renderLangs}
        </ul>
    )
}

export default Languages
