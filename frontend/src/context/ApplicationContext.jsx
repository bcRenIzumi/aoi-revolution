import React, { createContext, useCallback, useContext, useEffect, useReducer } from 'react';

// アクションタイプ
const ACTION_TYPES = {
    UPDATE_BASIC_FORM: 'UPDATE_BASIC_FORM',
    UPDATE_DETAIL_FORM: 'UPDATE_DETAIL_FORM',
    UPDATE_FILE_DATA: 'UPDATE_FILE_DATA',
    RESET_FORM: 'RESET_FORM',
    SET_APPLICATION_NUMBER: 'SET_APPLICATION_NUMBER',
    RESTORE_STATE: 'RESTORE_STATE'
};

// SessionStorageキー
const STORAGE_KEY = 'applicationFormState';

// SessionStorageから状態を復元する関数
const restoreStateFromStorage = () => {
    try {
        const savedState = sessionStorage.getItem(STORAGE_KEY);
        return savedState ? JSON.parse(savedState) : null;
    } catch (error) {
        console.error('Failed to restore state from sessionStorage:', error);
        return null;
    }
};

// SessionStorageに状態を保存する関数
const saveStateToStorage = (state) => {
    try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
        console.error('Failed to save state to sessionStorage:', error);
    }
};

// 初期状態
const initialState = {
    basicForm: {},
    detailForm: {},
    fileData: {},
    applicationNumber: null,
    isSubmitting: false
};

// 初期状態を復元された状態で上書き
const getInitialState = () => {
    const restoredState = restoreStateFromStorage();
    return restoredState ? { ...initialState, ...restoredState } : initialState;
};

// Reducer関数
const applicationReducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.UPDATE_BASIC_FORM:
            return {
                ...state,
                basicForm: { ...state.basicForm, ...action.payload }
            };
        case ACTION_TYPES.UPDATE_DETAIL_FORM:
            return {
                ...state,
                detailForm: { ...state.detailForm, ...action.payload }
            };
        case ACTION_TYPES.UPDATE_FILE_DATA:
            return {
                ...state,
                fileData: { ...state.fileData, ...action.payload }
            };
        case ACTION_TYPES.SET_APPLICATION_NUMBER:
            return {
                ...state,
                applicationNumber: action.payload
            };
        case ACTION_TYPES.RESTORE_STATE:
            return { ...state, ...action.payload };
        case ACTION_TYPES.RESET_FORM:
            return initialState;
        default:
            return state;
    }
};

// Context作成
const ApplicationContext = createContext();

// Provider コンポーネント
export const ApplicationProvider = ({ children }) => {
    const [state, dispatch] = useReducer(applicationReducer, getInitialState());

    // 状態が変更されるたびにSessionStorageに保存
    useEffect(() => {
        saveStateToStorage(state);
    }, [state]);

    // アクション関数（useCallbackでメモ化）
    const updateBasicForm = useCallback((data) => {
        dispatch({ type: ACTION_TYPES.UPDATE_BASIC_FORM, payload: data });
    }, []);

    const updateDetailForm = useCallback((data) => {
        dispatch({ type: ACTION_TYPES.UPDATE_DETAIL_FORM, payload: data });
    }, []);

    const updateFileData = useCallback((data) => {
        dispatch({ type: ACTION_TYPES.UPDATE_FILE_DATA, payload: data });
    }, []);

    const setApplicationNumber = useCallback((number) => {
        dispatch({ type: ACTION_TYPES.SET_APPLICATION_NUMBER, payload: number });
    }, []);

    const resetForm = useCallback(() => {
        dispatch({ type: ACTION_TYPES.RESET_FORM });
        // SessionStorageもクリア
        sessionStorage.removeItem(STORAGE_KEY);
    }, []);

    // 状態復元関数
    const restoreState = useCallback(() => {
        const restoredState = restoreStateFromStorage();
        if (restoredState) {
            dispatch({ type: ACTION_TYPES.RESTORE_STATE, payload: restoredState });
        }
    }, []);

    // API送信関数
    const submitApplication = useCallback(async () => {
        try {
            const applicationData = {
                basicInfo: state.basicForm,
                detailInfo: state.detailForm,
                fileInfo: state.fileData,
                submittedAt: new Date().toISOString()
            };

            console.log('申請データを送信:', applicationData);

            const response = await fetch('/api/secure/application/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(applicationData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log('申請送信成功:', result);

            // 申請番号を保存
            if (result.data && result.data.applicationNumber) {
                setApplicationNumber(result.data.applicationNumber);
            }

            return result;
        } catch (error) {
            console.error('申請送信エラー:', error);
            throw error;
        }
    }, [state.basicForm, state.detailForm, state.fileData, setApplicationNumber]);

    const value = {
        ...state,
        updateBasicForm,
        updateDetailForm,
        updateFileData,
        setApplicationNumber,
        resetForm,
        restoreState,
        submitApplication
    };

    return (
        <ApplicationContext.Provider value={value}>
            {children}
        </ApplicationContext.Provider>
    );
};

// カスタムフック
export const useApplication = () => {
    const context = useContext(ApplicationContext);
    if (!context) {
        throw new Error('useApplication must be used within an ApplicationProvider');
    }
    return context;
};

export default ApplicationContext; 