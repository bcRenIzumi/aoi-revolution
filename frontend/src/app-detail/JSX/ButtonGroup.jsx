import React from 'react';

const ButtonGroup = ({ onDraftSave, onSubmit }) => {
    return (
        <div className="button-group">
            <button type="button" className="btn btn-secondary" onClick={onDraftSave}>
                下書き保存
            </button>
            <button type="submit" className="btn btn-primary" onClick={onSubmit}>
                送信
            </button>
        </div>
    );
};

export default ButtonGroup; 