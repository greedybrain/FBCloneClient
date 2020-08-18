import React, { useRef } from 'react'
import '../../../css/entrySignup.css'

const Signup = () => {
    const refBdayModal = useRef(null)
    const refGenderModal = useRef(null)

    const days = []
    const years = []
    for (let day = 1; day <= 31; day++) {
        days.push(day)
    }
    for (let year = 1905; year <= 2020; year++) {
        years.push(year)
    }
    const renderDays = days.map((day, index) => {
        return <option key={index} value={day}>{day}</option>
    })
    const renderYears = years.map((year, index) => {
        return <option key={index} value={year}>{year}</option>
    })

    const handleBdayInfoClick = event => {
        if (event.target.classList.contains('bday-info')) {
            refBdayModal.current.style.display = 'flex'
            refGenderModal.current.style.display = 'none'
        }
    }

    const handleGenderInfoClick = event => {
        if (event.target.classList.contains('gender-info')) {
            refGenderModal.current.style.display = 'flex'
            refBdayModal.current.style.display = 'none'
        }
    }

    const handleCloseBdayModal = event => {
        return event.target.textContent === 'Close' || event.target.parentElement.parentElement ? getElement(refBdayModal).current.style.display = 'none' : null
    }

    const handleCloseGenderModal = event => {
        return event.target.textContent === 'Close' || event.target.parentElement.parentElement ? getElement(refGenderModal).current.style.display = 'none' : null
    }

    const getElement = element => {
        return element
    }

    const handleSubmit = event => {
        event.preventDefault()
    }

    return (
        <div className="signup-form">
            <div className="signup-form-header">
                <h1>Create a New Account</h1>
                <p>It's quick and easy.</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="first-last-name">
                    <div className="first-name">
                        <input type="text" placeholder="First name" />
                    </div>
                    <div className="last-name">
                        <input type="text" placeholder="Last name" />
                    </div>
                </div>
                <div className="mobile-email">
                    <input type="text" placeholder="Mobile number or email" />
                </div>
                <div className="password">
                    <input type="password" placeholder="New password" />
                </div>
                <div className="birthday-select">
                    <div className="label">
                        <label className="birthday-label" htmlFor="birthday">Birthday</label>
                    </div>
                    <div className="all-selects">
                        <div className="month">
                            <select className="selects" name="month" id="birthday">
                                <option value="Month">Month</option>
                                <option value="Jan">Jan</option>
                                <option value="Feb">Feb</option>
                                <option value="Mar">Mar</option>
                                <option value="Apr">Apr</option>
                                <option value="May">May</option>
                                <option value="Jun">Jun</option>
                                <option value="Jul">Jul</option>
                                <option value="Aug">Aug</option>
                                <option value="Sep">Sep</option>
                                <option value="Oct">Oct</option>
                                <option value="Nov">Nov</option>
                                <option value="Dec">Dec</option>
                            </select>
                        </div>
                        <div className="day">
                            <select className="selects" name="day" id="birthday">
                                <option value="Day">Day</option>
                                {renderDays}
                            </select>
                        </div>
                        <div className="year">
                            <select className="selects" name="year" id="birthday">
                                <option value="Year">Year</option>
                                {renderYears.reverse()}
                            </select>
                        </div>
                        <div className="q-mark">
                            <i onClick={handleBdayInfoClick} className="fas fa-question-circle bday-info"></i>
                        </div>
                        <div className="birthday-more-info" ref={refBdayModal} onMouseLeave={handleCloseBdayModal}>
                            <div className="info">
                                <p>Providing your birthday helps make sure you get the right Facebook experience for your age. If you want to change who sees this, go to the About section of your profile. For more details, please visit our <span className="key-word">Data Policy</span>.</p>
                                <button onClick={handleCloseBdayModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gender-select">
                    <div className="label">
                        <label className="gender-label" htmlFor="gender">Gender</label>
                    </div>
                    <div className="genders">
                        <div className="female radio">
                            <div>
                                <input type="radio" name="gender" id="female" value="Female" />
                            </div>
                            <div>
                                <label htmlFor="female">Female</label>
                            </div>
                        </div>
                        <div className="male radio">
                            <div>
                                <input type="radio" name="gender" id="male" value="Male" />
                            </div>
                            <div>
                                <label htmlFor="male">Male</label>
                            </div>
                        </div>
                        <div className="custom radio">
                            <div>
                                <input type="radio" name="gender" id="custom" value="Custom" />
                            </div>
                            <div>
                                <label htmlFor="custom">Custom</label>
                            </div>
                        </div>
                        <div className="q-mark">
                            <i onClick={handleGenderInfoClick} className="fas fa-question-circle gender-info"></i>
                        </div>
                        <div className="gender-more-info" ref={refGenderModal} onMouseLeave={handleCloseGenderModal}>
                            <div className="info">
                                <p>You can change who sees your gender on your profile later. Select Custom to choose another gender, or if you'd rather not say.</p>
                                <button onClick={handleCloseGenderModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="fine-print">
                    By clicking Sign Up, you agree to our <span className="key-word">Terms</span>, <span className="key-word">Data Policy</span> and <span className="key-word">Cookies Policy</span>. You may receive SMS Notifications from us and can opt out any time.
                </p>
                <div className="sub-btn">
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default Signup
