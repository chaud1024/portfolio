import React from 'react'

import TextArea from './TextArea'
import TextLine from './TextLine'
import ImageArea from './ImageArea'

import SkillImage from '../assets/images/img02.jpg'

const Skill = () => {
  return (
    <div className="format bottom">
        <ImageArea image={SkillImage}/>
        <TextArea
            title={"What I can use"}
            subtitle={"효율적인 코드작성을 지향합니다."}
            body={
                <TextLine text={"HTML \n CSS, SCSS \n JAVASCRIPT, JQUERY, SCSS"} />
            }
        />
    </div>
  )
}

export default Skill