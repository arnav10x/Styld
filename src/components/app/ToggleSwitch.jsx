import React from 'react'
import './ToggleSwitch.css'

function ToggleSwitch({ label, checked, onChange }) {
  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="toggle-input"
      />
      <span className="toggle-slider"></span>
      <span className="toggle-label">{label}</span>
    </label>
  )
}

export default ToggleSwitch
