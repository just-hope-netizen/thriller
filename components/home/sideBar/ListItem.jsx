import React from 'react'

const ListItem = ({text, icon, className, active}) => {
  console.log(text, active);
  return (
    <li>
      <button
        className={`flex items-center gap-4 w-full text-tertiary p-3 uppercase  ${
          active 
            ? 'rounded-l-full text-secondary'
            : ' bg-secondaryBg'
        } ${className} `}
      >
        {icon}
        <span className={` ${active  ? ' text-secondary' : "text-white"} `}>
        
          {text}
        </span>
      </button>
    </li>
  );
}

export default ListItem