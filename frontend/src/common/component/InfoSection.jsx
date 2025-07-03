import React, { useState } from 'react';

const InfoSection = ({ infoConfig }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSection = () => {
        setIsOpen(!isOpen);
    };

    if (!infoConfig) {
        return null;
    }

    return (
        <details className="collapsible-section" open={isOpen}>
            <summary className="section-header" onClick={toggleSection}>
                <span className="section-icon">{infoConfig.icon}</span>
                {infoConfig.title}
            </summary>
            <div className="section-content">
                {infoConfig.blocks.map(block => (
                    <div key={block.id} className="info-block">
                        <h4>{block.icon} {block.title}</h4>
                        {block.description && <p>{block.description}</p>}
                        {block.link && (
                            <a href={block.link.url} className="info-link">
                                {block.link.text}
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </details>
    );
};

export default InfoSection; 