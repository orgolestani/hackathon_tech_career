import React, { useState, useEffect } from 'react'
import './NavBar.css'
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { MdFingerprint } from 'react-icons/md'
import Button from '../Button'
import { Layout, Menu, Modal } from 'antd'
import Login from '../loginForm/Login'

import { IconContext } from 'react-icons/lib'
import loginUtils from '../../utils/login.utils'
import { useSelector } from 'react-redux'

const isObjectEmpty = (obj: any) => Object.keys(obj).length === 0

function NavBar() {
    const isLogged = useSelector((state: any) => {
        console.log(state)
        return !isObjectEmpty(state.user)
    })

    console.log(isLogged)
    const [btnTxtCng, setBtnTxtCng] = useState(false)
    const [click, setClick] = useState(false)
    const [isButton, setIsButton] = useState(true)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setIsButton(false)
        } else {
            setIsButton(true)
        }
    }
    const showModal = () => {
        setIsModalVisible((state) => !state)
    }
    const handleCancel = () => {
        setIsModalVisible(false)
    }
    const logOutHandler = () => {
        loginUtils.removeToken()
        window.location.reload()
    }
    useEffect(() => {
        showButton()
    }, [])
    window.addEventListener('resize', showButton)

    return (
        <>
            <IconContext.Provider value={{ color: '#000' }}>
                <div className="navbar">
                    <div className="navbar-container container">
                        <Link
                            to="/"
                            className="navbar-logo"
                            onClick={closeMobileMenu}
                        >
                            <img
                                className="logosmall"
                                src="/connectech-color-smaller.png"
                            />
                            ConnecTech
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item"></li>
                            <li className="nav-item">
                                <Link
                                    to="/student"
                                    className="nav-links"
                                    onClick={closeMobileMenu}
                                >
                                    סטודנטים
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/hr"
                                    className="nav-links"
                                    onClick={closeMobileMenu}
                                >
                                    מגייסים
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/recruiter"
                                    className="nav-links"
                                    onClick={closeMobileMenu}
                                >
                                    משרות
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/admin"
                                    className="nav-links"
                                    onClick={closeMobileMenu}
                                >
                                    הנהלה
                                </Link>
                            </li>
                            <li className="nav-btn">
                                <Button
                                    onClick={
                                        isLogged ? logOutHandler : showModal
                                    }
                                    buttonStyle="btn--outline"
                                >
                                    {isLogged ? 'התנתק' : 'התחבר'}
                                </Button>
                                <Modal
                                    title="התחברות"
                                    visible={isModalVisible}
                                    onCancel={handleCancel}
                                    footer={null}
                                >
                                    <Login
                                        isLogIn={setBtnTxtCng}
                                        showModal={showModal}
                                    />
                                </Modal>
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default NavBar
