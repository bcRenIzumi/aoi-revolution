import React from 'react';
import '../CSS/AppDetail.css';
import ApplicationForm from './ApplicationForm';
import Header from './Header';
import InfoSection from './InfoSection';

const AppDetail = () => {
    return (
        <div className="container">
            <Header />
            <div className="form-container">
                <InfoSection />
                <ApplicationForm />
            </div>
        </div>
    );
};

export default AppDetail; 