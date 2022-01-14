import React from 'react'
import GreenPing from '@icons/GreenPing.svg'
import { Card, ImgContainer } from '@styles/MiniCardStyles'
export default (props) => {
  return (
    <Card>
      <ImgContainer>
        <img src={GreenPing} atl='green ping' />
      </ImgContainer>

      <p>
        {props.text}
      </p>
      <p>
        {props.date}
      </p>
    </Card>

  )
}
