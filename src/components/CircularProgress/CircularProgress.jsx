import './CircularProgress.scss'

export const CircularProgress = ({ percentage = 50, category = 'Figma', children}) => {
    const validPercentage = Math.min(100, Math.max(0, percentage));

    return (
        <div className='circular-progress'>
            <div 
                className="circular-progress__diagramm"
                style={{
                background: `conic-gradient(var(--color-accent) ${validPercentage}%, var(--color-gray) ${validPercentage}% 100%)`
                }}
            >
                <div className="circular-progress__diagramm-inner">
                    {children}
                </div>
            </div>
            <p className='circular-progress__percent h3'>{`${percentage} %`}</p>
            <p className='circular-progress__category h5'>{category}</p>
        </div>

    );
};