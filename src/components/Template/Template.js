import React, {Fragment} from 'react';

export const Template = ({children}) => {
    return (
        <Fragment>
            <header>
                <nav>
                    <ul>
                        <li><a href='#'>Start</a></li>
                        <li><a href='#'>O co chodzi?</a></li>
                        <li><a href='#'>O nas</a></li>
                        <li><a href='#'>Fundacje i organizacje</a></li>
                        <li><a href='#'>Kontakt</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer>
                Skontaktuj się z nami
                <form action="">

                </form>
            </footer>
        </Fragment>
    )
};