import resume from '../assets/SAMUEL_GARCIA_CV_WEB_PUB.pdf'

function Resume () {
    return (
        <div className="resume-container">
            <object data={resume} type="application/pdf" width="100%" height="100%">
                <p>Your browser does not support PDFs.
                    <a href={resume}>Download the PDF</a>.</p>
            </object>
        </div>
    )
}

export default Resume