import styled from "styled-components"
function Footer({ className }) {
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    return (
        <div className={className}>
            <div className="invitation-footer d-flex justify-content-center align-items-center">
                <p className="para-center">
                    © {year} <a href='https://github.com/Singh-Prajwal' className="no-link">Prajwal Singh</a> All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default styled(Footer)`
  .invitation-footer {
    max-width: 100vw;
    background: #e6e6e6;
    padding: 20px 0;
    margin-top: 0;
    overflow-x: hidden;
  }
  .para-center {
    text-align: center;
    overflow-x: hidden;
  }
`
