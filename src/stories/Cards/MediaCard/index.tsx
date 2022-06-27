import React, { useState } from 'react'

import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material'
import Collapse from '@mui/material/Collapse'

import './MediaCard.css'
import { MediaCardProps } from '~/types/index'

export const MediaCard: React.FC<{
  children?: React.ReactNode
  props: MediaCardProps
}> = ({ children, props }) => {
  const [open, setOpen] = useState(props.open)

  const handleOnClick = () => setOpen(!open)

  return (
    <div className={`media-card ${props.size}`}>
      {props.image !== undefined ? (
        <div className={`media-card__image-container ${props.size}`}>
          <img
            className={`media-card__image ${props.size}`}
            src={`assets/img/${props.image}`}
            alt="media-card"
          />
        </div>
      ) : (
        <div className={`media-card__image-container ${props.size} none`} />
      )}
      <div className="media-card__detail-container" onClick={handleOnClick}>
        {props.title !== undefined && (
          <>
            {props.canOpen && (
              <div className="media-card__collapse">
                <div className="media-card__collapse-container">
                  {children !== undefined && open ? (
                    <ArrowDropUp />
                  ) : (
                    <ArrowDropDown />
                  )}
                </div>
              </div>
            )}
            <div className="media-card__title">{props.title}</div>
          </>
        )}
        <Collapse in={props.canOpen && open} timeout="auto" unmountOnExit>
          <div className={`media-card__other`}>
            {children !== undefined && children}
          </div>
        </Collapse>
      </div>
    </div>
  )
}

export default MediaCard
