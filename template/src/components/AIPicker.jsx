import React from 'react'

import Custombutton from './CustomButton';

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit}) => {
  return (
    <div className="aipicker-container">
      <textarea
        placeholder=""
        className="aipicker-textarea"
      />
    </div>
  )
}

export default AIPicker