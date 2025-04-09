import React from "react";
import "./Footer.scss"

interface FooterProps {
    linkInstagram: string,
    linkWpp: string,
    linkSite: string,
    descEmpresa: string
}

const Footer: React.FC<FooterProps> = ({ linkInstagram, linkWpp, linkSite, descEmpresa }) => {
    return (
        <footer className="footer">
            <div className="contatos">
                <a href={linkInstagram} target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 102 102" id="instagram">
                        <defs>
                            <radialGradient id="j" cx="6.601" cy="99.766" r="129.502" gradientUnits="userSpaceOnUse">
                                <stop offset=".09" stop-color="#fa8f21"></stop>
                                <stop offset=".78" stop-color="#d82d7e"></stop>
                            </radialGradient>
                            <radialGradient id="i" cx="70.652" cy="96.49" r="113.963" gradientUnits="userSpaceOnUse">
                                <stop offset=".64" stop-color="#8c3aaa" stop-opacity="0"></stop>
                                <stop offset="1" stop-color="#8c3aaa"></stop>
                            </radialGradient>
                        </defs>
                        <path fill="url(#j)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"></path>
                        <path fill="url(#i)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"></path>
                        <path fill="#fff" d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229" transform="translate(-422.637 -426.196)"></path>
                    </svg>
                </a>
                <a href={linkWpp} target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 102 102" id="whatsapp">
                        <defs>
                            <linearGradient id="k" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox">
                                <stop offset="0" stop-color="#61fd7d"></stop>
                                <stop offset="1" stop-color="#2bb826"></stop>
                            </linearGradient>
                        </defs>
                        <path fill="url(#k)" d="M101.971 77.094c0 .558-.017 1.77-.051 2.705a53.717 53.717 0 0 1-.538 6.589 21.949 21.949 0 0 1-1.847 5.521 19.654 19.654 0 0 1-8.653 8.644 21.993 21.993 0 0 1-5.552 1.847 53.913 53.913 0 0 1-6.539.528c-.936.033-2.148.05-2.7.05l-50.223-.008c-.558 0-1.769-.017-2.705-.051a53.744 53.744 0 0 1-6.589-.538 21.951 21.951 0 0 1-5.521-1.847A19.654 19.654 0 0 1 2.4 91.881a21.988 21.988 0 0 1-1.843-5.552 53.954 53.954 0 0 1-.528-6.539 92.845 92.845 0 0 1-.05-2.7l.008-50.224c0-.558.017-1.77.051-2.705a53.738 53.738 0 0 1 .538-6.589 21.946 21.946 0 0 1 1.847-5.521A19.655 19.655 0 0 1 11.076 3.4a22 22 0 0 1 5.552-1.848 53.912 53.912 0 0 1 6.539-.528c.936-.033 2.148-.05 2.7-.05l50.228.012c.559 0 1.77.017 2.705.051a53.744 53.744 0 0 1 6.589.538 21.946 21.946 0 0 1 5.521 1.847 19.653 19.653 0 0 1 8.644 8.653 21.988 21.988 0 0 1 1.848 5.552 53.974 53.974 0 0 1 .528 6.539c.033.936.05 2.148.05 2.7l-.008 50.223Z" transform="translate(.021 -.978)"></path>
                        <g>
                            <path fill="#fff" d="M78.02 24.131A36.58 36.58 0 0 0 20.452 68.25l-5.189 18.948 19.39-5.085a36.561 36.561 0 0 0 17.479 4.451h.015A36.578 36.578 0 0 0 78.02 24.131ZM52.15 80.388h-.012a30.361 30.361 0 0 1-15.473-4.236l-1.11-.659-11.506 3.017 3.071-11.215-.723-1.15a30.4 30.4 0 1 1 25.754 14.242Zm16.67-22.761c-.914-.457-5.407-2.668-6.245-2.973s-1.447-.457-2.056.457-2.361 2.973-2.894 3.582-1.066.686-1.98.229a24.963 24.963 0 0 1-7.349-4.535 27.531 27.531 0 0 1-5.084-6.329c-.533-.915-.057-1.409.4-1.865.411-.409.914-1.067 1.371-1.6a6.23 6.23 0 0 0 .914-1.524 1.682 1.682 0 0 0-.076-1.6c-.228-.457-2.056-4.954-2.818-6.783-.742-1.782-1.5-1.541-2.056-1.568a36.004 36.004 0 0 0-1.752-.032 3.358 3.358 0 0 0-2.437 1.143 10.246 10.246 0 0 0-3.2 7.622c0 4.5 3.275 8.841 3.732 9.451s6.444 9.838 15.612 13.8a52.582 52.582 0 0 0 5.21 1.925 12.535 12.535 0 0 0 5.756.362c1.756-.262 5.407-2.21 6.169-4.344a7.635 7.635 0 0 0 .533-4.344c-.229-.381-.838-.61-1.752-1.067Z"></path>
                        </g>
                    </svg>
                </a>
                <a href={linkSite} target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 128 128" id="google-chrome">
                        <circle cx="64.149" cy="64.236" r="60.999" fill="#fff"></circle>
                        <path fill-opacity=".1" d="M102.966 75.327c0-21.439-17.379-38.819-38.817-38.819s-38.818 17.38-38.818 38.819h11.09c0-15.314 12.415-27.727 27.727-27.727 15.313 0 27.727 12.413 27.727 27.727"></path>
                        <circle cx="66.922" cy="71.999" r="21.072" fill-opacity=".1"></circle>
                        <linearGradient id="a" x1="395.191" x2="395.191" y1="484.168" y2="484.723" gradientTransform="matrix(82 0 0 82 -32341.5 -39660.313)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#81B4E0"></stop>
                            <stop offset="1" stop-color="#0C5A94"></stop>
                        </linearGradient>
                        <circle cx="64.149" cy="64.235" r="22.736" fill="url(#a)"></circle>
                        <linearGradient id="b" x1="-608.91" x2="-608.91" y1="-597.648" y2="-547.185" gradientTransform="translate(675 599.775)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#F06B59"></stop>
                            <stop offset="1" stop-color="#DF2227"></stop>
                        </linearGradient>
                        <path fill="url(#b)" d="M119.602 36.508c-15.266-30.716-52.542-43.24-83.259-27.974-9.578 4.761-17.764 11.913-23.765 20.766l24.955 43.253c-4.597-14.606 3.521-30.174 18.127-34.77 2.567-.808 5.243-1.238 7.935-1.274"></path>
                        <linearGradient id="c" x1="-657.835" x2="-632.327" y1="-491.393" y2="-533.537" gradientTransform="translate(675 599.775)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#388B41"></stop>
                            <stop offset="1" stop-color="#4CB749"></stop>
                        </linearGradient>
                        <path fill="url(#c)" d="M12.578 29.3c-19.1 28.492-11.486 67.071 17.005 86.171 8.814 5.909 18.997 9.461 29.575 10.319l26.063-44.363c-9.745 11.811-27.22 13.486-39.032 3.74-4.011-3.309-7.012-7.679-8.657-12.613"></path>
                        <linearGradient id="d" x1="-572.385" x2="-599.557" y1="-486.91" y2="-552.345" gradientTransform="translate(675 599.775)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#E4B022"></stop>
                            <stop offset=".3" stop-color="#FCD209"></stop>
                        </linearGradient>
                        <path fill="url(#d)" d="M59.158 125.791c34.204 2.585 64.027-23.047 66.613-57.25.834-11.037-1.295-22.093-6.17-32.031h-56.006c15.312.07 27.67 12.541 27.598 27.854-.028 6.195-2.131 12.204-5.972 17.064"></path>
                        <linearGradient id="e" x1="-649.391" x2="-649.391" y1="-528.885" y2="-573.247" gradientTransform="translate(675 599.775)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-opacity=".15"></stop>
                            <stop offset=".3" stop-opacity=".06"></stop>
                            <stop offset="1" stop-opacity=".03"></stop>
                        </linearGradient>
                        <path fill="url(#e)" d="M12.578 29.3l24.955 43.253c-1.849-6.221-1.457-12.893 1.107-18.854l-24.954-26.063"></path>
                        <linearGradient id="f" x1="-588.158" x2="-618.657" y1="-514.559" y2="-483.505" gradientTransform="translate(675 599.775)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-opacity=".15"></stop>
                            <stop offset=".3" stop-opacity=".06"></stop>
                            <stop offset="1" stop-opacity=".03"></stop>
                        </linearGradient>
                        <path fill="url(#f)" d="M59.158 125.791l26.063-44.363c-4.112 4.904-9.794 8.233-16.082 9.426l-11.091 34.937"></path>
                        <linearGradient id="g" x1="-588.6" x2="-584.163" y1="-505.621" y2="-549.431" gradientTransform="translate(675 599.775)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-opacity=".15"></stop>
                            <stop offset=".3" stop-opacity=".06"></stop>
                            <stop offset="1" stop-opacity=".03"></stop>
                        </linearGradient>
                        <path fill="url(#g)" d="M119.602 36.508h-56.007c8.436.039 16.396 3.918 21.626 10.537l35.491-8.873"></path>
                    </svg>
                </a>
            </div>
            <div className="texto">
                <h1>Sobre</h1>
                <p>{descEmpresa}</p>
            </div>
        </footer>
    )
}

export default Footer