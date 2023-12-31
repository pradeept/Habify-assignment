import React from 'react';
import classNames from 'classnames';

function Panel({children,className,...rest}){
    
    const finalClassName = classNames('  rounded p-3 border-b-2 bg-white w-full',
                                        className)


    return(
        <div className={finalClassName} {...rest}>
            {children}
        </div>
    )
}

export default Panel;