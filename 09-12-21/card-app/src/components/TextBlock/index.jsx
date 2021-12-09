import React from 'react';

import './style.css';

const TextBlock = ({Title, Content, Content1}) => (



<div className="text_block__div">
    <h2 className="text-block__title">{Title}</h2>
    <p className="text-block__price">{Content}</p>
    <p className="text-block__paragraph">{Content1}</p>
</div>





)


export default TextBlock;