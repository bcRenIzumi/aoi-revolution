import React from 'react';

const Header = ({ title, description, pageNumber, totalPages = 5 }) => {
    return (
        <div className="header">
            <h1>{title}</h1>
            <p>{description}</p>
            {pageNumber && (
                <div className="page-indicator">
                    <span>ページ {pageNumber} / {totalPages}</span>
                </div>
            )}
        </div>
    );
};

export default Header; 