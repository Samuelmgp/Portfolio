import "../css/EmploymentCard.css";

const EmploymentCard = ({position, company, duration, description}) => {
    return (
        <div className="employment-card">
            <div className="employment-card-header">
                <h1 className="employment-header-position">{position}</h1>
                <div className="employment-header-subheader">
                    <h2>{company}</h2>
                    <h2>|</h2>
                    <h2>{duration}</h2>
                </div>
            </div>
            <p className="employment-card-description">{description}</p>
        </div>
    );
}

export default EmploymentCard;