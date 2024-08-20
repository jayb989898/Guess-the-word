// popupService.ts
import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";

// PopupService Singleton
class PopupService {
  private static instance: PopupService;
  private showPopupCallback: ((props: any) => void) | null = null;

  private constructor() {}

  public static getInstance(): PopupService {
    if (!PopupService.instance) {
      PopupService.instance = new PopupService();
    }
    return PopupService.instance;
  }

  public setCallback(callback: (props: any) => void) {
    this.showPopupCallback = callback;
  }

  public showPopup(props: any) {
    if (this.showPopupCallback) {
      this.showPopupCallback(props);
    }
  }
}

export const popupService = PopupService.getInstance();

// Popup Component
const PopupComponent: React.FC<{ textColor: string; onClose: () => void }> = ({
  textColor,
  onClose,
}) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose();
    }, 5000); // Static 5 seconds duration
    return () => clearTimeout(timeoutId);
  }, [onClose]);

  return (
    <div className="popup-overlay" style={overlayStyles}>
      <div className="popup-content" style={contentStyles}>
        <div style={{ color: textColor }}>
          <p>This is a static popup!</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

const overlayStyles: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
};

const contentStyles: React.CSSProperties = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
};

export const showPopup = (props: any) => {
  popupService.showPopup(props);
};

export const PopupProvider: React.FC = () => {
  const [popupProps, setPopupProps] = useState<any>(null);

  useEffect(() => {
    const handleShowPopup = (props: any) => {
      setPopupProps(props);
    };

    popupService.setCallback(handleShowPopup);

    return () => {
      // popupService.setCallback(null);
    };
  }, []);

  const handleClose = () => {
    setPopupProps(null);
  };

  return popupProps ? (
    <PopupComponent {...popupProps} onClose={handleClose} />
  ) : null;
};
