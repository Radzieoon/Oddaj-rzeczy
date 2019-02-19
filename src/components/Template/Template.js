import React, {Fragment} from 'react';

export const Template = ({children}) => {
    return (
        <Fragment>
            <header>
                <nav>This is nav</nav>
            </header>
            <main>
                {children}
            </main>
            <footer/>
        </Fragment>
    )
};