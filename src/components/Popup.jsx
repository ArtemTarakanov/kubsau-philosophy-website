import { memo } from 'react'
import './Popup.css'

const Popup = memo(({ show, onClose, title, msg, type = 'info', onConfirm }) => {
  if (!show) return null

  const isConfirm = type === 'confirm'

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{title}</h3>
        </div>
        <div className="modal-body">
          <p>{msg}</p>
        </div>
        <div className="modal-footer">
          {isConfirm ? (
            <>
              <button className="modal-btn modal-btn-cancel" onClick={onClose}>
                Отмена
              </button>
              <button className="modal-btn modal-btn-confirm" onClick={onConfirm}>
                Подтвердить
              </button>
            </>
          ) : (
            <button className="modal-btn modal-btn-ok" onClick={onClose}>
              ОК
            </button>
          )}
        </div>
      </div>
    </div>
  )
})

Popup.displayName = 'Popup'

export default Popup
